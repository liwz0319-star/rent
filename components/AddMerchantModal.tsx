import React from 'react';

interface AddMerchantModalProps {
  onClose: () => void;
  onSubmit: () => void;
}

const AddMerchantModal: React.FC<AddMerchantModalProps> = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-display" role="dialog" aria-modal="true">
        {/* Background simulation (Blurred Interface) */}
        <div className="absolute inset-0 z-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
        
        {/* Modal Container */}
        <div className="relative z-10 flex flex-col w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 animate-[fadeIn_0.3s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0">
                <div className="flex flex-col gap-1">
                    <h2 className="text-[#181410] dark:text-white text-xl font-bold leading-tight tracking-tight">Add New Merchant</h2>
                    {/* AI Badge inside Header for context */}
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="material-symbols-outlined text-[18px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                        <p className="text-primary text-xs font-semibold uppercase tracking-wider">AI Identity Verification Enabled</p>
                    </div>
                </div>
                <button 
                    onClick={onClose}
                    className="group flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
                >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6">
                <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                    {/* Section 1: Basic Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide opacity-70">Basic Information</h3>
                        {/* Merchant Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#181410] dark:text-gray-200 text-sm font-medium">Merchant Name</label>
                            <input className="w-full rounded-lg border border-[#e7e0da] dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#181410] dark:text-white h-12 px-4 placeholder:text-[#8d725e]/60 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" placeholder="Enter registered business name" type="text"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Category */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#181410] dark:text-gray-200 text-sm font-medium">Category</label>
                                <div className="relative">
                                    <select className="w-full appearance-none rounded-lg border border-[#e7e0da] dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#181410] dark:text-white h-12 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm cursor-pointer" defaultValue="">
                                        <option disabled value="">Select industry category</option>
                                        <option value="retail">Retail &amp; Shopping</option>
                                        <option value="commercial">Commercial Real Estate</option>
                                        <option value="service">Professional Services</option>
                                        <option value="hospitality">Hospitality &amp; Dining</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            {/* Business License ID */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#181410] dark:text-gray-200 text-sm font-medium">Business License ID</label>
                                <div className="relative">
                                    <input className="w-full rounded-lg border border-[#e7e0da] dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#181410] dark:text-white h-12 px-4 pl-10 placeholder:text-[#8d725e]/60 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" placeholder="e.g. BL-2024-8894" type="text"/>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-400">
                                        <span className="material-symbols-outlined text-[18px]">badge</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Contact Details */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide opacity-70">Contact Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Rep Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#181410] dark:text-gray-200 text-sm font-medium">Representative Name</label>
                                <input className="w-full rounded-lg border border-[#e7e0da] dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#181410] dark:text-white h-12 px-4 placeholder:text-[#8d725e]/60 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" placeholder="Full name" type="text"/>
                            </div>
                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#181410] dark:text-gray-200 text-sm font-medium">Phone Number</label>
                                <input className="w-full rounded-lg border border-[#e7e0da] dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#181410] dark:text-white h-12 px-4 placeholder:text-[#8d725e]/60 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" placeholder="+1 (555) 000-0000" type="tel"/>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#181410] dark:text-gray-200 text-sm font-medium">Corporate Email</label>
                            <input className="w-full rounded-lg border border-[#e7e0da] dark:border-gray-700 bg-white dark:bg-[#2a2a2a] text-[#181410] dark:text-white h-12 px-4 placeholder:text-[#8d725e]/60 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" placeholder="name@company.com" type="email"/>
                        </div>
                    </div>

                    {/* Section 3: Asset Upload */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide opacity-70">Asset Perception</h3>
                            <span className="text-xs text-primary font-medium flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                                AI Ready
                            </span>
                        </div>
                        <div className="group relative flex flex-col items-center justify-center w-full h-32 rounded-xl border-2 border-dashed border-[#e7e0da] dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 bg-[#fbf9f8] dark:bg-[#252525] transition-all cursor-pointer">
                            <div className="flex flex-col items-center gap-2 text-center p-4">
                                <div className="p-2 rounded-full bg-white dark:bg-[#333] shadow-sm ring-1 ring-gray-100 dark:ring-gray-600 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-300">cloud_upload</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#181410] dark:text-white">Drag &amp; drop office photos here</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">to initialize AI perception (JPG, PNG max 10MB)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] shrink-0">
                <button 
                    onClick={onClose}
                    className="px-6 h-10 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    Cancel
                </button>
                <button 
                    onClick={onSubmit}
                    className="flex items-center gap-2 px-6 h-10 rounded-lg bg-primary hover:bg-orange-600 text-white text-sm font-medium shadow-sm transition-all hover:shadow-md"
                >
                    <span>Submit for Review</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default AddMerchantModal;