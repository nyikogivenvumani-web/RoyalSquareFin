import React, { useState, useEffect } from 'react'
import NavForDash from './NavForDash'

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState({
    totalValue: 0,
    monthlyYield: 0,
    allocation: [],
    assets: []
  })
  const [loading, setLoading] = useState(true)

  const fetchPortfolio = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/portfolio')
      const data = await res.json()
      setPortfolio(data)
    } catch (err) {
      console.error('Error fetching portfolio data from server:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPortfolio()
  }, [])

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <NavForDash />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Asset Management
            </span>
            <h1 className="text-3xl font-serif mt-1">Portfolio & Wealth Overview</h1>
          </div>
          <button className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-5 py-2.5 rounded-full text-xs transition-colors shadow flex items-center gap-2 cursor-pointer self-start md:self-auto">
            <span>+</span> Add Investment / Asset
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-gray-400">Loading portfolio assets from server...</p>
        ) : (
          <>
            {/* Portfolio Summary Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 uppercase font-semibold">Total Portfolio Value</span>
                <div className="text-3xl font-serif font-bold text-white mt-2">
                  R {portfolio.totalValue.toLocaleString()}
                </div>
                <span className="inline-block mt-2 text-[11px] text-emerald-400 font-medium">↑ Live Database Sync</span>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 uppercase font-semibold">Projected Monthly Dividend / Yield</span>
                <div className="text-3xl font-serif font-bold text-amber-300 mt-2">
                  R {portfolio.monthlyYield.toLocaleString()}
                </div>
                <span className="inline-block mt-2 text-[11px] text-gray-400 font-medium">Reinvested Monthly</span>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 uppercase font-semibold">Asset Risk Profile</span>
                <div className="text-3xl font-serif font-bold text-white mt-2">Moderate Growth</div>
                <span className="inline-block mt-2 text-[11px] text-amber-300 font-medium">Balanced Risk Spread</span>
              </div>
            </div>

            {/* Asset Allocation Breakdown */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
              <h2 className="text-xl font-serif font-semibold">Asset Allocation</h2>
              
              <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden flex">
                {portfolio.allocation.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} h-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                    title={`${item.category}: ${item.percentage}%`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {portfolio.allocation.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-xs text-gray-300 truncate">{item.category}</span>
                    </div>
                    <div className="text-lg font-bold text-white pl-5">
                      R {item.amount.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-gray-400 pl-5">{item.percentage}% of Total</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Investment Assets List */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-serif font-semibold">Holdings & Assets</h2>
                <span className="text-xs text-gray-400">{portfolio.assets.length} Active Investments</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="text-xs uppercase bg-white/5 text-amber-300 border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4">Asset Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Partner Provider</th>
                      <th className="py-3 px-4">Current Value</th>
                      <th className="py-3 px-4 text-right">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {portfolio.assets.map((asset) => (
                      <tr key={asset.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">{asset.name}</td>
                        <td className="py-4 px-4 text-xs text-gray-400">{asset.type}</td>
                        <td className="py-4 px-4 text-xs text-gray-300">{asset.provider}</td>
                        <td className="py-4 px-4 font-semibold text-white">R {Number(asset.value).toLocaleString()}</td>
                        <td className="py-4 px-4 text-right font-semibold text-emerald-400">{asset.returns}</td>
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