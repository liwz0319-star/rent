import React, { useState } from 'react';
import type { UserRole } from './DashboardPage';

interface PersonalCenterModalProps {
  onClose: () => void;
  userRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const PersonalCenterModal: React.FC<PersonalCenterModalProps> = ({ onClose, userRole, onRoleChange }) => {
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-display text-slate-900">
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#1a120b] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[85vh] md:h-[800px] animate-[fadeIn_0.3s_ease-out] z-10">
        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full bg-white dark:bg-[#1a120b] overflow-hidden">
            {/* Header Section */}
            <div className="bg-gray-50/50 dark:bg-[#23180f]/50 px-8 py-8 border-b border-gray-100 dark:border-[#2a2018]">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <div className="h-20 w-20 rounded-full bg-cover bg-center border-2 border-primary/20 shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDL5yUYjKqEC0wIRxyYixbnB1yf8R9SjESmWdqFsfjpIi5Z0Xzd-umHbN35JTAwcTnnKcNqBQf3RD2jkcShwXfp58ExlYUN5Bz9ryWtx2KLy5nMTb9ms22jkoWyGKopbSRTYmR64RX5xmzz2CaP4pLKBzVsc04p-iQuIQmzG68HGS3jeN3I7hYU4Vu_RRxKUK779S0x2TQwpFknhiEB9myMldSMocPudEj4vemV9jEowW9KTMnRo_sFm4WPmabRgHmyqCn1NbhM6Y5l')"}}></div>
                            <button className="absolute bottom-0 right-0 bg-white dark:bg-[#2a2018] rounded-full p-1.5 border border-gray-200 dark:border-[#3a2e26] text-gray-500 hover:text-primary transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[14px] block">edit</span>
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
                                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-[14px] filled">verified</span>
                                    <span className="text-xs font-semibold text-primary">Verified</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400 relative">
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                                        className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-0.5 px-2 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 -ml-2"
                                    >
                                        {userRole}
                                        <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                    
                                    {isRoleDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-36 bg-white dark:bg-[#2a2018] border border-gray-100 dark:border-[#3a2e26] rounded-lg shadow-xl z-20 py-1 animate-[fadeIn_0.1s_ease-out]">
                                            {(['Admin', 'Merchant', 'User'] as UserRole[]).map(role => (
                                                <button 
                                                    key={role}
                                                    onClick={() => {
                                                        onRoleChange(role);
                                                        setIsRoleDropdownOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-[#3a2e26] flex items-center justify-between ${userRole === role ? 'text-primary font-bold bg-primary/5' : 'text-slate-600 dark:text-slate-400'}`}
                                                >
                                                    {role}
                                                    {userRole === role && <span className="material-symbols-outlined text-[14px]">check</span>}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <span className="text-sm">Global Region</span>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <span className="text-sm">Joined Oct 2021</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-8 py-6">
                <div className="max-w-4xl mx-auto space-y-10">
                    
                    {/* Personal Details Form */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-100 dark:border-[#2a2018] pb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Details</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Update your personal information and contact details.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <div className="relative">
                                    <input className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-[#3a2e26] bg-white dark:bg-[#2a2018] text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" type="text" defaultValue="John Doe"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Corporate Email</label>
                                <div className="relative">
                                    <span className="absolute right-3 top-3 material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                    <input className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-[#3a2e26] bg-white dark:bg-[#2a2018] text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" type="email" defaultValue="john.doe@assetai.com"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                                <input className="w-full h-11 px-4 rounded-lg border border-gray-200 dark:border-[#3a2e26] bg-white dark:bg-[#2a2018] text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" type="tel" defaultValue="+1 (555) 123-4567"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Company Name</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3 material-symbols-outlined text-gray-400 text-[20px]">domain</span>
                                    <input className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 dark:border-[#3a2e26] bg-white dark:bg-[#2a2018] text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" type="text" defaultValue="Global Real Estate Corp."/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Delete Account */}
                    <section className="border-t border-gray-100 dark:border-[#2a2018] pt-6 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-red-600 dark:hover:text-red-400 w-fit">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                            Request Account Deletion
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="px-8 py-5 border-t border-gray-100 dark:border-[#2a2018] bg-white dark:bg-[#1a120b] flex justify-between items-center">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors px-2 py-2 rounded hover:bg-red-50 dark:hover:bg-red-900/10">
                    <span className="material-symbols-outlined text-[20px]">logout</span>
                    Log Out
                </button>
                <div className="flex gap-4">
                    <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2018] transition-colors">
                        Cancel
                    </button>
                    <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm shadow-orange-200 dark:shadow-none transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">save</span>
                        Save Changes
                    </button>
                </div>
            </footer>
        </main>
      </div>
    </div>
  );
};

export default PersonalCenterModal;