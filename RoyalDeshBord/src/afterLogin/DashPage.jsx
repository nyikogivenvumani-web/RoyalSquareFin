import React, { useState } from 'react';
import NavForDash from './NavForDash';

export default function Dashboard() {
  const [userData] = useState({
    name: 'Sarah',
    netWorth: {
      total: 1250000,
      changePercentage: 4.8,
      assets: 1450000,
      liabilities: 200000,
    },
    activePoliciesCount: 4,
    expiringSoonCount: 2,
    policies: [
      {
        id: 1,
        name: 'Comprehensive Commercial Cover',
        type: 'Business',
        premium: 'R 2,400 / mo',
        status: 'Active',
        expiryDate: '2027-08-15',
      },
      {
        id: 2,
        name: 'Key Person Life Protection',
        type: 'Life',
        premium: 'R 1,150 / mo',
        status: 'Expiring Soon',
        expiryDate: '2026-09-28',
      },
      {
        id: 3,
        name: 'Commercial Vehicle Fleet',
        type: 'Asset',
        premium: 'R 3,800 / mo',
        status: 'Expiring Soon',
        expiryDate: '2026-10-12',
      },
      {
        id: 4,
        name: 'Personal Property Insurance',
        type: 'Property',
        premium: 'R 950 / mo',
        status: 'Active',
        expiryDate: '2027-03-31',
      },
    ],
    recentlyExpiredPolicy: {
      name: 'Short-Term Machinery Warranty',
      type: 'Equipment',
      expiredOn: '28 August 2026',
      reference: 'POL-9082-ZA',
    },
    goals: [
      {
        id: 1,
        name: 'Retirement Fund Strategy',
        current: 750000,
        target: 1000000,
        progress: 75,
      },
      {
        id: 2,
        name: 'Commercial Asset Expansion',
        current: 320000,
        target: 500000,
        progress: 64,
      },
      {
        id: 3,
        name: 'Emergency Liquidity Reserve',
        current: 180000,
        target: 200000,
        progress: 90,
      },
    ],
  });

  // Handler for the Report Incident button
  const handleReportIncident = () => {
    console.log('Report Incident clicked – open modal or navigate');
    // Add your logic here (e.g., setModalOpen(true), navigate to /report, etc.)
  };

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      {/* Updated Dedicated Dashboard Navbar */}
      <NavForDash />

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        {/* Header Greeting + Actions */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Client Portal
            </span>
            <h1 className="text-3xl font-serif mt-1">Good Morning, {userData.name}</h1>
          </div>

          {/* Right-side action buttons */}
          <div className="flex items-center gap-3">
            {/* + Report Incident button */}
            <button
              onClick={handleReportIncident}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl shadow transition-colors cursor-pointer"
            >
              <span className="text-xl leading-none">+</span>
              Report Incident
            </button>

            {/* Notification bell */}
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer">
              🔔
            </button>
          </div>
        </div>

        {/* 1. Hero Net Worth Card */}
        <div className="rounded-3xl bg-blue-600 p-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div>
              <span className="text-blue-100 text-xs uppercase font-semibold tracking-wider">
                Total Net Worth
              </span>
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mt-1">
                R {userData.netWorth.total.toLocaleString()}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mt-3 backdrop-blur-md">
                <span>↑ {userData.netWorth.changePercentage}%</span>
                <span className="text-blue-100 font-normal">from last month</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="bg-amber-300 hover:bg-amber-400 text-gray-900 text-xs font-semibold px-5 py-3 rounded-2xl transition-colors shadow cursor-pointer">
                View Portfolio
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-5 py-3 rounded-2xl transition-colors border border-white/20 backdrop-blur-md cursor-pointer">
                Add Asset
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 2x2 Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg mb-3">
              🛡️
            </div>
            <div className="text-2xl font-bold font-serif">{userData.activePoliciesCount}</div>
            <div className="text-xs text-gray-400 mt-0.5">Active Policies</div>
            <span className="inline-block mt-2 text-[10px] text-emerald-400 font-medium">100% Covered</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-300/10 text-amber-300 flex items-center justify-center text-lg mb-3">
              ⏳
            </div>
            <div className="text-2xl font-bold font-serif text-amber-300">{userData.expiringSoonCount}</div>
            <div className="text-xs text-gray-400 mt-0.5">Expiring Soon</div>
            <span className="inline-block mt-2 text-[10px] text-amber-300 font-medium">Action Needed</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg mb-3">
              📈
            </div>
            <div className="text-2xl font-bold font-serif">
              R {(userData.netWorth.assets / 1000000).toFixed(2)}M
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Total Assets</div>
            <span className="inline-block mt-2 text-[10px] text-emerald-400 font-medium">↑ 11.5% YoY</span>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center text-lg mb-3">
              📉
            </div>
            <div className="text-2xl font-bold font-serif">
              R {(userData.netWorth.liabilities / 1000).toFixed(0)}k
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Liabilities</div>
            <span className="inline-block mt-2 text-[10px] text-gray-400 font-medium">Low Risk</span>
          </div>
        </div>

        {/* Recently Expired Policy Alert */}
        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-500/20 text-red-400 text-xl shrink-0">⚠️</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                  Recently Expired
                </span>
                <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full border border-red-500/30">
                  Lapsed
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mt-0.5">
                {userData.recentlyExpiredPolicy.name}
              </h3>
              <p className="text-xs text-gray-400">
                Ref: {userData.recentlyExpiredPolicy.reference} • Expired{' '}
                {userData.recentlyExpiredPolicy.expiredOn}
              </p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow cursor-pointer">
            Renew Policy
          </button>
        </div>

        {/* Bottom Split Layout: Goals & Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-semibold">Goal Progress</h2>
              <span className="text-xs text-amber-300 underline cursor-pointer">Manage Goals</span>
            </div>

            <div className="space-y-4">
              {userData.goals.map((goal) => (
                <div key={goal.id} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-white">{goal.name}</span>
                    <span className="text-amber-300 font-bold">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-amber-300 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-400 pt-1">
                    <span>R {goal.current.toLocaleString()}</span>
                    <span>Target: R {goal.target.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-semibold">Policy Schedule</h2>
              <span className="text-xs text-gray-400">{userData.policies.length} total</span>
            </div>

            <div className="space-y-3">
              {userData.policies.map((policy) => (
                <div
                  key={policy.id}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-3"
                >
                  <div>
                    <h3 className="text-xs font-semibold text-white">{policy.name}</h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">Expires: {policy.expiryDate}</p>
                  </div>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${
                      policy.status === 'Expiring Soon'
                        ? 'bg-amber-300/20 text-amber-300 border border-amber-300/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {policy.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}