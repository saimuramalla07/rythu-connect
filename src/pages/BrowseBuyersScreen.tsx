import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, Star, MapPin, ChevronDown } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { BottomNav } from '../components/common/BottomNav';
import { MOCK_BUYERS } from '../data/mockData';

export const BrowseBuyersScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Find Buyers" />

        <div className="p-4 space-y-3">
          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2 shadow-xs focus-within:ring-2 focus-within:ring-emerald-600">
              <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search by crop, variety or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-900 focus:outline-none"
              />
            </div>
            <button className="p-2.5 bg-white border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 shadow-xs">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Chips */}
          <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center space-x-1 bg-white border border-gray-300 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:border-emerald-600 shrink-0">
              <span>Crop</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            <button className="flex items-center space-x-1 bg-white border border-gray-300 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:border-emerald-600 shrink-0">
              <span>Location</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            <button className="flex items-center space-x-1 bg-white border border-gray-300 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-gray-700 hover:border-emerald-600 shrink-0">
              <span>Filter</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
          </div>

          {/* Buyer Cards List */}
          <div className="space-y-3 pt-1">
            {MOCK_BUYERS.map((buyer) => (
              <div
                key={buyer.id}
                onClick={() => navigate('/make-offer')}
                className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={buyer.avatar}
                    alt={buyer.name}
                    className="w-12 h-12 rounded-full object-cover border border-emerald-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{buyer.name}</h4>
                    <div className="flex items-center space-x-2 text-[10px] text-gray-500 mt-0.5">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 text-gray-400 mr-0.5" />
                        {buyer.distance}
                      </span>
                      <span>•</span>
                      <span className="flex items-center text-amber-600 font-semibold">
                        <Star className="w-3 h-3 fill-amber-400 stroke-amber-500 mr-0.5" />
                        {buyer.rating}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-gray-700 font-medium">
                      Needs <span className="font-bold text-gray-900">{buyer.needsQuantity} {buyer.unit}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-gray-400 font-medium block">Offer</span>
                  <span className="text-xs font-extrabold text-emerald-800">
                    ₹{buyer.offerPrice.toLocaleString()}/Qt
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav activeTab="farm" />
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={7} screenTitle="Browse Buyers (Buyer Side)">
      {content}
    </PhoneFrame>
  );
};
