import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavForMain'
import heroImg from '../assets/hero.png'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-white font-serif font-medium text-sm block mb-1">
            ROYAL SQUARE FINANCIAL
          </span>
          <p className="text-slate-500 text-[11px]">
            FSP Number 29370 • Reg No: 2009/022911/07
          </p>
        </div>
        <div className="text-slate-500 text-[11px]">
          © {new Date().getFullYear()} Royal Square Financial (Pty) Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col justify-between font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 border border-slate-300/60 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase">
              South Africa • FSP Authorized
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-slate-900">
            Protect today.<br />Build tomorrow.
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl font-normal">
            Insurance and investment guidance shaped around your life, your business, and the legacy you want to create.
          </p>

          <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
            Royal Square Financial brings together suitable portfolios from premier licensed providers, negotiating structured pricing designed strictly around your cashflow.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-7 py-3.5 rounded-full text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-2"
            >
              Explore products <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 font-medium px-7 py-3.5 rounded-full text-xs tracking-wider uppercase transition-all bg-white"
            >
              Connect With Us
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Editorial Media Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-[32px] overflow-hidden border border-slate-200 bg-white shadow-xl">
           

            <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-100 shadow-lg flex items-center justify-between">
              <div>
                <div className="text-xl font-serif font-bold text-slate-900">4.9 / 5</div>
                <div className="text-xs text-slate-500 mt-0.5">Trusted by families & businesses across SA</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                
              </div>
            </div>
          </div>
        </div>
      </main>
    
      <Footer />
    </div>
  );
}