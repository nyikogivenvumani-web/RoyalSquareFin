import React, { useState, useEffect } from 'react'
import NavForDash from './NavForDash'

export default function AnalticsPage() {
  const [policies, setPolicies] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch policies data with Auth Token[cite: 13]
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

  // Calculate metrics safely from policy records[cite: 13]
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
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <NavForDash />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <div>
          <span className="text-blue-600 text-xs tracking-wider font-semibold uppercase block">
            — Portfolio Intelligence
          </span>
          <h1 className="text-3xl font-serif mt-1 text-slate-900">Analytics & Risk Metrics</h1>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500 py-12">Crunching portfolio analytics...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Total Policies</span>
                <p className="text-3xl font-serif font-bold text-slate-900">{totalPolicies}</p>
                <p className="text-xs text-slate-500 font-medium">Registered policies</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Active Policies</span>
                <p className="text-3xl font-serif font-bold text-emerald-600">{activePolicies}</p>
                <p className="text-xs text-emerald-600 font-medium">Fully covered</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Monthly Premium Outlay</span>
                <p className="text-2xl font-serif font-bold text-slate-900">
                  R {totalMonthlyPremium.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 font-medium">Recurring monthly spend</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Aggregate Coverage</span>
                <p className="text-2xl font-serif font-bold text-blue-600">
                  R {totalCoverageSum.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 font-medium">Total insured protection</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h2 className="text-xl font-serif font-semibold text-slate-900">Underwriting Providers</h2>
                {Object.keys(providerCounts).length === 0 ? (
                  <p className="text-xs text-slate-400">No provider data logged yet.</p>
                ) : (
                  <div className="space-y-3 text-xs">
                    {Object.entries(providerCounts).map(([provider, count]) => (
                      <div key={provider} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                        <span className="font-medium text-slate-800 text-sm">{provider}</span>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold border border-blue-100">
                          {count} {count === 1 ? 'Policy' : 'Policies'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <h2 className="text-xl font-serif font-semibold text-slate-900">Portfolio Health Summary</h2>
                <div className="space-y-4 text-xs text-slate-600">
                  <p className="leading-relaxed text-sm">
                    Your active coverage portfolio currently secures <span className="text-blue-600 font-semibold">R {totalCoverageSum.toLocaleString()}</span> in total asset value across <span className="text-slate-900 font-semibold">{totalPolicies}</span> registered schedules.
                  </p>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">Active Ratio</span>
                      <span className="text-emerald-600 font-bold">
                        {totalPolicies ? Math.round((activePolicies / totalPolicies) * 100) : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full transition-all duration-500 rounded-full" 
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
