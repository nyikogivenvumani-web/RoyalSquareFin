import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../welcome/NavForMain'

export default function LoginPage() {
  const navigate = useNavigate() // 1. Initialize navigate hook

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 2. Redirect to dashboard on submission
    navigate('/dashboard')
  }

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-md w-full mx-auto px-6 py-12 flex-grow flex flex-col justify-center">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-2">
              — Secure Client Portal
            </span>
            <h1 className="text-3xl font-serif font-semibold text-white">
              Welcome Back
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Access your portfolio, policies, and advisor communications
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-300 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold uppercase text-gray-300">
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-amber-300 hover:underline transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-300 transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded bg-white/10 border-white/20 text-amber-300 focus:ring-amber-300 focus:ring-offset-0 cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="text-xs text-gray-300 cursor-pointer select-none"
              >
                Remember this device
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg mt-2 cursor-pointer"
            >
              Sign In to Dashboard <span>↗</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-400">
              Don't have an account yet?{' '}
              <a
                href="/contact"
                className="text-amber-300 font-semibold hover:underline"
              >
                Speak to an adviser
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-[11px] text-gray-400">
        🔒 Encrypted 256-bit SSL Connection • POPIA Regulatory Compliant
      </footer>
    </div>
  )
}