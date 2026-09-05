import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavForMain() {
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="border-b border-white/10 bg-[#0B1D33]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center font-serif font-bold text-amber-300 text-lg group-hover:bg-amber-300 group-hover:text-gray-900 transition-all">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold tracking-wide text-white text-lg leading-tight">
              ROYAL SQUARE
            </span>
            <span className="text-[10px] tracking-widest text-amber-300 font-semibold uppercase">
              Financial
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>

        {/* Action Buttons: Login & Consultation */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-xs font-semibold uppercase tracking-wider text-white hover:text-amber-300 px-4 py-2.5 rounded-full border border-white/15 hover:border-amber-300/40 transition-all"
          >
            Client Login
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1D33] border-t border-white/10 px-8 py-6 space-y-4">
          <Link to="/about" className="block text-gray-300 hover:text-white font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/products" className="block text-gray-300 hover:text-white font-medium" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" className="block text-gray-300 hover:text-white font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-amber-300 hover:bg-amber-400 text-gray-900 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-md"
          >
            Get in Touch <span>↗</span>
          </Link>
        </div>

      </div>
    </header>
  )
}
