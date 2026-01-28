import React from 'react';

interface EditMerchantModalProps {
  merchant: any;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
}

const EditMerchantModal: React.FC<EditMerchantModalProps> = ({ merchant, onClose, onSave, onDelete }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 font-display" role="dialog" aria-modal="true">
        {/* Blur Overlay */}
        <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        ></div>
        
        {/* Modal Container */}
        <div className="relative flex flex-col w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] z-10 shrink-0">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold text-[#181411] dark:text-white tracking-tight">Edit Merchant: {merchant?.name || 'TechHub Coworking'}</h2>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800">
                            <span className="material-symbols-outlined text-[14px]">verified</span>
                            {merchant?.status || 'Verified'}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last updated on Oct 24, 2023 by Admin</p>
                </div>
                <button 
                    onClick={onClose}
                    className="group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto modal-scroll p-6 sm:p-8 bg-white dark:bg-[#1a1a1a] custom-scrollbar">
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
                    {/* Section 1: Merchant Profile */}
                    <section className="space-y-5">
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="material-symbols-outlined text-primary">badge</span>
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Merchant Profile</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Company Name</label>
                                <input className="w-full h-12 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white text-sm transition-all" type="text" defaultValue={merchant?.name || "TechHub Coworking Spaces Ltd."}/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Contact Email</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400 text-[20px]">mail</span>
                                    <input className="w-full h-12 pl-10 pr-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white text-sm transition-all" type="email" defaultValue={merchant?.email || "admin@techhub.work"}/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400 text-[20px]">call</span>
                                    <input className="w-full h-12 pl-10 pr-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white text-sm transition-all" type="tel" defaultValue="+1 (555) 012-3456"/>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Range</label>
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group hover:border-gray-300 cursor-pointer transition-colors">
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Hot Desk</span>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" type="button">
                                            <span className="material-symbols-outlined text-[16px] pt-1">close</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group hover:border-gray-300 cursor-pointer transition-colors">
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Private Office</span>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" type="button">
                                            <span className="material-symbols-outlined text-[16px] pt-1">close</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group hover:border-gray-300 cursor-pointer transition-colors">
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Event Space</span>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" type="button">
                                            <span className="material-symbols-outlined text-[16px] pt-1">close</span>
                                        </button>
                                    </div>
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary text-gray-500 dark:text-gray-400 transition-colors" type="button">
                                        <span className="material-symbols-outlined text-[16px]">add</span>
                                        <span className="text-sm font-medium">Add Service</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Security & Access */}
                    <section className="space-y-5">
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="material-symbols-outlined text-primary">security</span>
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Security &amp; Access</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Password &amp; Authentication</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Manage access credentials for this merchant account.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center cursor-pointer gap-2">
                                    <input className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary dark:bg-gray-700 dark:border-gray-600" type="checkbox"/>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Force 2FA</span>
                                </label>
                                <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm" type="button">
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Commission & Pricing */}
                    <section className="space-y-5">
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
                            <span className="material-symbols-outlined text-primary">payments</span>
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Commission &amp; Pricing</h3>
                        </div>
                        {/* Special container for financial data */}
                        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-primary/[0.03] p-5 md:p-6">
                            {/* Decorative accent */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                                        Transaction Fee (%)
                                        <span className="text-primary ml-1">*</span>
                                    </label>
                                    <div className="relative">
                                        <input className="w-full h-12 pl-4 pr-10 bg-white dark:bg-gray-900 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white font-semibold text-sm transition-all shadow-sm" step="0.5" type="number" defaultValue="12.5"/>
                                        <div className="absolute right-3 top-3.5 text-primary pointer-events-none font-bold text-sm">%</div>
                                    </div>
                                    <p className="text-xs text-primary/80 mt-1.5 font-medium">Standard rate applied</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1.5">
                                        Billing Terms
                                    </label>
                                    <div className="relative">
                                        <select className="w-full h-12 pl-4 pr-10 appearance-none bg-white dark:bg-gray-900 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white text-sm transition-all shadow-sm">
                                            <option>Net 15</option>
                                            <option selected>Net 30</option>
                                            <option>Net 60</option>
                                            <option>Immediate</option>
                                        </select>
                                        <div className="absolute right-3 top-3.5 pointer-events-none text-primary">
                                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">Next invoice: Nov 01, 2023</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Asset Management Link */}
                    <div className="pt-2">
                        <a className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/[0.02] transition-all" href="#">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">domain</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">View All Assets</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Manage 14 locations associated with this merchant</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                        </a>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 bg-gray-50 dark:bg-[#151515] border-t border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
                <button 
                    onClick={onDelete}
                    className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 px-2 py-1.5 rounded transition-colors flex items-center gap-2 group" 
                    type="button"
                >
                    <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">delete</span>
                    Delete Merchant
                </button>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all" 
                        type="button"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={onSave}
                        className="px-6 py-2.5 rounded-lg bg-primary hover:bg-[#e66a0d] text-white text-sm font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-[#1a1a1a] transition-all flex items-center gap-2" 
                        type="button"
                    >
                        <span className="material-symbols-outlined text-[18px]">save</span>
                        Update Information
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EditMerchantModal;