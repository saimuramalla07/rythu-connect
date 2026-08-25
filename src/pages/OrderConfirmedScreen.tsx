import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { MOCK_ORDER } from '../data/mockData';

export const OrderConfirmedScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="Order Details" />

        <div className="p-4 space-y-4">
          {/* Big Green Success Banner */}
          <div className="bg-emerald-800 text-white rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center mb-3">
              <CheckCircle2 className="w-10 h-10 stroke-[2]" />
            </div>
            <h3 className="text-base font-extrabold">Order Confirmed!</h3>
            <p className="text-xs text-emerald-100 mt-1 max-w-[200px]">
              Deal has been successfully confirmed.
            </p>
          </div>

          {/* Details Table Card */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs space-y-2.5 text-xs">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Buyer</span>
              <span className="font-bold text-gray-900">{MOCK_ORDER.buyerName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Crop</span>
              <span className="font-semibold text-gray-900">{MOCK_ORDER.cropName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Quantity</span>
              <span className="font-semibold text-gray-900">{MOCK_ORDER.quantity} {MOCK_ORDER.unit}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Price</span>
              <span className="font-bold text-emerald-800">₹{MOCK_ORDER.pricePerQuintal.toLocaleString()}/{MOCK_ORDER.unit.slice(0, -1)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Total Amount</span>
              <span className="font-extrabold text-gray-900 text-sm">₹{MOCK_ORDER.totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Pickup Date</span>
              <span className="font-semibold text-gray-900">{MOCK_ORDER.pickupDate}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-500">Payment Type</span>
              <span className="font-semibold text-gray-900">{MOCK_ORDER.paymentType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/order-tracking')}
          className="w-full bg-white border border-emerald-800 text-emerald-800 hover:bg-emerald-50 font-bold py-3 rounded-xl shadow-xs transition-all active:scale-[0.98] text-xs"
        >
          View Order Status
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={11} screenTitle="Order / Deal Confirmed">
      {content}
    </PhoneFrame>
  );
};
