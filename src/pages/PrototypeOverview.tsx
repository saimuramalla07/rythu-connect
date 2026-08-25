import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, Smartphone, ChevronRight, Eye } from 'lucide-react';
import { LeftPromoSidebar } from '../components/landing/LeftPromoSidebar';
import { KeyFeaturesSection } from '../components/landing/KeyFeaturesSection';
import { MissionSection } from '../components/landing/MissionSection';
import { SupportSection } from '../components/landing/SupportSection';
import { SCREEN_LIST } from '../data/mockData';

// Import all 14 screens for the poster grid view
import { SplashScreen } from './SplashScreen';
import { LoginRegisterScreen } from './LoginRegisterScreen';
import { FarmerDashboardScreen } from './FarmerDashboardScreen';
import { AddCropScreen } from './AddCropScreen';
import { CropPhotosScreen } from './CropPhotosScreen';
import { CropReviewScreen } from './CropReviewScreen';
import { BrowseBuyersScreen } from './BrowseBuyersScreen';
import { CropDetailsScreen } from './CropDetailsScreen';
import { MakeOfferScreen } from './MakeOfferScreen';
import { OffersReceivedScreen } from './OffersReceivedScreen';
import { OrderConfirmedScreen } from './OrderConfirmedScreen';
import { OrderTrackingScreen } from './OrderTrackingScreen';
import { PaymentsScreen } from './PaymentsScreen';
import { FarmerProfileScreen } from './FarmerProfileScreen';
import { PhoneFrame } from '../components/common/PhoneFrame';

export const PrototypeOverview: React.FC = () => {
  const navigate = useNavigate();
  const [selectedScreenId, setSelectedScreenId] = useState<number>(1);

  const renderScreenComponent = (id: number) => {
    switch (id) {
      case 1: return <SplashScreen isEmbedded />;
      case 2: return <LoginRegisterScreen isEmbedded />;
      case 3: return <FarmerDashboardScreen isEmbedded />;
      case 4: return <AddCropScreen isEmbedded />;
      case 5: return <CropPhotosScreen isEmbedded />;
      case 6: return <CropReviewScreen isEmbedded />;
      case 7: return <BrowseBuyersScreen isEmbedded />;
      case 8: return <CropDetailsScreen isEmbedded />;
      case 9: return <MakeOfferScreen isEmbedded />;
      case 10: return <OffersReceivedScreen isEmbedded />;
      case 11: return <OrderConfirmedScreen isEmbedded />;
      case 12: return <OrderTrackingScreen isEmbedded />;
      case 13: return <PaymentsScreen isEmbedded />;
      case 14: return <FarmerProfileScreen isEmbedded />;
      default: return <SplashScreen isEmbedded />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      {/* Top Header Bar */}
      <header className="w-full max-w-7xl mb-6 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-2xl p-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md font-bold text-lg">
            RC
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              RythuConnect <span className="text-emerald-400 font-medium text-sm">Prototype Viewer</span>
            </h1>
            <p className="text-xs text-slate-400">
              Strict visual recreation of the 14 reference app screens
            </p>
          </div>
        </div>

        {/* Screen Switcher Dropdown & Interactive App Launch */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700">
            <Eye className="w-4 h-4 text-emerald-400" />
            <select
              value={selectedScreenId}
              onChange={(e) => {
                const id = Number(e.target.value);
                setSelectedScreenId(id);
                const scr = SCREEN_LIST.find((s) => s.id === id);
                if (scr) navigate(scr.path);
              }}
              className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
            >
              {SCREEN_LIST.map((screen) => (
                <option key={screen.id} value={screen.id} className="bg-slate-800 text-white">
                  Screen {screen.id}: {screen.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => navigate('/splash')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md flex items-center space-x-2 transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>Launch App Simulator</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Prototype Poster Sheet Layout */}
      <main className="w-full max-w-7xl space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Promo Panel */}
          <LeftPromoSidebar />

          {/* Right 14-Screen Grid Container */}
          <div className="flex-1 w-full bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-6 backdrop-blur">
            <div className="flex items-center justify-between mb-4 border-b border-slate-700/60 pb-3">
              <div className="flex items-center space-x-2">
                <LayoutGrid className="w-5 h-5 text-emerald-400" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Complete 14 Screen Flow
                </h2>
              </div>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
                14 Mobile Screens
              </span>
            </div>

            {/* Responsive Grid for all 14 screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
              {SCREEN_LIST.map((screen) => (
                <div key={screen.id} className="group relative">
                  <PhoneFrame screenNumber={screen.id} screenTitle={screen.title}>
                    {renderScreenComponent(screen.id)}
                  </PhoneFrame>
                  <button
                    onClick={() => navigate(screen.path)}
                    className="mt-2 w-full text-center text-[11px] font-bold text-emerald-400 hover:text-emerald-300 py-1 rounded bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                  >
                    Open Screen {screen.id} &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section: Key Features, Mission, Support */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <KeyFeaturesSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MissionSection />
            <SupportSection />
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-xs text-slate-500">
        RythuConnect Frontend Prototype • Strictly compliant with reference specifications • 100% Frontend Mock Data
      </footer>
    </div>
  );
};
