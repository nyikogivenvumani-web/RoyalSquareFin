// ContactPage.jsx
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
    <div className="bg-[#F8F9FC] text-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16 flex-grow">
        {/* Header Title */}
        <div className="mb-12">
          <span className="text-gray-500 text-xs tracking-widest font-semibold uppercase block mb-3">
            — GET IN TOUCH
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-xl leading-relaxed">
            Speak directly with our advisory team or request a structured consultation callback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6 shadow-xl">
              <h2 className="text-2xl font-serif font-semibold text-gray-900">Contact Information</h2>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0B1D33]/5 text-[#0B1D33] rounded-xl border border-[#0B1D33]/10 font-medium">
                  TEL
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Direct Line</span>
                  <a href="tel:02079460120" className="text-lg font-medium text-gray-900 hover:text-[#0B1D33] transition-colors">
                    020 7946 0120
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0B1D33]/5 text-[#0B1D33] rounded-xl border border-[#0B1D33]/10 font-medium">
                  MAIL
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Email Advisory</span>
                  <a href="mailto:info@royalsquare.co.za" className="text-lg font-medium text-gray-900 hover:text-[#0B1D33] transition-colors">
                    info@royalsquare.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0B1D33]/5 text-[#0B1D33] rounded-xl border border-[#0B1D33]/10 font-medium">
                  HQ
                </div>
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-medium">Headquarters</span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    The Franklin, 4 Pritchard Street <br />
                    Johannesburg, Gauteng, 2001
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Advisory Hours</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Monday — Friday</span>
                  <span className="font-medium text-gray-900">08:00 – 17:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-[#0B1D33]">By Appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & Public Holidays</span>
                  <span className="font-medium text-gray-400">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#0B1D33]/10 text-[#0B1D33] rounded-full flex items-center justify-center text-xl font-bold mx-auto border border-[#0B1D33]/20">
                  ✓
                </div>
                <h3 className="text-2xl font-serif text-gray-900">Consultation Requested</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out. A Royal Square Financial adviser will review your submission and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#0B1D33] underline hover:text-gray-900 transition-colors cursor-pointer font-semibold"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-serif font-semibold mb-2 text-gray-900">Book a Consultation</h2>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B1D33] transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B1D33] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 82 000 0000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B1D33] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">
                    Primary Service Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#0B1D33] transition-colors text-sm"
                  >
                    <option value="Personal Financial Planning">Personal Financial Planning</option>
                    <option value="Business Financing & Credit">Business Financing & Credit</option>
                    <option value="Wealth & Asset Investments">Wealth & Asset Investments</option>
                    <option value="Insurance & Claims Advice">Insurance & Claims Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-2">
                    Message / Inquiry
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding your financial goals or questions..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B1D33] transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1D33] hover:bg-[#152e4d] text-white font-semibold py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
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

      <footer className="border-t border-gray-200 bg-white py-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-gray-900 font-serif font-medium text-sm block mb-1">
              ROYAL SQUARE FINANCIAL
            </span>
            <p className="text-gray-500 text-xs">
              FSP Number 29370 • Reg No: 2009/022911/07
            </p>
          </div>
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Royal Square Financial (Pty) Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}