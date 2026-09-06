import React, { useState, useEffect } from 'react'
import NavForDash from './NavForDash'

export default function AnalticsPage() {
  const [policies, setPolicies] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch policies data with Auth Token
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const res = await fetch('http://localhost:5000/api/policies', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        if (res.ok) {
          setPolicies(data)
        }
      } catch (err) {
        console.error('Error fetching analytics data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPolicies()
  }, [])

  // Calculate metrics safely from policy records
  const totalPolicies = policies.length
  const activePolicies = policies.filter((p) => p.status === 'Active').length
  
  const totalMonthlyPremium = policies.reduce((acc, p) => {
    const cleanedVal = parseFloat(String(p.premium || '0').replace(/[^0-9.]/g, ''))
    return acc + (isNaN(cleanedVal) ? 0 : cleanedVal)
  }, 0)

  const totalCoverageSum = policies.reduce((acc, p) => {
    const cleanedVal = parseFloat(String(p.coverageAmount || '0').replace(/[^0-9.]/g, ''))
    return acc + (isNaN(cleanedVal) ? 0 : cleanedVal)
  }, 0)

  const providerCounts = policies.reduce((acc, p) => {
    const prov = p.provider || 'Other'
    acc[prov] = (acc[prov] || 0) + 1
    return acc
  }, {})

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <NavForDash />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <div>
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
            — Portfolio Intelligence
          </span>
          <h1 className="text-3xl font-serif mt-1">Analytics & Risk Metrics</h1>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Crunching portfolio analytics...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Total Policies</span>
                <p className="text-3xl font-serif font-bold text-white">{totalPolicies}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Active Policies</span>
                <p className="text-3xl font-serif font-bold text-emerald-400">{activePolicies}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Monthly Premium Outlay</span>
                <p className="text-2xl font-serif font-bold text-amber-300">
                  R {totalMonthlyPremium.toLocaleString()}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block">Aggregate Coverage</span>
                <p className="text-2xl font-serif font-bold text-white">
                  R {totalCoverageSum.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-lg font-serif font-semibold text-white">Underwriting Providers</h2>
                {Object.keys(providerCounts).length === 0 ? (
                  <p className="text-xs text-gray-400">No provider data logged yet.</p>
                ) : (
                  <div className="space-y-3 text-xs">
                    {Object.entries(providerCounts).map(([provider, count]) => (
                      <div key={provider} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="font-medium text-gray-200">{provider}</span>
                        <span className="px-2.5 py-1 rounded-full bg-amber-300/20 text-amber-300 font-semibold">
                          {count} {count === 1 ? 'Policy' : 'Policies'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-lg font-serif font-semibold text-white">Portfolio Health Summary</h2>
                <div className="space-y-3 text-xs text-gray-300">
                  <p className="leading-relaxed">
                    Your active coverage portfolio currently secures <span className="text-amber-300 font-semibold">R {totalCoverageSum.toLocaleString()}</span> in total asset value across <span className="text-white font-semibold">{totalPolicies}</span> registered schedules.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Ratio</span>
                      <span className="text-emerald-400 font-semibold">
                        {totalPolicies ? Math.round((activePolicies / totalPolicies) * 100) : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-400 h-full transition-all duration-500" 
                        style={{ width: `${totalPolicies ? (activePolicies / totalPolicies) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}