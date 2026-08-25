import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_ORDER } from '../data/mockData';

export const OrderConfirmedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 text-center shadow-lg border border-emerald-800 flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-emerald-700/80 text-white flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-10 h-10 stroke-[2]" />
          </div>
          <h1 className="text-2xl font-extrabold">Order Confirmed!</h1>
          <p className="text-xs text-emerald-200 max-w-md leading-relaxed">
            Deal has been successfully confirmed between Rama Krishna and Agri Traders. Pickup and transport details are now active.
          </p>
        </div>

        {/* Details Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Deal & Payment Summary</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <span className="text-gray-500 font-medium block">Buyer Name</span>
              <span className="text-sm font-bold text-gray-900 mt-0.5 block">{MOCK_ORDER.buyerName}</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <span className="text-gray-500 font-medium block">Crop & Variety</span>
              <span className="text-sm font-bold text-gray-900 mt-0.5 block">{MOCK_ORDER.cropName}</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <span className="text-gray-500 font-medium block">Agreed Quantity</span>
              <span className="text-sm font-bold text-gray-900 mt-0.5 block">{MOCK_ORDER.quantity} {MOCK_ORDER.unit}</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <span className="text-gray-500 font-medium block">Agreed Rate</span>
              <span className="text-sm font-extrabold text-emerald-800 mt-0.5 block">₹{MOCK_ORDER.pricePerQuintal.toLocaleString()}/{MOCK_ORDER.unit.slice(0, -1)}</span>
            </div>

            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 sm:col-span-2 flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-800 font-medium block">Total Transaction Amount</span>
                <span className="text-2xl font-extrabold text-emerald-950 mt-0.5 block">₹{MOCK_ORDER.totalAmount.toLocaleString()}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-emerald-700 font-semibold block">Pickup Date: {MOCK_ORDER.pickupDate}</span>
                <span className="text-xs text-emerald-700 font-semibold block">Payment: {MOCK_ORDER.paymentType}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => navigate('/order-tracking')}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-8 py-3 rounded-xl shadow-md transition-all text-xs flex items-center space-x-2"
            >
              <Truck className="w-4 h-4" />
              <span>Track Order & Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};
