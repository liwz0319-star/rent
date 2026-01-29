import React, { useState } from 'react';
import AutoNegotiationParametersModal from './AutoNegotiationParametersModal';

interface AutoNegotiationViewProps {
  onNavigate: (view: any) => void;
}

const AutoNegotiationView: React.FC<AutoNegotiationViewProps> = ({ onNavigate }) => {
  const [isParametersModalOpen, setIsParametersModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 bg-slate-50 dark:bg-slate-900">
        <header className="h-16 px-8 flex justify-between items-center bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer" onClick={() => onNavigate('home')}>
                    <span className="material-symbols-outlined text-[18px]">home</span>
                </a>
                <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                <span className="font-medium">Smart Matching</span>
                <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                <span className="font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">Auto-Negotiation</span>
            </div>
            <div className="flex items-center gap-3">
                <button 
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                    onClick={() => setIsParametersModalOpen(true)}
                >
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                    Parameters
                </button>
                <button 
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-all shadow-md shadow-primary/20"
                    onClick={() => alert("Starting new negotiation...")}
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    New Negotiation
                </button>
            </div>
        </header>
        <div className="flex flex-1 overflow-hidden p-6 gap-6">
            {/* Left Column: Negotiation Queue */}
            <section className="w-[300px] flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/30 dark:bg-slate-900/30">
                    <h2 className="font-bold text-slate-900 dark:text-white text-sm">Negotiation Queue</h2>
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-600">3 Active</span>
                </div>
                <div className="flex-1 overflow-y-auto no-scrollbar p-3 flex flex-col gap-3">
                    <div 
                        className="cursor-pointer group rounded-lg border border-primary/40 bg-orange-50/30 dark:bg-orange-900/10 p-3 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                        onClick={() => alert("Selecting Tech Hub - Unit 402")}
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-primary bg-white dark:bg-slate-800 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                Agent Negotiating
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">2m ago</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5 group-hover:text-primary transition-colors">Tech Hub - Unit 402</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Offer: <span className="text-slate-900 dark:text-white">$45/sqft</span></span>
                            <span className="text-[10px] text-slate-400">Target: $42</span>
                        </div>
                    </div>
                    <div 
                        className="cursor-pointer group rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 p-3 hover:shadow-md transition-all"
                        onClick={() => alert("Selecting Skyline Tower")}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 px-2 py-0.5 rounded-full">
                                Awaiting Approval
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">2h ago</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">Skyline Tower - Floor 12</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Offer: <span className="text-slate-900 dark:text-white">$52/sqft</span></span>
                            <span className="text-[10px] text-slate-400">Target: $50</span>
                        </div>
                    </div>
                    <div 
                        className="cursor-pointer group rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-3 opacity-60 hover:opacity-100 transition-all"
                        onClick={() => alert("Selecting Westside Loft")}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <span className="material-symbols-outlined text-[10px]">check</span>
                                Deal Closed
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">1d ago</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">Westside Loft - 3B</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Final: <span className="text-slate-900 dark:text-white">$38/sqft</span></span>
                            <span className="text-[10px] text-green-600 dark:text-green-400 font-bold">Saved 12%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Center Column: AI Negotiation Lab */}
            <section className="flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-primary/10 rounded-md">
                                <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                            </div>
                            <div>
                                <h2 className="font-bold text-slate-900 dark:text-white text-sm">AI Negotiation Lab</h2>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400">Active session with Tech Hub Leasing Agent</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-700 px-2 py-1 border border-slate-200 dark:border-slate-600 rounded">ID: #NEG-8842</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-slate-200 dark:border-slate-600 shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 p-2 opacity-10">
                                <span className="material-symbols-outlined text-4xl dark:text-white">target</span>
                            </div>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Target Price</p>
                            <div className="flex items-baseline gap-1">
                                <p className="text-xl font-bold text-slate-900 dark:text-white">$45.00</p>
                                <span className="text-xs font-medium text-slate-400">/sqft</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-slate-200 dark:border-slate-600 shadow-sm relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                            <div className="absolute right-0 top-0 p-2 opacity-10">
                                <span className="material-symbols-outlined text-4xl dark:text-white">trending_up</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Current Offer</p>
                                    <div className="flex items-baseline gap-1">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">$48.50</p>
                                        <span className="text-xs font-medium text-slate-400">/sqft</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded border border-red-100 dark:border-red-800">+7.7% Gap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col gap-5 bg-slate-50/30 dark:bg-slate-900/30">
                    <div className="flex justify-center">
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full shadow-sm">Today, 10:23 AM</span>
                    </div>
                    <div className="flex gap-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-white dark:from-orange-900/10 dark:to-slate-800 border border-orange-100 dark:border-orange-900/30 rounded-lg mx-8 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/40"></div>
                        <div className="shrink-0 bg-white dark:bg-slate-700 border border-orange-100 dark:border-orange-900/30 rounded-full p-1 h-fit shadow-sm">
                            <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex justify-between items-center">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-wide">AI Reasoning Engine</p>
                                <span className="text-[10px] text-orange-600/70 dark:text-orange-400/70 font-mono">Confidence: 85%</span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">Analyzing supplier response. Resistance detected on base rent reduction. <span className="font-medium">Strategy shift: Leverage lease duration to secure discount.</span></p>
                            <div className="flex gap-2 mt-1">
                                <span className="text-[9px] px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-orange-200 dark:border-orange-900/50 rounded text-orange-800 dark:text-orange-300 font-medium shadow-sm">Strategy: Value Extension</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end self-end max-w-[85%]">
                        <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl rounded-tr-none p-4 shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed relative group">
                            <div className="absolute -right-2 -top-2 bg-primary text-white rounded-full p-1 shadow-sm border-2 border-white dark:border-slate-700">
                                <span className="material-symbols-outlined text-[12px]">smart_toy</span>
                            </div>
                            <p>We appreciate the updated terms. However, <span className="font-medium bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-1 rounded">$48.50</span> remains above our cap for this location. What if we commit to a <span className="font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1 rounded">24-month lease</span> instead of 12? Could this unlock the $45 rate?</p>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1.5 mr-1 font-medium">AI Agent • 10:24 AM</span>
                    </div>
                    <div className="flex flex-col items-start self-start max-w-[85%]">
                        <div className="flex items-end gap-2">
                            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 dark:border-slate-600">
                                <span className="material-symbols-outlined text-[16px]">apartment</span>
                            </div>
                            <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl rounded-tl-none p-4 shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                                <p>That's an interesting proposition. A 2-year commitment does give us more security. Let me run numbers. I can't do $45 flat, but maybe we can meet at <span className="font-medium text-slate-900 dark:text-white">$46</span> with a <span className="font-medium text-slate-900 dark:text-white">2-month free period</span>?</p>
                            </div>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1.5 ml-11 font-medium">Supplier • 10:28 AM</span>
                    </div>
                    <div className="flex gap-3 px-4 py-3 bg-white dark:bg-slate-700 border border-primary/20 rounded-lg mx-8 shadow-sm ring-1 ring-primary/5">
                        <div className="shrink-0 bg-primary/10 rounded-full p-1.5 h-fit">
                            <span className="material-symbols-outlined text-primary text-[16px] animate-spin">sync</span>
                        </div>
                        <div className="flex flex-col gap-1 justify-center w-full">
                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Calculating Net Effective Rate...</p>
                            <div className="flex justify-between items-center text-xs text-slate-700 dark:text-slate-300">
                                <span className="italic">2 mo free @ $46/sqft (24mo) → <span className="font-bold text-slate-900 dark:text-white">$42.16 effective</span></span>
                                <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-[10px] border border-green-100 dark:border-green-800">Within Target</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                    <div className="relative flex items-center gap-2">
                        <button 
                            className="p-2.5 text-slate-400 hover:text-primary transition-colors bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 border border-transparent hover:border-slate-200 dark:hover:border-slate-500"
                            onClick={() => alert("Microphone activated")}
                        >
                            <span className="material-symbols-outlined text-[20px]">mic</span>
                        </button>
                        <input className="w-full bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white placeholder-slate-400 transition-all shadow-sm" placeholder="Type to intervene or guide the AI..." type="text"/>
                        <button 
                            className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-all shadow-md shadow-primary/20 flex items-center justify-center"
                            onClick={() => alert("Message sent")}
                        >
                            <span className="material-symbols-outlined text-[18px]">send</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Right Column: Deal Summary */}
            <section className="w-[320px] flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden">
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/30">
                    <h2 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Deal Terms Summary</h2>
                    <div className="mb-2">
                        <div className="flex justify-between text-xs font-semibold mb-1.5">
                            <span className="text-slate-500 dark:text-slate-400">Deal Progress</span>
                            <span className="text-primary">85%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 shadow-inner">
                            <div className="bg-primary h-2 rounded-full relative" style={{width: '85%'}}>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-3 bg-white dark:bg-slate-800 border-[3px] border-primary rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1.5 text-right font-medium">Stage: Drafting Contract</p>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto no-scrollbar p-4 bg-white dark:bg-slate-800">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-[18px]">attach_money</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Monthly Rent</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">$46.00 <span className="text-[10px] font-normal text-slate-400">/sqft</span></p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Lease Duration</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">24 Months</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border border-primary/40 bg-orange-50/40 dark:bg-orange-900/20 relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
                            <div className="flex items-center gap-3">
                                <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-primary/10 text-primary">
                                    <span className="material-symbols-outlined text-[18px]">savings</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-wide">Free Period</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">2 Months</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-700 rounded-full p-1 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[18px] animate-pulse" title="Pending Confirmation">pending</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Amenities</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Gym &amp; Parking</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                        </div>
                        <div className="rounded-lg overflow-hidden h-36 relative border border-slate-200 dark:border-slate-600 mt-2 shadow-sm group">
                            <div 
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJEYwkj0ykfuHw_Lbh53YvWm-Rd5STzEwBB6LJGQOW1dFgx0rnbJA4_v2dOCb_9JO5w8sLTV0IIl5K-jRb6OI6ikUeKQGkUiznZfpcAD6gnebPfTl2e2wHM0rVGvznoDBLl0xdqQrhFhN4ay0EUv9jjdRZCajelcTMiIWOt3MF_U3PAco_MRKtojlGRxUga_LG1CEdqP3t53rRQSlFJjfl9LkZuEPxVOMyQW0CEywDIQkpgZodoN_vtZzq_kyJtR_yjpJn1mTwsozO")'}}
                            >
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                            </div>
                            <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-2 rounded border border-slate-200 dark:border-slate-600 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-900 dark:text-white">Tech Hub, Unit 402</p>
                                    <p className="text-[9px] text-slate-500 dark:text-slate-400">San Francisco, CA</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-400 text-[16px]">location_on</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col gap-3">
                    <button 
                        className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-sm group"
                        onClick={() => alert("Approving deal...")}
                    >
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform">verified</span>
                        Approve &amp; Sign Deal
                    </button>
                    <button 
                        className="w-full py-2.5 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 font-medium rounded-lg transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
                        onClick={() => alert("Switching to manual mode...")}
                    >
                        <span className="material-symbols-outlined text-slate-400 text-[16px]">pan_tool</span>
                        Manual Intervention
                    </button>
                </div>
            </section>
        </div>
        {isParametersModalOpen && (
            <AutoNegotiationParametersModal onClose={() => setIsParametersModalOpen(false)} />
        )}
    </div>
  );
};

export default AutoNegotiationView;