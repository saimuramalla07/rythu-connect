import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, Headset, ShieldCheck, Users, DollarSign, UserCheck, Truck, Navigation, Star, Languages } from 'lucide-react';

export const Footer: React.FC = () => {
  const features = [
    { icon: Users, title: "Direct Farmer Buyer Network" },
    { icon: DollarSign, title: "Best Market Prices" },
    { icon: UserCheck, title: "Reduce Middle Men" },
    { icon: ShieldCheck, title: "Safe & Secure Transactions" },
    { icon: Truck, title: "Transport Support" },
    { icon: Navigation, title: "Real-time Tracking" },
    { icon: Star, title: "Ratings & Reviews" },
    { icon: Languages, title: "Multi Language (తెలుగు + English)" },
  ];

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-emerald-900/80">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Rythu<span className="text-emerald-400">Connect</span>
              </h2>
            </div>
            <div className="inline-block bg-emerald-800 text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-3">
              Farmer &rarr; Market &rarr; Better Price
            </div>
            <p className="text-emerald-200 text-xs font-semibold leading-relaxed">
              రైతుకి మంచి ధర • రైతు కోసం.. రైతుతోనే
            </p>
            <p className="text-emerald-400/80 text-xs mt-2 max-w-sm">
              Empowering Indian farmers by facilitating direct transparent trading, competitive pricing, transport support, and instant payments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4 text-xs font-medium text-emerald-200">
            <div>
              <h3 className="text-white font-bold text-sm mb-3">Marketplace</h3>
              <ul className="space-y-2">
                <li><Link to="/marketplace" className="hover:text-emerald-400 transition-colors">Browse Buyers</Link></li>
                <li><Link to="/sell-crop" className="hover:text-emerald-400 transition-colors">Sell My Crop</Link></li>
                <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Market Prices</Link></li>
                <li><Link to="/offers" className="hover:text-emerald-400 transition-colors">Offers Received</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-3">Account</h3>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Farmer Dashboard</Link></li>
                <li><Link to="/payments" className="hover:text-emerald-400 transition-colors">My Payments</Link></li>
                <li><Link to="/order-tracking" className="hover:text-emerald-400 transition-colors">Order Tracking</Link></li>
                <li><Link to="/profile" className="hover:text-emerald-400 transition-colors">My Profile</Link></li>
              </ul>
            </div>
          </div>

          {/* Support Box */}
          <div className="bg-emerald-900/90 rounded-2xl p-5 border border-emerald-800 shadow-md">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm mb-2">
              <Headset className="w-5 h-5 text-emerald-300" />
              <span>Customer Support</span>
            </div>
            <p className="text-xs text-emerald-200 mb-3">
              Need assistance with your crop listings or payment deals?
            </p>
            <div className="space-y-1.5 text-xs font-bold">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>support@rythuconnect.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Features Row */}
        <div>
          <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4 text-center">
            Key Features
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-emerald-900/40 rounded-xl p-3 border border-emerald-900 text-center flex flex-col items-center hover:bg-emerald-900/80 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-emerald-300 flex items-center justify-center mb-1.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-200 leading-tight">
                    {feat.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-emerald-900 rounded-2xl py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold border border-emerald-800">
          <div className="flex items-center space-x-2 text-emerald-300">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>మన రైతు.. మన బలం</span>
          </div>
          <span className="text-emerald-200 text-center sm:text-right">
            © 2026 RythuConnect. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};
