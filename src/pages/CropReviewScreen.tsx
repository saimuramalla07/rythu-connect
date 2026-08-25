import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { Stepper } from '../components/common/Stepper';
import { MOCK_CROP } from '../data/mockData';

export const CropReviewScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(true);

  const handleSubmit = () => {
    navigate('/crop-details');
  };

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Review Crop Details" />
        <Stepper currentStep={4} />

        <div className="p-4 space-y-4">
          {/* Banner Photo */}
          <div className="rounded-2xl overflow-hidden h-32 border border-gray-200 shadow-sm relative">
            <img
              src={MOCK_CROP.images[0]}
              alt={MOCK_CROP.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              {MOCK_CROP.variety}
            </div>
          </div>

          {/* Details Summary Card */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs space-y-2.5 text-xs">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Crop Name</span>
              <span className="font-bold text-gray-900">{MOCK_CROP.name} ({MOCK_CROP.nameTelugu})</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Variety</span>
              <span className="font-semibold text-gray-900">{MOCK_CROP.variety}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Quantity</span>
              <span className="font-semibold text-gray-900">{MOCK_CROP.quantity} {MOCK_CROP.unit}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Expected Price</span>
              <span className="font-bold text-emerald-800">₹{MOCK_CROP.expectedPrice.toLocaleString()} /{MOCK_CROP.unit.slice(0, -1)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Harvest Date</span>
              <span className="font-semibold text-gray-900">{MOCK_CROP.harvestDate}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Description</span>
              <span className="font-medium text-gray-900 text-right max-w-[180px]">{MOCK_CROP.description}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-500">Location</span>
              <span className="font-semibold text-gray-900">{MOCK_CROP.location}</span>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <label className="flex items-start space-x-2 cursor-pointer bg-white p-3 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-600 w-4 h-4"
            />
            <span className="text-[11px] font-medium text-gray-700 leading-tight">
              I confirm that the above information is correct.
            </span>
          </label>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={handleSubmit}
          disabled={!confirmed}
          className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs flex items-center justify-center space-x-1"
        >
          <Check className="w-4 h-4" />
          <span>Submit Crop</span>
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={6} screenTitle="Crop Review & Submit">
      {content}
    </PhoneFrame>
  );
};
