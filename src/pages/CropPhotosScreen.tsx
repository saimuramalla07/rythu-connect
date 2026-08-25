import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, X } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { Stepper } from '../components/common/Stepper';
import { MOCK_CROP } from '../data/mockData';

export const CropPhotosScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<string[]>(MOCK_CROP.images);

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Add Crop Photos" />
        <Stepper currentStep={3} />

        <div className="p-4 space-y-4">
          {/* Upload Drop Zone */}
          <div className="border-2 border-dashed border-emerald-300 rounded-2xl p-6 bg-emerald-50/50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-emerald-100/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mb-2 shadow-sm">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-gray-900">Upload Photos</h4>
            <p className="text-[10px] text-gray-500 mt-0.5">Add clear photos of your crop</p>
          </div>

          {/* Photos Grid */}
          <div>
            <h5 className="text-[11px] font-semibold text-gray-700 mb-2">Uploaded Photos ({photos.length})</h5>
            <div className="grid grid-cols-3 gap-2.5">
              {photos.map((url, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden aspect-square border border-gray-200 shadow-xs group">
                  <img src={url} alt={`Crop sample ${idx + 1}`} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removePhoto(idx)}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md hover:bg-red-700 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/crop-review')}
          className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs"
        >
          Next
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={5} screenTitle="Crop Photos">
      {content}
    </PhoneFrame>
  );
};
