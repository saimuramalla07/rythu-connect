import React from 'react';
import { Target } from 'lucide-react';

export const MissionSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-emerald-50 rounded-2xl p-5 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm mb-2">
          <Target className="w-4 h-4 text-emerald-700" />
          <span>Our Mission</span>
        </div>
        <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed max-w-sm">
          Empowering farmers by connecting them directly with the right buyers for a better tomorrow.
        </p>
      </div>
      <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-emerald-200 shadow-md">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&q=80"
          alt="Farmer walking in lush green field"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
