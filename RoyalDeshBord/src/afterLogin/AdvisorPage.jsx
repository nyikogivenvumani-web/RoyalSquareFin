import React, { useState } from 'react'
import Nav from './NavForDash'

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

  // Chat Widget State
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: 'advisor', text: 'Hello Nyiko. How can I assist you with your portfolio or commercial covers today?', time: '09:00' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const newMsg = {
      sender: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setChatMessages((prev) => [...prev, newMsg])
    setInputMessage('')

    // Simulated advisor reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'advisor',
          text: 'Thank you for your message. I have logged your request and will review the details shortly.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    }, 1000)
  }

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen relative">
      <Nav />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-blue-600 text-xs tracking-wider font-semibold uppercase block">
              — Relationship & Advisory Support
            </span>
            <h1 className="text-3xl font-serif mt-1 text-slate-900">Your Dedicated Advisor</h1>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-full text-xs transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer self-start md:self-auto">
            Schedule Consultation
          </button>
        </div>

        {/* Advisor Main Profile Card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Initials Block */}
          <div className="w-28 h-28 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-600 flex items-center justify-center font-serif text-2xl font-bold shrink-0 shadow-sm">
            DM
          </div>

          <div className="space-y-4 text-center md:text-left flex-1">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h2 className="text-2xl font-serif font-bold text-slate-900">{advisor.name}</h2>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                  {advisor.fspLicense}
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{advisor.title}</p>
              <p className="text-xs text-slate-400 mt-0.5">Based in {advisor.officeLocation}</p>
            </div>

            {/* Specialties Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {advisor.specialties.map((spec, i) => (
                <span key={i} className="text-[11px] bg-slate-50 text-slate-700 px-3 py-1 rounded-lg border border-slate-200/80 font-medium">
                  {spec}
                </span>
              ))}
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Direct Email</span>
                <a href={`mailto:${advisor.email}`} className="text-blue-600 hover:underline font-semibold">
                  {advisor.email}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Direct Phone</span>
                <a href={`tel:${advisor.directLine}`} className="text-slate-900 hover:underline font-semibold">
                  {advisor.directLine}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Tracker & Logs */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-serif font-semibold text-slate-900">Advisory & Support History</h2>
              <p className="text-xs text-slate-500 mt-0.5">Audit log of consultation sessions, policy updates, and strategy reviews</p>
            </div>
            <span className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium self-start sm:self-auto">
              {interactionHistory.length} Recorded Sessions
            </span>
          </div>

          <div className="space-y-4">
            {interactionHistory.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600">{item.type}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded font-medium">
                      {item.channel}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800">{item.summary}</p>
                </div>

                <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full font-semibold whitespace-nowrap self-end md:self-center">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="w-80 sm:w-96 bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all">
            {/* Chat Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-semibold flex items-center justify-center text-xs">
                  DM
                </div>
                <div>
                  <h3 className="text-xs font-bold">{advisor.name}</h3>
                  <span className="text-[10px] text-emerald-400 font-medium">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-white text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-72 overflow-y-auto space-y-3 bg-slate-50 text-xs">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Chat Footer / Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all cursor-pointer group"
            aria-label="Open chat with advisor"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}