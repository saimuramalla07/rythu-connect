import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sprout, Landmark, FileText, Lock, HelpCircle, LogOut, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_USER } from '../data/mockData';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'farm', label: 'My Farm Details & Acreage', desc: 'Land records, soil type, and location details', icon: Sprout, path: '/dashboard' },
    { id: 'bank', label: 'Bank Details & Direct Payouts', desc: 'State Bank of India ••••4821', icon: Landmark, path: '/payments' },
    { id: 'docs', label: 'Farmer Verification Documents', desc: 'Aadhaar & Pattadar Passbook Verified', icon: FileText, path: '/profile' },
    { id: 'pass', label: 'Account Security & Password', desc: 'Manage your password and mobile login', icon: Lock, path: '/login' },
    { id: 'help', label: 'Customer Support & Help Desk', desc: '+91 98765 43210 • support@rythuconnect.com', icon: HelpCircle, path: '/profile' },
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
            <div className="relative">
              <img
                src={MOCK_USER.avatar}
                alt={MOCK_USER.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-emerald-600 shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">✓</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <h1 className="text-xl font-extrabold text-gray-900">{MOCK_USER.name}</h1>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">{MOCK_USER.phone}</p>
              <p className="text-xs text-gray-400 mt-0.5">{MOCK_USER.location}</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center sm:text-right">
            <span className="text-xs font-bold text-emerald-900 block">Verified Farmer Account</span>
            <span className="text-[11px] text-emerald-700 font-semibold mt-0.5 block">East Godavari Agriculture Division</span>
          </div>
        </div>

        {/* Settings Navigation Menu */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm divide-y divide-gray-100 overflow-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{item.label}</h3>
                    <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-800 transition-colors" />
              </button>
            );
          })}

          {/* Logout Button */}
          <button
            onClick={() => navigate('/login')}
            className="w-full p-5 flex items-center justify-between hover:bg-red-50 transition-colors text-left text-red-600 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <LogOut className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Logout</h3>
                <p className="text-xs text-red-400 font-medium">Sign out of your RythuConnect account</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-red-400" />
          </button>
        </div>

      </div>
    </MainLayout>
  );
};
