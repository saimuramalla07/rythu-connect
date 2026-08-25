import React from 'react';
import { Users, DollarSign, UserCheck, ShieldCheck, Truck, Navigation, Star, Languages } from 'lucide-react';

export const KeyFeaturesSection: React.FC = () => {
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
    <div className="bg-white rounded-2xl p-4 md:p-6 border border-emerald-100 shadow-sm">
      <div className="inline-block bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-md mb-4">
        Key Features
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-emerald-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 shadow-xs">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-gray-800 leading-tight">
                {feat.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
