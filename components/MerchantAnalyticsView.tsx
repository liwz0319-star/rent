import React from 'react';

const MerchantAnalyticsView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-white dark:bg-[#1a1410] transition-colors duration-300">
      <header className="h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-[#1a1410]/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-200/50 dark:border-gray-800/50 flex-shrink-0">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Consumer Data Analytics</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1.5 shadow-sm">
            <button className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded" onClick={() => alert("7 Days Selected")}>7 Days</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700/50 rounded" onClick={() => alert("30 Days Selected")}>30 Days</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700/50 rounded" onClick={() => alert("Quarter Selected")}>Q3 2023</button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
        <div className="max-w-[1600px] mx-auto">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1f1610] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">search_insights</span>
                </div>
                <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                    +12.5% <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Total Matching Intent</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">842 <span className="text-sm font-normal text-gray-400">leads</span></h3>
            </div>
            <div className="bg-white dark:bg-[#1f1610] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                    <span className="material-symbols-outlined text-blue-600">sync_alt</span>
                </div>
                <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                    +2.1% <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Conversion Rate</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">18.4%</h3>
            </div>
            <div className="bg-white dark:bg-[#1f1610] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                    <span className="material-symbols-outlined text-purple-600">payments</span>
                </div>
                <span className="flex items-center text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                    0.0% <span className="material-symbols-outlined text-[14px]">remove</span>
                </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Avg. Negotiation Price</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$4,250 <span className="text-sm font-normal text-gray-400">/mo</span></h3>
            </div>
            <div className="bg-white dark:bg-[#1f1610] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <span className="material-symbols-outlined text-green-600">loyalty</span>
                </div>
                <span className="flex items-center text-xs font-medium text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                    -1.4% <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Retention Index</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">92.8</h3>
            </div>
            </div>

            {/* Middle Section: Heatmap & Persona */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Heatmap */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1f1610] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Demand Heatmap</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-3 h-3 rounded-sm bg-orange-100"></span> Low
                    <span className="w-3 h-3 rounded-sm bg-orange-300"></span> Med
                    <span className="w-3 h-3 rounded-sm bg-primary"></span> High
                </div>
                </div>
                <div className="flex flex-col gap-1">
                <div className="grid grid-cols-8 text-xs text-gray-400 text-center mb-2">
                    <div></div>
                    <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                </div>
                <div className="grid grid-cols-8 gap-y-2 gap-x-1 items-center">
                    <div className="text-xs text-gray-500 text-right pr-3">09:00</div>
                    <div className="h-8 rounded bg-orange-100"></div>
                    <div className="h-8 rounded bg-orange-200"></div>
                    <div className="h-8 rounded bg-primary/40"></div>
                    <div className="h-8 rounded bg-primary/60"></div>
                    <div className="h-8 rounded bg-orange-100"></div>
                    <div className="h-8 rounded bg-gray-50 dark:bg-gray-800"></div>
                    <div className="h-8 rounded bg-gray-50 dark:bg-gray-800"></div>
                    <div className="text-xs text-gray-500 text-right pr-3">12:00</div>
                    <div className="h-8 rounded bg-orange-200"></div>
                    <div className="h-8 rounded bg-primary/80"></div>
                    <div className="h-8 rounded bg-primary"></div>
                    <div className="h-8 rounded bg-primary"></div>
                    <div className="h-8 rounded bg-primary/60"></div>
                    <div className="h-8 rounded bg-orange-100"></div>
                    <div className="h-8 rounded bg-gray-50 dark:bg-gray-800"></div>
                    <div className="text-xs text-gray-500 text-right pr-3">15:00</div>
                    <div className="h-8 rounded bg-primary/60"></div>
                    <div className="h-8 rounded bg-primary"></div>
                    <div className="h-8 rounded bg-primary/80"></div>
                    <div className="h-8 rounded bg-primary"></div>
                    <div className="h-8 rounded bg-primary/40"></div>
                    <div className="h-8 rounded bg-orange-100"></div>
                    <div className="h-8 rounded bg-gray-50 dark:bg-gray-800"></div>
                    <div className="text-xs text-gray-500 text-right pr-3">18:00</div>
                    <div className="h-8 rounded bg-orange-100"></div>
                    <div className="h-8 rounded bg-orange-300"></div>
                    <div className="h-8 rounded bg-orange-200"></div>
                    <div className="h-8 rounded bg-orange-300"></div>
                    <div className="h-8 rounded bg-orange-100"></div>
                    <div className="h-8 rounded bg-gray-50 dark:bg-gray-800"></div>
                    <div className="h-8 rounded bg-gray-50 dark:bg-gray-800"></div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-4">Showing aggregate intent density by time slot.</p>
                </div>
            </div>
            
            {/* Consumer Persona */}
            <div className="bg-white dark:bg-[#1f1610] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Consumer Persona</h3>
                <div className="flex-1 flex flex-col justify-center space-y-6">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600 dark:text-gray-300">Tech &amp; Software</span>
                    <span className="font-bold text-primary">45%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600 dark:text-gray-300">Finance &amp; Legal</span>
                    <span className="font-bold text-gray-500 dark:text-gray-400">28%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full" style={{width: '28%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600 dark:text-gray-300">Creative Agencies</span>
                    <span className="font-bold text-gray-500 dark:text-gray-400">15%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-300 dark:bg-gray-600 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600 dark:text-gray-300">Other</span>
                    <span className="font-bold text-gray-500 dark:text-gray-400">12%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full" style={{width: '12%'}}></div>
                    </div>
                </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Avg. Company Size</span>
                    <span className="font-semibold text-gray-900 dark:text-white">15 - 50 Employees</span>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                    <span className="text-gray-500">Price Sensitivity</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Moderate</span>
                </div>
                </div>
            </div>
            </div>

            {/* Trend Chart */}
            <div className="bg-white dark:bg-[#1f1610] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Matching Efficiency Trend</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your asset performance vs. Market Benchmark</p>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <div className="flex items-center gap-2 text-sm">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-gray-600 dark:text-gray-300">Your Assets</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="text-gray-600 dark:text-gray-300">Market Avg</span>
                </div>
                </div>
            </div>
            <div className="relative h-64 w-full rounded-lg border border-gray-50 dark:border-gray-800" style={{
                backgroundImage: 'linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}>
                <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-2">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
                </div>
                <svg className="absolute inset-0 w-full h-full p-2" preserveAspectRatio="none">
                <path d="M0 60 Q 50 70, 100 65 T 200 60 T 300 55 T 400 60 T 500 50 T 600 55 T 700 45 T 800 50 T 900 40 L 950 45" fill="none" stroke="#CBD5E1" strokeDasharray="5,5" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                <path className="drop-shadow-lg" d="M0 80 Q 50 75, 100 60 T 200 50 T 300 40 T 400 35 T 500 40 T 600 30 T 700 25 T 800 20 T 900 15 L 950 10" fill="none" stroke="#FD780F" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                <circle cx="300" cy="40" fill="#FD780F" r="4" stroke="white" strokeWidth="2"></circle>
                <circle cx="600" cy="30" fill="#FD780F" r="4" stroke="white" strokeWidth="2"></circle>
                <circle cx="900" cy="15" fill="#FD780F" r="4" stroke="white" strokeWidth="2"></circle>
                </svg>
                <div className="absolute -bottom-6 w-full flex justify-between px-2 text-xs text-gray-400">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
                <span>Week 7</span>
                <span>Week 8</span>
                </div>
            </div>
            <div className="h-6"></div> 
            </div>

            {/* Leads Table */}
            <div className="bg-white dark:bg-[#1f1610] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent High-Potential Leads</h3>
                <button 
                    onClick={() => alert("View All Leads")}
                    className="text-primary text-sm font-medium hover:text-orange-600 flex items-center gap-1"
                >
                    View All Leads <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <tr>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Demand Type</th>
                    <th className="px-6 py-4">Budget Range</th>
                    <th className="px-6 py-4">AI Confidence</th>
                    <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">A</div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Apex FinTech</p>
                            <p className="text-xs text-gray-500">Finance • 25 employees</p>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        Private Office
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-300">
                        $5k - $7k/mo
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                        <div className="flex-1 w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="text-xs font-bold text-green-600">95%</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button onClick={() => alert("Contact Apex")} className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        </button>
                    </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs">N</div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Nova Creative</p>
                            <p className="text-xs text-gray-500">Agency • 12 employees</p>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        Flex Desk
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-300">
                        $2k - $3.5k/mo
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                        <div className="flex-1 w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{width: '88%'}}></div>
                        </div>
                        <span className="text-xs font-bold text-primary">88%</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button onClick={() => alert("Contact Nova")} className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        </button>
                    </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xs">G</div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">GreenLoop Inc.</p>
                            <p className="text-xs text-gray-500">Tech • 40 employees</p>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        Full Floor
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-300">
                        $12k - $15k/mo
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                        <div className="flex-1 w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div className="bg-primary/70 h-1.5 rounded-full" style={{width: '76%'}}></div>
                        </div>
                        <span className="text-xs font-bold text-primary/80">76%</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button onClick={() => alert("Contact GreenLoop")} className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
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
  );
};

export default MerchantAnalyticsView;