import React, { useState, useRef, useEffect } from 'react';

const NotificationButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
        <style>{`
            .scrollbar-thin::-webkit-scrollbar {
                width: 6px;
            }
            .scrollbar-thin::-webkit-scrollbar-track {
                background: transparent;
            }
            .scrollbar-thin::-webkit-scrollbar-thumb {
                background-color: #e5e7eb;
                border-radius: 20px;
            }
            .scrollbar-thin:hover::-webkit-scrollbar-thumb {
                background-color: #d1d5db;
            }
            .dark .scrollbar-thin::-webkit-scrollbar-thumb {
                background-color: #4b5563;
            }
            .dark .scrollbar-thin:hover::-webkit-scrollbar-thumb {
                background-color: #6b7280;
            }
        `}</style>
      <button 
        className={`flex size-10 items-center justify-center rounded-full transition-colors relative ${isOpen ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
        <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-slate-800"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-[360px] md:w-[420px] origin-top-right rounded-xl bg-white dark:bg-[#1e1e1e] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 focus:outline-none z-50 animate-[fadeIn_0.2s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-[#333]">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Notifications</h3>
                <div className="flex items-center gap-4">
                    <button className="text-xs font-bold text-primary hover:text-primary-hover transition-colors">Mark all as read</button>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>
            </div>
            {/* Tabs */}
            <div className="px-5 border-b border-gray-100 dark:border-[#333]">
                <nav className="-mb-px flex gap-6">
                    {['All', 'Assets', 'Transactions', 'System'].map((tab, idx) => (
                        <a key={tab} href="#" className={`${idx === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'} whitespace-nowrap border-b-[3px] py-3 text-sm font-bold transition-colors`}>
                            {tab}
                        </a>
                    ))}
                </nav>
            </div>
            {/* List */}
            <div className="max-h-[420px] overflow-y-auto scrollbar-thin">
                {/* Item 1 */}
                <div className="group relative flex gap-4 p-5 hover:bg-orange-50/30 dark:hover:bg-primary/5 transition-colors cursor-pointer border-b border-gray-50 dark:border-[#333]">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r"></div>
                    <div className="shrink-0">
                        <div className="size-10 rounded-full bg-orange-100 dark:bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[20px]">domain</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-sm font-bold text-gray-900 dark:text-white truncate pr-2">New Match Found: 95%</p>
                            <span className="text-xs text-gray-400 whitespace-nowrap">2m ago</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                            A premium office space in Pudong Financial District matches your request criteria for "High-rise, &gt;1000sqm".
                        </p>
                    </div>
                    <div className="shrink-0 self-center">
                        <div className="size-2 rounded-full bg-primary"></div>
                    </div>
                    {/* Hover Action */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-[#1e1e1e] shadow-lg rounded-md pl-2">
                        <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2 px-4 rounded shadow-sm transition-colors flex items-center gap-1">
                            View
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="group relative flex gap-4 p-5 hover:bg-orange-50/30 dark:hover:bg-primary/5 transition-colors cursor-pointer border-b border-gray-50 dark:border-[#333]">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r"></div>
                    <div className="shrink-0">
                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined text-[20px]">handshake</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-sm font-bold text-gray-900 dark:text-white truncate pr-2">Offer Received: Suite 404</p>
                            <span className="text-xs text-gray-400 whitespace-nowrap">1h ago</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                            Tenant A has submitted a formal letter of intent for the corner office suite. Action required.
                        </p>
                    </div>
                    <div className="shrink-0 self-center">
                        <div className="size-2 rounded-full bg-primary"></div>
                    </div>
                    {/* Hover Action */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-[#1e1e1e] shadow-lg rounded-md pl-2">
                        <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2 px-4 rounded shadow-sm transition-colors flex items-center gap-1">
                            Review
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="group relative flex gap-4 p-5 hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer border-b border-gray-50 dark:border-[#333]">
                    <div className="shrink-0">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                            <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate pr-2">AI Analysis Complete</p>
                            <span className="text-xs text-gray-400 whitespace-nowrap">4h ago</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                            Your portfolio valuation report for Q3 has been successfully generated and is ready for download.
                        </p>
                    </div>
                    {/* Hover Action */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-[#1e1e1e] shadow-lg rounded-md pl-2">
                        <button className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c2c2c] text-gray-700 dark:text-gray-200 text-xs font-bold py-2 px-4 rounded shadow-sm hover:bg-gray-50 transition-colors">
                            Download
                        </button>
                    </div>
                </div>
                {/* Item 4 */}
                <div className="group relative flex gap-4 p-5 hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer border-b border-gray-50 dark:border-[#333]">
                    <div className="shrink-0">
                        <div className="size-10 rounded-full bg-orange-50 dark:bg-primary/10 flex items-center justify-center text-primary/70">
                            <span className="material-symbols-outlined text-[20px]">domain</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate pr-2">Price Drop Alert: Jing'an Center</p>
                            <span className="text-xs text-gray-400 whitespace-nowrap">Yesterday</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                            The listing for Jing'an Center Floor 12 has reduced its asking price by 5%.
                        </p>
                    </div>
                    {/* Hover Action */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-[#1e1e1e] shadow-lg rounded-md pl-2">
                        <button className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c2c2c] text-gray-700 dark:text-gray-200 text-xs font-bold py-2 px-4 rounded shadow-sm hover:bg-gray-50 transition-colors">
                            Details
                        </button>
                    </div>
                </div>
                {/* Item 5 */}
                <div className="group relative flex gap-4 p-5 hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer">
                    <div className="shrink-0">
                        <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                            <span className="material-symbols-outlined text-[20px]">shield</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate pr-2">Security Update</p>
                            <span className="text-xs text-gray-400 whitespace-nowrap">2d ago</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                            Two-factor authentication has been enabled for your organization administrators.
                        </p>
                    </div>
                    {/* Hover Action */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-[#1e1e1e] shadow-lg rounded-md pl-2">
                        <button className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2c2c2c] text-gray-700 dark:text-gray-200 text-xs font-bold py-2 px-4 rounded shadow-sm hover:bg-gray-50 transition-colors">
                            Settings
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="p-3 border-t border-gray-100 dark:border-[#333] bg-gray-50 dark:bg-[#252525] rounded-b-xl text-center">
                <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center justify-center gap-2" href="#">
                    View full history
                    <span className="material-symbols-outlined text-[16px]">history</span>
                </a>
            </div>
        </div>
      )}
    </div>
  );
};

export default NotificationButton;