import React, { useState } from 'react';

interface ServiceReservationModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ServiceReservationModal: React.FC<ServiceReservationModalProps> = ({ onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(26); // Default selected date
  const [selectedTier, setSelectedTier] = useState('premium');
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-display text-[#181410]">
        <style>{`
            .custom-scroll::-webkit-scrollbar {
                width: 6px;
            }
            .custom-scroll::-webkit-scrollbar-track {
                background: transparent;
            }
            .custom-scroll::-webkit-scrollbar-thumb {
                background-color: #e5e7eb;
                border-radius: 20px;
            }
            .radio-card:checked + div {
                border-color: #FD780F;
                background-color: #fff8f1;
                box-shadow: 0 4px 6px -1px rgba(253, 120, 15, 0.1), 0 2px 4px -1px rgba(253, 120, 15, 0.06);
            }
            .radio-card:checked + div .radio-circle {
                border-color: #FD780F;
                background-color: #FD780F;
            }
            .radio-card:checked + div .radio-circle::after {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                background: white;
                border-radius: 50%;
            }
            .time-slot:checked + label {
                background-color: #FD780F;
                color: white;
                border-color: #FD780F;
            }
        `}</style>
        
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#f8f7f5] rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out] ring-1 ring-black/5">
            <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-200 shrink-0 z-20 h-14">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-orange-50 rounded text-primary">
                        <span className="material-symbols-outlined text-xl">event_available</span>
                    </div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Book Service: Professional Deep Cleaning</h2>
                </div>
                <button 
                    onClick={onClose}
                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scroll p-5">
                <div className="mb-5 flex gap-5 items-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shadow-sm border border-gray-200 shrink-0 relative">
                        <img alt="Office Cleaning" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0TTJuWK8GhbrXfKJH7s_LTPGEoEjuQL8mer7BWydIQ5qp2yUs-McH8-bCsCT2OVZblmdjc7uFMqytSkCF0rxu0F6GuiIRq2TB_34nPx5bdZPXKukFcHbOnTdpcli825r02t9FpmWoUMfZTHaxsSmoAj8CVdUM_pRpFplMFW0RvtD0JrdWV2LnhUMBmoa6QV0xdL1uKvFV_Z_CzlurUm-RpCruk7-KK5i5LgtL4svaoi5xlR1t4Q4eGNH0Xq3N1c4TT_dwJVNh8cCj"/>
                    </div>
                    <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Professional Deep Cleaning</h1>
                            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 flex items-center gap-1 uppercase tracking-wider">
                                Verified
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Provided by <span className="font-semibold text-gray-900">CleanCo Enterprise Solutions</span></p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-orange-400">star</span> 4.9 (1.2k)</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>#SVC-8922</span>
                        </div>
                    </div>
                </div>

                <form className="grid grid-cols-1 lg:grid-cols-12 gap-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="lg:col-span-7 space-y-4">
                        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Select Asset</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="relative col-span-2 sm:col-span-1">
                                            <select className="block w-full rounded-md border-gray-300 bg-gray-50 py-2 pl-3 pr-8 text-sm focus:border-primary focus:ring-primary cursor-pointer hover:bg-white transition-colors">
                                                <option>Skyline Conference Suite A</option>
                                                <option>Innovation Hub - Floor 3</option>
                                                <option>Executive Wing - North</option>
                                            </select>
                                        </div>
                                        <div className="relative col-span-2 sm:col-span-1">
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">person</span>
                                                <input className="block w-full rounded-md border-gray-300 bg-gray-50 py-2 pl-8 pr-3 text-sm text-gray-500 cursor-not-allowed" readOnly type="text" value="Site Manager (Default)"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Service Tier</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <label className="cursor-pointer group relative">
                                            <input 
                                                className="peer sr-only radio-card" 
                                                name="tier" 
                                                type="radio" 
                                                checked={selectedTier === 'standard'}
                                                onChange={() => setSelectedTier('standard')}
                                            />
                                            <div className="h-full rounded-lg border border-gray-200 p-3 hover:border-primary/50 transition-all bg-white">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[10px] font-bold text-gray-900 uppercase">Standard</span>
                                                    <div className="w-3 h-3 rounded-full border border-gray-300 radio-circle transition-colors"></div>
                                                </div>
                                                <div className="text-base font-bold text-gray-900">$250</div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer group relative">
                                            <input 
                                                className="peer sr-only radio-card" 
                                                name="tier" 
                                                type="radio"
                                                checked={selectedTier === 'premium'}
                                                onChange={() => setSelectedTier('premium')}
                                            />
                                            <div className="h-full rounded-lg border border-gray-200 p-3 hover:border-primary/50 transition-all bg-white relative">
                                                <div className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl-md rounded-tr-md">HOT</div>
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[10px] font-bold text-gray-900 uppercase">Premium</span>
                                                    <div className="w-3 h-3 rounded-full border border-gray-300 radio-circle transition-colors"></div>
                                                </div>
                                                <div className="text-base font-bold text-primary">$450</div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer group relative">
                                            <input 
                                                className="peer sr-only radio-card" 
                                                name="tier" 
                                                type="radio"
                                                checked={selectedTier === 'enterprise'}
                                                onChange={() => setSelectedTier('enterprise')}
                                            />
                                            <div className="h-full rounded-lg border border-gray-200 p-3 hover:border-primary/50 transition-all bg-white">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[10px] font-bold text-gray-900 uppercase">Enterprise</span>
                                                    <div className="w-3 h-3 rounded-full border border-gray-300 radio-circle transition-colors"></div>
                                                </div>
                                                <div className="text-base font-bold text-gray-900">$850</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Schedule</label>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="w-full sm:w-1/2">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-bold text-gray-900 text-xs">October 2023</span>
                                        <div className="flex gap-1">
                                            <button className="p-0.5 hover:bg-gray-100 rounded text-gray-500" type="button"><span className="material-symbols-outlined text-base">chevron_left</span></button>
                                            <button className="p-0.5 hover:bg-gray-100 rounded text-gray-500" type="button"><span className="material-symbols-outlined text-base">chevron_right</span></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center text-[9px] mb-1 text-gray-400 font-medium uppercase">
                                        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-xs">
                                        <div className="aspect-square flex items-center justify-center text-gray-300 text-[10px]">29</div>
                                        <div className="aspect-square flex items-center justify-center text-gray-300 text-[10px]">30</div>
                                        {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                                            <div 
                                                key={day}
                                                onClick={() => setSelectedDate(day)}
                                                className={`aspect-square flex items-center justify-center rounded cursor-pointer text-[10px] ${
                                                    selectedDate === day 
                                                    ? 'bg-primary text-white shadow-md shadow-orange-200 font-bold' 
                                                    : 'hover:bg-gray-50'
                                                }`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 border-l border-gray-100 pl-0 sm:pl-5">
                                    <h3 className="text-[10px] font-semibold uppercase text-gray-400 mb-2">Available Slots</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <input className="hidden time-slot" id="t1" name="time" type="radio"/>
                                            <label className="block w-full py-1.5 px-1 text-[11px] text-center border border-gray-200 rounded cursor-pointer hover:border-primary hover:text-primary transition-colors text-gray-600" htmlFor="t1">08:00 AM</label>
                                        </div>
                                        <div>
                                            <input className="hidden time-slot" id="t2" name="time" type="radio"/>
                                            <label className="block w-full py-1.5 px-1 text-[11px] text-center border border-gray-200 rounded cursor-pointer hover:border-primary hover:text-primary transition-colors text-gray-600" htmlFor="t2">10:00 AM</label>
                                        </div>
                                        <div>
                                            <input defaultChecked className="hidden time-slot" id="t5" name="time" type="radio"/>
                                            <label className="block w-full py-1.5 px-1 text-[11px] text-center border border-gray-200 rounded cursor-pointer hover:border-primary hover:text-primary transition-colors text-gray-600" htmlFor="t5">06:00 PM</label>
                                        </div>
                                        <div>
                                            <input className="hidden time-slot" id="t6" name="time" type="radio"/>
                                            <label className="block w-full py-1.5 px-1 text-[11px] text-center border border-gray-200 rounded cursor-pointer hover:border-primary hover:text-primary transition-colors text-gray-600" htmlFor="t6">08:00 PM</label>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-[10px] text-gray-400 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[12px]">schedule</span> 3h duration
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Notes</label>
                            <textarea className="block w-full rounded-md border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-primary focus:ring-primary placeholder:text-gray-400 hover:bg-white transition-colors resize-none" placeholder="Access codes, specific instructions, etc." rows={2}></textarea>
                        </section>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="sticky top-0 space-y-4">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <div className="bg-gray-50 border-b border-gray-200 p-3 flex justify-between items-center">
                                    <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Summary</h2>
                                    <span className="text-[10px] text-gray-500">ID: 8922</span>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-8 h-8 bg-orange-50 rounded flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined text-lg">cleaning_services</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm leading-tight">Deep Cleaning</p>
                                            <p className="text-xs text-gray-500 capitalize">{selectedTier} Tier</p>
                                        </div>
                                    </div>
                                    <hr className="border-gray-100"/>
                                    <div className="space-y-2.5">
                                        <div className="flex items-start gap-2.5">
                                            <span className="material-symbols-outlined text-gray-400 text-base mt-0.5">apartment</span>
                                            <div>
                                                <p className="text-[10px] text-gray-500 font-medium uppercase leading-none mb-0.5">Asset</p>
                                                <p className="text-xs font-bold text-gray-900">Skyline Conference Suite A</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <span className="material-symbols-outlined text-gray-400 text-base mt-0.5">event</span>
                                            <div>
                                                <p className="text-[10px] text-gray-500 font-medium uppercase leading-none mb-0.5">When</p>
                                                <p className="text-xs font-bold text-gray-900">Oct {selectedDate}, 2023 • 06:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-gray-100"/>
                                    <div className="space-y-1.5 text-xs">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span className="font-medium">$450.00</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Fee (2%)</span>
                                            <span className="font-medium">$9.00</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Tax</span>
                                            <span className="font-medium">$36.00</span>
                                        </div>
                                    </div>
                                    <div className="bg-orange-50/50 rounded p-2.5 flex justify-between items-center border border-orange-100/50">
                                        <span className="text-xs text-gray-600 font-bold uppercase">Total</span>
                                        <span className="text-base font-bold text-gray-900 tracking-tight">$495.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-3">
                                <span className="material-symbols-outlined text-blue-600 text-lg">support_agent</span>
                                <div>
                                    <p className="text-xs font-bold text-blue-800 mb-0.5">Support</p>
                                    <p className="text-[10px] text-blue-700">Questions? 1-800-ASSET-AI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 shrink-0 z-20 flex flex-row items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">Total Payment</span>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">$495.00</span>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={onConfirm}
                        className="bg-primary hover:bg-orange-600 text-white text-sm font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 flex items-center gap-2 group" 
                        type="button"
                    >
                        Confirm &amp; Pay
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceReservationModal;