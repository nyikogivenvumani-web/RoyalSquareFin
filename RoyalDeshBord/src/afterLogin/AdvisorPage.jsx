import React, { useState } from 'react'
import NavForDash from './NavForDash'

export default function AdvisorPage() {
  const [advisor] = useState({
    name: 'David Molefe',
    title: 'Senior Private Wealth & Commercial Advisor',
    fspLicense: 'FSP-90821',
    email: 'd.molefe@royaladvisors.co.za',
    phone: '+27 (0)11 892 4000',
    directLine: '+27 (0)82 555 0192',
    officeLocation: 'Sandton, Johannesburg',
    specialties: ['Corporate Wealth Preservation', 'Fleet & Commercial Cover', 'Key Person Retirement Funds'],
  })

  const [interactionHistory] = useState([
    {
      id: 1,
      date: '2026-08-20',
      type: 'Portfolio Review',
      summary: 'Reviewed Q3 asset distribution and confirmed renewal of Commercial Fleet cover.',
      channel: 'Video Call',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2026-06-11',
      type: 'Policy Modification',
      summary: 'Adjusted liability limits on Personal Property Insurance per client request.',
      channel: 'Email / Portal',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2026-03-04',
      type: 'Annual Wealth Strategy',
      summary: 'Established emergency liquidity targets and set up automatic dividend reinvestments.',
      channel: 'In-Person Consultation',
      status: 'Completed',
    },
  ])

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <NavForDash />

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Relationship & Advisory Support
            </span>
            <h1 className="text-3xl font-serif mt-1">Your Dedicated Advisor</h1>
          </div>
          <button className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-5 py-2.5 rounded-full text-xs transition-colors shadow flex items-center gap-2 cursor-pointer self-start md:self-auto">
            <span>📅</span> Schedule Consultation
          </button>
        </div>

        {/* Advisor Main Profile Card */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar / Profile Icon */}
          <div className="w-28 h-28 rounded-2xl bg-amber-300/10 border-2 border-amber-300/40 text-amber-300 flex items-center justify-center text-4xl font-serif shrink-0 shadow-xl">
            👤
          </div>

          <div className="space-y-4 text-center md:text-left flex-1">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h2 className="text-2xl font-serif font-bold text-white">{advisor.name}</h2>
                <span className="text-[10px] bg-amber-300/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-300/30 font-semibold">
                  {advisor.fspLicense}
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1">{advisor.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">Based in {advisor.officeLocation}</p>
            </div>

            {/* Specialties Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {advisor.specialties.map((spec, i) => (
                <span key={i} className="text-[11px] bg-white/5 text-gray-300 px-3 py-1 rounded-lg border border-white/10">
                  {spec}
                </span>
              ))}
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-gray-400 block">Direct Email</span>
                <a href={`mailto:${advisor.email}`} className="text-amber-300 hover:underline font-medium">
                  {advisor.email}
                </a>
              </div>
              <div>
                <span className="text-gray-400 block">Direct Phone</span>
                <a href={`tel:${advisor.directLine}`} className="text-white hover:underline font-medium">
                  {advisor.directLine}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Tracker & Logs */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-serif font-semibold">Advisory & Support History</h2>
              <p className="text-xs text-gray-400 mt-0.5">Audit log of consultation sessions, policy updates, and strategy reviews</p>
            </div>
            <span className="text-xs text-gray-400">{interactionHistory.length} Recorded Sessions</span>
          </div>

          <div className="space-y-4">
            {interactionHistory.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-amber-300">{item.type}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                      {item.channel}
                    </span>
                  </div>
                  <p className="text-sm text-gray-200">{item.summary}</p>
                </div>

                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-medium whitespace-nowrap self-end md:self-center">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}