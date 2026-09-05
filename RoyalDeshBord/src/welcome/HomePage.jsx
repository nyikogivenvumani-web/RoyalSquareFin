import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../assets/hero.png'

export default function HomePage() {
  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <Navbar />

      {/* Hero Body */}
      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-4">
            — Independent advice. Enduring confidence.
          </span>
          <h1 className="text-6xl font-serif leading-tight mb-6">
            Protect today.<br />Build tomorrow.
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Insurance and investment guidance shaped around your life, your business and the legacy you want to create.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
              Book a consultation <span>↗</span>
            </button>
            <a href="tel:02079460120" className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2">
               020 7946 0120
            </a>
          </div>
        </div>

        {/* Custom Rounded Corner Image Frame */}
        <div className="relative rounded-[40px] rounded-tl-[120px] overflow-hidden border border-white/10">
          <img src={heroImg} alt="Financial Advisor" className="w-full h-auto object-cover" />
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-gray-900 max-w-xs shadow-lg">
            <div className="text-2xl font-bold">4.9 / 5</div>
            <div className="text-xs text-gray-600 mt-1">Trusted by families and businesses across the UK</div>
          </div>
        </div>
      </section>
    </div>
  )
}