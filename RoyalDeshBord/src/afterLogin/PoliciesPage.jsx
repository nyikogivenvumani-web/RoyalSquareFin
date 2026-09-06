import React, { useState, useEffect } from 'react'
import NavForDash from './NavForDash'

export default function PoliciesPage() {
  const [policies, setPolicies] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // New policy form state
  const [formData, setFormData] = useState({
    policyNumber: '',
    name: '',
    type: 'Business',
    provider: '',
    premium: '',
    coverageAmount: '',
    status: 'Active',
    startDate: '',
    expiryDate: '',
  })

  // Fetch policies from backend API
  const fetchPolicies = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/policies')
      const data = await res.json()
      setPolicies(data)
    } catch (err) {
      console.error('Error fetching policies:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPolicies()
  }, [])

  // Handle new policy insertion
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/policies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(`Failed to save: ${data.error || 'Unknown database error'}`)
        return
      }

      setIsModalOpen(false)
      setFormData({
        policyNumber: '',
        name: '',
        type: 'Business',
        provider: '',
        premium: '',
        coverageAmount: '',
        status: 'Active',
        startDate: '',
        expiryDate: '',
      })
      fetchPolicies() // Refresh database list
    } catch (err) {
      console.error('Error creating policy:', err)
      alert('Network error: Could not connect to the backend server.')
    }
  }

  const filteredPolicies = policies.filter((p) => {
    if (selectedFilter === 'All') return true
    return p.status === selectedFilter
  })

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <NavForDash />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Insurance & Cover Schedule
            </span>
            <h1 className="text-3xl font-serif mt-1">My Active & Historic Policies</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-5 py-2.5 rounded-full text-xs transition-colors shadow flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <span>+</span> Add Policy
          </button>
        </div>

        {/* Filters */}
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

        {/* Grid List */}
        {loading ? (
          <p className="text-sm text-gray-400">Loading policies from database...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPolicies.map((policy) => (
              <div
                key={policy.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/30 transition-all space-y-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                      Ref: {policy.policyNumber}
                    </span>
                    <h2 className="text-lg font-serif font-semibold text-white mt-0.5">
                      {policy.name}
                    </h2>
                  </div>
                  <span className="text-[10px] px-3 py-1 rounded-full font-semibold border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                    {policy.status}
                  </span>
                </div>

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

                <div className="flex items-center justify-between pt-1 text-[11px] text-gray-400">
                  <span>Expires: {new Date(policy.expiryDate).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add Policy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#0D233E] border border-white/10 p-6 rounded-2xl w-full max-w-md space-y-4 shadow-2xl">
            <h2 className="text-xl font-serif font-bold text-white">Insert New Policy</h2>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 block mb-1">Policy Number / Ref</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. POL-98421"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-amber-300"
                  value={formData.policyNumber}
                  onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Policy Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Commercial Fleet Protection"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-amber-300"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Category / Type</label>
                  <select
                    className="w-full bg-slate-800 border border-white/10 rounded-lg p-2.5 text-white outline-none"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option>Business</option>
                    <option>Life</option>
                    <option>Asset</option>
                    <option>Property</option>
                    <option>Equipment</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Provider</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Santam"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-amber-300"
                    value={formData.provider}
                    onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Monthly Premium</label>
                  <input
                    required
                    type="text"
                    placeholder="R 2,400 / mo"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none"
                    value={formData.premium}
                    onChange={(e) => setFormData({ ...formData, premium: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Total Coverage</label>
                  <input
                    required
                    type="text"
                    placeholder="R 1,000,000"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none"
                    value={formData.coverageAmount}
                    onChange={(e) => setFormData({ ...formData, coverageAmount: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Start Date</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white outline-none"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Expiry Date</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white outline-none"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-300 text-gray-900 font-semibold rounded-lg hover:bg-amber-400"
                >
                  Save Policy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}