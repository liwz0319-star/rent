import React, { useState } from 'react';

interface NegotiationModalProps {
  onClose: () => void;
}

const NegotiationModal: React.FC<NegotiationModalProps> = ({ onClose }) => {
  const [offerPrice, setOfferPrice] = useState('4850');
  const [note, setNote] = useState('');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 font-display text-slate-900">
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-[800px] bg-white dark:bg-[#1a1410] rounded-xl shadow-soft z-50 overflow-hidden flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a1410] sticky top-0 z-20">
            <div>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Price Negotiation</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Session ID: #NEGO-4829-B</p>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 transition-colors"
            >
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-[#1a1410]">
            
            {/* Asset Header */}
            <div className="px-6 py-5 bg-white dark:bg-[#23180f]/40 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10 backdrop-blur-md bg-white/90 dark:bg-[#23180f]/90">
                <div className="flex items-start gap-5">
                    <div className="relative h-20 w-24 rounded-lg overflow-hidden shrink-0 shadow-sm border border-gray-100 dark:border-gray-700 group">
                        <img 
                            alt="Executive Suite B" 
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA74Pqejf-PWf5oVPLdhgW47R_jXC7Odf9ITYz5CyQ4dcesAE_n_wJI8VxdIg0Qd3aEHiOIXc_yD_GMaK5GoAGYOvSUWIPNGDFqjwig2bWgs19zj1NngMgzHes_4rzgrlzRPTSsyHD8DANXQmYYgkWBnU6JvHi_PtYOAcgW_ECrmwTBEt40JdsPThsUFvlL9G4DVaQVT-zN5NTR8uIwHXH7b3w-vT3cdAsPzZQhUcYQ0BmAp2NZPlBnk126idrWm67afSRm5BqhBJJ_"
                        />
                    </div>
                    <div className="flex-1 flex justify-between items-start">
                        <div>
                            <h3 className="text-gray-900 dark:text-white font-bold text-base">Executive Suite B</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                <span>Financial District, New York</span>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                    <span className="material-symbols-outlined text-[12px]">group</span> 12 Cap
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                    <span className="material-symbols-outlined text-[12px]">square_foot</span> 850 sqft
                                </span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500">Listing Price</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">$5,000<span className="text-xs font-normal text-gray-500 ml-0.5">/mo</span></p>
                            <div className="flex items-center justify-end gap-1 mt-1 text-xs text-primary font-medium">
                                <span className="material-symbols-outlined text-[14px]">trending_down</span>
                                <span>Negotiable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat & Negotiation Area */}
            <div className="px-6 py-6 space-y-8">
                <div className="flex justify-center">
                    <span className="text-[10px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full uppercase tracking-wide">Today, 10:42 AM</span>
                </div>
                
                {/* Agent Message */}
                <div className="flex items-end gap-3">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 border border-gray-200 dark:border-gray-700 shadow-sm mb-1" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVymzseVObqk8SYUxV1U4hHcSeusvwGiOGHImkGdGZIB32D8HUIdhxBbbnoKa8cM9JasjKc01DYUqW7iyJPMshqGOj0ovn3IXbC67JkKCJHZi0JojnPX9syHlawQlPI8z16K7n0yS_RW4X2QJ5o52dnA9-J1TEgFhnw7gk-m1gjD-P-TR8F2yNCcZhrmrp5y9SPpBtPhjDuG6OUAfklm8KMaI6OV6-JczUmTUzycUY7oHiVqcXW5TXtWUFpIw0ZRZv-AznBezm0yaQ")'}}></div>
                    <div className="flex flex-col gap-1 max-w-[85%]">
                        <span className="text-xs font-medium text-gray-500 ml-1">AssetAI Agent</span>
                        <div className="bg-white dark:bg-[#2a201a] p-4 rounded-2xl rounded-bl-none border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 text-sm leading-relaxed shadow-sm">
                            <p>Hello! We've reviewed current market rates for comparable Class A assets in the Financial District. Considering the premium amenities (24/7 Concierge, Fiber Internet), the property management is willing to lower the ask to <strong className="text-gray-900 dark:text-white font-semibold">$4,900/mo</strong> for a 12-month term.</p>
                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/50 flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-orange-50 dark:bg-orange-900/20 text-[11px] font-medium text-primary">
                                    <span className="material-symbols-outlined text-[12px] mr-1">verified</span> Verified Owner
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-gray-50 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                                    Reply time: &lt; 2 mins
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gap Analysis Widget */}
                <div className="mx-4 md:mx-12 p-4 bg-white dark:bg-[#1a1410] rounded-xl border border-dashed border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-5">
                        <span className="material-symbols-outlined text-4xl">handshake</span>
                    </div>
                    <div className="flex justify-between items-end mb-3 relative z-10">
                        <div>
                            <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Gap Analysis</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Current delta: <span className="text-red-500 font-medium">$100</span></p>
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Closing in...</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full relative w-[80%]">
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wide relative z-10">
                        <span>Your Target ($4.8k)</span>
                        <span>Their Ask ($4.9k)</span>
                    </div>
                </div>

                {/* Proposal Input */}
                <div className="flex flex-col items-end gap-2 pl-4 md:pl-12 pb-2">
                    <span className="text-xs font-medium text-gray-500 mr-1 self-end">Your Proposal</span>
                    <div className="w-full bg-white dark:bg-[#1a1410] rounded-2xl rounded-br-none p-5 border border-primary/20 dark:border-primary/20 shadow-glow relative">
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                    Counter-Offer Price
                                </label>
                                <div className="relative max-w-[200px]">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-900 dark:text-white font-bold">$</span>
                                    </div>
                                    <input 
                                        className="block w-full pl-7 pr-12 py-2 bg-gray-50 dark:bg-[#2a201a] border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 dark:text-white text-lg font-bold transition-all" 
                                        placeholder="4,850" 
                                        type="text" 
                                        value={offerPrice}
                                        onChange={(e) => setOfferPrice(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <span className="text-gray-400 text-xs font-medium">/mo</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                    Reasoning / Note
                                </label>
                                <textarea 
                                    className="block w-full p-3 bg-gray-50 dark:bg-[#2a201a] border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 text-sm resize-none transition-all" 
                                    placeholder="Add context to your offer (e.g., 'I can sign a 24-month lease immediately if we agree on this price...')" 
                                    rows={2}
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-white dark:bg-[#1a1410] border-t border-gray-100 dark:border-gray-800 flex justify-between items-center gap-3 sticky bottom-0 z-20">
                <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
                    <span className="material-symbols-outlined text-[14px]">info</span>
                    <span>Offers are non-binding until lease generation.</span>
                </div>
                <div className="flex items-center gap-3 ml-auto w-full sm:w-auto">
                    <button 
                        onClick={onClose}
                        className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={() => {
                            alert(`Offer of $${offerPrice} sent!`);
                            onClose();
                        }}
                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-orange-500/20 flex justify-center items-center gap-2 transition-all transform active:scale-95"
                    >
                        Send Offer
                        <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NegotiationModal;