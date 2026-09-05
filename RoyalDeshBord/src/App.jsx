import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Welcome directory pages
import HomePage from './welcome/HomePage';
import AboutUs from './welcome/AboutUs';
import Products from './welcome/Products';
import ContactPage from './welcome/ContactPage';

// AfterLogin directory pages
import LoginPage from './afterLogin/loginPage';
import DashPage from './afterLogin/DashPage';
import ReportIncident from './afterLogin/ReportIncident'; 
import PoliciesPage from './afterLogin/PoliciesPage';
import AdvisorPage from './afterLogin/AdvisorPage';
import AnalticsPage from './afterLogin/AnalticsPage';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Authenticated / Portal Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashPage />} />
        <Route path="/report-incident" element={<ReportIncident />} /> 
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/advisors" element={<AdvisorsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />

      </Routes>
    </Router>
  );
}
