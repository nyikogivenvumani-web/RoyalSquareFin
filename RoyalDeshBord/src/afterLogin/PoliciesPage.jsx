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

  // Fetch policies from backend API with Auth Token[cite: 14]
  const fetchPolicies = async () => {
    try {
      const token = localStorage.getItem('authToken')
      const res = await fetch('http://localhost:5000/api/policies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      if (res.ok) {
        setPolicies(data)
      } else {
        console.error('Failed to fetch policies:', data.error)
      }
    } catch (err) {
      console.error('Error fetching policies:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPolicies()
  }, [])

  // Handle new policy insertion with Auth Token[cite: 14]
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('authToken')
      const res = await fetch('http://localhost:5000/api/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
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
      fetchPolicies() // Refresh database list[cite: 14]
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
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <NavForDash />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-blue-600 text-xs tracking-wider font-semibold uppercase block">
              — Insurance & Cover Schedule
            </span>
            <h1 className="text-3xl font-serif mt-1 text-slate-900">My Active & Historic Policies</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-full text-xs transition-all shadow-sm flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <span>+</span> Add Policy
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4">
          {['All', 'Active', 'Expiring Soon', 'Expired'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid List */}
        {loading ? (
          <p className="text-sm text-slate-500 py-12">Loading policies from database...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPolicies.map((policy) => (
              <div
                key={policy.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all space-y-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Ref: {policy.policyNumber}
                    </span>
                    <h2 className="text-lg font-serif font-semibold text-slate-900 mt-0.5">
                      {policy.name}
                    </h2>
                  </div>
                  <span className="text-[10px] px-3 py-1 rounded-full font-semibold border bg-emerald-50 text-emerald-600 border-emerald-200">
                    {policy.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block">Underwriter Provider</span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{policy.provider}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Cover Type</span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{policy.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Monthly Premium</span>
                    <span className="font-semibold text-blue-600 mt-0.5 block">{policy.premium}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Total Coverage</span>
                    <span className="font-semibold text-slate-900 mt-0.5 block">{policy.coverageAmount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span>Expires: {policy.expiryDate ? new Date(policy.expiryDate).toLocaleDateString() : 'N/A'}[cite: 14]</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add Policy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl w-full max-w-md space-y-6 shadow-2xl">
            <h2 className="text-xl font-serif font-bold text-slate-900">Insert New Policy</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-700 block mb-1 font-medium">Policy Number / Ref</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. POL-98421"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                  value={formData.policyNumber}
                  onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                />
              </div>

              <div>
                <label className="text-slate-700 block mb-1 font-medium">Policy Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Commercial Fleet Protection"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 block mb-1 font-medium">Category / Type</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
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
                  <label className="text-slate-700 block mb-1 font-medium">Provider</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Santam"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                    value={formData.provider}
                    onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 block mb-1 font-medium">Monthly Premium</label>
                  <input
                    required
                    type="text"
                    placeholder="R 2,400 / mo"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                    value={formData.premium}
                    onChange={(e) => setFormData({ ...formData, premium: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-slate-700 block mb-1 font-medium">Total Coverage</label>
                  <input
                    required
                    type="text"
                    placeholder="R 1,000,000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                    value={formData.coverageAmount}
                    onChange={(e) => setFormData({ ...formData, coverageAmount: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 block mb-1 font-medium">Start Date</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-slate-700 block mb-1 font-medium">Expiry Date</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-blue-600"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors shadow-sm"
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



