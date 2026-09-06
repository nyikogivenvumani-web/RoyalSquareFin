// AboutUs.jsx
import React from 'react'
import Navbar from './NavForMain'

export default function AboutUs() {
  return (
    <div className="bg-[#F8F9FC] text-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* Header / Hero Section */}
        <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
          <span className="text-gray-500 text-xs tracking-widest font-semibold uppercase block mb-3">
            — WHO WE ARE
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif leading-tight max-w-3xl mb-6 text-gray-900">
            Guiding financial growth with <span className="italic font-normal">integrity</span> and expertise.
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Royal Square Financial is built on the foundation of providing tailored credit, investment, and insurance advice designed around your personal goals and business ambition.
          </p>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-gray-200 bg-white py-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-serif font-bold text-[#0B1D33]">10+</div>
              <div className="text-sm text-gray-500 mt-1">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#0B1D33]">4.9 / 5</div>
              <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#0B1D33]">100%</div>
              <div className="text-sm text-gray-500 mt-1">POPIA & Regulatory Compliant</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#0B1D33]">24/7</div>
              <div className="text-sm text-gray-500 mt-1">Client Portal Access</div>
            </div>
          </div>
        </section>

        {/* Our Pillars */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <span className="text-gray-500 text-xs tracking-widest font-semibold uppercase block mb-3">
            — CORE VALUES
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif mb-12 text-gray-900">Driven by principles that protect your legacy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0B1D33]/5 text-[#0B1D33] font-serif flex items-center justify-center font-bold mb-6 border border-[#0B1D33]/10">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Integrity & Transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear terms, zero hidden structures, and straightforward guidance across every product and advisory service.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0B1D33]/5 text-[#0B1D33] font-serif flex items-center justify-center font-bold mb-6 border border-[#0B1D33]/10">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Client-Centricity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Financial advice and solutions tailored to your unique lifecycle, risk profile, and future vision.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0B1D33]/5 text-[#0B1D33] font-serif flex items-center justify-center font-bold mb-6 border border-[#0B1D33]/10">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Digital Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bank-grade security and fast digital onboarding so you can track portfolios and manage documents effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="max-w-7xl mx-auto px-8 pb-20">
          <div className="rounded-3xl bg-white border border-gray-200 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-2 text-gray-900">Ready to secure your legacy?</h3>
              <p className="text-gray-600 text-sm">Schedule a one-on-one session with one of our certified financial advisers.</p>
            </div>
            <a
              href="/contact"
              className="bg-[#0B1D33] hover:bg-[#152e4d] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors flex items-center gap-2 shadow-lg whitespace-nowrap"
            >
              Speak to an adviser <span>↗</span>
            </a>
          </div>
        </section>
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