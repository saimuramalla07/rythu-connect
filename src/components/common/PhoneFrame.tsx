import React from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

interface PhoneFrameProps {
  screenNumber?: number;
  screenTitle?: string;
  children: React.ReactNode;
  className?: string;
  isStandalone?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  screenNumber,
  screenTitle,
  children,
  className = '',
  isStandalone = false,
}) => {
  return (
    <div className={`flex flex-col items-center ${isStandalone ? 'w-full max-w-sm mx-auto' : 'w-[320px] sm:w-[340px]'}`}>
      {/* Screen Title Tag matching prototype poster header */}
      {screenNumber && screenTitle && (
        <div className="w-full flex items-center mb-2 px-1">
          <span className="w-5 h-5 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center mr-2 shrink-0">
            {screenNumber}
          </span>
          <h2 className="text-sm font-bold text-gray-900 truncate">{screenTitle}</h2>
        </div>
      )}

      {/* Phone Shell */}
      <div className={`w-full bg-white rounded-[32px] border-[6px] border-emerald-900 shadow-2xl overflow-hidden flex flex-col h-[640px] relative ${className}`}>
        {/* Status Bar */}
        <div className="bg-white px-5 pt-2 pb-1 flex justify-between items-center text-xs font-semibold text-gray-900 shrink-0 z-20">
          <span>9:41</span>
          {/* Dynamic Island / Notch visual */}
          <div className="w-20 h-3.5 bg-black rounded-full mx-auto -mt-1"></div>
          <div className="flex items-center space-x-1.5 text-gray-800">
            <Signal className="w-3 h-3 fill-current" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Screen Content Body */}
        <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};
