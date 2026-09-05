import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavForMain'
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
          <p className="text-gray-300 text-lg mb-4 max-w-md">
            Insurance and investment guidance shaped around your life, your business and the legacy you want to create.
          </p>
          <p className="text-gray-300 text-base mb-8 max-w-md">
            Royal Square Financial (FSP) brings together suitable products from five licensed providers, then negotiates the best price for your circumstances.
            We start with affordability, not a product — so you leave with cover you can keep paying for.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors shadow-lg flex items-center gap-2"
            >
              Get Started <span>↗</span>
            </Link>
            <Link
              to="/products"
              className="border border-white/20 hover:border-amber-300 text-white hover:text-amber-300 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>

        {/* Custom Rounded Corner Image Frame */}
        <div className="relative rounded-[40px] rounded-tl-[120px] overflow-hidden border border-white/10">
          <img src={heroImg} alt="Financial Advisor" className="w-full h-auto object-cover" />
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-gray-900 max-w-xs shadow-lg">
            <div className="text-2xl font-bold">4.9 / 5</div>
            <div className="text-xs text-gray-600 mt-1">Trusted by families and businesses across South Africa</div>
          </div>
        </div>
      </section>
    </div>
  )
}