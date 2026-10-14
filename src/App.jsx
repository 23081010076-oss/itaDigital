import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import Preloader from './components/Preloader.jsx'
import Landing from './pages/Landing.jsx'

/* Situs satu halaman. Tidak ada router, tidak ada halaman lain:
   semua isi ada di dalam <Landing />. */
export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main id="konten">
        <Landing />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
