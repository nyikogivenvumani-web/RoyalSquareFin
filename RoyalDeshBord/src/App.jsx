import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Welcome directory pages
import HomePage from './welcome/HomePage'
import AboutUs from './welcome/AboutUs'
import Products from './welcome/Products'
import ContactPage from './welcome/ContactPage'

// AfterLogin directory pages
import LoginPage from './afterLogin/loginPage'
import DashPage from './afterLogin/DashPage'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Authenticated / Portal Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashPage />} />
      </Routes>
    </Router>
  )
}
