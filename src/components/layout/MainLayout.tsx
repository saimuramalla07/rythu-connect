import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};
