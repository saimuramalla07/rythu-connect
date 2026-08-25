import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { MOCK_CROP } from '../data/mockData';

export const MakeOfferScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [offerPrice, setOfferPrice] = useState('2,480');
  const [quantity, setQuantity] = useState('100');
  const [message, setMessage] = useState('We can do immediate pickup.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/offers-received');
  };

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Make an Offer" />

        <div className="p-4 space-y-4">
          {/* Selected Crop Summary */}
          <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200 flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-emerald-950">
                {MOCK_CROP.variety} ({MOCK_CROP.name})
              </h4>
              <p className="text-[10px] font-semibold text-emerald-700 mt-0.5">
                {MOCK_CROP.quantity} {MOCK_CROP.unit} by {MOCK_CROP.farmerName}
              </p>
            </div>
            <span className="text-xs font-extrabold text-emerald-900 bg-white px-2.5 py-1 rounded-lg shadow-xs border border-emerald-100">
              ₹{MOCK_CROP.expectedPrice}/Qt
            </span>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs space-y-3.5">
            {/* Your Offer Price */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                Your Offer Price (per Quintal)
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-xs font-bold text-gray-500">₹</span>
                <input
                  type="text"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl pl-7 pr-3 py-2 text-xs font-extrabold text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Quantity You Need */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                Quantity You Need (Quintals)
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs font-semibold text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Message to Farmer */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                Message to Farmer <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs flex items-center justify-center space-x-1.5"
        >
          <Send className="w-4 h-4" />
          <span>Send Offer</span>
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={9} screenTitle="Make Offer">
      {content}
    </PhoneFrame>
  );
};
