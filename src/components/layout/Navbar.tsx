import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sprout, ShoppingBag, Search, PlusCircle, User, Bell, Menu, X, Globe, BarChart3, Wallet } from 'lucide-react';
import { MOCK_USER } from '../../data/mockData';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'telugu' | 'english'>('english');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Sell Crop', path: '/sell-crop' },
    { name: 'Offers', path: '/offers' },
    { name: 'Payments', path: '/payments' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-emerald-900 text-white shadow-md border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-md group-hover:bg-emerald-600 transition-colors">
              <Sprout className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-white flex items-center">
                Rythu<span className="text-emerald-400">Connect</span>
              </div>
              <span className="text-[10px] text-emerald-300 font-sans block leading-none">
                రైతుకి మంచి ధర • Farmer to Market
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-emerald-800 text-white shadow-xs border border-emerald-700'
                    : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions (Language, Bell, CTA, Profile) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'english' ? 'telugu' : 'english')}
              className="flex items-center space-x-1 bg-emerald-800/70 hover:bg-emerald-800 text-emerald-100 text-xs px-2.5 py-1.5 rounded-lg border border-emerald-700 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-semibold">{language === 'english' ? 'English' : 'తెలుగు'}</span>
            </button>

            {/* Notification Bell */}
            <button 
              onClick={() => navigate('/offers')}
              className="p-2 rounded-lg bg-emerald-800/70 hover:bg-emerald-800 text-emerald-100 transition-colors relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
            </button>

            {/* CTA Button: Sell My Crop */}
            <Link
              to="/sell-crop"
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold text-xs px-4 py-2 rounded-xl shadow-md flex items-center space-x-1.5 transition-transform active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Sell Crop</span>
            </Link>

            {/* User Profile Avatar Link */}
            <Link to="/profile" className="flex items-center space-x-2 border-l border-emerald-800 pl-3">
              <img
                src={MOCK_USER.avatar}
                alt={MOCK_USER.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400"
              />
              <div className="text-left hidden lg:block">
                <span className="text-xs font-bold text-white block leading-tight">{MOCK_USER.name}</span>
                <span className="text-[10px] text-emerald-300 block leading-tight">Farmer</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-100 hover:bg-emerald-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 border-t border-emerald-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-emerald-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-bold text-center ${
                  isActive(link.path)
                    ? 'bg-emerald-800 text-white'
                    : 'text-emerald-200 hover:bg-emerald-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2"
            >
              <img
                src={MOCK_USER.avatar}
                alt={MOCK_USER.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400"
              />
              <span className="text-xs font-bold text-white">{MOCK_USER.name}</span>
            </Link>

            <Link
              to="/sell-crop"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-emerald-500 text-emerald-950 font-extrabold text-xs px-4 py-2 rounded-xl"
            >
              Sell Crop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
