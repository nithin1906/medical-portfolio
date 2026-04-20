import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import CartDrawer from './components/CartDrawer'
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
