import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavForDash() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Policies', path: '/policies' },
    { name: 'Advisors', path: '/advisors' },
  ]

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <header className="border-b border-white/10 bg-[#0B1D33]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center font-serif font-bold text-amber-300 text-lg group-hover:bg-amber-300 group-hover:text-gray-900 transition-all">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold tracking-wide text-white text-lg leading-tight">
              ROYAL SQUARE
            </span>
            <span className="text-[10px] tracking-widest text-amber-300 font-semibold uppercase">
              Client Portal
            </span>
          </div>
        </Link>

        {/* Desktop Authenticated Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path ? 'text-amber-300 font-semibold' : 'hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile & Logout Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-white/10 pr-4">
            <div className="w-9 h-9 rounded-full bg-amber-300/20 border border-amber-300/40 text-amber-300 flex items-center justify-center font-semibold text-xs">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">John Doe</span>
              <span className="text-[10px] text-gray-400">Client ID: #8492</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-red-400 px-4 py-2.5 rounded-full border border-white/15 hover:border-red-400/40 transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1D33] border-t border-white/10 px-8 py-6 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-amber-300/20 border border-amber-300/40 text-amber-300 flex items-center justify-center font-semibold text-sm">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">John Doe</span>
              <span className="text-xs text-gray-400">Client ID: #8492</span>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-medium ${
                location.pathname === link.path ? 'text-amber-300' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setIsOpen(false)
              handleLogout()
            }}
            className="w-full text-left font-medium text-red-400 hover:text-red-300 pt-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  )
}