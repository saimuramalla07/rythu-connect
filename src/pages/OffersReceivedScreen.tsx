import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { BottomNav } from '../components/common/BottomNav';
import { MOCK_OFFERS } from '../data/mockData';

export const OffersReceivedScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'received' | 'accepted'>('received');

  const handleAccept = () => {
    navigate('/order-confirmed');
  };

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Offers Received" />

        {/* Tab Header */}
        <div className="flex border-b border-gray-200 bg-white">
          <button
            onClick={() => setTab('received')}
            className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors ${
              tab === 'received'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Received (3)
          </button>
          <button
            onClick={() => setTab('accepted')}
            className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors ${
              tab === 'accepted'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Accepted (1)
          </button>
        </div>

        {/* Offers Cards */}
        <div className="p-4 space-y-3">
          {MOCK_OFFERS.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-xs space-y-2.5">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{offer.buyerName}</h4>
                  <span className="text-[10px] text-gray-400 font-medium">{offer.time}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-emerald-800 block">
                    ₹{offer.pricePerQuintal.toLocaleString()} /Qt
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">
                    {offer.quantity} {offer.unit}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-1 border-t border-gray-100">
                <button
                  onClick={() => alert('Offer rejected')}
                  className="flex-1 bg-white border border-red-500 text-red-600 hover:bg-red-50 text-[11px] font-bold py-1.5 rounded-lg transition-colors"
                >
                  Reject
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white text-[11px] font-bold py-1.5 rounded-lg shadow-xs transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          ))}

          <div className="text-center pt-2">
            <button className="text-xs font-bold text-emerald-800 hover:underline">
              View All Offers
            </button>
          </div>
        </div>
      </div>

      <BottomNav activeTab="orders" />
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={10} screenTitle="Offers Received (Farmer Side)">
      {content}
    </PhoneFrame>
  );
};
