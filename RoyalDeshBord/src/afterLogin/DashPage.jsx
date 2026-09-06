import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavForDash';

// Error Boundary to catch render crashes and display them visually
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Dashboard Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-[#0B1D33] text-white min-h-screen p-10 flex flex-col justify-center items-center">
          <div className="bg-red-500/20 border border-red-500 p-6 rounded-2xl max-w-2xl w-full">
            <h2 className="text-xl font-bold text-red-400 mb-2">Component Render Crash</h2>
            <p className="text-sm font-mono bg-black/40 p-3 rounded mb-4 overflow-auto">
              {this.state.error && this.state.error.toString()}
            </p>
            <p className="text-xs text-gray-300">
              Check the console or share this message to resolve the remaining variable mismatch.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardContent() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const res = await fetch('http://localhost:5000/api/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!res.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading || !userData) {
    return (
      <div className="bg-[#0B1D33] text-white min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-400">Loading dashboard intelligence...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        {/* Header Greeting */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Client Portal
            </span>
            <h1 className="text-3xl font-serif mt-1">Good Morning, {userData.name || 'Nyiko'}</h1>
          </div>
        </div>

        {/* Hero Net Worth Card */}
        <div className="rounded-3xl bg-blue-600 p-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div>
              <span className="text-blue-100 text-xs uppercase font-semibold tracking-wider">
                Total Net Worth
              </span>
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mt-1">
                R {(userData.netWorth?.total || 0).toLocaleString()}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mt-3 backdrop-blur-md">
                <span>↑ {userData.netWorth?.changePercentage || 0}%</span>
                <span className="text-blue-100 font-normal">from last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold font-serif">{userData.activePoliciesCount || 0}</div>
            <div className="text-xs text-gray-400 mt-0.5">Active Policies</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold font-serif text-amber-300">{userData.expiringSoonCount || 0}</div>
            <div className="text-xs text-gray-400 mt-0.5">Expiring Soon</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold font-serif">
              R {(((userData.netWorth?.assets || 0)) / 1000000).toFixed(2)}M
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Total Assets</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold font-serif">
              R {(((userData.netWorth?.liabilities || 0)) / 1000).toFixed(0)}k
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Liabilities</div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
          <h2 className="text-xl font-serif font-semibold">Goal Progress</h2>
          <div className="space-y-4">
            {(userData.goals || []).map((goal) => (
              <div key={goal.id} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-white">{goal.name}</span>
                  <span className="text-amber-300 font-bold">{goal.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-300 h-2 rounded-full"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ErrorBoundary>
      <DashboardContent />
    </ErrorBoundary>
  );
}