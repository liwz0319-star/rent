import React, { useState } from 'react';

const ServiceIntegrationView: React.FC = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('Cleaning');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="flex-1 overflow-y-auto flex flex-col relative">
            <div className="flex-1 max-w-[1200px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col gap-8">
                <header className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 max-w-xl">
                        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">Service Integration</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base">Manage third-party service providers, monitor supplier performance, and dispatch active work orders efficiently.</p>
                    </div>
                    <button 
                        onClick={() => alert("Dispatching new service...")}
                        className="flex-shrink-0 flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover transition-all text-white shadow-lg shadow-orange-500/20 text-sm font-bold tracking-wide active:translate-y-0.5"
                    >
                        <span className="material-symbols-outlined">add_task</span>
                        <span className="truncate">Dispatch New Service</span>
                    </button>
                </header>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Active Requests</p>
                            <span className="material-symbols-outlined text-primary">pending_actions</span>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <p className="text-slate-900 dark:text-white text-3xl font-black">14</p>
                            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+2 this week
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Avg. Response Time</p>
                            <span className="material-symbols-outlined text-primary">timer</span>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <p className="text-slate-900 dark:text-white text-3xl font-black">12m 30s</p>
                            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                                <span className="material-symbols-outlined text-sm mr-1">arrow_downward</span>-1m 15s
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Supplier Score</p>
                            <span className="material-symbols-outlined text-primary">stars</span>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <p className="text-slate-900 dark:text-white text-3xl font-black">4.8</p>
                            <span className="text-slate-500 dark:text-slate-400 text-base">/ 5.0</span>
                            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+0.2
                            </p>
                        </div>
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Service Work Order Board</h2>
                            <button className="text-primary text-sm font-bold hover:underline">View All History</button>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="flex border-b border-slate-200 dark:border-slate-700 px-4 gap-6 bg-gray-50/50 dark:bg-white/5">
                                {['Cleaning', 'IT Support', 'Catering'].map((tab) => (
                                    <button 
                                        key={tab}
                                        onClick={() => setActiveServiceTab(tab)}
                                        className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 px-2 transition-colors ${
                                            activeServiceTab === tab 
                                                ? 'border-b-primary text-primary' 
                                                : 'border-b-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                    >
                                        <p className="text-sm font-bold">{tab} ({tab === 'Cleaning' ? 5 : tab === 'IT Support' ? 3 : 6})</p>
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700">
                                {/* Static List Items */}
                                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer" onClick={() => alert("Viewing Request #SR-2024-001")}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">#SR-2024-001</span>
                                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                                                    In Progress
                                                </span>
                                            </div>
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">Lobby Main Entrance Spill</h3>
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">12m ago</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-2">
                                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtmBbMtWY239mzRKvxEpXdmNusm1dKEMSAToKaRjbUAR_XJLL98pAgleSEjOUoFJC5wKesBCHJVjNEiT1MD3owS9Frdf3fL5ieFDzY7IxeL0nk4ZhkC-LjVAKR5-hvDRySq7qi4ZxYcxGuUWHL53xoCVLoOphPgq5piGNbOWZf9gceCcQTVrRVn_DBTEtdcaf8A-x58311uZ5Zw67z9KmeZd10IBGcnvdpcaYcAsoE1UrstoVG7JUqVUl-TPPo68TQ1WZv4_WEa-dZ")'}}></div>
                                            <span className="text-sm text-slate-900 dark:text-white font-medium">CleanCo Services</span>
                                            <span className="ml-2 flex items-center gap-1 text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                                                <span className="material-symbols-outlined text-[10px]">bolt</span>AI Match
                                            </span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer" onClick={() => alert("Viewing Request #SR-2024-004")}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">#SR-2024-004</span>
                                                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 dark:bg-yellow-900/30 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-300 ring-1 ring-inset ring-yellow-600/20 dark:ring-yellow-400/20">
                                                    Dispatched
                                                </span>
                                            </div>
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">Conference Room B Sanitization</h3>
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">45m ago</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-2">
                                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA1_diBAV6x1JuTY6D-GNF0utu5wEbjwVl3OEbCL1RJdDOtgo9-PRqHWAy4Ic30tCIw4Nfj6NBoy4OE7F6stlOqVhuidPlswjNgcx3BfshrQDEIyu5NAiI-3XDuRnlkqMXYavDtBInBRLH55pLLXytSt4tOMHgMOAEzVhtL_pXxfidQiNug4gPy74HqeY1DCDsKJVPw_sqKRpBuipDDdp_c0Qjem2ZB0UZ0POnXPyXnLpi80Snfd71eANgl4y4Cwg0s6ZycbAQk3Hu")'}}></div>
                                            <span className="text-sm text-slate-900 dark:text-white font-medium">CleanCo Services</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer" onClick={() => alert("Viewing Request #SR-2024-012")}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">#SR-2024-012</span>
                                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20 dark:ring-emerald-400/20">
                                                    Completed
                                                </span>
                                            </div>
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">Executive Suite 4F Window Clean</h3>
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">2h ago</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-2">
                                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLkq9a16p6lE6X1diV_PL88YT1qoGmCxikUslFqKRTkUoTreBMG5GwsvQxPsJZj4NRH1kPuKffVGueUI89NVW5htovnNCun7yLIZebIxzBHDjK7MoVRlgnKB0vjw6fy-ZZ9h3Te4GOqz_yx5trQ8WT1xTt_hNOXErpzm9eo_ci-0j1AQYzvfAsj--9PcQz93nljTyKOQ8Npk7KRSj18ICFc4J69DDsNkUrDe6BDAL16gncp5jlBGUPIhbcdv1eCo3Ux_ThFHZDDzzH")'}}></div>
                                            <span className="text-sm text-slate-900 dark:text-white font-medium">SkyHigh Services</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer" onClick={() => alert("Viewing Request #SR-2024-015")}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">#SR-2024-015</span>
                                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                                                    In Progress
                                                </span>
                                            </div>
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1">Cafeteria Waste Disposal</h3>
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">10m ago</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-2">
                                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHdlTDgb_qPwQnYgAkv_Gv57iprpN3TWEys93vBWnwCdhP2Vx1FeVDrIl4fG68XTXLGn-xN2likJQjOBwVqAUSqH_PrWmZiSjWb-Sd8PUxbP60Mxm6k-Ept8-giqcrjkJWciq4cfgVlkPTSOj_tMUtDdpzZE0NpEtslngm61FUWggkqjZugQww6DSJku_l9LovNm0tSJtR0wMBwmf31SeiQQ7O0ns8diSXPs1g7HkJpxICnb-jmgPONoxDQL3gzq9DBRPslz0gns7w")'}}></div>
                                            <span className="text-sm text-slate-900 dark:text-white font-medium">CleanCo Services</span>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Supplier Management</h2>
                            <button className="text-primary text-sm font-bold hover:underline">Directory</button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex flex-col gap-3 transition-shadow hover:shadow-md">
                                <div className="flex items-center gap-3">
                                    <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 bg-center bg-cover border border-slate-200 dark:border-slate-600" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzFhTAeNaMvclUTUQ8kqLBSVRfovlMxEhfW6z2AuS1aC6bXJHe-T76-KuXGLO0bJ3g-Ck_IfzX2O2xChVrn-lja2kuW1Srw_OMBM8VjTf87sZ5oKiiWUwseHW3yo1a7HLry3C6CrllwrW40PezQbxitL78rdQZWpiI2AhRM4dqskCoB0WiJmmwhY88GE9vVf-8WLG0NROUVkpLYtcYRNOHYjDEDzv9u43sAkrb8KG-dHVSbTQyyCUHTYDIIKyLujZF3jaWZ5J950qw")'}}></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white">CleanCo Services</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Commercial Cleaning</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="text-slate-900 dark:text-white font-semibold ml-1">5.0</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-xs ml-1">(120 Reviews)</span>
                                </div>
                                <button onClick={() => alert("Managing CleanCo Services")} className="w-full mt-1 border border-primary text-primary hover:bg-primary hover:text-white transition-colors h-9 rounded-lg text-sm font-bold flex items-center justify-center">
                                    Manage
                                </button>
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex flex-col gap-3 transition-shadow hover:shadow-md">
                                <div className="flex items-center gap-3">
                                    <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 bg-center bg-cover border border-slate-200 dark:border-slate-600" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZFBLfeUo1A5OAFg-0hBNHnZJbnPiSgcmQ6WVx4EAJ5nCT6hFpDwKH_-FFLRMjkdscCTXChcY_jNDV0C32fxiURAx7rmMUF9eJOJ1jKf7YgqsfolFXbG3zVdZ6BQJMNUwnAvtrJtd_rimHF3w0ajR-Vcq6RMCzWTrFu1DsFxqcCtyhSkTus5zoj3DDPS3hXuvvruV766dHI3ab-YocmRsJmZSuwWBr2upn_OPreRB4eP_NtWzHuhHjIwnRA-0g9z0QXUe8LyIs4_fj")'}}></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white">TechFix Solutions</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">IT Support Infrastructure</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star_half</span>
                                    <span className="text-slate-900 dark:text-white font-semibold ml-1">4.5</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-xs ml-1">(84 Reviews)</span>
                                </div>
                                <button onClick={() => alert("Managing TechFix Solutions")} className="w-full mt-1 border border-primary text-primary hover:bg-primary hover:text-white transition-colors h-9 rounded-lg text-sm font-bold flex items-center justify-center">
                                    Manage
                                </button>
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex flex-col gap-3 transition-shadow hover:shadow-md">
                                <div className="flex items-center gap-3">
                                    <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 bg-center bg-cover border border-slate-200 dark:border-slate-600" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX")'}}></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white">FreshEats Catering</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Corporate Catering</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="material-symbols-outlined text-[18px]">star</span>
                                    <span className="text-slate-900 dark:text-white font-semibold ml-1">4.8</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-xs ml-1">(210 Reviews)</span>
                                </div>
                                <button onClick={() => alert("Managing FreshEats Catering")} className="w-full mt-1 border border-primary text-primary hover:bg-primary hover:text-white transition-colors h-9 rounded-lg text-sm font-bold flex items-center justify-center">
                                    Manage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceIntegrationView;