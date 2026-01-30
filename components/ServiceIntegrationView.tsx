import React, { useState } from 'react';
import ServiceReservationModal from './ServiceReservationModal';
import AddMerchantModal from './AddMerchantModal';
import OrderDetailsModal from './OrderDetailsModal';

interface ServiceIntegrationViewProps {
  onRequestService?: () => void;
}

const ServiceIntegrationView: React.FC<ServiceIntegrationViewProps> = ({ onRequestService }) => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isAddMerchantModalOpen, setIsAddMerchantModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock Data for Kanban
  const kanbanColumns = {
    pending: [
        { id: 'WO-829', title: 'Emergency IT Support - Room 302', desc: 'Network outage affecting executive conference room.', priority: 'High', type: 'IT', dept: 'IT', time: '45m', color: 'red' },
        { id: 'WO-831', title: 'Filter Replacement - L2', desc: 'Regular maintenance for water dispenser filters.', priority: 'Low', type: 'MT', dept: 'Maintenance', time: '2h', color: 'blue' },
        { id: 'WO-835', title: 'Lighting Check - Hallway', desc: 'Flickering lights reported on floor 4.', priority: 'Low', type: 'MT', dept: 'Maintenance', time: '4h', color: 'blue' }
    ],
    dispatched: [
        { id: 'WO-820', title: 'Catering - Suite 10', desc: 'Lunch service for client meeting. Setup required.', priority: 'Med', type: 'Sup', vendor: 'FreshFoods', time: '2h', color: 'yellow', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9LVfSefEbjU9xb70QeWMRzQH8-7PFu8kithHUnZzFU5gzZLs9wDu3RsSXez-ChHeae_kItKOFLXBQTsooa4vvdmQjrc0zLO-9jwQkV71QyrbHrfv4JDEuiEIDJn6w9XjRIlNGtLuTN7f5GX54VvJOqm1pUDrCOatVd7yGmGd-7PD1f7fjzIXghzQEHVR1hp30yxQiD4M7Q0QfI23il7MmZMShtNWEAYbFoxuZo2aQuaB_3URM5FXLSK_zDs4LWF62Wvu1UJdldXyP' }
    ],
    inProgress: [
        { id: 'WO-815', title: 'HVAC Repair - Lobby', desc: 'AC unit leaking water near reception desk.', priority: 'High', type: 'Tech', vendor: 'TechCool', progress: 66, color: 'red', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXiK_75E33Wgloagx37h1zaoGHjU9b6pkArQTVpk-bugKOFsUvkFbeYPJcbf9I_MS3gzGqF7SdSs3837-T_t3BudTuSNRc9_KlIZNX0Q5QGME-CPaAw6hsDoM51xgnNtI60gPEgEigYk7SeyOZPzVd32ScAjzrEQZwF1Xojd-nT7a1VgsRN-qJ4eeBQmcuoz3KpzqwBqyfB3rtRo8bfzwDtu2sFPaoPJYn248GQDmAgb1bH6B1tvodnkRDC3LvE_-3xykV0rCLmBCX' },
        { id: 'WO-818', title: 'Elevator B Maintenance', desc: 'Scheduled monthly checkup.', priority: 'Med', type: 'Tech', vendor: 'Otis Serv', progress: 33, color: 'yellow', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWvXVolSJ1g7KclxstgxA4DKFBrzKRfz9oXbCg8G3qu0PIGFSU7iI9aOGrZQGwBoMi0kwvvB_doZjWDielHDaXbr7M-UGTswmmm2e39uwF51QbiHgarQNvSDW0Uh3uVvbHRekgAweBbTtr3xwglQ6X6NHd3-z_TEQTtvlsjqZROcm9rXjWVNFgWXO8PODNGG-Wo6GUFpIIsAPbpcMBMo9I6kZjyLsgmiaeNVwLoYQFSZP5UjtEfySVGj7EEmk8wahFaXq90h3PS9w' }
    ],
    completed: [
        { id: 'WO-801', title: 'Cleaning - 5th Floor', desc: 'Completed at 10:30 AM', priority: 'Low', type: 'Sup', vendor: 'GreenClean', color: 'gray' },
        { id: 'WO-799', title: 'Waste Disposal', desc: 'Completed at 09:15 AM', priority: 'Low', type: 'Sup', vendor: 'GreenClean', color: 'gray' }
    ]
  };

  // Mock Suppliers
  const suppliers = [
    { id: 1, name: 'GreenClean Co.', code: 'GC', sub: 'ID: SUP-1004', type: 'Cleaning Services', active: 12, rating: 4.8, reviews: 210, status: 'Active', color: 'green' },
    { id: 2, name: 'FastByte IT', code: 'FB', sub: 'ID: SUP-2041', type: 'IT Support', active: 2, rating: 4.2, reviews: 45, status: 'Busy', color: 'indigo' },
    { id: 3, name: 'TechCool Systems', code: 'TC', sub: 'ID: SUP-1155', type: 'HVAC Maintenance', active: 5, rating: 4.9, reviews: 89, status: 'Active', color: 'orange' }
  ];

  const handleCardClick = (card: any) => {
    // Map kanban card to order details structure
    setSelectedOrder({
        id: card.id,
        title: card.title,
        desc: card.desc,
        status: 'In Progress', // Generic status for view
        amount: '$ --',
        date: 'Oct 24, 2023',
        img: card.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgj6TcCE1JIzLofbhgpEWovJ_semvVdhsCk00ieG25GV9Qop9oeQO8CvJpmtW-l-JP0KL1sqx-Lt8xoLZkAsQ68fzWJRnGjK4ucdhij8YqkSH6y4q0KNDLTuZMFNVemdwLAEznjod72wBGNenRC4vCqlutBCV5Osz4BoxnZuzvQNkqeL7zfp35vbF2v4JvrDA77QfVDstwZIccs2cPBynXqeS4mBZeIml0Xxr5iNAGHz7bjlSqzSAHoyUQwvMid4iTasKFVTb6dLzE'
    });
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-slate-50 dark:bg-slate-900 z-10 shrink-0">
            <div className="flex flex-col gap-1">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">AssetAI</span>
                    <span className="text-slate-500 dark:text-slate-500 text-sm font-medium leading-normal">/</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Ops</span>
                    <span className="text-slate-500 dark:text-slate-500 text-sm font-medium leading-normal">/</span>
                    <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Service Integration</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Service Integration Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" style={{fontSize: '20px'}}>search</span>
                    <input 
                        className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64 text-slate-900 dark:text-white placeholder-gray-400" 
                        placeholder="Search orders..." 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors relative text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>notifications</span>
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
            </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto px-8 pb-8 pt-2">
            
            {/* Kanban Section */}
            <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">view_kanban</span>
                        Work Order Kanban <span className="text-sm font-normal text-gray-500 ml-2 hidden sm:inline">(工单看板)</span>
                    </h2>
                    <button 
                        onClick={() => setIsReservationModalOpen(true)}
                        className="bg-primary hover:bg-[#e06200] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95"
                    >
                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>add</span>
                        Create New Work Order
                    </button>
                </div>

                {/* Kanban Board */}
                <div className="flex gap-4 overflow-x-auto pb-4 min-h-[500px]">
                    {/* Column: Pending */}
                    <div className="flex flex-col bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3 w-[280px] shrink-0 border border-transparent dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Pending</span>
                            <span className="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">{kanbanColumns.pending.length}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">
                            {kanbanColumns.pending.map(card => (
                                <div key={card.id} onClick={() => handleCardClick(card)} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 group cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${card.priority === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>{card.priority}</span>
                                        <span className="text-xs text-gray-400">#{card.id}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{card.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{card.desc}</p>
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-700">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] font-bold">{card.type}</div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{card.dept}</span>
                                        </div>
                                        <span className={`text-xs font-medium flex items-center gap-1 ${card.priority === 'High' ? 'text-red-500' : 'text-gray-400'}`}>
                                            <span className="material-symbols-outlined" style={{fontSize: '14px'}}>schedule</span> {card.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column: Dispatched */}
                    <div className="flex flex-col bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3 w-[280px] shrink-0 border border-transparent dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Dispatched</span>
                            <span className="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">{kanbanColumns.dispatched.length}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">
                            {kanbanColumns.dispatched.map(card => (
                                <div key={card.id} onClick={() => handleCardClick(card)} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 group cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{card.priority}</span>
                                        <span className="text-xs text-gray-400">#{card.id}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{card.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{card.desc}</p>
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-700">
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-center bg-no-repeat bg-cover rounded-full w-5 h-5 bg-slate-200" style={{backgroundImage: `url('${card.avatar}')`}}></div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{card.vendor}</span>
                                        </div>
                                        <span className="text-xs font-medium text-orange-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined" style={{fontSize: '14px'}}>schedule</span> {card.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column: In Progress */}
                    <div className="flex flex-col bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3 w-[280px] shrink-0 border border-transparent dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">In Progress</span>
                            <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">{kanbanColumns.inProgress.length}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">
                            {kanbanColumns.inProgress.map(card => (
                                <div key={card.id} onClick={() => handleCardClick(card)} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border-l-4 border-l-primary border-y border-r border-slate-200 dark:border-slate-700 group cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${card.priority === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>{card.priority}</span>
                                        <span className="text-xs text-gray-400">#{card.id}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{card.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{card.desc}</p>
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-700">
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-center bg-no-repeat bg-cover rounded-full w-5 h-5 bg-slate-200" style={{backgroundImage: `url('${card.avatar}')`}}></div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{card.vendor}</span>
                                        </div>
                                        <div className="w-16 h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div className={`h-full ${card.color === 'red' ? 'bg-primary' : 'bg-blue-500'}`} style={{width: `${card.progress}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column: Completed */}
                    <div className="flex flex-col bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3 w-[280px] shrink-0 border border-transparent dark:border-slate-800">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Completed</span>
                            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-0.5 rounded-full">{kanbanColumns.completed.length}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">
                            {kanbanColumns.completed.map(card => (
                                <div key={card.id} onClick={() => handleCardClick(card)} className="bg-white dark:bg-slate-800 opacity-70 p-3 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 group cursor-pointer hover:opacity-100 transition-opacity">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{card.priority}</span>
                                        <span className="text-xs text-gray-400 decoration-slate-400 line-through">#{card.id}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 line-through decoration-slate-400">{card.title}</h3>
                                    <p className="text-xs text-gray-400 mb-3">{card.desc}</p>
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-700">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-green-600 dark:text-green-400" style={{fontSize: '16px'}}>check_circle</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{card.vendor}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Supplier Table Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">groups</span>
                        Supplier Management <span className="text-sm font-normal text-gray-500 ml-2 hidden sm:inline">(供应商管理)</span>
                    </h2>
                    <button 
                        onClick={() => setIsAddMerchantModalOpen(true)}
                        className="text-primary hover:text-[#e06200] border border-primary/30 hover:bg-primary/5 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
                    >
                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>person_add</span>
                        Register New Supplier
                    </button>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-left">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                                    <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Supplier Name</th>
                                    <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Service Category</th>
                                    <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Active Work Orders</th>
                                    <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Rating</th>
                                    <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Status</th>
                                    <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {suppliers.map(supplier => (
                                    <tr key={supplier.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${supplier.color === 'green' ? 'bg-green-100 text-green-700' : supplier.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' : 'bg-orange-100 text-orange-700'}`}>{supplier.code}</div>
                                                <div>
                                                    <p className="font-medium text-slate-900 dark:text-white">{supplier.name}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{supplier.sub}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${supplier.color === 'green' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : supplier.color === 'indigo' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'}`}>
                                                {supplier.type}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-slate-900 dark:text-white tabular-nums">{String(supplier.active).padStart(2, '0')}</span>
                                                <div className="w-24 h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${supplier.color === 'green' ? 'bg-green-500 w-3/4' : supplier.color === 'indigo' ? 'bg-indigo-500 w-[16%]' : 'bg-orange-500 w-[40%]'}`}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1">
                                                <span className="font-bold text-slate-900 dark:text-white tabular-nums">{supplier.rating}</span>
                                                <div className="flex text-primary">
                                                    <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                                    <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                                    <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                                    <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                                    <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: supplier.rating > 4.5 ? "'FILL' 1" : "'FILL' 0"}}>star</span>
                                                </div>
                                                <span className="text-xs text-gray-400">({supplier.reviews})</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-1.5">
                                                <span className={`w-2 h-2 rounded-full ${supplier.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{supplier.status}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

        {isReservationModalOpen && (
            <ServiceReservationModal 
                onClose={() => setIsReservationModalOpen(false)} 
                onConfirm={() => {
                    setIsReservationModalOpen(false);
                    // Could trigger payment or success here if desired
                }}
            />
        )}
        {isAddMerchantModalOpen && (
            <AddMerchantModal 
                onClose={() => setIsAddMerchantModalOpen(false)}
                onSubmit={() => {
                    alert("Supplier registration submitted!");
                    setIsAddMerchantModalOpen(false);
                }}
            />
        )}
        {selectedOrder && (
            <OrderDetailsModal
                order={selectedOrder}
                onClose={() => setSelectedOrder(null)}
            />
        )}
    </div>
  );
};

export default ServiceIntegrationView;