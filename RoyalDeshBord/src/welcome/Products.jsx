// Products.jsx
import React, { useState } from 'react'
import Navbar from './NavForMain'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      category: 'personal',
      title: 'Personal Financial Planning',
      description: 'Customized wealth roadmaps, retirement strategy, and tailored personal credit solutions built around your long-term goals.',
      badge: 'Individual Wealth',
      features: ['Personalized wealth strategy', 'Retirement savings planning', 'Flexible credit structures']
    },
    {
      id: 2,
      category: 'business',
      title: 'Business Working Capital & SME Credit',
      description: 'Flexible funding solutions to bridge operational cashflow gaps, purchase machinery, and scale your commercial operations.',
      badge: 'Commercial',
      features: ['Fast online approval', 'Asset & equipment financing', 'Structured cashflow loans']
    },
    {
      id: 3,
      category: 'investments',
      title: 'Asset & Portfolio Management',
      description: 'Diversified investment management strategies designed to preserve equity while providing sustainable long-term yield.',
      badge: 'Wealth Growth',
      features: ['Equities & fixed income', 'Risk management frameworks', 'Real-time performance tracking']
    },
    {
      id: 4,
      category: 'insurance',
      title: 'Commercial & Personal Cover',
      description: 'Comprehensive risk protection, asset insurance, and claim facilitation to safeguard your family and business assets.',
      badge: 'Protection',
      features: ['Property & asset cover', 'Seamless claim handling', 'Tailored risk audits']
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="bg-[#F8F9FC] text-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16 flex-grow">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-gray-500 text-xs tracking-widest font-semibold uppercase block mb-3">
            — OUR FINANCIAL SOLUTIONS
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-gray-900">
            Tailored solutions for every <span className="italic font-normal">financial milestone</span>.
          </h1>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Explore our suite of credit intermediation, asset management, and risk mitigation tools engineered to protect and grow your capital.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-6">
          {[
            { key: 'all', label: 'All Products' },
            { key: 'personal', label: 'Personal Credit & Planning' },
            { key: 'business', label: 'Business & Commercial' },
            { key: 'investments', label: 'Investments' },
            { key: 'insurance', label: 'Insurance & Claims' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                selectedCategory === tab.key
                  ? 'bg-[#0B1D33] text-white font-semibold shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1D33] bg-[#0B1D33]/5 px-3.5 py-1 rounded-full border border-[#0B1D33]/10">
                    {item.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-[#0B1D33] transition-colors">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {item.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="text-[#0B1D33] font-bold">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="/contact"
                  className="bg-[#0B1D33] hover:bg-[#152e4d] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 shadow-md"
                >
                  Apply & Inquire
                </a>
                <span className="text-xs text-gray-400">POPIA Compliant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-20 rounded-3xl bg-white border border-gray-200 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900">Need a custom structured solution?</h3>
            <p className="text-gray-600 text-sm mt-1">Our advisory team provides bespoke financing and portfolio strategies for large enterprises.</p>
          </div>
          <a
            href="/contact"
            className="bg-[#0B1D33] hover:bg-[#152e4d] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors flex items-center gap-2 shadow-lg whitespace-nowrap"
          >
            Speak to an adviser <span>↗</span>
          </a>
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