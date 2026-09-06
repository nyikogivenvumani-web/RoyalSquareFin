// Partners.jsx
import React from 'react'
import Navbar from './NavForMain'
import AllanGrayLogo from '../assets/AllangrayLogo.webp'
import LibertyLogo from '../assets/LibertyLogo.png'
import OldMutualLogo from '../assets/Old-Mutuallogo.webp'
import SantamLogo from '../assets/Santamlogo.jpg'
import DiscoveryLogo from '../assets/discoverylogo.jpg'
import MomentumLogo from '../assets/momentumLogo.jpg'

export default function Partners() {
  const partners = [
    { name: 'Allan Gray', logo: AllanGrayLogo, category: 'Equities & Asset Management' },
    { name: 'Momentum', logo: MomentumLogo, category: 'Risk & Investments' },
    { name: 'Old Mutual', logo: OldMutualLogo, category: 'Life & Wealth Solutions' },
    { name: 'Discovery', logo: DiscoveryLogo, category: 'Health & Comprehensive Cover' },
    { name: 'Liberty', logo: LibertyLogo, category: 'Long-Term Insurance' },
    { name: 'Santam', logo: SantamLogo, category: 'Commercial & Property Risk' },
  ]

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16 flex-grow">
        <div className="max-w-3xl mb-12">
          <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block mb-3">
            — Institutional Network
          </span>
          <h1 className="text-5xl font-serif leading-tight">
            Accredited Provider Partnerships
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl leading-relaxed">
            We partner directly with South Africa’s leading financial institutions to source, benchmark, and secure competitive terms for our clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors flex flex-col items-center justify-between text-center group"
            >
              <div className="h-24 w-full flex items-center justify-center bg-white/5 rounded-xl border border-white/5 p-6 mb-6">
                <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain filter brightness-95" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-1 text-white group-hover:text-amber-300 transition-colors">{partner.name}</h3>
                <span className="text-xs text-amber-300/80 uppercase tracking-wider font-medium">{partner.category}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 bg-white/5 py-8 text-xs text-gray-400 text-center">
        Royal Square Financial is an authorized financial services provider.
      </footer>
    </div>
  )
}