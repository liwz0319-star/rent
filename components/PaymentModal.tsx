import React from 'react';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-display" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#181410]/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
        
        {/* 1. Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e7e0da] bg-white z-10">
            <div className="flex flex-col gap-0.5">
                <h2 className="text-xl font-bold text-[#181410] tracking-tight">Checkout</h2>
                <p className="text-sm text-[#8d725e] font-medium">Order ID: #ORD-2024-8892</p>
            </div>
            <button 
                onClick={onClose}
                className="text-[#8d725e] hover:text-[#181410] transition-colors p-2 rounded-full hover:bg-[#f8f7f5]"
            >
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-white">
            {/* 2. Order Summary Section */}
            <div className="bg-[#f8f7f5] rounded-xl p-5 border border-[#e7e0da]">
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    {/* Asset Thumbnail */}
                    <div 
                        className="w-full sm:w-28 h-32 sm:h-20 bg-cover bg-center rounded-lg border border-gray-200 flex-shrink-0 shadow-sm" 
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlTxHq9cZMaSkJrru2c_-jwibZ1feYz7_WoXLG1gMt-yAEgeeoQkVr6BAXeTFOE3Nj_3DpHMUl6Cs253zt304qIdbp1UnFP7UgDlYRXylSrGBRWzu8o8tKFMLXWDpU5OxdY1bN7O82Yr3eO1XSv0e-pQn6RA84QksWv7G-YiYtQmQEnPvlyX9qzENMApDX5dzycKTr_prSrptUfG1UFz4sPONY6tsaalgXEz2XD8LpEPB9SJ7LCjZs9jS05sk1hkWbUV8H1T03kpiw")'}}
                    ></div>
                    <div className="flex-1 w-full">
                        <div className="flex flex-col gap-1 mb-2">
                            <h3 className="font-bold text-[#181410] text-lg leading-tight">Executive Boardroom - Tower A</h3>
                            <div className="flex items-center gap-1.5 text-[#8d725e] text-sm">
                                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                                <span>Oct 24, 2024</span>
                                <span className="text-gray-300">•</span>
                                <span className="material-symbols-outlined text-[16px]">schedule</span>
                                <span>09:00 - 17:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto items-center sm:items-end gap-1 border-t sm:border-t-0 border-[#e7e0da] pt-3 sm:pt-0">
                        <span className="text-xs font-semibold text-[#8d725e] uppercase tracking-wider">Total</span>
                        <span className="text-2xl font-bold text-[#181410] tracking-tight">$1,250.00</span>
                    </div>
                </div>
            </div>

            {/* 3. Payment Method Selection */}
            <div className="space-y-4">
                <h3 className="text-base font-bold text-[#181410] flex items-center gap-2">
                    Select Payment Method
                </h3>
                <div className="grid gap-3" role="radiogroup">
                    {/* Option 1: Corporate Account */}
                    <label className="relative flex items-center justify-between p-4 rounded-xl border border-[#e7e0da] cursor-pointer hover:border-[#fd7712]/50 hover:bg-[#f8f7f5]/50 transition-all group">
                        <input className="peer sr-only" name="payment_method" type="radio" value="corporate"/>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                                <span className="material-symbols-outlined">domain</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#181410] text-sm">Corporate Account</p>
                                <p className="text-xs text-[#8d725e]">Pre-paid Credits (Bal: $5,000)</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#fd7712] peer-checked:bg-[#fd7712] relative flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                        {/* Active Border Highlight */}
                        <div className="absolute inset-0 border-2 border-[#fd7712] rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                    </label>

                    {/* Option 2: Credit Card (Selected) */}
                    <label className="relative flex items-center justify-between p-4 rounded-xl border border-[#fd7712] bg-[#fd7712]/5 cursor-pointer transition-all group">
                        <input defaultChecked className="peer sr-only" name="payment_method" type="radio" value="card"/>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center border border-gray-100 shadow-sm">
                                <span className="material-symbols-outlined">credit_card</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#181410] text-sm">Credit Card</p>
                                <p className="text-xs text-[#8d725e]">Visa ending in 4242</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-[#fd7712] bg-[#fd7712] relative flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {/* Active Border Highlight */}
                        <div className="absolute inset-0 border-2 border-[#fd7712] rounded-xl pointer-events-none"></div>
                    </label>

                    {/* Option 3: WeChat Pay */}
                    <label className="relative flex items-center justify-between p-4 rounded-xl border border-[#e7e0da] cursor-pointer hover:border-[#fd7712]/50 hover:bg-[#f8f7f5]/50 transition-all group">
                        <input className="peer sr-only" name="payment_method" type="radio" value="wechat"/>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
                                <span className="material-symbols-outlined">chat_bubble</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#181410] text-sm">WeChat Pay</p>
                                <p className="text-xs text-[#8d725e]">Scan QR Code to pay</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#fd7712] peer-checked:bg-[#fd7712] relative flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                        {/* Active Border Highlight */}
                        <div className="absolute inset-0 border-2 border-[#fd7712] rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                    </label>

                    {/* Option 4: Alipay */}
                    <label className="relative flex items-center justify-between p-4 rounded-xl border border-[#e7e0da] cursor-pointer hover:border-[#fd7712]/50 hover:bg-[#f8f7f5]/50 transition-all group">
                        <input className="peer sr-only" name="payment_method" type="radio" value="alipay"/>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
                                <span className="material-symbols-outlined">qr_code_scanner</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#181410] text-sm">Alipay</p>
                                <p className="text-xs text-[#8d725e]">Instant transfer</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#fd7712] peer-checked:bg-[#fd7712] relative flex items-center justify-center transition-colors">
                            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                        </div>
                        {/* Active Border Highlight */}
                        <div className="absolute inset-0 border-2 border-[#fd7712] rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                    </label>
                </div>
            </div>
        </div>

        {/* 4. Footer & Security */}
        <div className="bg-[#f8f7f5] px-6 py-5 border-t border-[#e7e0da] flex flex-col gap-4">
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-1.5 text-[#8d725e] opacity-80">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span className="text-xs font-medium">Secured by Blockchain Encryption</span>
            </div>
            {/* Pay Button */}
            <button 
                onClick={() => {
                    alert("Payment successful!");
                    onClose();
                }}
                className="w-full bg-[#fd7712] hover:bg-[#e0660b] text-white font-bold text-base h-12 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 group"
            >
                <span>Pay $1,250.00</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;