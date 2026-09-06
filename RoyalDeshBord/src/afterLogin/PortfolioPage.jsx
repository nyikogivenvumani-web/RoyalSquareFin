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

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    type: 'Equities',
    provider: 'Allan Gray',
    value: '',
    returns: '+0.0%'
  })

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem('authToken')
      const res = await fetch('http://localhost:5000/api/portfolio', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      if (res.ok) {
        setPortfolio(data)
      }
    } catch (err) {
      console.error('Error fetching portfolio data from server:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAddInvestment = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const token = localStorage.getItem('authToken')
      const res = await fetch('http://localhost:5000/api/portfolio/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          value: parseFloat(formData.value) || 0
        }),
      })

      if (res.ok) {
        // Refresh live portfolio data and reset modal form
        await fetchPortfolio()
        setIsModalOpen(false)
        setFormData({
          name: '',
          type: 'Equities',
          provider: 'Allan Gray',
          value: '',
          returns: '+0.0%'
        })
      } else {
        console.error('Failed to add investment to database')
      }
    } catch (err) {
      console.error('Error submitting investment:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <NavForDash />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-blue-600 text-xs tracking-wider font-semibold uppercase block">
              — Asset Management
            </span>
            <h1 className="text-3xl font-serif mt-1 text-slate-900">Portfolio & Wealth Overview</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-full text-xs transition-all shadow-sm flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <span>+</span> Add Investment / Asset
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500 py-12">Loading portfolio assets from server...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Total Portfolio Value</span>
                <div className="text-3xl font-serif font-bold text-slate-900 mt-1">
                  R {(portfolio.totalValue || 0).toLocaleString()}
                </div>
                <span className="inline-block text-xs text-emerald-600 font-medium">↑ Live Database Sync</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Projected Monthly Dividend / Yield</span>
                <div className="text-3xl font-serif font-bold text-blue-600 mt-1">
                  R {(portfolio.monthlyYield || 0).toLocaleString()}
                </div>
                <span className="inline-block text-xs text-slate-500 font-medium">Reinvested Monthly</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Asset Risk Profile</span>
                <div className="text-3xl font-serif font-bold text-slate-900 mt-1">Moderate Growth</div>
                <span className="inline-block text-xs text-blue-600 font-medium">Balanced Risk Spread</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-semibold text-slate-900">Asset Allocation</h2>
              
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                {(portfolio.allocation || []).map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} h-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                    title={`${item.category}: ${item.percentage}%`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {(portfolio.allocation || []).map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-xs text-slate-600 truncate font-medium">{item.category}</span>
                    </div>
                    <div className="text-lg font-serif font-bold text-slate-900 pl-5">
                      R {(item.amount || 0).toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-400 pl-5">{item.percentage}% of Total</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-serif font-semibold text-slate-900">Holdings & Assets</h2>
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                  {(portfolio.assets || []).length} Active Investments
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="text-xs uppercase bg-slate-50 text-slate-400 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4 rounded-l-xl">Asset Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Partner Provider</th>
                      <th className="py-3 px-4">Current Value</th>
                      <th className="py-3 px-4 text-right rounded-r-xl">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(portfolio.assets || []).map((asset) => (
                      <tr key={asset.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-4 font-medium text-slate-900">{asset.name}</td>
                        <td className="py-4 px-4 text-xs text-slate-500">{asset.type}</td>
                        <td className="py-4 px-4 text-xs text-slate-600">{asset.provider}</td>
                        <td className="py-4 px-4 font-semibold text-slate-900">R {Number(asset.value).toLocaleString()}</td>
                        <td className="py-4 px-4 text-right font-semibold text-emerald-600">{asset.returns}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Modal Popup: Add Investment / Asset */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900">Add New Investment</h3>
                <p className="text-xs text-slate-500">Record a new asset portfolio entry</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold px-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddInvestment} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                  Asset Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Balanced Growth Fund"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Category
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="Equities">Equities</option>
                    <option value="Bonds">Bonds</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Cash / Money Market">Cash / Money Market</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Provider
                  </label>
                  <select
                    name="provider"
                    value={formData.provider}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="Allan Gray">Allan Gray</option>
                    <option value="Coronation">Coronation</option>
                    <option value="Ninety One">Ninety One</option>
                    <option value="Old Mutual">Old Mutual</option>
                    <option value="Sanlam">Sanlam</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Value (ZAR) *
                  </label>
                  <input
                    type="number"
                    name="value"
                    required
                    placeholder="e.g. 50000"
                    value={formData.value}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Return Rate
                  </label>
                  <input
                    type="text"
                    name="returns"
                    placeholder="+8.5%"
                    value={formData.returns}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium py-2.5 rounded-full text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-1/2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-full text-xs transition-colors shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : 'Save Asset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}