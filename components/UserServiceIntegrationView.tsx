import React from 'react';

const UserServiceIntegrationView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-[#1a1a1a] transition-colors duration-200">
      <div className="flex-1 overflow-y-auto flex flex-col relative bg-white dark:bg-[#1a1a1a]">
        <div className="flex-1 max-w-[1400px] w-full mx-auto p-6 md:p-8 flex flex-col gap-8">
          
          {/* Hero Header - Condensed */}
          <header className="bg-gradient-to-r from-gray-50 via-white to-white dark:from-[#251e18] dark:via-[#1f1a16] dark:to-[#1a1a1a] rounded-xl p-6 border border-[#e7e0da] dark:border-[#403630] shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative z-10">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#181410] dark:text-[#f3f4f6] mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FD780F]">auto_awesome</span>
                Enhance Your Workspace
              </h1>
              <p className="text-sm text-[#8d725e] dark:text-[#a8a29e] leading-relaxed max-w-3xl">
                Discover and request on-demand services for your bookings. From premium cleaning to tech support, elevate your day at the office.
              </p>
            </div>
            <button 
                onClick={() => alert("Opening service catalog...")}
                className="whitespace-nowrap px-4 py-2 bg-white dark:bg-[#2d241c] border border-[#e7e0da] dark:border-[#403630] rounded-lg text-sm font-semibold text-[#181410] dark:text-white hover:bg-gray-50 dark:hover:bg-[#3a2e26] transition-colors shadow-sm"
            >
                Browse Catalog
            </button>
          </header>

          {/* Available Services Grid - Amplified */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold tracking-tight text-[#181410] dark:text-[#f3f4f6] flex items-center gap-2">
                    Available Services
                    <span className="text-xs font-normal text-[#8d725e] dark:text-[#a8a29e] bg-[#f5f5f4] dark:bg-[#2d241c] px-2 py-0.5 rounded-full">8 Categories</span>
                </h2>
                <button onClick={() => alert("Viewing all services")} className="text-xs font-bold text-[#FD780F] hover:underline uppercase tracking-wide">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Service 1 */}
              <div 
                onClick={() => alert("Selecting Professional Cleaning")}
                className="group rounded-xl overflow-hidden border border-[#e7e0da] dark:border-[#403630] bg-white dark:bg-[#2d241c] shadow-sm hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 duration-300"
              >
                <div className="h-44 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzFhTAeNaMvclUTUQ8kqLBSVRfovlMxEhfW6z2AuS1aC6bXJHe-T76-KuXGLO0bJ3g-Ck_IfzX2O2xChVrn-lja2kuW1Srw_OMBM8VjTf87sZ5oKiiWUwseHW3yo1a7HLry3C6CrllwrW40PezQbxitL78rdQZWpiI2AhRM4dqskCoB0WiJmmwhY88GE9vVf-8WLG0NROUVkpLYtcYRNOHYjDEDzv9u43sAkrb8KG-dHVSbTQyyCUHTYDIIKyLujZF3jaWZ5J950qw")'}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                        <span className="bg-[#FD780F] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm mb-1 inline-block">Popular</span>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <h3 className="font-bold text-base text-[#181410] dark:text-[#f3f4f6] group-hover:text-[#FD780F] transition-colors flex justify-between items-center">
                    Cleaning
                    <span className="material-symbols-outlined text-[18px] text-[#e7e0da] dark:text-[#403630] group-hover:text-[#FD780F] transition-colors">arrow_forward</span>
                  </h3>
                  <p className="text-xs text-[#8d725e] dark:text-[#a8a29e] line-clamp-2">Deep clean, sanitization, and spot cleaning for any space.</p>
                </div>
              </div>
              {/* Service 2 */}
              <div 
                onClick={() => alert("Selecting IT Support")}
                className="group rounded-xl overflow-hidden border border-[#e7e0da] dark:border-[#403630] bg-white dark:bg-[#2d241c] shadow-sm hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 duration-300"
              >
                <div className="h-44 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZFBLfeUo1A5OAFg-0hBNHnZJbnPiSgcmQ6WVx4EAJ5nCT6hFpDwKH_-FFLRMjkdscCTXChcY_jNDV0C32fxiURAx7rmMUF9eJOJ1jKf7YgqsfolFXbG3zVdZ6BQJMNUwnAvtrJtd_rimHF3w0ajR-Vcq6RMCzWTrFu1DsFxqcCtyhSkTus5zoj3DDPS3hXuvvruV766dHI3ab-YocmRsJmZSuwWBr2upn_OPreRB4eP_NtWzHuhHjIwnRA-0g9z0QXUe8LyIs4_fj")'}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <h3 className="font-bold text-base text-[#181410] dark:text-[#f3f4f6] group-hover:text-[#FD780F] transition-colors flex justify-between items-center">
                    IT Support
                    <span className="material-symbols-outlined text-[18px] text-[#e7e0da] dark:text-[#403630] group-hover:text-[#FD780F] transition-colors">arrow_forward</span>
                  </h3>
                  <p className="text-xs text-[#8d725e] dark:text-[#a8a29e] line-clamp-2">Instant tech help, AV setup, and network troubleshooting.</p>
                </div>
              </div>
              {/* Service 3 */}
              <div 
                onClick={() => alert("Selecting Catering")}
                className="group rounded-xl overflow-hidden border border-[#e7e0da] dark:border-[#403630] bg-white dark:bg-[#2d241c] shadow-sm hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 duration-300"
              >
                <div className="h-44 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX")'}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <h3 className="font-bold text-base text-[#181410] dark:text-[#f3f4f6] group-hover:text-[#FD780F] transition-colors flex justify-between items-center">
                    Catering
                    <span className="material-symbols-outlined text-[18px] text-[#e7e0da] dark:text-[#403630] group-hover:text-[#FD780F] transition-colors">arrow_forward</span>
                  </h3>
                  <p className="text-xs text-[#8d725e] dark:text-[#a8a29e] line-clamp-2">Premium coffee runs, lunch boxes, and event catering.</p>
                </div>
              </div>
              {/* Service 4 */}
              <div 
                onClick={() => alert("Selecting Equipment")}
                className="group rounded-xl overflow-hidden border border-[#e7e0da] dark:border-[#403630] bg-white dark:bg-[#2d241c] shadow-sm hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 duration-300"
              >
                <div className="h-44 w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 relative group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-6xl">print</span>
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <h3 className="font-bold text-base text-[#181410] dark:text-[#f3f4f6] group-hover:text-[#FD780F] transition-colors flex justify-between items-center">
                    Equipment
                    <span className="material-symbols-outlined text-[18px] text-[#e7e0da] dark:text-[#403630] group-hover:text-[#FD780F] transition-colors">arrow_forward</span>
                  </h3>
                  <p className="text-xs text-[#8d725e] dark:text-[#a8a29e] line-clamp-2">Rental monitors, keyboards, printers, and cables.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Active Requests & Top Providers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Active Requests List */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#181410] dark:text-[#f3f4f6]">Your Active Requests</h2>
                <button onClick={() => alert("Viewing request history")} className="text-[#FD780F] text-xs font-bold hover:underline uppercase tracking-wide">View History</button>
              </div>
              <div className="bg-white dark:bg-[#2d241c] rounded-xl border border-[#e7e0da] dark:border-[#403630] shadow-sm overflow-hidden">
                <div className="divide-y divide-[#e7e0da] dark:divide-[#403630]">
                  {/* Request 1 */}
                  <div 
                    onClick={() => alert("Opening details for Professional Cleaning request")}
                    className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">cleaning_services</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-[#181410] dark:text-[#f3f4f6]">Professional Cleaning</h3>
                        <p className="text-xs text-[#8d725e] dark:text-[#a8a29e]">Room 302 • Spill Response</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300">
                        In Progress
                      </span>
                      <span className="text-[10px] text-[#8d725e] font-medium">Started 12m ago</span>
                    </div>
                  </div>
                  {/* Request 2 */}
                  <div 
                    onClick={() => alert("Opening details for IT Support request")}
                    className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">computer</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-[#181410] dark:text-[#f3f4f6]">IT Support</h3>
                        <p className="text-xs text-[#8d725e] dark:text-[#a8a29e]">Conference Room A • HDMI Issue</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-bold text-amber-700 dark:text-amber-300">
                        Scheduled
                      </span>
                      <span className="text-[10px] text-[#8d725e] font-medium">For 2:00 PM Today</span>
                    </div>
                  </div>
                  {/* Request 3 */}
                  <div 
                    onClick={() => alert("Opening details for Catering request")}
                    className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors opacity-70 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">local_cafe</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-[#181410] dark:text-[#f3f4f6]">Catering Delivery</h3>
                        <p className="text-xs text-[#8d725e] dark:text-[#a8a29e]">Lobby • Coffee Service</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        Completed
                      </span>
                      <span className="text-[10px] text-[#8d725e] font-medium">10:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Providers Sidebar */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#181410] dark:text-[#f3f4f6]">Top Rated Providers</h2>
                <button onClick={() => alert("Viewing all providers")} className="text-[#FD780F] text-xs font-bold hover:underline uppercase tracking-wide">View All</button>
              </div>
              <div className="flex flex-col gap-3">
                {/* Provider 1 */}
                <div className="bg-white dark:bg-[#2d241c] border border-[#e7e0da] dark:border-[#403630] rounded-xl p-4 shadow-sm flex flex-col gap-3 hover:border-[#FD780F]/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-800 bg-center bg-cover border border-[#e7e0da] dark:border-[#403630]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzFhTAeNaMvclUTUQ8kqLBSVRfovlMxEhfW6z2AuS1aC6bXJHe-T76-KuXGLO0bJ3g-Ck_IfzX2O2xChVrn-lja2kuW1Srw_OMBM8VjTf87sZ5oKiiWUwseHW3yo1a7HLry3C6CrllwrW40PezQbxitL78rdQZWpiI2AhRM4dqskCoB0WiJmmwhY88GE9vVf-8WLG0NROUVkpLYtcYRNOHYjDEDzv9u43sAkrb8KG-dHVSbTQyyCUHTYDIIKyLujZF3jaWZ5J950qw")'}}></div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-[#181410] dark:text-[#f3f4f6]">CleanCo Services</h3>
                        <div className="flex items-center gap-1 text-yellow-500 text-[10px]">
                          <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-[#181410] dark:text-[#f3f4f6] font-bold">5.0</span>
                          <span className="text-[#8d725e] dark:text-[#a8a29e]">(120)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => alert("Requesting CleanCo")} className="w-full bg-[#FD780F] hover:bg-orange-600 text-white transition-colors h-8 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
                    <span>Request Now</span>
                  </button>
                </div>
                {/* Provider 2 */}
                <div className="bg-white dark:bg-[#2d241c] border border-[#e7e0da] dark:border-[#403630] rounded-xl p-4 shadow-sm flex flex-col gap-3 hover:border-[#FD780F]/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-800 bg-center bg-cover border border-[#e7e0da] dark:border-[#403630]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZFBLfeUo1A5OAFg-0hBNHnZJbnPiSgcmQ6WVx4EAJ5nCT6hFpDwKH_-FFLRMjkdscCTXChcY_jNDV0C32fxiURAx7rmMUF9eJOJ1jKf7YgqsfolFXbG3zVdZ6BQJMNUwnAvtrJtd_rimHF3w0ajR-Vcq6RMCzWTrFu1DsFxqcCtyhSkTus5zoj3DDPS3hXuvvruV766dHI3ab-YocmRsJmZSuwWBr2upn_OPreRB4eP_NtWzHuhHjIwnRA-0g9z0QXUe8LyIs4_fj")'}}></div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-[#181410] dark:text-[#f3f4f6]">TechFix Solutions</h3>
                        <div className="flex items-center gap-1 text-yellow-500 text-[10px]">
                          <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-[#181410] dark:text-[#f3f4f6] font-bold">4.8</span>
                          <span className="text-[#8d725e] dark:text-[#a8a29e]">(84)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => alert("Requesting TechFix")} className="w-full bg-[#FD780F] hover:bg-orange-600 text-white transition-colors h-8 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
                    <span>Request Now</span>
                  </button>
                </div>
                {/* Provider 3 */}
                <div className="bg-white dark:bg-[#2d241c] border border-[#e7e0da] dark:border-[#403630] rounded-xl p-4 shadow-sm flex flex-col gap-3 hover:border-[#FD780F]/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-800 bg-center bg-cover border border-[#e7e0da] dark:border-[#403630]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX")'}}></div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-[#181410] dark:text-[#f3f4f6]">FreshEats</h3>
                        <div className="flex items-center gap-1 text-yellow-500 text-[10px]">
                          <span className="material-symbols-outlined text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-[#181410] dark:text-[#f3f4f6] font-bold">4.9</span>
                          <span className="text-[#8d725e] dark:text-[#a8a29e]">(210)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => alert("Requesting FreshEats")} className="w-full bg-[#FD780F] hover:bg-orange-600 text-white transition-colors h-8 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
                    <span>Request Now</span>
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

export default UserServiceIntegrationView;