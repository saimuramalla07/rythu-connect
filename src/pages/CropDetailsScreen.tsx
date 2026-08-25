import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageCircle, MapPin, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { MOCK_CROP } from '../data/mockData';

export const CropDetailsScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Crop Details" showShare />

        {/* Hero Image */}
        <div className="relative h-44 bg-gray-900 overflow-hidden">
          <img
            src={MOCK_CROP.images[0]}
            alt={MOCK_CROP.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Verified Crop</span>
          </div>
        </div>

        {/* Info Body */}
        <div className="p-4 space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="text-base font-extrabold text-gray-900">{MOCK_CROP.variety} ({MOCK_CROP.name})</h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                </div>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">{MOCK_CROP.quantity} {MOCK_CROP.unit} Available</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-extrabold text-emerald-800">
                  ₹{MOCK_CROP.expectedPrice.toLocaleString()}
                </span>
                <span className="text-[10px] text-gray-500 font-medium block">/{MOCK_CROP.unit.slice(0, -1)}</span>
              </div>
            </div>

            <hr className="my-3 border-gray-100" />

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Farmer</span>
                <span className="font-bold text-gray-900">{MOCK_CROP.farmerName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-gray-400" /> Location
                </span>
                <span className="font-medium text-gray-800">{MOCK_CROP.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-gray-400" /> Harvest Date
                </span>
                <span className="font-medium text-gray-800">{MOCK_CROP.harvestDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Quality</span>
                <span className="font-medium text-gray-800">{MOCK_CROP.quality}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> Posted {MOCK_CROP.postedAgo}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="p-3 bg-white border-t border-gray-200 flex space-x-2">
        <button
          onClick={() => navigate('/offers-received')}
          className="flex-1 bg-white border border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-bold py-2.5 rounded-xl shadow-xs transition-all active:scale-[0.98] text-xs flex items-center justify-center space-x-1.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat</span>
        </button>
        <button
          onClick={() => navigate('/make-offer')}
          className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs"
        >
          Make Offer
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={8} screenTitle="Crop Details">
      {content}
    </PhoneFrame>
  );
};
