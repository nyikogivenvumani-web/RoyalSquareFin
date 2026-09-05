import React from 'react'
import Navbar from './NavForMain'

export default function AboutUs() {
  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <Navbar />

      {/* Header / Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
          — Who We Are
        </span>
        <h1 className="text-5xl font-serif leading-tight max-w-3xl mb-6">
          Guiding financial growth with integrity and expertise.
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          Royal Square Financial is built on the foundation of providing tailored credit, investment, and insurance advice designed around your personal goals and business ambition.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 py-10">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-serif font-bold text-amber-300">10+</div>
            <div className="text-sm text-gray-400 mt-1">Years of Excellence</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-amber-300">4.9 / 5</div>
            <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-amber-300">100%</div>
            <div className="text-sm text-gray-400 mt-1">POPIA & Regulatory Compliant</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-amber-300">24/7</div>
            <div className="text-sm text-gray-400 mt-1">Client Portal Access</div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
          — Core Values
        </span>
        <h2 className="text-3xl font-serif mb-12">Driven by principles that protect your legacy</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-300/10 text-amber-300 font-serif flex items-center justify-center font-bold mb-6">
              01
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrity & Transparency</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Clear terms, zero hidden structures, and straightforward guidance across every product and advisory service.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-300/10 text-amber-300 font-serif flex items-center justify-center font-bold mb-6">
              02
            </div>
            <h3 className="text-xl font-semibold mb-3">Client-Centricity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Financial advice and solutions tailored to your unique lifecycle, risk profile, and future vision.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-300/10 text-amber-300 font-serif flex items-center justify-center font-bold mb-6">
              03
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Innovation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bank-grade security and fast digital onboarding so you can track portfolios and manage documents effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="rounded-3xl bg-blue-600 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-2">Ready to secure your legacy?</h3>
            <p className="text-blue-100">Schedule a one-on-one session with one of our certified financial advisers.</p>
          </div>
          <a
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Speak to an adviser ↗
          </a>
        </div>
      </section>
    </div>
  )
}