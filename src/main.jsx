import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Community from './pages/Community'
import About from './pages/About'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import HouseRules from './pages/HouseRules'
import FAQ from './pages/FAQ'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/house-rules" element={<HouseRules />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
