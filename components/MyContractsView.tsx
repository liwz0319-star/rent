import React, { useState } from 'react';

const MyContractsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Contracts');

  const contracts = [
    {
      id: 1,
      title: "Creative Loft - Unit 3",
      merchant: "Urban Workspaces Ltd.",
      rent: "¥ 45,000",
      term: "24 Months",
      updated: "2 hours ago",
      status: "Pending Signature",
      statusType: "pending", // for logic
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZRQd-5IKCH-0yWjtJZAJpuZLmQzHyOgtPDRYZBkE8r_6eUzAZ9_tIdvPOTm2xR6IIYzpX6R-4KmMuGDCKfaFKIfUP6_b9EW1JkwGkg8v4F1aT16lJbnwFwoB41KfhVnnJzaUC-JExU83JOwt-ExRO5Bg73lKA7pzOYJQF_3iX8oYNPXB75cmTGMc-Q3BU7qdObPfCrMHevOq90SWj1CY4UPg5WEZ9buvO52jSdFGOEG4NEyVjYpSiQMFGninuHxQFHLN72bhViLE5"
    },
    {
      id: 2,
      title: "Sunrise Tech Park - Suite 402",
      merchant: "Global Real Estate Holdings",
      rent: "¥ 28,500",
      term: "12 Months",
      updated: "Yesterday",
      status: "Negotiating",
      statusType: "negotiating",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApUKBFHwT81qLvanQkfmUVyImv5sBTcpGS45vjzHDdE0y01fw52JvueQ51h4q2ogbDb7DL50W938g5ZwKxuTDd3kejJFKO1GV_dF1UsaU5mnYSyES9USDW5WN8OF-5xhDRrVFMuDvZ2Z8lbmu-s8OocpXPEphBuvF1PI5P-_tMOulwm1BaYTKdAuFyYIyXfxVKFbq0L5OaLtArB_xrxnA4f3E7p9UJbM3W_1ZsLfxVMabHRxsq2jMlN8mzRevceUploqHBKfolpj9L"
    },
    {
      id: 3,
      title: "Downtown Hub - Flex Desk",
      merchant: "WeSpace Inc.",
      rent: "¥ 2,000",
      term: "6 Months",
      updated: "Oct 12, 2023",
      status: "Active / Signed",
      statusType: "signed",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7yuMBbdAkBlpzzIRAwjm-APkEr8R876D2TE8p81EkH9BIBiw3cA4sDBR9Q1Kj7n451URM3IBDJCnJVrB5yyAljKWGTR0SkZuhqOArdaQyRZ3p34AoBStAtCha8O35B2Md1-IBOMD-NpZ6wcJ0IyzTGL2Rl1Ms3VRG3bb_vhLRzT6QpnE3p5dQnw_CKmbkmdBgxZbhpkIh1xP1ROfiZrGKy7GVGHXZIJkRi2wJYewcQC15a9hJSNVrgBc_JVEBYveHR5pmGO9S8Tvr"
    },
    {
      id: 4,
      title: "Riverfront Office - 5F",
      merchant: "BlueSky Properties",
      rent: "¥ 60,000",
      term: "36 Months",
      updated: "Sep 01, 2023",
      status: "Active / Signed",
      statusType: "signed",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDceNggVV9udwfDFVwAinQirV9Nl7EVNGmsPL2Xylwm6oN_1nBnjwB95P9Pm7btKZ6camsR4s1xDu9cydrPKX_4qsfeKTCmlEPTgzrwMtAdzYH9Z5FiBGGm9F4Up5mGvq4ot_xpYE1gSWtAnmJM5Mo6I7O4l82Fh8gm44rRsTPGSxGdil3lo-QtBluDR7JA1kkfaa_FMjSMhmtUzv3fVJjnEsNXak7LArqneyb4WX2_yKTzka9-IPZeZWBfSLXChF4hBKokOG75UMUt"
    }
  ];

  const filteredContracts = contracts.filter(c => {
    if (activeTab === 'All Contracts') return true;
    if (activeTab === 'In Negotiation' && c.statusType === 'negotiating') return true;
    if (activeTab === 'To be Signed' && c.statusType === 'pending') return true;
    if (activeTab === 'Signed' && c.statusType === 'signed') return true;
    return false;
  });

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Top Sticky Header Region */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shrink-0 z-10 shadow-sm">
        <div className="px-8 pt-8 pb-0 max-w-7xl mx-auto w-full">
          {/* Page Title */}
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Contract Management</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Manage your lease agreements and track legal fulfillment status.</p>
          </div>
          {/* Tabs */}
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {[
              { name: 'All Contracts', count: 12 },
              { name: 'In Negotiation', count: 2 },
              { name: 'To be Signed', count: 1 },
              { name: 'Signed', count: 9 }
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`relative flex items-center gap-2 pb-4 text-sm transition-all border-b-[3px] ${
                  activeTab === tab.name
                    ? 'text-primary border-primary font-bold'
                    : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white hover:border-slate-300 font-medium'
                }`}
              >
                {tab.name}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.name 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & List Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          {/* Search & Filters Toolbar */}
          <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex-1 min-w-[280px] relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-slate-900 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 transition-all text-sm font-medium" 
                placeholder="Search by asset, merchant or contract ID..." 
                type="text"
              />
            </div>
            <div className="min-w-[200px] relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
              <input 
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-slate-900 border-transparent focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 transition-all text-sm font-medium cursor-pointer" 
                placeholder="Filter by date" 
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">arrow_drop_down</span>
            </div>
            <button className="h-12 w-12 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>

          {/* Contracts List */}
          <div className="flex flex-col gap-4">
            {filteredContracts.map((contract) => (
              <div 
                key={contract.id}
                className={`group flex flex-col md:flex-row gap-5 p-5 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-sm hover:shadow-md transition-all items-start md:items-center ${
                  contract.statusType === 'pending' ? 'border-l-[6px] border-l-primary' : 'border border-slate-200 dark:border-slate-700'
                }`}
              >
                {/* Thumbnail */}
                <div 
                  className={`w-full md:w-48 aspect-video md:aspect-[4/3] rounded-lg bg-cover bg-center shrink-0 relative overflow-hidden ${contract.statusType === 'signed' ? 'grayscale group-hover:grayscale-0' : ''}`}
                  style={{backgroundImage: `url("${contract.image}")`}}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                </div>

                {/* Main Info */}
                <div className="flex-1 flex flex-col justify-center gap-3 w-full">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{contract.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">storefront</span>
                      Merchant: {contract.merchant}
                    </p>
                  </div>
                  {/* Key Details Grid */}
                  <div className="flex flex-wrap gap-x-8 gap-y-2 mt-1">
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Monthly Rent</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{contract.rent}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Lease Term</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{contract.term}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                        {contract.statusType === 'signed' ? 'Date Signed' : 'Last Updated'}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{contract.updated}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Action */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700 pt-4 md:pt-0 md:pl-6 shrink-0">
                  {contract.statusType === 'pending' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-primary dark:text-orange-400 text-xs font-bold border border-orange-100 dark:border-orange-900/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Pending Signature
                    </span>
                  )}
                  {contract.statusType === 'negotiating' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/10 text-yellow-700 dark:text-yellow-500 text-xs font-bold border border-yellow-100 dark:border-yellow-900/30">
                      <span className="material-symbols-outlined text-[14px]">handshake</span>
                      Negotiating
                    </span>
                  )}
                  {contract.statusType === 'signed' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-500 text-xs font-bold border border-green-100 dark:border-green-900/30">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Active / Signed
                    </span>
                  )}

                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    {contract.statusType === 'pending' && (
                      <>
                        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-orange-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all w-full md:w-[160px]">
                          <span className="material-symbols-outlined text-[18px]">edit_document</span>
                          Review &amp; Sign
                        </button>
                        <button className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs font-medium text-center underline decoration-dotted underline-offset-4">
                          View Contract Details
                        </button>
                      </>
                    )}
                    {contract.statusType === 'negotiating' && (
                      <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-primary text-slate-900 dark:text-white text-sm font-bold rounded-lg transition-all w-full md:w-[160px]">
                        Continue
                      </button>
                    )}
                    {contract.statusType === 'signed' && (
                      <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-sm font-bold rounded-lg transition-all w-full md:w-[160px]">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Download PDF
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContractsView;