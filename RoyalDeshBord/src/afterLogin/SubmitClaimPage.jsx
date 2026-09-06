

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavForDash from './NavForDash'

export default function SubmitClaimPage() {
  const [formData, setFormData] = useState({
    incidentTitle: '',
    incidentDate: '',
    severityLevel: 'Moderate',
    location: '',
    crossStreets: '',
    directionOfTravel: '',
    description: '',
    roadSurfacePhotos: [],
    vehiclePeoplePhotos: [],
    licenseDiscsPhotos: [],
    idDocumentsPhotos: [],
    witnessName: '',
    witnessContact: '',
    witnessVoiceNote: null,
    insuranceDetails: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e, fieldName) => {
    const files = Array.from(e.target.files)
    setFormData((prev) => ({ ...prev, [fieldName]: files }))
  }

  const handleSingleFileChange = (e, fieldName) => {
    const file = e.target.files[0] || null
    setFormData((prev) => ({ ...prev, [fieldName]: file }))
  }

  const handleSubmitClaim = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen">
      <NavForDash />

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-blue-600 text-xs tracking-wider font-semibold uppercase block">
              — Insurance & Claims Protocol
            </span>
            <h1 className="text-3xl font-serif mt-1 text-slate-900">Submit an Insurance Claim</h1>
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
            <h2 className="text-2xl font-serif font-semibold text-slate-900">Claim Successfully Submitted</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your formal claim, witness testimony, and evidentiary documents have been securely transmitted to our claims processing department. Your reference tracking number is <strong className="text-slate-900">CLM-2026-8942</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  incidentTitle: '',
                  incidentDate: '',
                  severityLevel: 'Moderate',
                  location: '',
                  crossStreets: '',
                  directionOfTravel: '',
                  description: '',
                  roadSurfacePhotos: [],
                  vehiclePeoplePhotos: [],
                  licenseDiscsPhotos: [],
                  idDocumentsPhotos: [],
                  witnessName: '',
                  witnessContact: '',
                  witnessVoiceNote: null,
                  insuranceDetails: '',
                })
              }}
              className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2.5 rounded-full text-xs transition-colors shadow-sm cursor-pointer"
            >
              Submit Another Claim
            </button>
          </div>
        ) : (
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-8">
            <form onSubmit={handleSubmitClaim} className="space-y-6">
              {submitError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Claim Summary / Incident Title</label>
                  <input
                    type="text"
                    name="incidentTitle"
                    required
                    value={formData.incidentTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Commercial Vehicle Collision"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Severity / Urgency Level</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-1">Direction of Travel</label>
                  <input
                    type="text"
                    name="directionOfTravel"
                    required
                    value={formData.directionOfTravel}
                    onChange={handleInputChange}
                    placeholder="e.g. Traveling North on M1"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Exact Address</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. 124 Main Street"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nearest Cross Streets</label>
                  <input
                    type="text"
                    name="crossStreets"
                    required
                    value={formData.crossStreets}
                    onChange={handleInputChange}
                    placeholder="e.g. Corner of Rivonia Rd & Maude St"
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

              <div className="space-y-6 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">Incident Evidence & Documentation</h3>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">1. Photos of Road Surface & Direction of Travel</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'roadSurfacePhotos')}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-1">Upload photos showing road conditions, skid marks, signage, or lane markings</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">2. Photos of All Vehicles and People Involved</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'vehiclePeoplePhotos')}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-1">Upload clear shots of vehicle damages and involved parties</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">3. Photos of License Plates and Registration Discs</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'licenseDiscsPhotos')}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-1">Upload close-ups of vehicle license plates and valid window registration discs</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">4. Photos of ID Documents of Everyone Involved</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'idDocumentsPhotos')}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-1">Upload clear photos of driver licenses or identity documents of all parties involved</p>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">Witness & Insurance Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Witness Full Name</label>
                    <input
                      type="text"
                      name="witnessName"
                      value={formData.witnessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sipho Khumalo"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Witness Contact Details</label>
                    <input
                      type="text"
                      name="witnessContact"
                      value={formData.witnessContact}
                      onChange={handleInputChange}
                      placeholder="e.g. Phone number or email"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Witness Voice Note</label>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleSingleFileChange(e, 'witnessVoiceNote')}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-1">Upload an audio recording of the witness testimony (MP3, WAV, M4A)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Insurance Details of Involved Parties</label>
                  <textarea
                    name="insuranceDetails"
                    rows="3"
                    value={formData.insuranceDetails}
                    onChange={handleInputChange}
                    placeholder="Provide insurer names, policy numbers, and contact details for third parties..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8r8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Encrypting & Submitting Claim...</span>
                    </>
                  ) : (
                    <>
                      <span className="tracking-wide">Submit Formal Insurance Claim</span>
                      <span>→</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-3">
                  By submitting this claim, you confirm that all information provided is accurate and truthful to the best of your knowledge under applicable regulatory frameworks.
                </p>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}