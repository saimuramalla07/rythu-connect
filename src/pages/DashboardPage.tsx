import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bell, CheckCircle2, TrendingUp, ChevronRight, Sprout, Search, BarChart3, PackageCheck, Truck, Wallet, PlusCircle } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_USER, MARKET_PRICE_DATA, MOCK_CROP } from '../data/mockData';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    { id: 'sell', title: 'Sell My Crop', telugu: 'రైతు అమ్మకం', icon: Sprout, color: 'bg-emerald-100 text-emerald-800', path: '/sell-crop' },
    { id: 'buyers', title: 'Find Buyers', telugu: 'కొనుగోలుదారులు', icon: Search, color: 'bg-amber-100 text-amber-800', path: '/marketplace' },
    { id: 'prices', title: 'Market Prices', telugu: 'మార్కెట్ ధరలు', icon: BarChart3, color: 'bg-blue-100 text-blue-800', path: '/dashboard' },
    { id: 'orders', title: 'My Orders', telugu: 'నా ఆర్డర్లు', icon: PackageCheck, color: 'bg-indigo-100 text-indigo-800', path: '/offers' },
    { id: 'transport', title: 'Transport', telugu: 'రవాణా', icon: Truck, color: 'bg-purple-100 text-purple-800', path: '/order-tracking' },
    { id: 'payments', title: 'Payments', telugu: 'చెల్లింపులు', icon: Wallet, color: 'bg-green-100 text-green-800', path: '/payments' },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Dashboard Profile Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="flex items-center space-x-4">
            <img
              src={MOCK_USER.avatar}
              alt={MOCK_USER.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-emerald-400 shadow-md"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-emerald-200">Namaste,</span>
                <span className="text-xs font-bold text-emerald-300">Verified Farmer</span>
              </div>
              <div className="flex items-center space-x-2 mt-0.5">
                <h1 className="text-2xl font-extrabold text-white">{MOCK_USER.name}</h1>
                <CheckCircle2 className="w-5 h-5 text-emerald-300 fill-emerald-300/30" />
              </div>
              <p className="text-xs text-emerald-200 mt-1">{MOCK_USER.location} • {MOCK_USER.phone}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <Link
              to="/sell-crop"
              className="flex-1 md:flex-initial bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold px-5 py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 text-xs transition-transform active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Listing</span>
            </Link>
            <Link
              to="/offers"
              className="p-3 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 rounded-xl border border-emerald-700 transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-400 rounded-full"></span>
            </Link>
          </div>
        </div>

        {/* Dashboard Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-gray-500 block">Total Earnings (This Month)</span>
              <span className="text-2xl font-extrabold text-emerald-900 mt-1 block">₹2,48,000</span>
              <span className="text-[10px] text-green-700 font-bold bg-green-100 px-2 py-0.5 rounded mt-1 inline-block">
                Completed Payouts
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-gray-500 block">Active Crop Listing</span>
              <span className="text-2xl font-extrabold text-gray-900 mt-1 block">1 Crop</span>
              <span className="text-[10px] text-emerald-800 font-bold mt-1 block">
                {MOCK_CROP.variety} ({MOCK_CROP.quantity} Qts)
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Sprout className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-gray-500 block">Offers Received</span>
              <span className="text-2xl font-extrabold text-indigo-900 mt-1 block">3 Offers</span>
              <Link to="/offers" className="text-[10px] text-indigo-700 font-bold hover:underline mt-1 block">
                View & Accept Offers &rarr;
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center">
              <PackageCheck className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-gray-500 block">Confirmed Deal</span>
              <span className="text-2xl font-extrabold text-purple-900 mt-1 block">₹2,50,000</span>
              <Link to="/order-tracking" className="text-[10px] text-purple-700 font-bold hover:underline mt-1 block">
                Track Delivery &rarr;
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Market Analytics & Chart Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs text-gray-500 font-semibold">Today's Market Price Index</span>
              <h3 className="text-lg font-bold text-gray-900">{MARKET_PRICE_DATA.crop}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <span className="text-2xl font-extrabold text-emerald-900">{MARKET_PRICE_DATA.currentPrice}</span>
                <span className="text-xs text-gray-500 font-medium">{MARKET_PRICE_DATA.unit}</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-1" />
                {MARKET_PRICE_DATA.change}
              </span>
            </div>
          </div>

          {/* Simulated Detailed Price Chart Bars */}
          <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 space-y-2">
            <div className="flex justify-between text-xs text-gray-600 font-semibold mb-2">
              <span>7-Day Price Trajectory</span>
              <span className="text-emerald-800 font-bold">+₹50 / Quintal Increase</span>
            </div>
            <div className="h-24 w-full flex items-end justify-between gap-2 px-4 pt-4">
              <div className="flex-1 bg-emerald-200 rounded-t h-[50%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,400</span>
              </div>
              <div className="flex-1 bg-emerald-300 rounded-t h-[60%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,410</span>
              </div>
              <div className="flex-1 bg-emerald-300 rounded-t h-[55%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,405</span>
              </div>
              <div className="flex-1 bg-emerald-400 rounded-t h-[75%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,430</span>
              </div>
              <div className="flex-1 bg-emerald-500 rounded-t h-[70%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,425</span>
              </div>
              <div className="flex-1 bg-emerald-600 rounded-t h-[88%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,440</span>
              </div>
              <div className="flex-1 bg-emerald-700 rounded-t h-[100%] relative group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded">₹2,450</span>
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-semibold px-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun (Today)</span>
            </div>
          </div>
        </div>

        {/* Quick Action Navigation Modules Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => navigate(action.path)}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col items-center text-center group active:scale-95"
              >
                <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h4 className="text-xs font-bold text-gray-900">{action.title}</h4>
                <span className="text-[10px] text-gray-500 font-sans mt-0.5">{action.telugu}</span>
              </button>
            );
          })}
        </div>

      </div>
    </MainLayout>
  );
};
