import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavForDash from './NavForDash'; // 1. Import the dashboard navigation component

export default function ReportIncident() {
  // Form fields state
  const [formData, setFormData] = useState({
    location: '',
    driverName: '',
    driverLicense: '',
    driverContact: '',
    thirdPartyName: '',
    thirdPartyInsurance: '',
    thirdPartyPolicy: '',
    thirdPartyContact: '',
    licenceFile: null,
    voiceNoteFile: null,
    photos: [],
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'licenceFile' || name === 'voiceNoteFile') {
      setFormData((prev) => ({ ...prev, [name]: files[0] || null }));
    } else if (name === 'photos') {
      setFormData((prev) => ({ ...prev, [name]: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Photos uploaded:', formData.photos.length);
    // Add your submission logic here
  };

  return (
    <div className="bg-[#0B1D33] text-white min-h-screen">
      {/* 2. Render the navigation bar here */}
      <NavForDash />

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        {/* Header with Back Link */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-amber-300 text-xs tracking-widest font-semibold uppercase block">
              — Incident Report
            </span>
            <h1 className="text-3xl font-serif mt-1">Report a Motor Incident</h1>
          </div>
          <Link
            to="/dashboard"
            className="text-amber-300 hover:text-amber-400 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Main Form Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Location (cross streets / address)</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g. Corner of Main & 5th"
                className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Driver & Third-Party Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Driver Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Driver Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    name="driverName"
                    value={formData.driverName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Licence Number</label>
                  <input
                    type="text"
                    name="driverLicense"
                    value={formData.driverLicense}
                    onChange={handleInputChange}
                    placeholder="e.g. 1234567890"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Contact</label>
                  <input
                    type="text"
                    name="driverContact"
                    value={formData.driverContact}
                    onChange={handleInputChange}
                    placeholder="Phone or email"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Third Party Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Third‑Party Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    name="thirdPartyName"
                    value={formData.thirdPartyName}
                    onChange={handleInputChange}
                    placeholder="Other driver's name"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Insurance Company</label>
                  <input
                    type="text"
                    name="thirdPartyInsurance"
                    value={formData.thirdPartyInsurance}
                    onChange={handleInputChange}
                    placeholder="Insurance provider"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Policy Number</label>
                  <input
                    type="text"
                    name="thirdPartyPolicy"
                    value={formData.thirdPartyPolicy}
                    onChange={handleInputChange}
                    placeholder="Policy #"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Contact</label>
                  <input
                    type="text"
                    name="thirdPartyContact"
                    value={formData.thirdPartyContact}
                    onChange={handleInputChange}
                    placeholder="Phone or email"
                    className="mt-1 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-300 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Upload Photos of Damage / Scene</label>
                <input
                  type="file"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handleInputChange}
                  className="mt-1 w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-amber-300 file:text-gray-900 hover:file:bg-amber-400 transition-colors file:cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-1">You can select multiple images (JPG, PNG, etc.)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Upload Driving Licence</label>
                  <input
                    type="file"
                    name="licenceFile"
                    accept="image/*,.pdf"
                    onChange={handleInputChange}
                    className="mt-1 w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-amber-300 file:text-gray-900 hover:file:bg-amber-400 transition-colors file:cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Voice Note (optional)</label>
                  <input
                    type="file"
                    name="voiceNoteFile"
                    accept="audio/*"
                    onChange={handleInputChange}
                    className="mt-1 w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-amber-300 file:text-gray-900 hover:file:bg-amber-400 transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload an audio file (MP3, WAV, etc.)</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-6 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Continue to Claim Form</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}