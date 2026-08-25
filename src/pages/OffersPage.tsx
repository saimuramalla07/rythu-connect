import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_OFFERS } from '../data/mockData';

export const OffersPage: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'received' | 'accepted'>('received');

  const handleAccept = () => {
    navigate('/order-confirmed');
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Offers Received</h1>
            <p className="text-xs text-gray-500 mt-1">Manage incoming bids and purchase offers from regional traders.</p>
          </div>

          <div className="flex bg-gray-100 p-1.5 rounded-2xl w-full sm:w-auto">
            <button
              onClick={() => setTab('received')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                tab === 'received' ? 'bg-white text-emerald-950 shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Received (3)
            </button>
            <button
              onClick={() => setTab('accepted')}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                tab === 'accepted' ? 'bg-white text-emerald-950 shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Accepted (1)
            </button>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="space-y-4">
          {MOCK_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-300 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-base font-bold text-gray-900">{offer.buyerName}</h3>
                  <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                    {offer.time}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Offering to buy <span className="font-bold text-gray-900">{offer.quantity} {offer.unit}</span> of MTU 1121 Paddy
                </p>
              </div>

              <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                <div className="text-left sm:text-right">
                  <span className="text-xs text-gray-400 font-medium block">Offer Price</span>
                  <span className="text-xl font-extrabold text-emerald-800">
                    ₹{offer.pricePerQuintal.toLocaleString()} /Qt
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => alert('Offer rejected')}
                    className="bg-white border border-red-500 text-red-600 hover:bg-red-50 font-bold px-4 py-2 rounded-xl transition-colors text-xs flex items-center space-x-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Reject</span>
                  </button>
                  <button
                    onClick={handleAccept}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-5 py-2 rounded-xl shadow-md transition-colors text-xs flex items-center space-x-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Accept Offer</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
};
