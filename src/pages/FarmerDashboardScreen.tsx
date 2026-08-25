import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCircle2, TrendingUp, ChevronRight, Sprout, Search, BarChart3, PackageCheck, Truck, Wallet } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { BottomNav } from '../components/common/BottomNav';
import { MOCK_USER, MARKET_PRICE_DATA } from '../data/mockData';

export const FarmerDashboardScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 'sell',
      title: 'Sell My Crop',
      subtitle: '(రైతు అమ్మకం)',
      icon: Sprout,
      color: 'bg-emerald-100 text-emerald-800',
      path: '/add-crop',
    },
    {
      id: 'buyers',
      title: 'Find Buyers',
      subtitle: '(కొనుగోలుదారులు)',
      icon: Search,
      color: 'bg-amber-100 text-amber-800',
      path: '/buyers',
    },
    {
      id: 'prices',
      title: 'Market Prices',
      subtitle: '(మార్కెట్ ధరలు)',
      icon: BarChart3,
      color: 'bg-blue-100 text-blue-800',
      path: '/dashboard',
    },
    {
      id: 'orders',
      title: 'My Orders',
      subtitle: '(నా ఆర్డర్లు)',
      icon: PackageCheck,
      color: 'bg-indigo-100 text-indigo-800',
      path: '/offers-received',
    },
    {
      id: 'transport',
      title: 'Transport',
      subtitle: '(రవాణా)',
      icon: Truck,
      color: 'bg-purple-100 text-purple-800',
      path: '/order-tracking',
    },
    {
      id: 'payments',
      title: 'Payments',
      subtitle: '(చెల్లింపులు)',
      icon: Wallet,
      color: 'bg-green-100 text-green-800',
      path: '/payments',
    },
  ];

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div className="p-4 space-y-4">
        {/* Header Profile Bar */}
        <div className="bg-emerald-800 text-white rounded-2xl p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={MOCK_USER.avatar}
              alt={MOCK_USER.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-emerald-300 shadow-sm"
            />
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xs text-emerald-200">Namaste,</span>
              </div>
              <div className="flex items-center space-x-1">
                <h3 className="text-sm font-bold text-white">{MOCK_USER.name}</h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300/30" />
              </div>
              <p className="text-[10px] text-emerald-200">{MOCK_USER.location}</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-emerald-700/80 flex items-center justify-center text-emerald-100 hover:bg-emerald-700 transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
          </button>
        </div>

        {/* Today's Market Price Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-600">Today's Market Price</span>
            <button 
              onClick={() => navigate('/buyers')}
              className="text-[10px] font-bold text-emerald-700 hover:underline flex items-center"
            >
              <span>View All Prices</span>
              <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>
          
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <h4 className="text-sm font-bold text-gray-900">{MARKET_PRICE_DATA.crop}</h4>
              <div className="flex items-baseline space-x-1 mt-0.5">
                <span className="text-xl font-extrabold text-gray-900">{MARKET_PRICE_DATA.currentPrice}</span>
                <span className="text-xs text-gray-500 font-medium">{MARKET_PRICE_DATA.unit}</span>
              </div>
            </div>
            
            <div className="text-right">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-100 text-green-800">
                <TrendingUp className="w-3 h-3 mr-1" />
                {MARKET_PRICE_DATA.change}
              </span>
            </div>
          </div>

          {/* Sparkline Canvas Simulation */}
          <div className="h-8 w-full bg-emerald-50/50 rounded-lg p-1 flex items-end justify-between px-2 pt-2 border border-emerald-100">
            <div className="w-1.5 bg-emerald-300 rounded-t h-2"></div>
            <div className="w-1.5 bg-emerald-400 rounded-t h-3"></div>
            <div className="w-1.5 bg-emerald-400 rounded-t h-2.5"></div>
            <div className="w-1.5 bg-emerald-500 rounded-t h-4"></div>
            <div className="w-1.5 bg-emerald-500 rounded-t h-3.5"></div>
            <div className="w-1.5 bg-emerald-600 rounded-t h-5"></div>
            <div className="w-1.5 bg-emerald-700 rounded-t h-6"></div>
          </div>
        </div>

        {/* Quick Action Buttons Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => navigate(action.path)}
                className="bg-white p-3 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col items-center text-center group active:scale-95"
              >
                <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-bold text-gray-900 leading-tight">
                  {action.title}
                </span>
                <span className="text-[9px] text-gray-500 font-sans mt-0.5">
                  {action.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={3} screenTitle="Farmer Home Dashboard">
      {content}
    </PhoneFrame>
  );
};
