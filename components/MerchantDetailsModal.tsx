import React from 'react';

interface MerchantDetailsModalProps {
  merchant: any;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
  onEdit: () => void;
}

const MerchantDetailsModal: React.FC<MerchantDetailsModalProps> = ({ merchant, onClose, onApprove, onReject, onEdit }) => {
  if (!merchant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-display text-slate-900" role="dialog" aria-modal="true">
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-[1100px] bg-white dark:bg-[#1a1410] rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-[#1a1410] sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Merchant Verification: {merchant.name}</h2>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${merchant.status === 'Verified' ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500 border-amber-200 dark:border-amber-800'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${merchant.status === 'Verified' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                    {merchant.status === 'Verified' ? 'Verified Merchant' : 'Pending Review'}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={onEdit}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors tooltip"
                    title="Edit Merchant Details"
                >
                    <span className="material-symbols-outlined">edit</span>
                </button>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-black/20 p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Column 1: Merchant Info */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white dark:bg-[#1a1410] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                        <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100 dark:border-slate-800">
                            <div className="h-20 w-20 rounded-xl bg-slate-100 dark:bg-slate-800 mb-4 flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden">
                                {merchant.logo ? (
                                    <img alt="Merchant Logo" className="w-full h-full object-cover opacity-90" src={merchant.logo} />
                                ) : (
                                    <div className={`w-full h-full flex items-center justify-center font-bold text-2xl ${merchant.initialsBg}`}>{merchant.initials}</div>
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{merchant.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{merchant.category} Provider</p>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Legal Entity Name</p>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{merchant.name} Holdings LLC</p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Business License</p>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px] text-slate-400">badge</span>
                                    <p className="text-sm font-mono text-slate-700 dark:text-slate-300">#94829102-X</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Registration Date</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300">October 12, 2021</p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">HQ Location</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300">San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <a className="text-sm text-primary hover:text-orange-600 font-medium flex items-center gap-1 cursor-pointer">
                                View External Registry
                                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Column 2: Compliance */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white dark:bg-[#1a1410] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 h-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                Compliance
                            </h3>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-xs font-bold text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800">
                                <span className="material-symbols-outlined text-[14px]">psychology</span>
                                AI Score: {merchant.score || 85}/100
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-[#23180f] border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Identity Verification</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Directors KYC completed via Stripe Identity.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-[#23180f] border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Proof of Ownership</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Deed documents matched with county records.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-[#23180f] border border-slate-100 dark:border-slate-800">
                                <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Liability Insurance</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Policy active until Dec 2025. Coverage: $2M.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-[#23180f] border border-slate-100 dark:border-slate-800 opacity-60">
                                <span className="material-symbols-outlined text-slate-400 mt-0.5">pending</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Bank Verification</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Pending micro-deposit confirmation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3: Assets */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white dark:bg-[#1a1410] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 h-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">domain</span>
                                Submitted Assets (2)
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="group relative flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#23180f] transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer">
                                <div className="h-16 w-16 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3JpfjSh7cTJmUmtiHdgPQqWm_ZYUZGkOeAyHGJzJMdfo_CqD-zGbcw-DMgUhSNTSTQKbgAEI1oVVs438x2D9NBUEDb7okUYjqu7Asj6OmZzbQO4hnnmVfexeTep1jiwt3VA00ujywEIrJNSm7D2ZFS3JmmaLdSwcTQxdTq4QgxGEErooC9A6FQsS6srsLX6TLL4vi0SkbI1Ick1ofkTIuMxhdT5OllVJmHn3hvfP84RrRYlima_MRuEJwGxpYSvGo-HwmH4nglyST")', backgroundColor: '#cbd5e1'}}></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">Downtown Executive A</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">1200 sqft • Class A Office</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Listing Ready</span>
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3 text-slate-300 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward_ios</span>
                                </div>
                            </div>
                            <div className="group relative flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#23180f] transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer">
                                <div className="h-16 w-16 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGkYNezjq2xQb_vbh7JpsfRpNF_bOQlvJGNAZNoxmVH5LtE1AuP0z2oJmyFj3zqnMO5e4GdT6Yq8roZc27Ut-dZKyUd1VOKkxCzpkyJHr2g-6BA5txRIzCsH57bo7C3X8C4u5pDhT6V03wfmH5t2vQUZiMqrQlvis7B21xtu7Mdr7d9QMPLjgansM1MFsVg4ZOQv_oBLFRgxvpz518d8ugxycHseKYzYS6cUwFDst1kelrsQOoZ-HkAB61-RpIf-kaABgwTX54npRZ")', backgroundColor: '#94a3b8'}}></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">{merchant.name} Flex Zone</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">40 Desks • Open Plan</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
                                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Missing Photos</span>
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3 text-slate-300 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward_ios</span>
                                </div>
                            </div>
                            <div className="pt-4 mt-2">
                                <button className="w-full py-2 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    Review Additional Assets
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 bg-white dark:bg-[#1a1410] border-t border-slate-200 dark:border-slate-800 flex justify-end items-center gap-3 sticky bottom-0 z-10">
            <button 
                onClick={onReject}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700 hover:bg-red-50 dark:hover:bg-red-900/10 hover:border-red-200 transition-colors flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[18px]">block</span>
                Reject Application
            </button>
            <button 
                onClick={onApprove}
                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md shadow-orange-500/20 flex items-center gap-2 transition-all transform active:scale-95"
            >
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve Merchant
            </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantDetailsModal;