import React from 'react';
import AllanGrayLogo from '../assets/AllangrayLogo.webp';
import LibertyLogo from '../assets/LibertyLogo.png';
import OldMutualLogo from '../assets/Old-Mutuallogo.webp';
import SantamLogo from '../assets/Santamlogo.jpg';
import DiscoveryLogo from '../assets/discoverylogo.jpg';
import MomentumLogo from '../assets/momentumLogo.jpg';

export default function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0B1D33]">Our Partners</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        <img src={AllanGrayLogo} alt="Allan Gray" className="h-24 object-contain" />
        <img src={MomentumLogo} alt="Momentum" className="h-24 object-contain" />
        <img src={OldMutualLogo} alt="Old Mutual" className="h-24 object-contain" />
        <img src={DiscoveryLogo} alt="Discovery" className="h-24 object-contain" />
        <img src={LibertyLogo} alt="Liberty" className="h-24 object-contain" />
        <img src={SantamLogo} alt="Santam" className="h-24 object-contain" />
      </div>
    </div>
  );
}