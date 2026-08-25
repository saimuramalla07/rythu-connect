import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, CheckCircle } from 'lucide-react';
import { PhoneFrame } from '../components/common/PhoneFrame';
import { HeaderNav } from '../components/common/HeaderNav';
import { MOCK_PAYMENTS } from '../data/mockData';

export const PaymentsScreen: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const navigate = useNavigate();

  const content = (
    <div className="flex-1 flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderNav title="My Payments" />

        <div className="p-4 space-y-4">
          {/* Total Earnings Card */}
          <div className="bg-emerald-800 text-white rounded-2xl p-4 shadow-md flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-200 font-medium">Total Earnings</span>
              <h3 className="text-2xl font-extrabold tracking-tight mt-0.5">₹2,48,000</h3>
              <span className="text-[10px] text-emerald-300 font-semibold inline-block mt-1 bg-emerald-700/60 px-2 py-0.5 rounded">
                This Month
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-700/80 text-emerald-100 flex items-center justify-center shadow-inner">
              <Wallet className="w-6 h-6" />
            </div>
          </div>

          {/* Recent Payments */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 mb-2.5">Recent Payments</h4>
            <div className="space-y-2.5">
              {MOCK_PAYMENTS.map((pmt) => (
                <div key={pmt.id} className="bg-white rounded-2xl p-3.5 border border-gray-200 shadow-xs flex justify-between items-center">
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">{pmt.cropName}</h5>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">{pmt.buyerName}</p>
                    <span className="text-[9px] text-gray-400 block mt-0.5">{pmt.date}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-extrabold text-gray-900 block">
                      ₹{pmt.amount.toLocaleString()}
                    </span>
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 mt-0.5">
                      <CheckCircle className="w-3 h-3 mr-0.5 fill-emerald-100" />
                      {pmt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/profile')}
          className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs"
        >
          View All Payments
        </button>
      </div>
    </div>
  );

  if (isEmbedded) return content;

  return (
    <PhoneFrame screenNumber={13} screenTitle="Payments">
      {content}
    </PhoneFrame>
  );
};
