import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './NavForMain'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleAdminLogin = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'admin@royalsquare.co.za', password })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Admin authentication failed');

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userName', data.name);
      localStorage.setItem('userRole', data.role);

      // Explicitly push straight to admin dashboard
      navigate('/admin-dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-md w-full mx-auto px-6 py-12 flex-grow flex flex-col justify-center">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-2">
              — Administrator Control Access
            </span>
            <h1 className="text-3xl font-serif font-semibold text-white">
              System Admin Portal
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Restricted access for system administrators only
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                Admin Identity
              </label>
              <input
                type="email"
                disabled
                value="admin@royalsquare.co.za"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                Security Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <button
              type="submit"
              className="w-full bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg mt-2 cursor-pointer"
            >
              Authenticate Admin Session <span>↗</span>
            </button>
          </form>
        </div>
      </main>

      <footer className="py-6 text-center text-[11px] text-gray-400">
        Secured Node Authentication • Authorized Personnel Only
      </footer>
    </div>
  )
}