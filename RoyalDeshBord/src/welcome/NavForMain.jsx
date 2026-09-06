import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.jpeg'

export default function NavForMain() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-8">
      {/* Floating Pill Header */}
      <nav className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-6 py-3.5 shadow-sm flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img 
            src={logoImg} 
            alt="Royal Square Financial Logo" 
            className="h-9 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold tracking-tight text-slate-900 text-base leading-none">
              ROYAL SQUARE
            </span>
            <span className="text-[9px] tracking-widest text-slate-500 font-semibold uppercase mt-0.5">
              Financial
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-slate-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons: Client Login & Admin Portal */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 transition-all"
          >
            Client Login
          </Link>
          <Link
            to="/login"
            state={{ defaultEmail: 'admin@royalsquare.co.za' }}
            className="text-xs font-semibold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            Admin Portal
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900 focus:outline-none p-1"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white border border-slate-200 rounded-2xl px-6 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-medium text-sm ${
                location.pathname === link.path ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <Link
              to="/login"
              state={{ defaultEmail: 'admin@royalsquare.co.za' }}
              className="text-center bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin Portal
            </Link>
            <Link
              to="/contact"
              className="text-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}