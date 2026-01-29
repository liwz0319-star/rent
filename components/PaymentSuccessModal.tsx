import React from 'react';

interface PaymentSuccessModalProps {
  onClose: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 font-display text-[#181410] dark:text-white" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity animate-[fadeIn_0.3s_ease-out]"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[550px] flex flex-col bg-white dark:bg-[#23180f] rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-gray-700 overflow-hidden animate-[fadeIn_0.3s_ease-out] z-10">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors z-20"
        >
            <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex flex-col items-center pt-10 pb-2 px-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#fd7712]/10 mb-5 shadow-inner ring-4 ring-[#fd7712]/5">
                <span className="material-symbols-outlined text-[#fd7712] text-[40px]" style={{fontVariationSettings: "'FILL' 1, 'wght' 600"}}>check_circle</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#181410] dark:text-white mb-2">Payment Successful!</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed">The booking is confirmed and access details have been sent to your registered email.</p>
        </div>

        <div className="px-8 py-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
            {/* Transaction Amount Card */}
            <div className="flex flex-col items-center justify-center bg-[#f8f7f5] dark:bg-[#2a2018] p-6 rounded-lg border border-gray-100 dark:border-gray-800 mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#fd7712]/20"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Transaction Amount</p>
                <p className="text-4xl font-bold text-[#fd7712] tracking-tight">$4,500.00</p>
                <div className="mt-2 flex items-center gap-1.5 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded text-[11px] font-medium border border-green-100 dark:border-green-800/30">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Paid Successfully
                </div>
            </div>

            {/* Item Details Card */}
            <div className="bg-white dark:bg-[#2a2018]/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 mb-6 hover:border-[#fd7712]/30 transition-colors cursor-pointer group/card">
                <div className="flex gap-4 items-stretch">
                    <div 
                        className="w-24 h-20 shrink-0 bg-cover bg-center rounded-lg shadow-sm group-hover/card:brightness-105 transition-all" 
                        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuW-LO--FgiAewIPvbKIC4N1_ntpSyitWhW6HnW4zz__fUO5a8tcFnsfecd00YZQ7JCAmxs9dFPoeaBs-7p1O1bNAW5Js7CgFMDphbeHID0ibuQXZcnFTdrVp_8TiYJLJ6v72skz-lcPZd6Hj0IWxxNyaGabDfzr5njstILTWi5sRm9iK5xgUoQ-fBxAmwrEnUDYStnUC5QP6bNwk2f9z0X_d7YTZZ1Ijgn7qu1gDcQj_iWIj4uP2susypvhaisndAmTqKCvw5k7HB')"}}
                    ></div>
                    <div className="flex flex-col justify-center min-w-0 py-0.5">
                        <h3 className="text-base font-bold text-[#181410] dark:text-white truncate pr-4">Skyline Conference Suite A</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-1.5 truncate">
                            <span className="material-symbols-outlined text-[16px] text-gray-400">location_on</span>
                            101 Tech Plaza, San Francisco
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Details */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-widest pl-1">Booking Details</h4>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-[#fd7712] shrink-0">
                            <span className="material-symbols-outlined">calendar_clock</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold mb-0.5">Usage Period</p>
                            <p className="text-sm font-bold text-[#181410] dark:text-white">Oct 24, 2023 - Oct 24, 2023</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">09:00 AM - 05:00 PM (8 Hours)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex flex-col-reverse sm:flex-row gap-3 bg-gray-50/80 dark:bg-[#1f1610]/50 backdrop-blur-sm">
            <button className="flex-1 h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-[#181410] dark:text-white text-sm font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                View Receipt
            </button>
            <button 
                onClick={onClose}
                className="flex-[1.5] h-12 rounded-lg bg-[#fd7712] hover:bg-[#e06910] text-white text-sm font-bold shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
                Back to Dashboard
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;