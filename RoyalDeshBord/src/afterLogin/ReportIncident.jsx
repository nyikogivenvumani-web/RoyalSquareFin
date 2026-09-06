import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavForDash from './NavForDash'

export default function ReportIncident() {
  const [formData, setFormData] = useState({
    incidentTitle: '',
    incidentDate: '',
    severityLevel: 'Moderate',
    location: '',
    description: '',
    evidenceFile: null,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'evidenceFile') {
      setFormData((prev) => ({ ...prev, [name]: files[0] || null }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Incident Reported:', formData)
    setSubmitted(true)
  }

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <NavForDash />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Header with Back Link */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-blue-600 text-xs tracking-wider font-semibold uppercase block">
              — Incident Protocol
            </span>
            <h1 className="text-3xl font-serif mt-1 text-slate-900">Report an Incident</h1>
          </div>
          <Link
            to="/dashboard"
            className="text-slate-600 hover:text-slate-900 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {submitted ? (
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-serif font-semibold text-slate-900">Incident Reported Successfully</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your incident report has been securely registered. Our risk and compliance team has been notified for immediate review.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2.5 rounded-full text-xs transition-colors shadow-sm"
            >
              Report Another Incident
            </button>
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Incident Title / Summary</label>
                  <input
                    type="text"
                    name="incidentTitle"
                    required
                    value={formData.incidentTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Facility Perimeter Breach"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Severity Level</label>
                  <select
                    name="severityLevel"
                    value={formData.severityLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 transition"
                  >
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>Critical / High</option>
                    <option>Emergency</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Incident Date & Time</label>
                  <input
                    type="datetime-local"
                    name="incidentDate"
                    required
                    value={formData.incidentDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Location / Asset Reference</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Sandton Central Hub, Site B"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Detailed Description of Events</label>
                <textarea
                  name="description"
                  rows="4"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the context, potential impact, and immediate actions taken..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Attach Evidence / Logs</label>
                <input
                  type="file"
                  name="evidenceFile"
                  onChange={handleInputChange}
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-colors file:cursor-pointer"
                />
                <p className="text-xs text-slate-400 mt-1">Upload relevant logs, photos, or documents (PDF, JPG, PNG)</p>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 px-6 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Incident Report</span>
                <span>→</span>
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}