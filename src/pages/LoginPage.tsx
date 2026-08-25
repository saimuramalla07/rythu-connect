import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, MessageCircle, Globe, Sprout } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState<'telugu' | 'english'>('english');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto my-6 sm:my-10 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg">
        
        {/* Brand Logo Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-emerald-800 text-white rounded-full flex items-center justify-center shadow-md mx-auto mb-3">
            <Sprout className="w-9 h-9 stroke-[2.5]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">స్వాగతం!</h2>
          <p className="text-sm font-semibold text-emerald-800 mt-1">
            Welcome to RythuConnect
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-6">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'login'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'register'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Mobile Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3.5 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-emerald-600 focus-within:border-transparent">
              <span className="text-xs font-semibold text-gray-500 mr-2 border-r border-gray-300 pr-2">
                +91
              </span>
              <input
                type="tel"
                placeholder="XXXXXXXXXX"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3.5 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-emerald-600 focus-within:border-transparent relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-900 focus:outline-none pr-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-right mt-1.5">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-semibold text-emerald-800 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] text-sm"
          >
            Login
          </button>
        </form>

        {/* SSO Divider */}
        <div className="my-6 text-center relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <span className="relative bg-white px-3 text-xs text-gray-400 font-medium uppercase">
            or continue with
          </span>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </button>
          <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-green-600 transition-colors">
            <MessageCircle className="w-5 h-5 fill-current" />
          </button>
        </div>

        {/* Footer Toggle */}
        <div className="text-center pt-4 border-t border-gray-100 space-y-3">
          <p className="text-xs text-gray-600">
            New to RythuConnect?{' '}
            <button onClick={() => setActiveTab('register')} className="text-emerald-800 font-bold hover:underline">
              Register
            </button>
          </p>

          <div className="flex justify-center items-center space-x-3 text-xs font-semibold">
            <button
              onClick={() => setLanguage('telugu')}
              className={`px-3 py-1 rounded-lg ${language === 'telugu' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-gray-500'}`}
            >
              తెలుగు
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => setLanguage('english')}
              className={`px-3 py-1 rounded-lg ${language === 'english' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-gray-500'}`}
            >
              English
            </button>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};
