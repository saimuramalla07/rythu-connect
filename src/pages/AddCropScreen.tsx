import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { Stepper } from '../components/common/Stepper';

export const AddCropScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [cropName, setCropName] = useState('Paddy (వరి)');
  const [variety, setVariety] = useState('MTU 1121');
  const [quantity, setQuantity] = useState('100');
  const [unit, setUnit] = useState('Quintals');
  const [price, setPrice] = useState('2,500');
  const [harvestDate, setHarvestDate] = useState('20-06-2024');
  const [description, setDescription] = useState('Good quality, moisture max 14%');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/crop-photos');
  };

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Add New Crop" />
        <Stepper currentStep={1} />

        <form onSubmit={handleNext} className="p-4 space-y-3.5">
          {/* Crop Name */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Crop Name
            </label>
            <select
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs font-semibold text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <option value="Paddy (వరి)">Paddy (వరి)</option>
              <option value="Cotton (పత్తి)">Cotton (పత్తి)</option>
              <option value="Chilli (మిర్చి)">Chilli (మిర్చి)</option>
              <option value="Maize (జొన్న)">Maize (జొన్న)</option>
            </select>
          </div>

          {/* Variety */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Variety
            </label>
            <input
              type="text"
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              placeholder="e.g. MTU 1121"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Quantity Available */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Quantity Available
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-28 border border-gray-300 rounded-xl px-2 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="Quintals">Quintals</option>
                <option value="Tons">Tons</option>
                <option value="Bags">Bags</option>
              </select>
            </div>
          </div>

          {/* Expected Price */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Expected Price (per Quintal)
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xs font-bold text-gray-500">₹</span>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded-xl pl-7 pr-3 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-semibold"
              />
            </div>
          </div>

          {/* Harvest Date */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Harvest Date
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <Calendar className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Description <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </form>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={handleNext}
          className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs"
        >
          Next
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={4} screenTitle="Add Crop / Sell My Crop">
      {content}
    </PhoneFrame>
  );
};
