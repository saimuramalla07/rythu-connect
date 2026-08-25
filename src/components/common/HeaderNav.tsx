import React from 'react';
import { ArrowLeft, Share2, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderNavProps {
  title: string;
  showBack?: boolean;
  showShare?: boolean;
  showBell?: boolean;
  onBack?: () => void;
  bgColor?: string;
  textColor?: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  title,
  showBack = true,
  showShare = false,
  showBell = false,
  onBack,
  bgColor = 'bg-emerald-800',
  textColor = 'text-white',
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`${bgColor} ${textColor} px-4 py-3 flex items-center justify-between shrink-0 shadow-sm`}>
      <div className="flex items-center space-x-3">
        {showBack && (
          <button 
            onClick={handleBack} 
            className="p-1 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-base font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center space-x-2">
        {showShare && (
          <button className="p-1 rounded-full hover:bg-black/10 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        )}
        {showBell && (
          <button className="p-1 rounded-full hover:bg-black/10 transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        )}
      </div>
    </div>
  );
};
