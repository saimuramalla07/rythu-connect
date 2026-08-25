import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageCircle, MapPin, Calendar, ShieldCheck, Clock, Send } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_CROP } from '../data/mockData';

export const CropDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Main Crop Container */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 bg-gray-900 relative p-4 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
              <img
                src={MOCK_CROP.images[0]}
                alt={MOCK_CROP.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Verified Crop Listing</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {MOCK_CROP.images.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden h-20 border-2 border-emerald-500/50 cursor-pointer">
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-extrabold text-gray-900">{MOCK_CROP.variety} ({MOCK_CROP.name})</h1>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-1">{MOCK_CROP.quantity} {MOCK_CROP.unit} Available Stock</p>
                </div>
                
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-emerald-900 block">
                    ₹{MOCK_CROP.expectedPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 font-medium block">per {MOCK_CROP.unit.slice(0, -1)}</span>
                </div>
              </div>

              <hr className="my-5 border-gray-100" />

              {/* Crop Specs */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Farmer Name</span>
                  <span className="font-bold text-gray-900">{MOCK_CROP.farmerName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" /> Location</span>
                  <span className="font-semibold text-gray-800">{MOCK_CROP.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" /> Harvest Date</span>
                  <span className="font-semibold text-gray-800">{MOCK_CROP.harvestDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Quality Specifications</span>
                  <span className="font-semibold text-gray-800">{MOCK_CROP.quality}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-gray-400" /> Listing Status</span>
                  <span className="font-bold text-emerald-800">Posted {MOCK_CROP.postedAgo}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => navigate('/offers')}
                className="flex-1 bg-white border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50 font-bold py-3 rounded-xl shadow-xs transition-colors text-xs flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Farmer</span>
              </button>
              <button
                onClick={() => navigate('/make-offer')}
                className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3 rounded-xl shadow-md transition-colors text-xs flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Make an Offer</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </MainLayout>
  );
};
