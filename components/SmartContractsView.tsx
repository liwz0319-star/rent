import React, { useState } from 'react';
import NotificationButton from './NotificationButton';
import SignContractModal from './SignContractModal';

interface SmartContractsViewProps {
  onNavigate: (view: any) => void;
  onOpenContractModal: () => void;
  onOpenSettingsModal: () => void;
}

const SmartContractsView: React.FC<SmartContractsViewProps> = ({ onNavigate, onOpenContractModal, onOpenSettingsModal }) => {
  const [isSignContractModalOpen, setIsSignContractModalOpen] = useState(false);

  return (
    <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-8 flex-shrink-0 z-40">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <a className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('home')}>
                        <span className="material-symbols-outlined text-[18px]">home</span>
                    </a>
                    <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                    <span className="font-medium">OPS & EXECUTION</span>
                    <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                    <span className="font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-xs tracking-wide uppercase">Smart Contracts</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block group">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input className="block w-64 rounded-full border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-primary/20 placeholder:text-slate-400 transition-all" placeholder="Search contracts, hash, or tags..." type="text"/>
                    </div>
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <NotificationButton />
                    <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors" onClick={onOpenSettingsModal}>
                        <span className="material-symbols-outlined text-[22px]">settings</span>
                    </button>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto flex flex-col gap-8">
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div>
                            <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-2">Contracts Dashboard</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">AI-verified immutable records for commercial leasing and asset transfers.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm" onClick={() => alert('Filter clicked')}>
                                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                Filter View
                            </button>
                            <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover shadow-md shadow-orange-500/20 flex items-center gap-2 transition-all" onClick={onOpenContractModal}>
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                New Contract
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
                                <span className="material-symbols-outlined text-[80px]">pending_actions</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 z-10">
                                <div className="p-1.5 bg-orange-50 dark:bg-orange-900/20 rounded text-primary">
                                    <span className="material-symbols-outlined text-[20px]">history_edu</span>
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wide">Pending Signatures</span>
                            </div>
                            <div className="flex items-baseline gap-2 z-10">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
                                <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-[12px]">trending_up</span> 8.2%
                                </span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
                                <span className="material-symbols-outlined text-[80px]">verified_user</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 z-10">
                                <div className="p-1.5 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined text-[20px]">verified</span>
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wide">Active Contracts</span>
                            </div>
                            <div className="flex items-baseline gap-2 z-10">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">45</p>
                                <p className="text-xs text-slate-400">Total value: <span className="text-slate-700 dark:text-slate-300 font-medium">$4.2M</span></p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
                                <span className="material-symbols-outlined text-[80px]">archive</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 z-10">
                                <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wide">Archived</span>
                            </div>
                            <div className="flex items-baseline gap-2 z-10">
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">128</p>
                                <p className="text-xs text-slate-400">Stored on-chain</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex-1">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/80 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                                        <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-12">
                                            <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                                        </th>
                                        <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contract ID</th>
                                        <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Asset Name</th>
                                        <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Counterparty</th>
                                        <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                        <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    <tr className="group bg-orange-50/40 dark:bg-orange-900/10 hover:bg-orange-50/70 dark:hover:bg-orange-900/20 transition-colors cursor-pointer border-l-4 border-l-primary relative">
                                        <td className="py-4 px-6 relative">
                                            <input defaultChecked className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-slate-900 dark:text-white">#CTR-2023-889</span>
                                                <span className="material-symbols-outlined text-primary text-[14px]" title="AI Generated">auto_awesome</span>
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">HASH: 0x7f83...a4b</div>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-slate-900 dark:text-white font-medium">
                                            Tech Plaza, Suite 400
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-700 dark:text-blue-300 text-xs font-bold shadow-sm">N</div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-slate-900 dark:text-white">NexGen Logistics</span>
                                                    <span className="text-[10px] text-slate-400">ID: 992-12</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                                                <span className="size-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                                Pending Signature
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-primary hover:text-orange-700 dark:hover:text-orange-300 hover:border-orange-200 dark:hover:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium text-xs shadow-sm transition-all" onClick={onOpenContractModal}>Review</button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-l-4 border-l-transparent">
                                        <td className="py-4 px-6">
                                            <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">#CTR-2023-842</span>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                                            Sunset Blvd Retail, Unit B
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 flex items-center justify-center text-green-700 dark:text-green-300 text-xs font-bold shadow-sm">G</div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">GreenLife Organic</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                                                <span className="size-1.5 rounded-full bg-green-500"></span>
                                                Active
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm p-1" onClick={onOpenContractModal}>
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-l-4 border-l-transparent">
                                        <td className="py-4 px-6">
                                            <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">#CTR-2023-755</span>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                                            Harbor View Warehouse
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 flex items-center justify-center text-purple-700 dark:text-purple-300 text-xs font-bold shadow-sm">A</div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Apex Shipping</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                                                <span className="size-1.5 rounded-full bg-green-500"></span>
                                                Active
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm p-1" onClick={onOpenContractModal}>
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-l-4 border-l-transparent">
                                        <td className="py-4 px-6">
                                            <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">#CTR-2022-991</span>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                                            Downtown Lofts, 12A
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 text-xs font-bold shadow-sm">S</div>
                                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Studio 54</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                                <span className="size-1.5 rounded-full bg-slate-400"></span>
                                                Expired
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm p-1" onClick={() => alert('Archive clicked')}>
                                                <span className="material-symbols-outlined text-[20px]">archive</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Right Sidebar - Contract Details */}
        <aside className="w-[420px] bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 flex flex-col h-full flex-shrink-0 z-10 shadow-xl overflow-hidden">
            <div className="h-16 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 flex-shrink-0 bg-slate-50/50 dark:bg-slate-700/50">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400">article</span>
                    Contract Details
                </h3>
                <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 p-1 rounded-md border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all" onClick={() => alert('Close details')}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">#CTR-2023-889</h2>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wide border border-orange-200 dark:border-orange-800">Action Required</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Tech Plaza, Suite 400 • Commercial Lease Agreement</p>
                    <div className="flex gap-2 mt-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                            <span className="material-symbols-outlined text-[14px]">calendar_today</span> Due: Oct 24, 2023
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                            <span className="material-symbols-outlined text-[14px]">smart_toy</span> AI Verified
                        </span>
                    </div>
                </div>
                <div className="relative py-2">
                    <div className="absolute top-3 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-600 -z-10 rounded"></div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-800 shadow-sm">
                                <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Payment</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-800 shadow-sm">
                                <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Generated</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="size-6 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary ring-4 ring-white dark:ring-slate-800 shadow-sm">
                                <span className="material-symbols-outlined text-[14px] animate-pulse">edit_document</span>
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Signatures</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="size-6 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-400 ring-4 ring-white dark:ring-slate-800">
                                <span className="material-symbols-outlined text-[14px]">lock</span>
                            </div>
                            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">Verified</span>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex gap-4 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-colors group cursor-pointer">
                    <div className="w-16 h-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-red-500 text-3xl">picture_as_pdf</span>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Lease_Agreement_Final.pdf</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">2.4 MB • Generated via AssetAI Core</p>
                        <div className="flex gap-3 mt-1">
                            <span className="text-xs text-primary font-semibold hover:underline flex items-center gap-1" onClick={() => alert('Download clicked')}>
                                <span className="material-symbols-outlined text-[14px]">download</span> Download
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium hover:underline flex items-center gap-1" onClick={onOpenContractModal}>
                                <span className="material-symbols-outlined text-[14px]">visibility</span> Preview
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50/40 dark:bg-blue-900/10 rounded-xl p-5 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">AI Legal Extraction</h4>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-blue-500 mt-1 text-[8px] material-symbols-outlined">circle</span>
                            <span><span className="font-semibold text-slate-900 dark:text-white">Term Length:</span> 36 Months fixed.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-blue-500 mt-1 text-[8px] material-symbols-outlined">circle</span>
                            <span><span className="font-semibold text-slate-900 dark:text-white">Rent Escalation:</span> 3% annual increase on base rent starting Year 2.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-blue-500 mt-1 text-[8px] material-symbols-outlined">circle</span>
                            <span><span className="font-semibold text-slate-900 dark:text-white">Early Termination:</span> 2-month penalty fee applies if exited before 18 months.</span>
                        </li>
                    </ul>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-[18px]">hub</span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Blockchain Verification</h4>
                        </div>
                        <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide border border-green-200 dark:border-green-800">Secured</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 border border-slate-200 dark:border-slate-600 group hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                        <code className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate flex-1 select-all">0x7f839a2b1c...a4b291c</code>
                        <button className="text-slate-400 hover:text-primary transition-colors tooltip" title="Copy Hash" onClick={() => alert('Hash copied')}>
                            <span className="material-symbols-outlined text-[16px]">content_copy</span>
                        </button>
                        <button className="text-slate-400 hover:text-primary transition-colors tooltip" title="View on Explorer" onClick={() => alert('Viewing on explorer')}>
                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        </button>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 text-right">Last sync: 2 mins ago</p>
                </div>
            </div>
            <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3 bg-white dark:bg-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button 
                    className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]" 
                    onClick={() => setIsSignContractModalOpen(true)}
                >
                    <span className="material-symbols-outlined">ink_pen</span>
                    Sign Contract
                </button>
                <button className="w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm" onClick={onOpenContractModal}>
                    View Full Document
                </button>
            </div>
        </aside>
        {isSignContractModalOpen && (
            <SignContractModal onClose={() => setIsSignContractModalOpen(false)} />
        )}
    </div>
  );
};

export default SmartContractsView;