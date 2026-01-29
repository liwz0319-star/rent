import React from 'react';

interface OrderDetailsModalProps {
  order: any;
  onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  // Helper to calculate end date (assuming 1 year for demo if not specified)
  const startDate = new Date(order.date);
  const endDate = new Date(startDate);
  endDate.setFullYear(startDate.getFullYear() + 1);
  const formattedEndDate = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog">
      <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-[#111827] text-left shadow-2xl transition-all flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-[#181410] dark:text-white">Order Details</h3>
            <span className="text-gray-400 font-medium">#{order.id}</span>
            <span className={`ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${order.statusColor || 'bg-orange-50 text-orange-700 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${order.dotColor || 'bg-primary'}`}></span>
              {order.status}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <div 
                  className="h-48 w-full bg-cover bg-center rounded-xl mb-4 shadow-sm" 
                  style={{backgroundImage: `url('${order.img}')`}}
                ></div>
                <h4 className="text-lg font-bold text-[#181410] dark:text-white mb-1">{order.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  101 Tech Plaza, San Francisco, CA
                </div>
                <div className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-semibold text-gray-600 dark:text-gray-300">
                  {order.desc ? order.desc.split('•')[0] : 'Standard Lease'}
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Usage Duration</p>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-400">calendar_month</span>
                  <span className="text-sm font-bold text-[#181410] dark:text-white">{order.date} — {formattedEndDate}</span>
                </div>
              </div>
            </div>
            <div className="space-y-8 flex flex-col h-full">
              <div className="flex-1">
                <h4 className="text-base font-bold text-[#181410] dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">receipt_long</span> Payment Summary
                </h4>
                <div className="space-y-3 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                    <span className="font-medium text-[#181410] dark:text-gray-200">{order.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Service Fees (2.5%)</span>
                    <span className="font-medium text-[#181410] dark:text-gray-200">$100.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Tax</span>
                    <span className="font-medium text-[#181410] dark:text-gray-200">$400.00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-base font-bold text-[#181410] dark:text-white">Total Amount</span>
                  <span className="text-2xl font-black text-[#181410] dark:text-white">{order.amount}</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Services Included</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-[16px]">wifi</span> High-speed Wi-Fi
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> 24/7 Access
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 text-xs font-semibold">
                    <span className="material-symbols-outlined text-[16px]">lock</span> Smart Lock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800/80 px-6 py-4 flex justify-between items-center border-t border-gray-100 dark:border-gray-800">
          <div className="text-xs text-gray-400">
            Order ID: <span className="font-mono text-gray-500 dark:text-gray-300">8f7e-29a1-44b2</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
              Download Invoice
            </button>
            <button className="px-6 py-2 bg-primary hover:bg-orange-600 text-white rounded-lg text-sm font-bold shadow-md shadow-orange-500/20 transition-all active:scale-95">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
