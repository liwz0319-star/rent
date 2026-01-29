import React, { useRef } from 'react';

const MessagesView: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex-1 flex h-full overflow-hidden bg-white dark:bg-[#121212] animate-[fadeIn_0.2s_ease-out]">
      {/* Messages Sidebar (Threads) */}
      <div className="w-[380px] flex flex-col border-r border-slate-200 dark:border-[#333] bg-white dark:bg-[#1e1e1e] shrink-0">
        <div className="p-4 pb-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Messages</h2>
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#333] text-slate-500 transition-colors">
              <span className="material-symbols-outlined">edit_square</span>
            </button>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg leading-5 bg-slate-50 dark:bg-[#2d2d2d] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm" 
              placeholder="Search conversations..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          {/* Active Conversation */}
          <div className="group flex items-center gap-3 p-3 rounded-xl bg-primary/5 cursor-pointer border-l-4 border-primary transition-all">
            <div className="relative shrink-0">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-slate-100 dark:border-slate-700" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWyEtFrT17qKFdghfji35pKETavS_WMLSRKpgSL__cN40882-04DWNhlHlB1gnN9QDJK3QLZAcf6HCg-f0nrLOL5Fo2X52y2qIxSXokNQkb57y5ORTZxsJFULQ0iVQ2JYzrkrQFSuSSSdxZwGu6XHAxoKJ8kFbY6qaNV8JupRHpKkw_SkS1_DPWVyVFPp9rajZrhB7f6foyk_5mBvfbR72rhnYcI7xqD5S8oicYXJf3Vi0bu2uhxth8VDGVgSVJR0u1dtjLgzgJvOP")'}}
              ></div>
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white dark:ring-[#1e1e1e] bg-green-500"></span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="text-slate-900 dark:text-white text-base font-semibold truncate">TechHub Coworking</h3>
                <span className="text-xs text-primary font-medium shrink-0">2m ago</span>
              </div>
              <div className="flex justify-between items-center mt-0.5">
                <p className="text-slate-900 dark:text-gray-300 text-sm font-medium truncate pr-2">Regarding the 200sqm office...</p>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">2</span>
              </div>
            </div>
          </div>

          {/* Other Conversations */}
           <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#2d2d2d] cursor-pointer transition-colors border-l-4 border-transparent">
            <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-slate-100 dark:border-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfrQq2KAnEvWPPsaQooUEUx7qkziy7azP-pIKjp7HVeiXaxjK0w9g35nmziACDCY-uLoxJqHhVCmUMXLmv6cw4BoFK9TMRB0WpVEZs9riaHbX6CarZRsM5UyNqYAjmZLt4qHoyxexVTPjJJ4dSpUYr2sjE65vzsl9d8Z0NFlFGOrpUgES488E6PGNajy54u940r7sfGwTLBgUpTLNB6edAryrXVLg93sRNurLxvaU5L_W2QTEz0R2pVFeFp1axleci8JBthS5uOBB0")'}}></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
            <h3 className="text-slate-900 dark:text-white text-base font-medium truncate">Skyline Properties</h3>
            <span className="text-xs text-slate-500 font-normal shrink-0">1h ago</span>
            </div>
            <div className="flex justify-between items-center mt-0.5">
            <p className="text-slate-500 text-sm font-normal truncate pr-2">Can we schedule a viewing?</p>
            </div>
            </div>
            </div>

            <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#2d2d2d] cursor-pointer transition-colors border-l-4 border-transparent">
            <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-slate-100 dark:border-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjWjVWqY8T0ZIUuXO87U5wAltH_Ye_RM-PioTuc1Vuq3rg0g77Og3rPsYsRZ9E5rGwB7BOvPDHL3-BRtLvX6gUU-CVpJ57cFORHb4Hxw-I9piD3EfWiFDxbTAG2CpO2fmnz8MJioifv2NO-2ucibfN6PZpyuNS8mU1-vD5T8nYXfldNPv6QG3X7yGxv191XKTAW5VxK2gSpkJj6d2Bw0LiDNmGrn-HMP7CFfZd53txfa-1gMwMYxLT4t896rsLvrzKhXtgX2LRZ9wF")'}}></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
            <h3 className="text-slate-900 dark:text-white text-base font-medium truncate">Urban Loft Spaces</h3>
            <span className="text-xs text-slate-500 font-normal shrink-0">Yesterday</span>
            </div>
            <div className="flex justify-between items-center mt-0.5">
            <p className="text-slate-500 text-sm font-normal truncate pr-2">The contract has been sent.</p>
            </div>
            </div>
            </div>

            <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#2d2d2d] cursor-pointer transition-colors border-l-4 border-transparent">
            <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-slate-100 dark:border-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdrOZeNn084psxCTQvYVaDJTRXuDYvmmr_vWEvwXV7bLQ79RzJnfvK_JFWnzs5XrQH2DcbjatObsWXcr4eCu8JI2yg0FnOdWuPqu9ry2O-fWSFnzKhj9KcqOauzgMqIXiIRmIBPDBU9kIBe6poceFupqhFD4YcSrIVHv2IAS2UkW-b7JZNLtaKn949etHsTA64K2rIazzeT0Hbdm0an49TC9i1C8a2gFt2Lbm9y1qzAPcty-wy1mq-mtGBnjGdDeLCD3ZcdXlPQpgZ")'}}></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
            <h3 className="text-slate-900 dark:text-white text-base font-medium truncate">Central Plaza Mgmt</h3>
            <span className="text-xs text-slate-500 font-normal shrink-0">Oct 24</span>
            </div>
            <div className="flex justify-between items-center mt-0.5">
            <p className="text-slate-500 text-sm font-normal truncate pr-2">Thanks for your interest!</p>
            </div>
            </div>
            </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative min-w-0 bg-white dark:bg-[#121212]">
        {/* Chat Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#333] bg-white dark:bg-[#1e1e1e] z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
            <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border border-slate-200 dark:border-gray-600" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOUlaAGxv5fNxSMuEaHVEvrOL6otFxtCFWPyOw9ExqLj35KFXpgZd-Ti-bZvhOOTYVfzMZBuz1hecDWRLdwVWLENLBcItik2I2OihQqSaIv6VsC6Yf1lK38PmpgJ2mpVt_6UQvBgZojL4PdL6bdEsMBH_UmjM98lxZ0nwttIBoyesm4kq2uKRlRDlLX5cCqp5A1ed9N4eQ_-bVWETi78FD0RGDnu_kBXw-0bxKkRSy4vhwN_55lswmbesJJovwmSEDLXVOg9xsTVNZ")'}}></div>
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-[#1e1e1e] bg-green-500"></span>
            </div>
            <div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">TechHub Coworking</h2>
            <div className="flex items-center gap-1.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span className="text-slate-500 text-sm">Online</span>
            </div>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">handshake</span>
                                    Initiate Negotiation
                                </button>
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1 text-slate-500">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#333] rounded-full transition-colors" title="Call">
            <span className="material-symbols-outlined">call</span>
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#333] rounded-full transition-colors" title="Video Call">
            <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#333] rounded-full transition-colors" title="Info">
            <span className="material-symbols-outlined">info</span>
            </button>
            </div>
            </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-[#121212] flex flex-col relative p-6 pb-4">
            <div className="sticky top-0 z-10 px-4 w-full flex justify-center mb-6">
                <div className="flex items-center gap-3 p-2 pr-4 bg-white/95 dark:bg-[#2d2d2d]/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-sm max-w-md w-full animate-[fadeIn_0.5s_ease-out]">
                    <div className="h-12 w-12 rounded-md bg-cover bg-center shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARqx76R-ijeKRxtZfZHfxlDBZmFc6xEkv2Y_CewkC_vqeA_Wo45uniompvhIkKni3rwRniuvCTtcD9GKHvpH8Lju4v-11DINRPJLTAPdvJ2IQkF1LUah6pTb9MTNyA6VFMk2sfTcbmbUpaoozPSvYEnNT5oG6eExQwyfBUtDSJrmlGavkmRXwRsAiZo-1v5Ea8k2Z_d7fIPYdpmPx0Mg72jtCOYSTYPqhv4BDqMOqhs0flijElgLb8XPwUgohBIqK6raoE3XxglS2D")'}}></div>
                    <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide">Negotiation in Progress</p>
                    <span className="text-[10px] text-slate-500">ID: #4092A</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">Suite 402 - CBD Center</h3>
                    <p className="text-sm text-slate-500">Asking Price: <span className="text-slate-900 dark:text-gray-200 font-medium">$4,500/mo</span></p>
                    </div>
                    <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors">
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 py-2">
                    <div className="h-px bg-slate-200 dark:bg-gray-800 flex-1"></div>
                    <span className="text-xs font-medium text-slate-500">Today, Oct 25</span>
                    <div className="h-px bg-slate-200 dark:bg-gray-800 flex-1"></div>
                </div>

                {/* Messages from HTML */}
                <div className="flex items-end gap-3 self-start max-w-[70%]">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 mb-1" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZXMriMzOtWrVAlD2XKpzmx9RQOIZp8lAM-EsPgDdd86lGk6ZftibICLm4dNAnGZuu8KY3InJOwtixaeSCHSJ7SNdmbjgFAbVX9aYMB5vTBMSsY9pEdF2HtsxsSlPMoN2ozexRabOfEZuWj9VpUNUwrx6CrVq5gEZTp4L9OY67jMdhGorQ5VuOrT9wX1WYu_46nl86E7Shp9VOq0E2ihlq_W7c1myqYJzwpZ6y4K7SIxqn0bYZ4lLW2BsoMia1-JyR7q41zXAWOZbx")'}}></div>
                    <div className="flex flex-col gap-1">
                    <div className="bg-slate-100 dark:bg-[#2d2d2d] text-slate-900 dark:text-gray-100 px-4 py-3 rounded-2xl rounded-bl-none text-sm leading-relaxed shadow-sm">
                    <p>Hello Alex! Thanks for reaching out about Suite 402.</p>
                    </div>
                    <span className="text-[11px] text-slate-500 ml-1">10:00 AM</span>
                    </div>
                </div>

                <div className="flex items-end gap-3 self-start max-w-[70%]">
                    <div className="h-8 w-8 shrink-0 mb-1 opacity-0"></div> 
                    <div className="flex flex-col gap-1">
                    <div className="bg-slate-100 dark:bg-[#2d2d2d] text-slate-900 dark:text-gray-100 px-4 py-3 rounded-2xl rounded-bl-none text-sm leading-relaxed shadow-sm">
                    <p>The suite is available for viewing next Tuesday between 10 AM and 4 PM. Would that work for you?</p>
                    </div>
                    <span className="text-[11px] text-slate-500 ml-1">10:01 AM</span>
                    </div>
                </div>

                <div className="flex items-end gap-3 self-end max-w-[70%] flex-row-reverse">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 mb-1" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOk8_jq5LxS5p5EO85FL6XMBTPwCxRiX6MGQ39OBUj_FPHpMMw4ehfe1b_GDjnI7exRmEe29xKPAObV-6FXlVhkqeix_aPlp53hAUDerDYrhU9K8xSgwtDo8ltawIhyiAhlpoW-ofux0cBtZGGl7gYoNVEdL67T6aEvmeIqN2yxsMzB9afH6HmCffRw0rrwJujeZWl62zYqbUdOtbJkFqXCa3K7o3IzSff8ShCYuY_Qbm67KYPR48qw2blQY9nVKmYm28sDX0VgSzq")'}}></div>
                    <div className="flex flex-col gap-1 items-end">
                    <div className="bg-primary text-white px-4 py-3 rounded-2xl rounded-br-none text-sm leading-relaxed shadow-md">
                    <p>Hi! Tuesday morning works perfectly for me. I'm aiming for 11 AM.</p>
                    </div>
                    <span className="text-[11px] text-slate-500 mr-1">10:15 AM</span>
                    </div>
                </div>

                <div className="flex items-end gap-3 self-end max-w-[70%] flex-row-reverse">
                    <div className="h-8 w-8 shrink-0 mb-1 opacity-0"></div>
                    <div className="flex flex-col gap-1 items-end">
                    <div className="bg-primary text-white px-4 py-3 rounded-2xl rounded-br-none text-sm leading-relaxed shadow-md">
                    <p>Also, regarding the price - is the $4,500/mo strictly fixed, or is there room for negotiation on a longer lease term?</p>
                    </div>
                    <div className="flex items-center gap-1 mr-1">
                    <span className="text-[11px] text-slate-500">10:16 AM</span>
                    <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
                    </div>
                    </div>
                </div>

                <div className="flex items-end gap-3 self-start max-w-[70%]">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 shrink-0 mb-1" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt7pZfuyIa5yrkM5R8Amu-8iPQyk3p2Yif7HmSWTVoz6NQBquoxQEQtuXZcmVUVowTGgOCI5DZZmuK1BK4tNONPHii1jA4oBmz46uKlQZUPpTnAjH60ZRuQ7OikyoDCaZqW07RYKuuep8AmrtgZ8uTRrEVmC26QJOno9dvryxfNZQ59BcnvwZdZHTNClDRyhNBxi-z_ENK12rzMEamO3cgiHu0EyNI71VUKp-VRwv_wYTaMdKmTx8uoD8TGHgZqNtmQr-hyhV5SY5-")'}}></div>
                    <div className="flex flex-col gap-1">
                    <div className="bg-slate-100 dark:bg-[#2d2d2d] text-slate-900 dark:text-gray-100 px-4 py-3 rounded-2xl rounded-bl-none text-sm leading-relaxed shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white dark:bg-[#1e1e1e] border-t border-slate-200 dark:border-[#333]">
            <div className="flex items-end gap-3 bg-slate-50 dark:bg-[#2d2d2d] rounded-2xl p-2 pr-2 shadow-inner border border-transparent focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
                <div className="relative group self-end mb-0.5">
                    <button className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-black/5 transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                    </button>
                </div>
                <textarea 
                    ref={textareaRef}
                    onInput={handleInput}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-500 resize-none py-3 max-h-32" 
                    placeholder="Type your message..." 
                    rows={1} 
                    style={{minHeight: '44px'}}
                ></textarea>
                <div className="flex items-center gap-1 self-end mb-0.5">
                    <button className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-black/5 transition-colors">
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                    </button>
                    <button className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-black/5 transition-colors">
                    <span className="material-symbols-outlined">attach_file</span>
                    </button>
                    <button className="ml-1 p-2.5 bg-primary hover:bg-orange-600 text-white rounded-xl shadow-md transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-500">Press Enter to send, Shift + Enter for new line</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;