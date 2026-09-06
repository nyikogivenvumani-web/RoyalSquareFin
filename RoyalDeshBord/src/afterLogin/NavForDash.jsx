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
    <header className="border-b border-slate-200 bg-white/85 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-serif font-bold text-slate-900 text-lg group-hover:bg-slate-900 group-hover:text-white transition-all">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold tracking-wide text-slate-900 text-lg leading-tight">
              ROYAL SQUARE
            </span>
            <span className="text-[10px] tracking-widest text-blue-600 font-semibold uppercase">
              Client Portal
            </span>
          </div>
        </Link>

        {/* Desktop Authenticated Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path ? 'text-slate-900 font-semibold underline underline-offset-4 decoration-blue-600' : 'hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile & Logout Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-slate-200 pr-4">
            <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-semibold text-xs">
              NV
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-900">Nyiko Vumani</span>
              <span className="text-[10px] text-slate-500">Client ID: #8492</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-red-600 px-4 py-2.5 rounded-full border border-slate-200 hover:border-red-300 transition-all cursor-pointer"
          >
            Sign Out
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900 focus:outline-none p-2"
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
        <div className="md:hidden bg-white border-t border-slate-200 px-8 py-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-semibold text-sm">
              NV
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Nyiko Vumani</span>
              <span className="text-xs text-slate-500">Client ID: #8492</span>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-medium text-sm py-1 ${
                location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
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
            className="w-full text-left font-medium text-sm text-red-600 hover:text-red-700 pt-2 border-t border-slate-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  )
}