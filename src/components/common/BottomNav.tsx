import React from 'react';
import { Home, Sprout, ShoppingBag, MessageSquare, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BottomNavProps {
  activeTab?: 'home' | 'farm' | 'orders' | 'messages' | 'profile';
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'home' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab from route if not explicitly passed
  let current = activeTab;
  if (location.pathname.includes('/dashboard')) current = 'home';
  else if (location.pathname.includes('/add-crop') || location.pathname.includes('/buyers')) current = 'farm';
  else if (location.pathname.includes('/order') || location.pathname.includes('/offers')) current = 'orders';
  else if (location.pathname.includes('/profile')) current = 'profile';

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'farm', label: 'My Farm', icon: Sprout, path: '/buyers' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, path: '/offers-received' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/crop-details' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <div className="bg-white border-t border-gray-200 py-2 px-3 flex justify-around items-center shrink-0">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = current === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-emerald-700 font-semibold' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
            <span className="text-[10px] mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
