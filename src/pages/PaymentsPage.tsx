import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, CheckCircle, Landmark, ArrowUpRight } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { MOCK_PAYMENTS } from '../data/mockData';

export const PaymentsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Payments & Earnings</h1>
            <p className="text-xs text-gray-500 mt-1">Track your direct bank deposits and completed crop transactions.</p>
          </div>

          <button
            onClick={() => navigate('/profile')}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-xs flex items-center space-x-1.5"
          >
            <Landmark className="w-4 h-4" />
            <span>Bank Account Details</span>
          </button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-200 font-semibold uppercase tracking-wider block">Total Monthly Earnings</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">₹2,48,000</h2>
              <div className="mt-3 flex items-center space-x-2">
                <span className="bg-emerald-700/80 text-emerald-100 text-xs font-bold px-3 py-1 rounded-full">
                  100% Direct Bank Deposits
                </span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-700/80 text-emerald-100 flex items-center justify-center shadow-inner">
              <Wallet className="w-8 h-8" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs text-gray-500 font-medium block">Linked Bank Account</span>
              <h3 className="text-sm font-bold text-gray-900 mt-1">State Bank of India</h3>
              <p className="text-xs text-gray-500 mt-0.5">A/C: ••••••4821</p>
              <p className="text-[10px] text-gray-400 font-mono">IFSC: SBIN0001234</p>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-2 rounded-xl transition-colors"
            >
              Update Bank Details
            </button>
          </div>

        </div>

        {/* Transaction History Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Recent Payment Payouts</h2>

          <div className="space-y-3">
            {MOCK_PAYMENTS.map((pmt) => (
              <div
                key={pmt.id}
                className="p-4 rounded-2xl border border-gray-200 hover:border-emerald-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gray-50/60"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{pmt.cropName}</h4>
                    <p className="text-xs text-gray-500 font-medium">{pmt.buyerName} • {pmt.date}</p>
                  </div>
                </div>

                <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col justify-between sm:justify-center items-center sm:items-end border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-200">
                  <span className="text-base font-extrabold text-gray-900">
                    +₹{pmt.amount.toLocaleString()}
                  </span>
                  <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    {pmt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
};
