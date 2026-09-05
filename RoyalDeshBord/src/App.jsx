import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Casing matching the file tree in the welcome folder
import HomePage from './welcome/HomePage'
import AboutUs from './welcome/AboutUs'
import Products from './welcome/Products'
import ContactPage from './welcome/ContactPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}