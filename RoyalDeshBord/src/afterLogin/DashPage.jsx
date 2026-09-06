import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavForDash from './NavForDash'

export default function DashPage() {
  const [dashboardData, setDashboardData] = useState({
    name: 'John Doe',
    netWorth: {
      total: 12450000,
      assets: 14200000,
      liabilities: 1750000,
      changePercentage: 4.8,
    },
    activePoliciesCount: 5,
    expiringSoonCount: 1,
    goals: [
      { id: 1, name: 'Commercial Fleet Expansion', progress: 75 },
      { id: 2, name: 'Retirement Fund Capitalization', progress: 60 },
      { id: 3, name: 'Emergency Liquidity Reserve', progress: 90 },
    ],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const res = await fetch('http://localhost:5000/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        if (res.ok) {
          setDashboardData(data)
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [])

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <NavForDash />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section styled like Melsoft Academy interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-200/60 border border-slate-300/60 rounded-full px-3 py-1 text-xs font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              CLIENT PORTAL & WEALTH INTELLIGENCE
            </div>

            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-slate-900 leading-[1.1]">
              Securing Your Assets, <br />
              <span className="italic font-normal">Maximizing Your Legacy.</span>
            </h1>

            <p className="text-base text-slate-600 max-w-xl font-normal leading-relaxed">
              Comprehensive wealth protection, active policies, and custom strategic growth goals designed to safeguard your enterprise and family assets.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/submit-claim"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-full text-sm transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Submit a Claim</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/report-incident"
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium px-6 py-3.5 rounded-full text-sm transition-all shadow-sm"
              >
                Report Incident
              </Link>
            </div>
          </div> {/* <-- Added the missing closing div for lg:col-span-7 */}

          {/* Right Hero Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-32 h-32 bg-blue-50 rounded-full pointer-events-none"></div>

              <div className="flex justify-between items-center relative z-10">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Total Managed Net Worth</span>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200/50">
                  ↑ {dashboardData.netWorth?.changePercentage || 0}%
                </span>
              </div>

              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                  R {(dashboardData.netWorth?.total || 0).toLocaleString()}
                </div>
                <p className="text-xs text-slate-500 mt-1">Calculated across all registered portfolios & assets</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 relative z-10">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">Active Assets</span>
                  <span className="text-lg font-serif font-bold text-slate-800">
                    R {(dashboardData.netWorth?.assets || 0).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">Total Liabilities</span>
                  <span className="text-lg font-serif font-bold text-slate-800">
                    R {(dashboardData.netWorth?.liabilities || 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500 text-center py-12">Loading dashboard intelligence...</p>
        ) : (
          <>
            {/* Metric Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Active Policies</span>
                <p className="text-3xl font-serif font-bold text-slate-900">{dashboardData.activePoliciesCount || 0}</p>
                <p className="text-xs text-emerald-600 font-medium">Fully covered & active</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Expiring Soon</span>
                <p className="text-3xl font-serif font-bold text-amber-600">{dashboardData.expiringSoonCount || 0}</p>
                <p className="text-xs text-slate-500 font-medium">Action recommended</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Tracked Goals</span>
                <p className="text-3xl font-serif font-bold text-slate-900">{(dashboardData.goals || []).length}</p>
                <p className="text-xs text-blue-600 font-medium">Strategic milestones</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Account Status</span>
                <p className="text-3xl font-serif font-bold text-emerald-600">Prime</p>
                <p className="text-xs text-slate-500 font-medium">Tier-1 client profile</p>
              </div>
            </div>

            {/* Strategic Financial Goals Section */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-slate-900">Strategic Financial Goals</h2>
                  <p className="text-xs text-slate-500 mt-1">Real-time progress markers on your long-term capital trajectory</p>
                </div>
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full self-start sm:self-auto">
                  Updated Today
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {(dashboardData.goals || []).map((goal) => (
                  <div key={goal.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-4 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">Milestone #{goal.id}</span>
                      <h3 className="font-semibold text-slate-800 text-sm">{goal.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-bold text-slate-900">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}