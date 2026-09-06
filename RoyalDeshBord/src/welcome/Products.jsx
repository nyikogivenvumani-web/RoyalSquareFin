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
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
            — Our Financial Solutions
          </span>
          <h1 className="text-5xl font-serif leading-tight">
            Tailored solutions for every financial milestone.
          </h1>
          <p className="text-gray-300 text-lg mt-4">
            Explore our suite of credit intermediation, asset management, and risk mitigation tools engineered to protect and grow your capital.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
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
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === tab.key
                  ? 'bg-amber-300 text-gray-900'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
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
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-300/10 px-3 py-1 rounded-full border border-amber-300/20">
                    {item.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-semibold mb-3 text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {item.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="text-amber-300 font-bold">-</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
                >
                  Apply & Inquire
                </a>
                <span className="text-xs text-gray-400">POPIA Compliant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-20 p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-white">Need a custom structured solution?</h3>
            <p className="text-gray-300 text-sm mt-1">Our advisory team provides bespoke financing and portfolio strategies for large enterprises.</p>
          </div>
          <a
            href="/contact"
            className="bg-white text-gray-900 hover:bg-amber-300 font-medium px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            Speak to an adviser
          </a>
        </div>
      </main>
    </div>
  )
}