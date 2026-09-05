import React from 'react'

function HomePage() {
    return (
    
    <section className="bg-[#0B1D33] text-white min-h-screen px-8 py-6">
      {/* Navigation */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto py-4">
        <div className="flex items-center gap-3">
          <div className="border border-amber-300 rounded-full w-10 h-10 flex items-center justify-center font-serif text-amber-300">
            RS
          </div>
          <div>
            <span className="text-lg font-semibold block leading-tight">Royal Square</span>
            <span className="text-[10px] tracking-widest text-amber-300 block">FINANCIAL INVESTMENTS</span>
          </div>
        </div>

        <ul className="flex items-center gap-8 text-sm text-gray-300">
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="/personal" className="hover:text-white">Personal</a></li>
          <li><a href="/business" className="hover:text-white">Business</a></li>
          <li><a href="/investments" className="hover:text-white">Investments</a></li>
          <li><a href="/claims" className="hover:text-white">Claims</a></li>
        </ul>

        <a href="/contact" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center gap-1">
          Speak to an adviser <span>↗</span>
        </a>
      </nav>

      {/* Hero Body */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
              Book a consultation <span>↗</span>
            </button>
            <a href="tel:02079460120" className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2">
               020 7946 0120
            </a>
          </div>
        </div>

        {/* Custom Rounded Corner Image Frame */}
        <div className="relative rounded-[40px] rounded-tl-[120px] overflow-hidden border border-white/10">
          <img src="/hero-advisor.jpg" alt="Financial Advisor" className="w-full h-auto object-cover" />
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-gray-900 max-w-xs shadow-lg">
            <div className="text-2xl font-bold">4.9 / 5</div>
            <div className="text-xs text-gray-600 mt-1">Trusted by families and businesses across the UK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;