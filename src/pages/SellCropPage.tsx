import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, X, Check, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_CROP } from '../data/mockData';

export const SellCropPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [cropName, setCropName] = useState('Paddy (వరి)');
  const [variety, setVariety] = useState('MTU 1121');
  const [quantity, setQuantity] = useState('100');
  const [unit, setUnit] = useState('Quintals');
  const [price, setPrice] = useState('2,500');
  const [harvestDate, setHarvestDate] = useState('20-06-2024');
  const [description, setDescription] = useState('Good quality, moisture max 14%');
  const [photos, setPhotos] = useState<string[]>(MOCK_CROP.images);
  const [confirmed, setConfirmed] = useState(true);

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const steps = [
    { number: 1, label: 'Crop Info' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Photos' },
    { number: 4, label: 'Review' },
  ];

  const handleFinalSubmit = () => {
    navigate('/crop-detail');
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <h1 className="text-2xl font-extrabold text-gray-900">Add New Crop Listing</h1>
          <p className="text-xs text-gray-500 mt-1">
            Fill in your crop details to list on the RythuConnect marketplace for regional buyers.
          </p>

          {/* Stepper Progress Bar */}
          <div className="mt-6 border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between relative max-w-lg mx-auto">
              <div className="absolute left-6 right-6 top-4 h-1 bg-gray-200 -z-0">
                <div 
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {steps.map((step) => {
                const isCompleted = step.number < currentStep;
                const isCurrent = step.number === currentStep;

                return (
                  <div key={step.number} className="flex flex-col items-center relative z-10">
                    <button
                      onClick={() => setCurrentStep(step.number as any)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors ${
                        isCompleted
                          ? 'bg-emerald-700 text-white'
                          : isCurrent
                          ? 'bg-emerald-800 text-white ring-4 ring-emerald-100 shadow-md'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : step.number}
                    </button>
                    <span className={`text-xs mt-1.5 ${isCurrent ? 'font-bold text-emerald-900' : 'text-gray-400'}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          
          {/* Step 1: Crop Info */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">1. Basic Crop Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Crop Name</label>
                  <select
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Paddy (వరి)">Paddy (వరి)</option>
                    <option value="Cotton (పత్తి)">Cotton (పత్తి)</option>
                    <option value="Chilli (మిర్చి)">Chilli (మిర్చి)</option>
                    <option value="Maize (జొన్న)">Maize (జొన్న)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Variety</label>
                  <input
                    type="text"
                    value={variety}
                    onChange={(e) => setVariety(e.target.value)}
                    placeholder="e.g. MTU 1121"
                    className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Quantity Available</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-32 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Quintals">Quintals</option>
                      <option value="Tons">Tons</option>
                      <option value="Bags">Bags</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Expected Price (per Quintal)</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-bold text-gray-500">₹</span>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl pl-8 pr-3.5 py-2.5 text-xs font-bold text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">2. Quality & Harvest Details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Harvest Date</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={harvestDate}
                      onChange={(e) => setHarvestDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                    <Calendar className="w-4 h-4 text-gray-400 absolute right-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value="Dudukuru, East Godavari"
                    readOnly
                    className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-gray-700 bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Description (optional)</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 bg-white focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>
          )}

          {/* Step 3: Photos */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">3. Crop Photos</h2>
              
              <div className="border-2 border-dashed border-emerald-300 rounded-2xl p-8 bg-emerald-50/50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-emerald-100/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-emerald-800 text-white flex items-center justify-center mb-3 shadow-md">
                  <Camera className="w-7 h-7" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">Upload Clear Crop Photos</h4>
                <p className="text-xs text-gray-500 mt-1">High quality photos attract more buyer offers</p>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-gray-700 mb-2">Uploaded Photos ({photos.length})</h5>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {photos.map((url, idx) => (
                    <div key={idx} className="relative rounded-2xl overflow-hidden aspect-square border border-gray-200 shadow-sm group">
                      <img src={url} alt={`Crop sample ${idx + 1}`} className="w-full h-full object-cover" />
                      <button
                        onClick={() => removePhoto(idx)}
                        className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md hover:bg-red-700 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">4. Review & Confirm Submission</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden h-44 border border-gray-200 shadow-sm">
                  <img src={photos[0] || MOCK_CROP.images[0]} alt="Crop preview" className="w-full h-full object-cover" />
                </div>

                <div className="md:col-span-2 bg-gray-50 rounded-2xl p-4 border border-gray-200 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Crop Name</span>
                    <span className="font-bold text-gray-900">{cropName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Variety</span>
                    <span className="font-semibold text-gray-900">{variety}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Quantity</span>
                    <span className="font-semibold text-gray-900">{quantity} {unit}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Expected Price</span>
                    <span className="font-bold text-emerald-800">₹{price} / Quintal</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Harvest Date</span>
                    <span className="font-semibold text-gray-900">{harvestDate}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Description</span>
                    <span className="font-medium text-gray-900 text-right">{description}</span>
                  </div>
                </div>
              </div>

              <label className="flex items-start space-x-3 cursor-pointer bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-0.5 rounded text-emerald-800 focus:ring-emerald-600 w-4 h-4"
                />
                <span className="text-xs font-semibold text-emerald-950 leading-relaxed">
                  I confirm that the above crop specifications, expected price, and harvest details are accurate.
                </span>
              </label>
            </div>
          )}

          {/* Stepper Action Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep((currentStep - 1) as any)}
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-5 py-2.5 rounded-xl shadow-xs text-xs flex items-center space-x-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep((currentStep + 1) as any)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl shadow-md text-xs flex items-center space-x-1.5"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinalSubmit}
                disabled={!confirmed}
                className="bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-extrabold px-8 py-3 rounded-xl shadow-lg text-xs flex items-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Submit Crop Listing</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </MainLayout>
  );
};
