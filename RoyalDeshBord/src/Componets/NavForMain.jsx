import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#0B1D33] text-white border-b border-white/10 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="border border-amber-300 rounded-full w-10 h-10 flex items-center justify-center font-serif text-amber-300 font-semibold">
            RS
          </div>
          <div>
            <span className="text-lg font-semibold block leading-tight">Royal Square</span>
            <span className="text-[10px] tracking-widest text-amber-300 block font-sans uppercase">
              FINANCIAL INVESTMENTS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="/personal" className="hover:text-white transition-colors">Personal</a></li>
          <li><a href="/business" className="hover:text-white transition-colors">Business</a></li>
          <li><a href="/investments" className="hover:text-white transition-colors">Investments</a></li>
          <li><a href="/claims" className="hover:text-white transition-colors">Claims</a></li>
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-300 transition-colors flex items-center gap-1"
          >
            Speak to an adviser <span>↗</span>
          </a>
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

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1D33] border-t border-white/10 px-8 py-6 space-y-4">
          <a href="/about" className="block text-gray-300 hover:text-white font-medium">About</a>
          <a href="/personal" className="block text-gray-300 hover:text-white font-medium">Personal</a>
          <a href="/business" className="block text-gray-300 hover:text-white font-medium">Business</a>
          <a href="/investments" className="block text-gray-300 hover:text-white font-medium">Investments</a>
          <a href="/claims" className="block text-gray-300 hover:text-white font-medium">Claims</a>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-300 transition-colors mt-2"
          >
            Speak to an adviser ↗
          </a>
        </div>
      )}
    </header>
  )
}