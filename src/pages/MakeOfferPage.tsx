import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_CROP } from '../data/mockData';

export const MakeOfferPage: React.FC = () => {
  const navigate = useNavigate();
  const [offerPrice, setOfferPrice] = useState('2,480');
  const [quantity, setQuantity] = useState('100');
  const [message, setMessage] = useState('We can do immediate pickup.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/offers');
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800 hover:underline mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </button>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Make an Offer</h1>
            <p className="text-xs text-gray-500 mt-1">Submit your offer price and quantity directly to farmer Rama Krishna.</p>
          </div>

          {/* Selected Crop Summary Card */}
          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-emerald-950">
                {MOCK_CROP.variety} ({MOCK_CROP.name})
              </h3>
              <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                {MOCK_CROP.quantity} {MOCK_CROP.unit} listed by {MOCK_CROP.farmerName}
              </p>
            </div>
            <span className="text-sm font-extrabold text-emerald-900 bg-white px-3 py-1.5 rounded-xl shadow-xs border border-emerald-200">
              Asking: ₹{MOCK_CROP.expectedPrice}/Qt
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Your Offer Price (per Quintal)
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs font-bold text-gray-500">₹</span>
                <input
                  type="text"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl pl-8 pr-3.5 py-3 text-sm font-extrabold text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Quantity You Need (Quintals)
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3.5 py-3 text-sm font-semibold text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Message to Farmer <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3.5 py-3 text-xs text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs flex items-center justify-center space-x-2 mt-4"
            >
              <Send className="w-4 h-4" />
              <span>Send Offer</span>
            </button>
          </form>
        </div>

      </div>
    </MainLayout>
  );
};
