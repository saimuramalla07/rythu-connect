import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Navigation, Truck, MapPin } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_TRACKING } from '../data/mockData';

export const OrderTrackingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Order Tracking & Logistics</h1>
            <p className="text-xs text-gray-500 mt-1">Real-time status updates for MTU 1121 Paddy shipment to Agri Traders.</p>
          </div>

          <button
            onClick={() => navigate('/payments')}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-xs flex items-center space-x-1.5"
          >
            <span>View Payments Dashboard</span>
          </button>
        </div>

        {/* Tracking Stepper & Simulated Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Timeline Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Shipment Progress Timeline</h2>

            <div className="space-y-6 relative pl-2">
              <div className="absolute left-6 top-3 bottom-3 w-0.5 bg-emerald-600 z-0"></div>

              {MOCK_TRACKING.map((step) => (
                <div key={step.step} className="flex items-start space-x-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 border-4 border-white shadow-xs">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-800 text-white" />
                  </div>
                  <div className="flex-1 bg-gray-50 p-3.5 rounded-2xl border border-gray-200 flex justify-between items-center">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{step.title}</h4>
                      <p className="text-[10px] text-gray-500 font-semibold mt-0.5">{step.date}, {step.time}</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Map Widget Simulation */}
          <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 border border-slate-800 text-white flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[350px]">
            <div className="relative z-10 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
                <Navigation className="w-4 h-4" />
                <span>Live GPS Map Tracking</span>
              </div>
              <h3 className="text-lg font-bold">Driver En Route</h3>
              <p className="text-xs text-slate-400">Truck AP 07 XY 4821 • Driver: Venkateswarlu</p>
            </div>

            {/* Map Visual Representation */}
            <div className="my-6 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 relative flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-600/30 border border-emerald-400 text-emerald-300 flex items-center justify-center animate-pulse">
                <Truck className="w-7 h-7" />
              </div>
              <div className="text-xs space-y-1">
                <span className="text-slate-300 font-bold block">Current Location: Rajahmundry Highway</span>
                <span className="text-emerald-400 font-semibold block">Destination: Agri Traders Yard, Kakinada</span>
              </div>
            </div>

            <div className="relative z-10 pt-2 border-t border-slate-800 text-center">
              <span className="text-xs text-slate-400">Estimated Delivery Time: <strong className="text-white">5:30 PM Today</strong></span>
            </div>
          </div>

        </div>

      </div>
    </MainLayout>
  );
};
