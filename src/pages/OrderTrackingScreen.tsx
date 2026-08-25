import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Navigation } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { MOCK_TRACKING } from '../data/mockData';

export const OrderTrackingScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Order Tracking" />

        <div className="p-4">
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs relative">
            <div className="space-y-4 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-emerald-600 z-0"></div>

              {MOCK_TRACKING.map((step) => (
                <div key={step.step} className="flex items-start space-x-3 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 border-2 border-white shadow-xs">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-800 text-white" />
                  </div>
                  <div className="flex-1 pb-1">
                    <h4 className="text-xs font-bold text-gray-900">{step.title}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {step.date}, {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/payments')}
          className="w-full bg-white border border-emerald-800 text-emerald-800 hover:bg-emerald-50 font-bold py-3 rounded-xl shadow-xs transition-all active:scale-[0.98] text-xs flex items-center justify-center space-x-1.5"
        >
          <Navigation className="w-4 h-4" />
          <span>Track on Map</span>
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={12} screenTitle="Order Tracking">
      {content}
    </PhoneFrame>
  );
};
