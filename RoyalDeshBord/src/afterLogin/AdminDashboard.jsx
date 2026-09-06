import React, { useState, useEffect } from 'react'
import NavForDash from './NavForDash'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalNetWorth: 0,
    activePoliciesCount: 0,
    expiringSoonCount: 0,
    policies: [],
    goals: []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchAdminData = async () => {
    try {
      const token = localStorage.getItem('authToken')
      const res = await fetch('http://localhost:5000/api/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to load admin dashboard')
      }
      setStats(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdminData()
  }, [])

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <NavForDash />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Administrator Control Center
            </span>
            <h1 className="text-3xl font-serif mt-1">System Oversight & Client Portfolios</h1>
          </div>
          <span className="bg-amber-300/20 text-amber-300 border border-amber-300/30 px-4 py-2 rounded-full text-xs font-semibold self-start md:self-auto">
            Role: Administrator
          </span>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-sm text-gray-400">Loading system overview...</p>
        ) : (
          <>
            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Total Managed Wealth</span>
                <p className="text-2xl font-serif font-bold text-white">
                  R {(stats.netWorth?.total || 0).toLocaleString()}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Active Policies</span>
                <p className="text-3xl font-serif font-bold text-emerald-400">{stats.activePoliciesCount}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Expiring Policies</span>
                <p className="text-3xl font-serif font-bold text-amber-300">{stats.expiringSoonCount}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Registered Goals</span>
                <p className="text-3xl font-serif font-bold text-white">{(stats.goals || []).length}</p>
              </div>
            </div>

            {/* Managed Policies Table */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-serif font-semibold">All System Policy Records</h2>
                <span className="text-xs text-gray-400">{(stats.policies || []).length} Records Found</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="text-xs uppercase bg-white/5 text-amber-300 border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4">Policy Ref</th>
                      <th className="py-3 px-4">Policy Name</th>
                      <th className="py-3 px-4">Expiry Date</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {(stats.policies || []).map((policy) => (
                      <tr key={policy.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono text-xs text-amber-300">{policy.policyNumber}</td>
                        <td className="py-4 px-4 font-medium text-white">{policy.name}</td>
                        <td className="py-4 px-4 text-xs text-gray-400">{policy.expiryDate}</td>
                        <td className="py-4 px-4">
                          <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${
                            policy.status === 'Active' 
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                              : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          }`}>
                            {policy.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}