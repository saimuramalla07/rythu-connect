import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, Star, MapPin, ChevronDown, MessageCircle, Send } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_BUYERS } from '../data/mockData';

export const MarketplacePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <MainLayout>
      <div className="space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Buyer Marketplace</h1>
            <p className="text-xs text-gray-500 mt-1">
              Browse active buyers, traders, and rice mills ready to buy Paddy and agricultural stock.
            </p>
          </div>

          {/* Search & Filter Inputs */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 sm:w-80 flex items-center bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 shadow-xs focus-within:ring-2 focus-within:ring-emerald-600">
              <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search crop, variety or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-900 focus:outline-none"
              />
            </div>
            
            <div className="flex space-x-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-gray-700 hover:border-emerald-600 shadow-xs">
                <span>Filter</span>
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Buyer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_BUYERS.map((buyer) => (
            <div
              key={buyer.id}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={buyer.avatar}
                      alt={buyer.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-300 shadow-xs"
                    />
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{buyer.name}</h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-0.5">
                        <span className="flex items-center"><MapPin className="w-3.5 h-3.5 text-gray-400 mr-0.5" />{buyer.distance}</span>
                        <span>•</span>
                        <span className="flex items-center text-amber-600 font-bold"><Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500 mr-0.5" />{buyer.rating}</span>
                      </div>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                    Verified Buyer
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Stock Needed</span>
                    <span className="text-sm font-extrabold text-gray-900">{buyer.needsQuantity} {buyer.unit}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 font-medium block">Buying Price</span>
                    <span className="text-lg font-extrabold text-emerald-800">₹{buyer.offerPrice.toLocaleString()}/Qt</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => navigate('/crop-detail')}
                  className="flex-1 bg-white border border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-bold py-2.5 rounded-xl shadow-xs transition-colors text-xs flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat</span>
                </button>
                <button
                  onClick={() => navigate('/make-offer')}
                  className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl shadow-md transition-colors text-xs flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Make Offer</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
};
