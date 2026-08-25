import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, ArrowRight } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';

export const SplashScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const content = (
    <div className="flex-1 flex flex-col justify-between p-6 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-center relative overflow-hidden">
      {/* Background Agriculture Graphic */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-300/40 via-transparent to-transparent pointer-events-none" />

      <div className="pt-12 flex flex-col items-center">
        {/* Logo Icon */}
        <div className="w-20 h-20 bg-emerald-800 text-white rounded-full flex items-center justify-center shadow-xl mb-4 transform hover:scale-105 transition-transform">
          <Sprout className="w-12 h-12 stroke-[2.5]" />
        </div>

        <h1 className="text-3xl font-extrabold text-emerald-950 tracking-tight">
          Rythu<span className="text-emerald-600">Connect</span>
        </h1>

        <div className="mt-4 space-y-1">
          <p className="text-emerald-900 font-bold text-base">
            రైతుకి మంచి ధర
          </p>
          <p className="text-emerald-800 font-bold text-sm">
            రైతు కోసం.. రైతుతోనే
          </p>
        </div>

        <div className="mt-6 inline-block bg-emerald-800/90 backdrop-blur text-white text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-sm">
          Farmer &rarr; Market &rarr; Better Price
        </div>
      </div>

      {/* Center Tractor Illustration */}
      <div className="my-6 relative z-10">
        <img
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=500&q=80"
          alt="Green Tractor Field"
          className="w-full h-36 object-cover rounded-2xl border border-emerald-200 shadow-md"
        />
      </div>

      {/* Navigation Button */}
      <div className="pb-4 relative z-10">
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
        >
          <span>Continue to Login</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={1} screenTitle="Splash Screen">
      {content}
    </PhoneFrame>
  );
};
