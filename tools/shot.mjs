/* =========================================================================
 * Alat bantu (opsional): tangkapan layar halaman lewat Chrome DevTools
 * Protocol. Berguna untuk memeriksa hasil render setelah mengubah tampilan.
 *
 *   node tools/shot.mjs "#/"            -> semua potongan layar (folder shots/)
 *   node tools/shot.mjs "#/produk" 2    -> hanya potongan ke-2
 *
 * Env opsional: SHOT_W (lebar, default 1440), SHOT_SLICE (tinggi potongan,
 * default 1100), SHOT_PORT, SHOT_BASE, SHOT_EVAL, SHOT_CLICK.
 * Chrome dicari di lokasi bawaan Windows; ubah CHROME_PATH bila berbeda.
 * ========================================================================= */

import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { setTimeout as sleep } from 'node:timers/promises'

const CHROME =
  process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const PORT = Number(process.env.SHOT_PORT || 9777)
const BASE = process.env.SHOT_BASE || 'http://localhost:4173/'
const OUT_DIR = process.env.SHOT_DIR || 'shots'
const WIDTH = Number(process.env.SHOT_W || 1440)
const SLICE = Number(process.env.SHOT_SLICE || 1100)

const rawArg = process.argv[2] || '#/'
const only = process.argv[3] ? Number(process.argv[3]) : null

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${process.env.TEMP || '.'}\\shot-${PORT}-${Date.now()}`,
    `--remote-debugging-port=${PORT}`,
    'about:blank',
  ],
  { stdio: 'ignore' },
)

const waitForDevtools = async () => {
  for (let i = 0; i < 60; i += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`)
      const list = await res.json()
      const page = list.find((t) => t.type === 'page')
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl
    } catch {
      /* belum siap */
    }
    await sleep(250)
  }
  throw new Error('DevTools tidak merespons')
}

let id = 0
const pending = new Map()
const send = (ws, method, params = {}) =>
  new Promise((resolve, reject) => {
    const msgId = ++id
    pending.set(msgId, { resolve, reject })
    ws.send(JSON.stringify({ id: msgId, method, params }))
  })

try {
  const ws = new WebSocket(await waitForDevtools())
  await new Promise((resolve) => ws.addEventListener('open', resolve, { once: true }))
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)
    }
  })

  await send(ws, 'Page.enable')
  await send(ws, 'Runtime.enable')
  await send(ws, 'Network.enable')
  await send(ws, 'Network.setCacheDisabled', { cacheDisabled: true })
  await send(ws, 'Emulation.setDeviceMetricsOverride', {
    width: WIDTH,
    height: SLICE,
    deviceScaleFactor: 1,
    mobile: false,
  })

  await send(ws, 'Page.navigate', { url: `${BASE}${rawArg}` })
  await sleep(Number(process.env.SHOT_WAIT || 2800))

  // Paksa elemen beranimasi masuk supaya tangkapan layar menampilkan isi penuh
  if (!process.env.SHOT_KEEP_HIDDEN) {
    await send(ws, 'Runtime.evaluate', {
      expression: `(() => {
        document.querySelectorAll('.fade, .reveal').forEach((el) => el.classList.add('is-visible'));
        document.querySelectorAll('.preloader').forEach((el) => el.classList.add('is-hidden'));
        return document.querySelectorAll('.fade.is-visible').length;
      })()`,
      returnByValue: true,
    })
    await sleep(1000)
  }

  if (process.env.SHOT_SCROLL) {
    await send(ws, 'Runtime.evaluate', {
      expression: `window.scrollTo(0, ${Number(process.env.SHOT_SCROLL)}); true`,
      returnByValue: true,
    })
    await sleep(600)
  }

  if (process.env.SHOT_HOVER) {
    const raw = process.env.SHOT_HOVER
    let x
    let y

    if (/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(raw)) {
      ;[x, y] = raw.split(',').map(Number)
    } else {
      const box = await send(ws, 'Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector(${JSON.stringify(raw)});
          if (!el) return null;
          el.scrollIntoView({ block: 'center' });
          const r = el.getBoundingClientRect();
          return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) };
        })()`,
        returnByValue: true,
      })
      if (box.result?.value) {
        await sleep(700)
        const again = await send(ws, 'Runtime.evaluate', {
          expression: `(() => {
            const el = document.querySelector(${JSON.stringify(raw)});
            const r = el.getBoundingClientRect();
            return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) };
          })()`,
          returnByValue: true,
        })
        x = again.result.value.x
        y = again.result.value.y
      }
    }

    if (x !== undefined && y !== undefined) {
      await send(ws, 'Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, buttons: 0 })
      await sleep(900)
    }
  }

  if (process.env.SHOT_CLICK) {
    await send(ws, 'Runtime.evaluate', {
      expression: `document.querySelector(${JSON.stringify(process.env.SHOT_CLICK)})?.click(); true`,
      returnByValue: true,
    })
    await sleep(800)
  }

  if (process.env.SHOT_EVAL) {
    const out = await send(ws, 'Runtime.evaluate', {
      expression: process.env.SHOT_EVAL,
      returnByValue: true,
      awaitPromise: true,
    })
    console.log('EVAL:', JSON.stringify(out.result?.value ?? out.result?.description ?? out, null, 1))
    ws.close()
    chrome.kill()
    process.exit(0)
  }

  const { result } = await send(ws, 'Runtime.evaluate', {
    expression: 'document.documentElement.scrollHeight',
    returnByValue: true,
  })
  const height = Math.min(result.value || SLICE, 40000)

  mkdirSync(OUT_DIR, { recursive: true })
  const name = (rawArg.replace(/[#/]/g, '') || 'landing').replace(/[^a-z0-9-]/gi, '')
  const total = Math.ceil(height / SLICE)
  const indexes = only ? [only] : Array.from({ length: total }, (_, i) => i + 1)

  for (const i of indexes) {
    const y = (i - 1) * SLICE + Number(process.env.SHOT_SCROLL || 0)
    if (y >= height) continue
    const shot = await send(ws, 'Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { x: 0, y, width: WIDTH, height: Math.min(SLICE, height - y), scale: 1 },
    })
    const file = `${OUT_DIR}/${name}-${String(i).padStart(2, '0')}.png`
    writeFileSync(file, Buffer.from(shot.data, 'base64'))
    console.log(`saved ${file}`)
  }

  console.log(`TOTAL_HEIGHT=${height} SLICES=${total}`)
  ws.close()
} finally {
  chrome.kill()
}
