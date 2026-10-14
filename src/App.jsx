import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main id="konten">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/produk" element={<Products />} />
          <Route path="/portofolio" element={<Portfolio />} />
          <Route path="/proyek" element={<Navigate to="/portofolio" replace />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
