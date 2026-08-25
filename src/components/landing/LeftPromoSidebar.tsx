import React from 'react';
import { Users, TrendingUp, ShieldCheck, Clock, Lock, MapPin, Languages, Sprout } from 'lucide-react';

export const LeftPromoSidebar: React.FC = () => {
  const bulletPoints = [
    { icon: Users, text: "Direct Farmer-Buyer Network" },
    { icon: TrendingUp, text: "Better Price for Farmers" },
    { icon: ShieldCheck, text: "Transparent & Trusted" },
    { icon: Clock, text: "Save Time & Money" },
    { icon: Lock, text: "Secure Deals & Payments" },
    { icon: MapPin, text: "Real-Time Tracking" },
    { icon: Languages, text: "Multi Language Support (తెలుగు + English)" },
  ];

  return (
    <div className="w-full lg:w-[320px] xl:w-[360px] bg-gradient-to-b from-emerald-50 via-white to-emerald-50 border-r border-emerald-200 p-6 flex flex-col justify-between shrink-0 shadow-lg rounded-2xl">
      <div>
        {/* Logo Header */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center text-white shadow-md">
            <Sprout className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-900 leading-none">
              Rythu<span className="text-emerald-600">Connect</span>
            </h1>
          </div>
        </div>

        {/* Tagline Pills */}
        <div className="inline-block bg-emerald-800 text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-4 shadow-sm">
          Farmer &rarr; Market &rarr; Better Price
        </div>

        {/* Telugu Headline */}
        <div className="text-center my-3">
          <h2 className="text-xl font-bold text-emerald-900 font-sans tracking-wide">
            రైతుకి మంచి ధర
          </h2>
          <h3 className="text-lg font-bold text-emerald-800">
            రైతు కోసం.. రైతుతోనే
          </h3>
        </div>

        {/* Hero Illustration Box */}
        <div className="relative rounded-2xl overflow-hidden my-4 border-2 border-emerald-600/30 shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
            alt="Smiling Indian Farmer in Paddy Field"
            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/20 to-transparent flex items-end p-3">
            <p className="text-white text-xs font-semibold drop-shadow">
              Direct market access empowering local Indian farmers
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-2.5 my-5">
          {bulletPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-3 text-xs font-semibold text-gray-800 bg-white/80 backdrop-blur p-2 rounded-lg border border-emerald-100 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Telugu Pride Badge */}
      <div className="mt-4 bg-emerald-800 text-white py-2.5 px-4 rounded-xl flex items-center justify-between text-sm font-bold shadow-md">
        <Sprout className="w-5 h-5 text-emerald-300" />
        <span>మన రైతు.. మన బలం</span>
        <Sprout className="w-5 h-5 text-emerald-300" />
      </div>
    </div>
  );
};
