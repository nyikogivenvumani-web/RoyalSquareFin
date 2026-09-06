// LoginPage.jsx
import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import Navbar from '../welcome/NavForMain'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({
    email: location.state?.defaultEmail || '',
    password: '',
    rememberMe: false
  })

  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userName', data.name);
      localStorage.setItem('userRole', data.role);

      if (data.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="bg-[#F8F9FC] text-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-md w-full mx-auto px-6 py-12 flex-grow flex flex-col justify-center">
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-gray-500 text-xs tracking-widest font-semibold uppercase block mb-3">
              — SECURE SYSTEM PORTAL
            </span>
            <h1 className="text-3xl font-serif font-semibold text-gray-900">
              Welcome Back
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              {formData.email === 'admin@royalsquare.co.za' ? 'Logging in as System Administrator' : 'Access your portfolio, policies, and advisor communications'}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B1D33] transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold uppercase text-gray-600">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B1D33] transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 text-xs font-medium"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B1D33] hover:bg-[#152e4d] text-white font-semibold py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg mt-2 cursor-pointer"
            >
              Sign In <span>↗</span>
            </button>
          </form>
        </div>
      </main>

      <footer className="py-6 text-center text-[11px] text-gray-500 border-t border-gray-200 bg-white">
        Encrypted 256-bit SSL Connection • POPIA Regulatory Compliant
      </footer>
    </div>
  )
}