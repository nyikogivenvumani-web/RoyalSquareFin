import React, { useState } from 'react'
import Navbar from './NavForMain'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Personal Financial Planning',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Header Title */}
        <div className="mb-12">
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
            — Get In Touch
          </span>
          <h1 className="text-5xl font-serif leading-tight">
            Speak to an adviser today.
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-xl">
            Whether you need personal insurance, asset management, or corporate financial solutions, our dedicated advisors are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6">
              <h2 className="text-2xl font-serif font-semibold">Contact Information</h2>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-300/10 text-amber-300 rounded-xl">
                  📞
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Direct Line</span>
                  <a href="tel:02079460120" className="text-lg font-medium hover:text-amber-300 transition-colors">
                    020 7946 0120
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-300/10 text-amber-300 rounded-xl">
                  ✉️
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Email Advisory</span>
                  <a href="mailto:info@royalsquare.co.za" className="text-lg font-medium hover:text-amber-300 transition-colors">
                    info@royalsquare.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-300/10 text-amber-300 rounded-xl">
                  📍
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Headquarters</span>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1">
                    The Franklin, 4 Pritchard Street<br />
                    Johannesburg, Gauteng, 2001
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-serif font-semibold mb-4">Advisory Hours</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Monday — Friday</span>
                  <span className="font-medium text-white">08:00 – 17:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-amber-300">By Appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & Public Holidays</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-300/20 text-amber-300 rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-serif">Consultation Requested</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. A Royal Square Financial adviser will review your submission and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-amber-300 underline hover:text-white transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold mb-2">Book a Consultation</h2>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-300 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-300 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 82 000 0000"
                      className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-300 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Primary Service Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full bg-[#122744] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-300 transition-colors"
                  >
                    <option value="Personal Financial Planning">Personal Financial Planning</option>
                    <option value="Business Financing & Credit">Business Financing & Credit</option>
                    <option value="Wealth & Asset Investments">Wealth & Asset Investments</option>
                    <option value="Insurance & Claims Advice">Insurance & Claims Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Message / Inquiry
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding your financial goals or questions..."
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-300 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Consultation Request <span>↗</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Protected by POPIA regulatory guidelines. Your personal details remain strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}