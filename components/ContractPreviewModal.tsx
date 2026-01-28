import React from 'react';

interface ContractPreviewModalProps {
  onClose: () => void;
}

const ContractPreviewModal: React.FC<ContractPreviewModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans text-slate-900" aria-modal="true" role="dialog">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

        {/* Modal Window */}
        <div className="relative w-full max-w-6xl bg-white dark:bg-[#1a120b] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] sm:h-[85vh] transition-all transform ring-1 ring-black/5 animate-[fadeIn_0.3s_ease-out]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-[#1a120b] z-20 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-primary shadow-sm">
                        <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-none mb-1">AI Contract Generation</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tech Plaza Suite 400 • Ref: #CTR-2023-889</p>
                    </div>
                </div>
                <button 
                    onClick={onClose}
                    className="rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar - Progress */}
                <div className="w-80 bg-slate-50 dark:bg-[#1f1610] border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col flex-shrink-0 overflow-y-auto hidden md:flex">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Generation Progress</h4>
                    <div className="relative space-y-0">
                        {/* Vertical Line */}
                        <div className="absolute left-3.5 top-3 bottom-12 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                        
                        {/* Step 1 */}
                        <div className="relative flex gap-4 pb-8 group">
                            <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 ring-4 ring-slate-50 dark:ring-[#1f1610]">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[16px] font-bold">check</span>
                            </div>
                            <div className="flex flex-col pt-0.5">
                                <span className="text-sm font-semibold text-slate-900 dark:text-white">Analyzing Terms</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Extracted 24 data points</span>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex gap-4 pb-8 group">
                            <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 ring-4 ring-slate-50 dark:ring-[#1f1610]">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[16px] font-bold">check</span>
                            </div>
                            <div className="flex flex-col pt-0.5">
                                <span className="text-sm font-semibold text-slate-900 dark:text-white">Applying Templates</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Used Standard Lease v4.2</span>
                            </div>
                        </div>

                        {/* Step 3 (Active) */}
                        <div className="relative flex gap-4 pb-8 group">
                            <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-orange-100 dark:ring-orange-900/30 shadow-sm shadow-orange-500/30">
                                <span className="material-symbols-outlined text-white text-[14px] animate-spin">sync</span>
                            </div>
                            <div className="flex flex-col pt-0.5">
                                <span className="text-sm font-bold text-primary">Securing Blockchain Hash</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Waiting for finalization...</span>
                            </div>
                        </div>

                        {/* Step 4 (Pending) */}
                        <div className="relative flex gap-4 group opacity-50">
                            <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 ring-4 ring-slate-50 dark:ring-[#1f1610]">
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">4</span>
                            </div>
                            <div className="flex flex-col pt-0.5">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Ready for Signature</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
                            <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                            <span className="text-xs font-bold uppercase tracking-wide">AI Insight</span>
                        </div>
                        <p className="text-xs text-blue-900/70 dark:text-blue-300/70 leading-relaxed font-medium">
                            The rent escalation clause (3%) is within the standard market range (2.5%-4%) for this district.
                        </p>
                    </div>
                </div>

                {/* Main Document Preview */}
                <div className="flex-1 bg-slate-100/50 dark:bg-[#120c08] p-6 sm:p-10 overflow-y-auto relative scroll-smooth">
                    <div className="max-w-[52rem] mx-auto bg-white dark:bg-[#1a120b] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] min-h-[900px] p-12 sm:p-16 border border-slate-200/60 dark:border-slate-800 relative">
                        <div className="text-center mb-12 border-b-2 border-slate-100 dark:border-slate-800 pb-8">
                            <h1 className="font-serif text-3xl font-bold text-slate-900 dark:text-white tracking-wide uppercase mb-3">Commercial Lease Agreement</h1>
                            <p className="font-serif text-sm text-slate-500 dark:text-slate-400">Agreement ID: <span className="font-mono font-bold text-slate-400">#CTR-2023-889</span></p>
                        </div>
                        
                        <div className="font-serif text-slate-800 dark:text-slate-300 text-[15px] leading-8 space-y-8">
                            <p>
                                THIS LEASE AGREEMENT (this "Lease") is made and entered into as of this <span className="font-bold">24th day of October, 2023</span>, by and between <span className="font-bold">AssetAI Enterprise</span> ("Landlord"), and <span className="font-bold">NexGen Logistics</span> ("Tenant").
                            </p>

                            <div className="pl-6 border-l-[3px] border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                                <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">1. Premises</h4>
                                <p>
                                    Landlord hereby leases to Tenant and Tenant hereby leases from Landlord the premises known as <span className="bg-orange-100 dark:bg-orange-900/30 text-slate-900 dark:text-white px-1.5 py-0.5 rounded border-b-2 border-primary/20 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors cursor-help" title="AI Extracted Entity">Tech Plaza, Suite 400</span> (the "Premises"), consisting of approximately 4,200 rentable square feet.
                                </p>
                            </div>

                            <div className="pl-6 border-l-[3px] border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                                <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">2. Term</h4>
                                <p>
                                    The term of this Lease shall be for a period of <span className="bg-orange-100 dark:bg-orange-900/30 text-slate-900 dark:text-white px-1.5 py-0.5 rounded border-b-2 border-primary/20 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors cursor-help" title="AI Extracted Term">thirty-six (36) months</span>, commencing on November 1, 2023 (the "Commencement Date") and expiring on October 31, 2026.
                                </p>
                            </div>

                            <div className="pl-6 border-l-[3px] border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                                <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">3. Base Rent & Escalation</h4>
                                <p>
                                    Tenant shall pay Base Rent in the amount of $14,875.00 per month. Commencing on the first anniversary of the Commencement Date, and on each anniversary thereafter, the Base Rent shall be increased by <span className="bg-orange-100 dark:bg-orange-900/30 text-slate-900 dark:text-white px-1.5 py-0.5 rounded border-b-2 border-primary/20 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors cursor-help">3.0%</span> of the Base Rent payable during the immediately preceding Lease Year.
                                </p>
                            </div>

                            <div className="pl-6 border-l-[3px] border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                                <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">4. Security Deposit</h4>
                                <p>
                                    Upon execution of this Lease, Tenant shall deposit with Landlord the sum of <span className="bg-orange-100 dark:bg-orange-900/30 text-slate-900 dark:text-white px-1.5 py-0.5 rounded border-b-2 border-primary/20 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors cursor-help">$29,750.00</span> as security for the faithful performance by Tenant of its obligations under this Lease.
                                </p>
                            </div>

                            <p className="text-slate-300 dark:text-slate-700 italic text-sm mt-12 text-center">[...Remainder of page intentionally left blank...]</p>
                        </div>

                        <div className="absolute bottom-12 left-12 right-12 flex justify-between text-[10px] text-slate-400 font-sans border-t border-slate-100 dark:border-slate-800 pt-4 uppercase tracking-wider">
                            <span>Generated by AssetAI Core v2.4</span>
                            <span className="font-mono lowercase">0x7f83...a4b</span>
                            <span>Page 1 of 14</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1a120b] border-t border-slate-200 dark:border-slate-800 z-20 flex-shrink-0">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="material-symbols-outlined text-green-500 text-[18px]">gpp_good</span>
                    <span>Legally Compliant (Jurisdiction: CA)</span>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => alert("Regenerating contract...")} className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex items-center gap-2 shadow-sm">
                       <span className="material-symbols-outlined text-[18px]">replay</span>
                       Regenerate
                    </button>
                    <button onClick={() => alert("Finalized & Sent!")} className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover shadow-lg shadow-orange-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                       <span className="material-symbols-outlined text-[20px]">verified_user</span>
                       Finalize & Send for Signature
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContractPreviewModal;