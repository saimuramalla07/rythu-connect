import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sprout, Landmark, FileText, Lock, HelpCircle, LogOut } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { BottomNav } from '../components/common/BottomNav';
import { MOCK_USER } from '../data/mockData';

export const FarmerProfileScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'farm', label: 'My Farm Details', icon: Sprout, path: '/dashboard' },
    { id: 'bank', label: 'Bank Details', icon: Landmark, path: '/payments' },
    { id: 'docs', label: 'Documents', icon: FileText, path: '/profile' },
    { id: 'pass', label: 'Change Password', icon: Lock, path: '/login' },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/profile' },
  ];

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="My Profile" showBack={false} />

        <div className="p-4 space-y-4">
          {/* User Profile Card */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs text-center flex flex-col items-center">
            <div className="relative mb-2">
              <img
                src={MOCK_USER.avatar}
                alt={MOCK_USER.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-600 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center text-white text-[8px]">✓</span>
            </div>
            <h3 className="text-sm font-bold text-gray-900">{MOCK_USER.name}</h3>
            <p className="text-xs text-gray-500 font-medium">{MOCK_USER.phone}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{MOCK_USER.location}</p>
          </div>

          {/* Menu List */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xs divide-y divide-gray-100 overflow-hidden">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4 text-emerald-800" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              );
            })}

            {/* Logout Button */}
            <button
              onClick={() => navigate('/login')}
              className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <LogOut className="w-4 h-4 text-red-500" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <BottomNav activeTab="profile" />
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={14} screenTitle="Farmer Profile">
      {content}
    </PhoneFrame>
  );
};
