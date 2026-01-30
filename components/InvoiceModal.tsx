import React from 'react';

interface InvoiceModalProps {
  order: any;
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  // Helper to parse amount
  const amountStr = order.amount.replace(/[^0-9.]/g, '');
  const total = parseFloat(amountStr) || 0;
  const taxRate = 0.1;
  const subtotal = total / (1 + taxRate);
  const tax = total - subtotal;

  return (
    <div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] overflow-y-auto" role="dialog">
      <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform rounded-2xl bg-white dark:bg-[#1e293b] text-left shadow-2xl transition-all sm:my-8 w-full max-w-4xl flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700 shrink-0">
            <h3 className="text-lg font-bold text-[#181410] dark:text-white" id="modal-title">
                Tax Invoice - {order.id.replace('ORD', 'INV')}
            </h3>
            <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 focus:outline-none dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
                type="button"
            >
                <span className="sr-only">Close</span>
                <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 sm:p-10 relative bg-white dark:bg-[#1e293b]">
            
            {/* Paid Stamp */}
            {order.status === 'Completed' && (
                <div className="absolute top-10 right-10 z-10 opacity-70 mix-blend-multiply dark:mix-blend-normal pointer-events-none">
                    <div className="border-[6px] border-emerald-500/40 text-emerald-600/40 dark:border-emerald-500/30 dark:text-emerald-500/30 rounded-lg px-8 py-2 transform -rotate-12 flex items-center justify-center">
                        <span className="text-5xl font-black uppercase tracking-widest font-sans">PAID</span>
                    </div>
                </div>
            )}

            <div className="flex justify-between items-start mb-10 pb-8 border-b border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm shadow-orange-200 dark:shadow-none">
                        <span className="material-symbols-outlined text-[24px]">grid_view</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-[#181410] dark:text-white leading-none">AssetAI</span>
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mt-1.5">ENTERPRISE</span>
                    </div>
                </div>
                <div className="text-right">
                    <h1 className="text-2xl font-bold text-[#181410] dark:text-white mb-1">Tax Invoice</h1>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{order.id.replace('ORD', 'INV')}</p>
                    <div className="mt-3 inline-block bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-1.5 border border-gray-100 dark:border-gray-700/50">
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Issue Date: <span className="text-[#181410] dark:text-white font-bold ml-1">{order.date}</span></p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Bill From
                    </h3>
                    <div className="text-sm text-[#181410] dark:text-gray-200 leading-relaxed pl-3.5 border-l-2 border-gray-100 dark:border-gray-700">
                        <p className="font-bold text-base mb-1 text-primary">AssetAI Enterprise Ltd.</p>
                        <p>1000 Tech Plaza, Suite 400</p>
                        <p>San Francisco, CA 94107</p>
                        <p>United States</p>
                        <p className="mt-3 text-gray-400 text-xs">Tax ID: US-992-301-44</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Bill To
                    </h3>
                    <div className="text-sm text-[#181410] dark:text-gray-200 leading-relaxed pl-3.5 border-l-2 border-gray-100 dark:border-gray-700">
                        <p className="font-bold text-base mb-1">Acme Corporation</p>
                        <p>500 Innovation Way</p>
                        <p>Austin, TX 78701</p>
                        <p>United States</p>
                        <p className="mt-3 text-gray-400 text-xs">VAT: TX-8821-002</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="overflow-hidden rounded-lg border border-gray-100 dark:border-gray-700/50">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-800/30">
                            <tr>
                                <th className="py-4 pl-6 pr-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-[45%]">Item Details</th>
                                <th className="py-4 px-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-[20%]">Type</th>
                                <th className="py-4 px-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-[15%] text-right">Quantity</th>
                                <th className="py-4 px-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-[15%] text-right">Unit Price</th>
                                <th className="py-4 pl-3 pr-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-[15%] text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-800">
                            <tr>
                                <td className="py-6 pl-6 pr-3">
                                    <p className="font-bold text-[#181410] dark:text-white text-base">{order.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">{order.desc}</p>
                                </td>
                                <td className="py-6 px-3 text-gray-600 dark:text-gray-400">Service</td>
                                <td className="py-6 px-3 text-right text-gray-600 dark:text-gray-400">1</td>
                                <td className="py-6 px-3 text-right text-gray-600 dark:text-gray-400">${subtotal.toFixed(2)}</td>
                                <td className="py-6 pl-3 pr-6 text-right font-bold text-[#181410] dark:text-white">${subtotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-end items-end gap-10">
                <div className="w-full md:w-1/2 lg:w-5/12 space-y-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Subtotal</span>
                        <span className="font-medium text-[#181410] dark:text-gray-200">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Tax (10%)</span>
                        <span className="font-medium text-[#181410] dark:text-gray-200">${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 w-full"></div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-base font-bold text-[#181410] dark:text-white">Grand Total</span>
                        <span className="text-3xl font-black text-primary tracking-tight">{order.amount}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 text-right mt-1">Due Date: {order.date}</p>
                </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 dark:bg-[#151e2e] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100 dark:border-gray-800 shrink-0 rounded-b-2xl">
            <a className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium flex items-center gap-2.5 transition-colors group cursor-pointer" href="#">
                <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors">mail</span>
                Send to Email
            </a>
            <div className="flex items-center gap-3 w-full sm:w-auto">
                <button 
                    onClick={() => alert("Printing...")}
                    className="flex-1 sm:flex-none py-2.5 px-6 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:bg-white dark:hover:bg-[#1e293b] text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined text-[20px]">print</span>
                    Print Invoice
                </button>
                <button 
                    onClick={() => alert("Downloading PDF...")}
                    className="flex-1 sm:flex-none py-2.5 px-6 rounded-lg bg-primary hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 text-sm font-bold transition-all flex items-center justify-center gap-2 active:scale-95 hover:translate-y-[-1px]"
                >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Download PDF
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;