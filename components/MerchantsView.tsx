import React, { useState, useEffect } from 'react';
import MerchantDetailsModal from './MerchantDetailsModal';
import AddMerchantModal from './AddMerchantModal';
import EditMerchantModal from './EditMerchantModal';

const INITIAL_MERCHANTS_DATA = [
  {
    id: 1,
    name: "Apex Workspaces",
    email: "admin@apexwork.com",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsuDQyxHt0yS7dZ0K5AUDvQ785CSCe3tclMxcLAsuhZvwvR0ViBp92W3f4hN8i87Npi7ETXyl78N7k3_YmD0qKWsx2ONQVsPjoJaMncJdOFIcZGZWCKAKpTzHIqfVrGLaStBK-Bv_25jX7bZWN34QaGCP9Lv_9tn3-xP14jSKwQ6DFkpp8DPV0_awnA577By4-N-UV9uMjxyqjH6fUFU0M6RsgRrmcuStrzPb7iW2DL1DhjQ81GHWDMpNparVq47FYJetRubN_qECr",
    category: "Coworking",
    categoryColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    assets: "12 Locations",
    status: "Verified",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
    statusDot: "bg-green-500",
    score: 98,
    scoreLabel: "Excellent"
  },
  {
    id: 2,
    name: "Downtown Hub",
    email: "contact@downtownhub.io",
    initials: "DH",
    initialsBg: "bg-yellow-100 text-yellow-700",
    category: "Business Center",
    categoryColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    assets: "4 Units",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
    statusDot: "bg-yellow-500",
    score: null,
    scoreLabel: "Calculating..."
  },
  {
    id: 3,
    name: "Skyline Offices",
    email: "info@skyline.net",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQscwmzYxbIonVBU-e1bAvJTHj-6vRsAqTDJ_s0LBl5e9iYf2PokrUvzeIhTHG2-HATqy5lse80E1u8NirDfPR6-CQp0eVVfrorxBJJWriK61G0Q7GVibMMS7qTTDHaekjG-99YGB9BxpFXok054Fjx2bROv4OrNrflHRCmGM-73u-3054dRkgw0NwKq79HTw16jhbF_DOiXZ9mj-f042ddYIMnjDl6R0j7gGq8aK4XsAgeGbCL-Fph1RGIHlJ5C8FC9Qzd51qITA3",
    category: "Private Office",
    categoryColor: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300",
    assets: "22 Suites",
    status: "Suspended",
    statusColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800",
    statusDot: "bg-red-500",
    score: 45,
    scoreLabel: "Low Quality"
  },
  {
    id: 4,
    name: "EcoSpace Ventures",
    email: "green@ecospace.com",
    initials: "ES",
    initialsBg: "bg-teal-100 text-teal-700",
    category: "Coworking",
    categoryColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    assets: "8 Locations",
    status: "Verified",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
    statusDot: "bg-green-500",
    score: 88,
    scoreLabel: "Good"
  }
];

const MerchantsView: React.FC = () => {
  const [merchants, setMerchants] = useState(INITIAL_MERCHANTS_DATA);
  const [selectedMerchant, setSelectedMerchant] = useState<any>(null);
  const [isAddMerchantModalOpen, setIsAddMerchantModalOpen] = useState(false);
  const [isEditMerchantModalOpen, setIsEditMerchantModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [actionMenuOpenId, setActionMenuOpenId] = useState<number | null>(null);

  // Close action menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActionMenuOpenId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleApprove = () => {
    alert(`Merchant ${selectedMerchant?.name} has been approved.`);
    setSelectedMerchant(null);
  };

  const handleReject = () => {
    alert(`Merchant ${selectedMerchant?.name} has been rejected.`);
    setSelectedMerchant(null);
  };

  const handleAddMerchantSubmit = () => {
    alert("New merchant application submitted successfully!");
    setIsAddMerchantModalOpen(false);
  };

  const handleEditSave = () => {
    alert(`Merchant details for ${selectedMerchant?.name} updated successfully!`);
    setIsEditMerchantModalOpen(false);
  };

  const handleEditDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedMerchant?.name}?`)) {
      alert("Merchant deleted.");
      setIsEditMerchantModalOpen(false);
      setSelectedMerchant(null);
    }
  };

  const handleEditAction = (e: React.MouseEvent, merchant: any) => {
    e.stopPropagation();
    setSelectedMerchant(merchant);
    setIsEditMerchantModalOpen(true);
    setActionMenuOpenId(null);
  };

  const handleDisableAction = (e: React.MouseEvent, merchant: any) => {
    e.stopPropagation();
    const newStatus = merchant.status === 'Suspended' ? 'Verified' : 'Suspended';
    const newStatusColor = newStatus === 'Verified' 
        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800"
        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800";
    const newStatusDot = newStatus === 'Verified' ? "bg-green-500" : "bg-red-500";

    setMerchants(prev => prev.map(m => 
        m.id === merchant.id 
        ? { ...m, status: newStatus, statusColor: newStatusColor, statusDot: newStatusDot } 
        : m
    ));
    setActionMenuOpenId(null);
  };

  const toggleActionMenu = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setActionMenuOpenId(actionMenuOpenId === id ? null : id);
  };

  const openEditModal = () => {
    setIsEditMerchantModalOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50 dark:bg-slate-900">
        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto w-full p-6 lg:p-10 space-y-8 scroll-smooth">
            {/* Breadcrumbs & Header */}
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                    <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors cursor-pointer">Home</a>
                    <span className="text-slate-400 dark:text-slate-600 text-sm font-medium">/</span>
                    <span className="text-slate-900 dark:text-white text-sm font-semibold">Merchants</span>
                </div>
                <div className="flex flex-wrap justify-between gap-4 items-end">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h2 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Merchant Management</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Manage onboarded merchants, track performance scores, and handle verification requests.</p>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Merchants</p>
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '24px'}}>store</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">1,240</p>
                        <div className="flex items-center text-green-700 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded text-xs font-bold">
                            <span className="material-symbols-outlined" style={{fontSize: '14px'}}>trending_up</span>
                            <span className="ml-0.5">12%</span>
                        </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">Compared to last month</p>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Active Assets</p>
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '24px'}}>domain</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">450 <span className="text-lg font-medium text-slate-400 dark:text-slate-500">Units</span></p>
                        <div className="flex items-center text-green-700 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded text-xs font-bold">
                            <span className="material-symbols-outlined" style={{fontSize: '14px'}}>trending_up</span>
                            <span className="ml-0.5">5%</span>
                        </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">Occupancy rate stable</p>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                    <div className="absolute right-0 top-0 h-full w-1 bg-primary"></div>
                    <div className="flex items-center justify-between">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Pending Verifications</p>
                        <span className="material-symbols-outlined text-primary animate-pulse" style={{fontSize: '24px'}}>pending_actions</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">12</p>
                        <div className="flex items-center text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded text-xs font-bold">
                            <span className="ml-0.5">Needs Attention</span>
                        </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">3 high priority requests</p>
                </div>
            </div>

            {/* Advanced Filters & Toolbar */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-5">
                <div className="flex flex-col xl:flex-row gap-4 justify-between">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                        {/* Search Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors" style={{fontSize: '20px'}}>search</span>
                            </div>
                            <input 
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary sm:text-sm transition-shadow shadow-sm" 
                                placeholder="Search ID or Name" 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        
                        {/* Status Select */}
                        <div className="relative">
                            <select 
                                className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm cursor-pointer"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="">Status: All</option>
                                <option value="Verified">Verified</option>
                                <option value="Pending">Pending</option>
                                <option value="Suspended">Suspended</option>
                            </select>
                        </div>

                        {/* Category Select */}
                        <div className="relative">
                            <select 
                                className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm cursor-pointer"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                <option value="">Category: All</option>
                                <option value="Coworking">Coworking</option>
                                <option value="Private Office">Private Office</option>
                                <option value="Business Center">Business Center</option>
                            </select>
                        </div>

                        {/* Date Picker (Dummy) */}
                        <div className="relative">
                            <div className="flex items-center w-full pl-3 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white cursor-pointer hover:border-slate-400 dark:hover:border-slate-500 transition-colors shadow-sm group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary mr-2" style={{fontSize: '20px'}}>date_range</span>
                                <span className="text-sm truncate text-slate-500 dark:text-slate-400">Onboarding Date</span>
                                <span className="material-symbols-outlined ml-auto text-slate-400" style={{fontSize: '20px'}}>arrow_drop_down</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 pt-1 xl:pt-0">
                        <button 
                            onClick={() => setIsAddMerchantModalOpen(true)}
                            className="w-full xl:w-auto inline-flex justify-center items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-lg shadow-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-95 whitespace-nowrap"
                        >
                            <span className="material-symbols-outlined mr-2" style={{fontSize: '20px'}}>add_business</span>
                            Add New Merchant
                        </button>
                    </div>
                </div>

                {/* Active Filters Display */}
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mr-1">Active Filters:</span>
                    {statusFilter && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            Status: {statusFilter}
                            <button onClick={() => setStatusFilter('')} className="ml-1.5 inline-flex items-center justify-center text-primary hover:text-primary-hover">
                                <span className="material-symbols-outlined" style={{fontSize: '14px'}}>close</span>
                            </button>
                        </span>
                    )}
                    {categoryFilter && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            Category: {categoryFilter}
                            <button onClick={() => setCategoryFilter('')} className="ml-1.5 inline-flex items-center justify-center text-primary hover:text-primary-hover">
                                <span className="material-symbols-outlined" style={{fontSize: '14px'}}>close</span>
                            </button>
                        </span>
                    )}
                    {(statusFilter || categoryFilter) && (
                        <button 
                            onClick={() => { setStatusFilter(''); setCategoryFilter(''); setSearchQuery(''); }} 
                            className="text-xs text-slate-500 hover:text-primary underline ml-2"
                        >
                            Clear all
                        </button>
                    )}
                    {!statusFilter && !categoryFilter && (
                        <span className="text-xs text-slate-400 italic">None</span>
                    )}
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white dark:bg-slate-800 shadow-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr>
                                <th className="px-6 py-4 text-left group cursor-pointer select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" scope="col">
                                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Merchant Name
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors" style={{fontSize: '16px'}}>unfold_more</span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left group cursor-pointer select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" scope="col">
                                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Category
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors" style={{fontSize: '16px'}}>unfold_more</span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left group cursor-pointer select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" scope="col">
                                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Listed Assets
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors" style={{fontSize: '16px'}}>unfold_more</span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left group cursor-pointer select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" scope="col">
                                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Status
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors" style={{fontSize: '16px'}}>unfold_more</span>
                                    </div>
                                </th>
                                <th className="px-6 py-4 text-left group cursor-pointer select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" scope="col">
                                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        <span className="flex items-center gap-1">
                                            AI Score 
                                            <span className="material-symbols-outlined text-primary text-[14px]">auto_awesome</span>
                                        </span>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors" style={{fontSize: '16px'}}>unfold_more</span>
                                    </div>
                                </th>
                                <th className="relative px-6 py-4" scope="col">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                            {merchants
                                .filter(m => !statusFilter || m.status === statusFilter)
                                .filter(m => !categoryFilter || m.category === categoryFilter)
                                .filter(m => !searchQuery || m.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                .map((merchant) => (
                                <tr 
                                    key={merchant.id} 
                                    onClick={() => setSelectedMerchant(merchant)}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer relative"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                {merchant.logo ? (
                                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center bg-cover bg-center border border-slate-200 dark:border-slate-600" style={{ backgroundImage: `url('${merchant.logo}')` }}></div>
                                                ) : (
                                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-xs shadow-inner ${merchant.initialsBg}`}>
                                                        {merchant.initials}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-slate-900 dark:text-white">{merchant.name}</div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">{merchant.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${merchant.categoryColor}`}>
                                            {merchant.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-300">
                                        {merchant.assets}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${merchant.statusColor}`}>
                                            <span className={`size-1.5 rounded-full ${merchant.statusDot}`}></span>
                                            {merchant.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            {merchant.score !== null ? (
                                                <>
                                                    <div className="relative size-10">
                                                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                                            <circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                                            <circle className={`stroke-current ${merchant.score > 80 ? 'text-primary' : 'text-red-500'}`} cx="18" cy="18" fill="none" r="16" strokeDasharray={`${merchant.score} 100`} strokeDashoffset="0" strokeLinecap="round" strokeWidth="3"></circle>
                                                        </svg>
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-900 dark:text-white">
                                                            {merchant.score}
                                                        </div>
                                                    </div>
                                                    <span className={`text-xs ${merchant.score > 80 ? 'text-slate-500 dark:text-slate-400' : 'text-red-600 dark:text-red-400'}`}>{merchant.scoreLabel}</span>
                                                </>
                                            ) : (
                                                <span className="text-sm text-slate-400 italic">Calculating...</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                        <button 
                                            onClick={(e) => toggleActionMenu(e, merchant.id)}
                                            className={`text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 ${actionMenuOpenId === merchant.id ? 'bg-slate-100 dark:bg-slate-700 text-primary' : ''}`}
                                        >
                                            <span className="material-symbols-outlined" style={{fontSize: '20px'}}>more_vert</span>
                                        </button>
                                        
                                        {/* Dropdown Menu */}
                                        {actionMenuOpenId === merchant.id && (
                                            <div className="absolute right-8 top-10 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden animate-[fadeIn_0.1s_ease-out]">
                                                <div className="py-1">
                                                    <button 
                                                        onClick={(e) => handleEditAction(e, merchant)}
                                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-left transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                                        Edit
                                                    </button>
                                                    <button 
                                                        onClick={(e) => handleDisableAction(e, merchant)}
                                                        className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left transition-colors ${merchant.status === 'Suspended' ? 'text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10' : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10'}`}
                                                    >
                                                        <span className="material-symbols-outlined text-[18px]">{merchant.status === 'Suspended' ? 'check_circle' : 'block'}</span>
                                                        {merchant.status === 'Suspended' ? 'Enable' : 'Disable'}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination Footer */}
                <div className="bg-white dark:bg-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 dark:border-slate-700 gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-slate-500 dark:text-slate-400 w-full sm:w-auto text-center sm:text-left">
                        <p className="whitespace-nowrap">
                            Showing <span className="font-bold text-slate-900 dark:text-white">1-10</span> of <span className="font-bold text-slate-900 dark:text-white">248</span> merchants
                        </p>
                        <div className="flex items-center gap-2">
                            <label className="hidden sm:inline" htmlFor="rows-per-page">Rows per page:</label>
                            <select className="py-1 pl-2 pr-7 text-sm border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary cursor-pointer" id="rows-per-page">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                        <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                            <button className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onClick={() => alert("Previous")}>
                                <span className="sr-only">Previous</span>
                                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>chevron_left</span>
                            </button>
                            <button className="z-10 bg-primary border-primary text-white relative inline-flex items-center px-4 py-2 border text-sm font-bold">1</button>
                            <button className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors">2</button>
                            <button className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors">3</button>
                            <span className="relative inline-flex items-center px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-400">...</span>
                            <button className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors">25</button>
                            <button className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onClick={() => alert("Next")}>
                                <span className="sr-only">Next</span>
                                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>chevron_right</span>
                            </button>
                        </nav>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            Go to
                            <input className="w-16 py-1 px-2 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary text-center" max="25" min="1" placeholder="1" type="number"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-10"></div> {/* Bottom Spacer */}
        </div>
        {selectedMerchant && !isEditMerchantModalOpen && (
            <MerchantDetailsModal 
                merchant={selectedMerchant} 
                onClose={() => setSelectedMerchant(null)}
                onApprove={handleApprove}
                onReject={handleReject}
                onEdit={openEditModal}
            />
        )}
        {/* Edit Merchant Modal (Overlays Details or replaces it) */}
        {isEditMerchantModalOpen && selectedMerchant && (
            <EditMerchantModal 
                merchant={selectedMerchant}
                onClose={() => setIsEditMerchantModalOpen(false)}
                onSave={handleEditSave}
                onDelete={handleEditDelete}
            />
        )}
        {/* Add Merchant Modal */}
        {isAddMerchantModalOpen && (
            <AddMerchantModal 
                onClose={() => setIsAddMerchantModalOpen(false)}
                onSubmit={handleAddMerchantSubmit}
            />
        )}
    </div>
  );
};

export default MerchantsView;