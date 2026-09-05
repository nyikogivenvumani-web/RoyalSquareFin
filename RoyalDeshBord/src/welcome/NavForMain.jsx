import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#0B1D33] text-white border-b border-white/10 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="border border-amber-300 rounded-full w-10 h-10 flex items-center justify-center font-serif text-amber-300 font-semibold">
            RS
          </div>
          <div>
            <span className="text-lg font-semibold block leading-tight">Royal Square</span>
            <span className="text-[10px] tracking-widest text-amber-300 block font-sans uppercase">
              FINANCIAL INVESTMENTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-300 transition-colors flex items-center gap-1"
          >
            Speak to an adviser <span>↗</span>
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
            className="inline-block bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-300 transition-colors mt-2"
            onClick={() => setIsOpen(false)}
          >
            Speak to an adviser ↗
          </Link>
        </div>
      )}
    </header>
  )
}