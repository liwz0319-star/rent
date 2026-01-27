import React from 'react';

interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-display" role="dialog" aria-modal="true">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#1a120b] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transform transition-all ring-1 ring-black/5 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-stone-800 flex items-center justify-between bg-white dark:bg-[#1a120b] sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <span className="material-symbols-outlined">settings</span>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-none">System Settings</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Manage preferences and integrations</p>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-stone-800 p-2 rounded-full transition-colors"
            >
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50/50 dark:bg-stone-900/20 custom-scrollbar">
            <div className="flex flex-col gap-6">
                
                {/* General Settings */}
                <section className="bg-white dark:bg-[#1a120b] rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-stone-800 flex items-center gap-3 bg-slate-50/50 dark:bg-stone-900/20">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>tune</span>
                        <h2 className="text-slate-900 dark:text-white text-base font-bold">General Settings</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-900 dark:text-slate-300 text-sm font-medium">Language</label>
                            <div className="relative">
                                <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-slate-900 dark:text-white h-10 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm">
                                    <option value="en">English (US)</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" style={{fontSize: '20px'}}>expand_more</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-900 dark:text-slate-300 text-sm font-medium">Timezone</label>
                            <div className="relative">
                                <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-slate-900 dark:text-white h-10 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm">
                                    <option value="utc-8">Pacific Time (US & Canada)</option>
                                    <option value="utc-5">Eastern Time (US & Canada)</option>
                                    <option value="utc+0">UTC</option>
                                    <option value="utc+1">Central European Time</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" style={{fontSize: '20px'}}>expand_more</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-slate-900 dark:text-slate-300 text-sm font-medium">Platform Theme</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="cursor-pointer group">
                                    <input className="peer sr-only" name="theme" type="radio" value="light" defaultChecked />
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-stone-700 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:bg-slate-50 dark:hover:bg-stone-900 text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined" style={{fontSize: '18px'}}>light_mode</span>
                                        <span className="text-sm font-medium">Light Mode</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input className="peer sr-only" name="theme" type="radio" value="dark" />
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-stone-700 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:bg-slate-50 dark:hover:bg-stone-900 text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined" style={{fontSize: '18px'}}>dark_mode</span>
                                        <span className="text-sm font-medium">Dark Mode</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notifications */}
                <section className="bg-white dark:bg-[#1a120b] rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-stone-800 flex items-center gap-3 bg-slate-50/50 dark:bg-stone-900/20">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>notifications</span>
                        <h2 className="text-slate-900 dark:text-white text-base font-bold">Notifications</h2>
                    </div>
                    <div className="p-6 flex flex-col divide-y divide-slate-200 dark:divide-stone-800">
                        <div className="flex items-center justify-between py-4 first:pt-0">
                            <div>
                                <p className="text-slate-900 dark:text-white text-sm font-semibold">Email Alerts</p>
                                <p className="text-slate-500 text-xs mt-0.5">Receive weekly digests and critical system updates via email.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input defaultChecked className="sr-only peer" type="checkbox" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-4">
                            <div>
                                <p className="text-slate-900 dark:text-white text-sm font-semibold">Desktop Notifications</p>
                                <p className="text-slate-500 text-xs mt-0.5">Real-time popups for asset status changes while active.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input className="sr-only peer" type="checkbox" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-4 last:pb-0">
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-slate-900 dark:text-white text-sm font-semibold">AI Matching Alerts</p>
                                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">Beta</span>
                                </div>
                                <p className="text-slate-500 text-xs mt-0.5">Instant alerts when high-probability asset matches are found.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input defaultChecked className="sr-only peer" type="checkbox" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="bg-white dark:bg-[#1a120b] rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-stone-800 flex items-center gap-3 bg-slate-50/50 dark:bg-stone-900/20">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>lock</span>
                        <h2 className="text-slate-900 dark:text-white text-base font-bold">Security</h2>
                    </div>
                    <div className="p-6 flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 dark:text-slate-300 text-sm font-medium">Current Password</label>
                                <input className="w-full rounded-lg border border-slate-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-slate-900 dark:text-white h-10 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="••••••••" type="password"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 dark:text-slate-300 text-sm font-medium">New Password</label>
                                <input className="w-full rounded-lg border border-slate-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-slate-900 dark:text-white h-10 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="••••••••" type="password"/>
                            </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-stone-900 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-200 dark:border-stone-800">
                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 text-primary p-2 rounded-md shrink-0">
                                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>phonelink_lock</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Two-Factor Authentication (2FA)</p>
                                    <p className="text-slate-500 text-xs mt-1">Add an extra layer of security to your account.</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-lg hover:bg-slate-50 dark:hover:bg-stone-700 transition-colors whitespace-nowrap">
                                Setup 2FA
                            </button>
                        </div>
                    </div>
                </section>

                {/* Integrations */}
                <section className="bg-white dark:bg-[#1a120b] rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm overflow-hidden mb-4">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-stone-800 flex items-center gap-3 bg-slate-50/50 dark:bg-stone-900/20">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>extension</span>
                        <h2 className="text-slate-900 dark:text-white text-base font-bold">Integrations</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-slate-200 dark:border-stone-700 rounded-lg p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors group bg-white dark:bg-stone-900">
                            <div className="flex items-center justify-between">
                                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-lg border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/50">
                                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>article</span>
                                </div>
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-sm font-bold">OA System</h3>
                                <p className="text-slate-500 text-xs">Sync internal documents.</p>
                            </div>
                            <button className="mt-auto pt-2 text-xs font-semibold text-primary group-hover:underline text-left">Configure</button>
                        </div>
                        <div className="border border-slate-200 dark:border-stone-700 rounded-lg p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors group bg-white dark:bg-stone-900">
                            <div className="flex items-center justify-between">
                                <div className="bg-purple-50 text-purple-600 p-2.5 rounded-lg border border-purple-100 dark:bg-purple-900/20 dark:border-purple-800/50">
                                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>chat_bubble</span>
                                </div>
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-sm font-bold">Slack</h3>
                                <p className="text-slate-500 text-xs">Channel notifications.</p>
                            </div>
                            <button className="mt-auto pt-2 text-xs font-semibold text-primary group-hover:underline text-left">Configure</button>
                        </div>
                        <div className="border border-slate-200 dark:border-stone-700 rounded-lg p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors group bg-white dark:bg-stone-900">
                            <div className="flex items-center justify-between">
                                <div className="bg-orange-50 text-orange-600 p-2.5 rounded-lg border border-orange-100 dark:bg-orange-900/20 dark:border-orange-800/50">
                                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>calendar_today</span>
                                </div>
                                <span className="flex h-2 w-2 rounded-full bg-slate-300"></span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-sm font-bold">Calendar</h3>
                                <p className="text-slate-500 text-xs">Event synchronization.</p>
                            </div>
                            <button className="mt-auto pt-2 text-xs font-semibold text-slate-500 group-hover:text-primary group-hover:underline text-left">Connect</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-white dark:bg-[#1a120b] border-t border-slate-200 dark:border-stone-800 p-4 px-6 flex justify-end items-center gap-3">
            <button 
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors"
            >
                Cancel
            </button>
            <button 
                onClick={onClose}
                className="bg-primary hover:bg-primary-hover text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
                Save Settings
            </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;