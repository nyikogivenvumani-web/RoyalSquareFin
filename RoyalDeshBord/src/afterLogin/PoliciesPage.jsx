import React, { useState } from 'react'
import NavForDash from './NavForDash'

export default function PoliciesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const [policiesData] = useState([
    {
      id: 1,
      policyNumber: 'POL-8492-ZA',
      name: 'Comprehensive Commercial Cover',
      type: 'Business',
      provider: 'Santam',
      premium: 'R 2,400 / mo',
      coverageAmount: 'R 5,000,000',
      status: 'Active',
      startDate: '2024-08-15',
      expiryDate: '2027-08-15',
    },
    {
      id: 2,
      policyNumber: 'POL-1029-ZA',
      name: 'Key Person Life Protection',
      type: 'Life',
      provider: 'Liberty',
      premium: 'R 1,150 / mo',
      coverageAmount: 'R 2,500,000',
      status: 'Expiring Soon',
      startDate: '2023-09-28',
      expiryDate: '2026-09-28',
    },
    {
      id: 3,
      policyNumber: 'POL-4412-ZA',
      name: 'Commercial Vehicle Fleet Insurance',
      type: 'Asset',
      provider: 'Discovery',
      premium: 'R 3,800 / mo',
      coverageAmount: 'R 1,200,000',
      status: 'Expiring Soon',
      startDate: '2023-10-12',
      expiryDate: '2026-10-12',
    },
    {
      id: 4,
      policyNumber: 'POL-9921-ZA',
      name: 'Personal Property Insurance',
      type: 'Property',
      provider: 'Old Mutual',
      premium: 'R 950 / mo',
      coverageAmount: 'R 850,000',
      status: 'Active',
      startDate: '2024-03-31',
      expiryDate: '2027-03-31',
    },
    {
      id: 5,
      policyNumber: 'POL-9082-ZA',
      name: 'Short-Term Machinery Warranty',
      type: 'Equipment',
      provider: 'Momentum',
      premium: 'R 1,600 / mo',
      coverageAmount: 'R 450,000',
      status: 'Expired',
      startDate: '2023-08-28',
      expiryDate: '2026-08-28',
    },
  ])

  const filteredPolicies = policiesData.filter((policy) => {
    if (selectedFilter === 'All') return true
    return policy.status === selectedFilter
  })

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      case 'Expiring Soon':
        return 'bg-amber-300/20 text-amber-300 border-amber-300/30'
      case 'Expired':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <NavForDash />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Insurance & Cover Schedule
            </span>
            <h1 className="text-3xl font-serif mt-1">My Active & Historic Policies</h1>
          </div>
          <button className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-5 py-2.5 rounded-full text-xs transition-colors shadow flex items-center gap-2 cursor-pointer self-start md:self-auto">
            <span>+</span> Request New Cover
          </button>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
          {['All', 'Active', 'Expiring Soon', 'Expired'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-amber-300 text-gray-900'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPolicies.map((policy) => (
            <div
              key={policy.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/30 transition-all space-y-5"
            >
              {/* Card Top Row */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                    Ref: {policy.policyNumber}
                  </span>
                  <h2 className="text-lg font-serif font-semibold text-white mt-0.5">
                    {policy.name}
                  </h2>
                </div>
                <span
                  className={`text-[10px] px-3 py-1 rounded-full font-semibold border whitespace-nowrap ${getStatusBadgeStyle(
                    policy.status
                  )}`}
                >
                  {policy.status}
                </span>
              </div>

              {/* Specs & Provider Info */}
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/5 text-xs">
                <div>
                  <span className="text-gray-400 block">Underwriter Provider</span>
                  <span className="font-semibold text-white mt-0.5 block">{policy.provider}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Cover Type</span>
                  <span className="font-semibold text-white mt-0.5 block">{policy.type}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Monthly Premium</span>
                  <span className="font-semibold text-amber-300 mt-0.5 block">{policy.premium}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Total Coverage</span>
                  <span className="font-semibold text-white mt-0.5 block">{policy.coverageAmount}</span>
                </div>
              </div>

              {/* Dates & Actions */}
              <div className="flex items-center justify-between pt-1">
                <div className="text-[11px] text-gray-400">
                  <span>Expires: {policy.expiryDate}</span>
                </div>

                <div className="flex gap-2">
                  <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3.5 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer">
                    View Wording
                  </button>
                  {policy.status === 'Expiring Soon' || policy.status === 'Expired' ? (
                    <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow">
                      Renew Policy
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}