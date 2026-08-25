import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, TrendingUp, Search, PlusCircle, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, BarChart3, PackageCheck, Truck, Wallet, MapPin, Star } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MARKET_PRICE_DATA, MOCK_BUYERS, MOCK_CROP } from '../data/mockData';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const modules = [
    { id: 'sell', title: 'Sell My Crop', telugu: 'రైతు అమ్మకం', icon: Sprout, color: 'bg-emerald-100 text-emerald-800', path: '/sell-crop' },
    { id: 'buyers', title: 'Find Buyers', telugu: 'కొనుగోలుదారులు', icon: Search, color: 'bg-amber-100 text-amber-800', path: '/marketplace' },
    { id: 'prices', title: 'Market Prices', telugu: 'మార్కెట్ ధరలు', icon: BarChart3, color: 'bg-blue-100 text-blue-800', path: '/dashboard' },
    { id: 'orders', title: 'My Orders', telugu: 'నా ఆర్డర్లు', icon: PackageCheck, color: 'bg-indigo-100 text-indigo-800', path: '/offers' },
    { id: 'transport', title: 'Transport', telugu: 'రవాణా', icon: Truck, color: 'bg-purple-100 text-purple-800', path: '/order-tracking' },
    { id: 'payments', title: 'Payments', telugu: 'చెల్లింపులు', icon: Wallet, color: 'bg-green-100 text-green-800', path: '/payments' },
  ];

  return (
    <MainLayout>
      <div className="space-y-10">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden shadow-xl border border-emerald-700/50">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-700/60 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 border border-emerald-500/30">
                <Sprout className="w-4 h-4 text-emerald-300" />
                <span>Direct Farmer to Buyer Agricultural Platform</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                రైతుకి మంచి ధర <br />
                <span className="text-emerald-400">రైతు కోసం.. రైతుతోనే</span>
              </h1>

              <p className="text-emerald-100 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
                Connect directly with verified buyers across your region. Sell Paddy, Cotton, Chilli, and grains at transparent market prices with zero middlemen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  to="/sell-crop"
                  className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95 text-sm"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>Sell My Crop (రైతు అమ్మకం)</span>
                </Link>
                <Link
                  to="/marketplace"
                  className="w-full sm:w-auto bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-xl border border-emerald-600 shadow-md flex items-center justify-center space-x-2 transition-all text-sm"
                >
                  <Search className="w-5 h-5 text-emerald-300" />
                  <span>Find Buyers</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/30 group">
                <img
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
                  alt="Smiling Indian Farmer in Paddy Field"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent flex items-end p-5">
                  <div>
                    <span className="text-white font-extrabold text-sm block">Direct Farmer-Buyer Network</span>
                    <span className="text-emerald-200 text-xs font-semibold">Dudukuru, East Godavari</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Live Market Price Banner */}
        <section className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Today's Market Rate</div>
              <h3 className="text-base font-bold text-gray-900">{MARKET_PRICE_DATA.crop}</h3>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right">
              <span className="text-2xl font-extrabold text-emerald-900">{MARKET_PRICE_DATA.currentPrice}</span>
              <span className="text-xs text-gray-500 font-medium">{MARKET_PRICE_DATA.unit}</span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              {MARKET_PRICE_DATA.change}
            </span>
            <Link
              to="/dashboard"
              className="text-xs font-bold text-emerald-800 hover:underline flex items-center"
            >
              <span>Market Analytics</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </section>

        {/* Modular Services Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Application Modules</h2>
              <p className="text-xs text-gray-500">Access all RythuConnect services directly</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.id}
                  to={mod.path}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col items-center text-center group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${mod.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-gray-900">{mod.title}</h3>
                  <span className="text-[10px] text-gray-500 font-sans mt-0.5">{mod.telugu}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Buyers Marketplace Preview */}
        <section className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top Verified Buyers Near You</h2>
              <p className="text-xs text-gray-500">Traders looking for immediate Paddy and grain stock</p>
            </div>
            <Link to="/marketplace" className="text-xs font-bold text-emerald-800 hover:underline flex items-center">
              <span>View All Buyers</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MOCK_BUYERS.map((buyer) => (
              <div
                key={buyer.id}
                onClick={() => navigate('/marketplace')}
                className="p-4 rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer bg-gray-50 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img src={buyer.avatar} alt={buyer.name} className="w-12 h-12 rounded-full object-cover border border-emerald-300" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{buyer.name}</h4>
                    <div className="flex items-center space-x-2 text-[11px] text-gray-500 mt-0.5">
                      <span className="flex items-center"><MapPin className="w-3 h-3 text-gray-400 mr-0.5" />{buyer.distance}</span>
                      <span>•</span>
                      <span className="flex items-center text-amber-600 font-semibold"><Star className="w-3 h-3 fill-amber-400 stroke-amber-500 mr-0.5" />{buyer.rating}</span>
                    </div>
                    <p className="text-xs text-gray-700 font-medium mt-1">Needs <span className="font-bold">{buyer.needsQuantity} {buyer.unit}</span></p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 font-medium block">Offer</span>
                  <span className="text-sm font-extrabold text-emerald-800">₹{buyer.offerPrice}/Qt</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </MainLayout>
  );
};
