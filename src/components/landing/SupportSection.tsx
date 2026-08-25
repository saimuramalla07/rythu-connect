import React from 'react';
import { Headset, Phone, Mail } from 'lucide-react';

export const SupportSection: React.FC = () => {
  return (
    <div className="bg-emerald-900 text-white rounded-2xl p-5 shadow-md flex items-center justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center space-x-2 font-bold text-sm mb-1 text-emerald-300">
          <Headset className="w-5 h-5 text-emerald-400" />
          <span>Need Help?</span>
        </div>
        <p className="text-xs font-semibold text-gray-200 mb-2">Customer Support</p>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2 font-bold text-white">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-200 text-[11px]">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>support@rythuconnect.com</span>
          </div>
        </div>
      </div>
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500/40 shadow-inner bg-emerald-800 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
          alt="Customer Support Representative"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
