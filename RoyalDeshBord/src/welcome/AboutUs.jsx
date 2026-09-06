// AboutUs.jsx
import React from 'react'
import Navbar from './NavForMain'

export default function AboutUs() {
  return (
    <div className="bg-[#0B1D33] text-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* Header / Hero Section */}
        <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
            — Who We Are[cite: 12]
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif leading-tight max-w-3xl mb-6">
            Guiding financial growth with integrity and expertise.[cite: 12]
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Royal Square Financial is built on the foundation of providing tailored credit, investment, and insurance advice designed around your personal goals and business ambition.[cite: 12]
          </p>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-white/10 bg-white/5 py-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-serif font-bold text-amber-300">10+</div>
              <div className="text-sm text-gray-400 mt-1">Years of Excellence[cite: 12]</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-amber-300">4.9 / 5</div>
              <div className="text-sm text-gray-400 mt-1">Client Satisfaction[cite: 12]</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-amber-300">100%</div>
              <div className="text-sm text-gray-400 mt-1">POPIA & Regulatory Compliant[cite: 12]</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-amber-300">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Client Portal Access[cite: 12]</div>
            </div>
          </div>
        </section>

        {/* Our Pillars */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
            — Core Values[cite: 12]
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif mb-12">Driven by principles that protect your legacy[cite: 12]</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-amber-300/10 text-amber-300 font-serif flex items-center justify-center font-bold mb-6 border border-amber-300/20">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity & Transparency[cite: 12]</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clear terms, zero hidden structures, and straightforward guidance across every product and advisory service.[cite: 12]
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-amber-300/10 text-amber-300 font-serif flex items-center justify-center font-bold mb-6 border border-amber-300/20">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Centricity[cite: 12]</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Financial advice and solutions tailored to your unique lifecycle, risk profile, and future vision.[cite: 12]
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-amber-300/10 text-amber-300 font-serif flex items-center justify-center font-bold mb-6 border border-amber-300/20">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Innovation[cite: 12]</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bank-grade security and fast digital onboarding so you can track portfolios and manage documents effortlessly.[cite: 12]
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="max-w-7xl mx-auto px-8 pb-20">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-md">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-2">Ready to secure your legacy?[cite: 12]</h3>
              <p className="text-gray-400 text-sm">Schedule a one-on-one session with one of our certified financial advisers.[cite: 12]</p>
            </div>
            <a
              href="/contact"
              className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-3.5 rounded-full text-sm transition-colors flex items-center gap-2 shadow-lg whitespace-nowrap"
            >
              Speak to an adviser <span>↗</span>[cite: 12]
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-white/5 py-8 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-white font-serif font-medium text-sm block mb-1">
              ROYAL SQUARE FINANCIAL
            </span>
            <p className="text-gray-400 text-xs">
              FSP Number 29370 • Reg No: 2009/022911/07
            </p>
          </div>
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Royal Square Financial (Pty) Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}