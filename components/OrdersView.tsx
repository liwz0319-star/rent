import React, { useState } from 'react';
import NotificationButton from './NotificationButton';
import PaymentModal from './PaymentModal';

// Mock Data
const ALL_ORDERS = [
  {
    id: 'ORD-2023-001',
    date: 'Oct 24, 2023',
    title: 'Skyline Flex Office - Suite 8B',
    desc: 'Monthly Lease • 12 Months',
    amount: '$4,500.00',
    status: 'Pending Payment',
    statusColor: 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30',
    dotColor: 'bg-primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgj6TcCE1JIzLofbhgpEWovJ_semvVdhsCk00ieG25GV9Qop9oeQO8CvJpmtW-l-JP0KL1sqx-Lt8xoLZkAsQ68fzWJRnGjK4ucdhij8YqkSH6y4q0KNDLTuZMFNVemdwLAEznjod72wBGNenRC4vCqlutBCV5Osz4BoxnZuzvQNkqeL7zfp35vbF2v4JvrDA77QfVDstwZIccs2cPBynXqeS4mBZeIml0Xxr5iNAGHz7bjlSqzSAHoyUQwvMid4iTasKFVTb6dLzE'
  },
  {
    id: 'ORD-2023-002',
    date: 'Oct 20, 2023',
    title: 'Tech Park Meeting Room A',
    desc: 'Hourly Booking • 12 Hours',
    amount: '$850.00',
    status: 'In Progress',
    statusColor: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30',
    dotColor: 'bg-blue-500',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKSNNVMxBQDVXRP7SRTo0dvorfbpM-FWl-BtHIDtob-VyURLznhvka1ZgE0fJjZkjlnqluqufWpT4w40cCB8Iy2AR9sZX7DbbsLq4W25CiB9EDZpb_cbY8_243hy_etydGCiP9iMSzIwgU4I0LKiMikjC2rCrsPOwUX29oO0XOoyeEY-6rxOInw_lclt0x_K8KLsH03OMXCyxj39aHSq6R1IQKMr2sO-m30PGk_OvHrY48stT6kWKYBb24CxFh42RBkrBsbBus5tWG'
  },
  {
    id: 'ORD-2023-005',
    date: 'Sep 15, 2023',
    title: 'Creative Studio Loft',
    desc: 'Weekly Rental • 2 Weeks',
    amount: '$1,200.00',
    status: 'Completed',
    statusColor: 'bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/30',
    dotColor: 'bg-green-500',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcHSyWgwbCoOTk_0VZstE6XsIoRLVjJemfVpxpsgeT6zDCxeasoeNn_jS_82T72VHeJ0TA6erwgdOhqT8sDiiYs_wHeWfNOyMr9BEHlxWcCTwY2REOYvbiebLTfw2FLCHn_RhvAIqbPvHjjyJZIKzuZgxREjuitiPj5a16fFRBpBDXA2d59dOO6nHEumKYgsAMPykzmg5iNtgvDSc4C7ESnRNw5TFc4UPVYUaZQ9T-uIxxPHOBg4x8AGrtD4_mma4rwkgotEIXAxfZ'
  },
  {
    id: 'ORD-2023-008',
    date: 'Oct 25, 2023',
    title: 'Downtown Coworking Desk',
    desc: 'Daily Pass • 5 Days',
    amount: '$250.00',
    status: 'Pending Payment',
    statusColor: 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30',
    dotColor: 'bg-primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHdlTDgb_qPwQnYgAkv_Gv57iprpN3TWEys93vBWnwCdhP2Vx1FeVDrIl4fG68XTXLGn-xN2likJQjOBwVqAUSqH_PrWmZiSjWb-Sd8PUxbP60Mxm6k-Ept8-giqcrjkJWciq4cfgVlkPTSOj_tMUtDdpzZE0NpEtslngm61FUWggkqjZugQww6DSJku_l9LovNm0tSJtR0wMBwmf31SeiQQ7O0ns8diSXPs1g7HkJpxICnb-jmgPONoxDQL3gzq9DBRPslz0gns7w'
  }
];

const OrdersView: React.FC = () => {
  const [activeOrderTab, setActiveOrderTab] = useState('All Orders');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Filter Logic
  const filteredOrders = ALL_ORDERS.filter(order => {
    const matchesTab = activeOrderTab === 'All Orders' || order.status === activeOrderTab;
    const matchesSearch = order.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchQuery.toLowerCase());
    // Simple string date matching for demo purposes
    const matchesDate = !dateFilter || order.date.includes(dateFilter); 
    return matchesTab && matchesSearch && matchesDate;
  });

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shrink-0 sticky top-0 z-20">
            <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-400 font-bold text-[11px] tracking-widest uppercase">OPS & EXECUTION</span>
                <span className="material-symbols-outlined text-slate-400 text-lg">chevron_right</span>
                <span className="text-slate-900 dark:text-white font-bold">Orders</span>
            </div>
            <div className="flex items-center gap-3">
                <button 
                    className="size-9 flex items-center justify-center text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-700"
                    onClick={() => alert("Toggle theme")}
                >
                    <span className="material-symbols-outlined text-[20px]">dark_mode</span>
                </button>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                <NotificationButton />
            </div>
        </header>

        <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col max-w-[1200px] w-full mx-auto p-8 gap-6">
                {/* Title Section */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Order Management</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Manage and track your asset transactions efficiently.</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-slate-200 dark:border-slate-700">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {[
                            { label: 'All Orders', count: ALL_ORDERS.length },
                            { label: 'Pending Payment', count: ALL_ORDERS.filter(o => o.status === 'Pending Payment').length },
                            { label: 'In Progress', count: ALL_ORDERS.filter(o => o.status === 'In Progress').length },
                            { label: 'Completed', count: ALL_ORDERS.filter(o => o.status === 'Completed').length }
                        ].map((tab) => (
                            <div 
                                key={tab.label}
                                onClick={() => setActiveOrderTab(tab.label)}
                                className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 px-1 cursor-pointer group transition-colors ${
                                    activeOrderTab === tab.label 
                                        ? 'border-primary' 
                                        : 'border-transparent hover:border-slate-200 dark:hover:border-slate-600'
                                }`}
                            >
                                <p className={`text-sm font-bold ${
                                    activeOrderTab === tab.label 
                                        ? 'text-primary' 
                                        : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'
                                }`}>
                                    {tab.label}
                                </p>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                    activeOrderTab === tab.label 
                                        ? 'bg-primary/10 text-primary' 
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                }`}>
                                    {tab.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <label className="flex items-center flex-1 w-full md:w-auto bg-slate-50 dark:bg-slate-900 rounded-lg px-3 h-11 border border-transparent focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-slate-800 transition-all">
                        <span className="material-symbols-outlined text-slate-400">search</span>
                        <input 
                            className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm ml-2" 
                            placeholder="Search by Order ID, Asset Name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </label>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <label className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 h-11 min-w-[240px] cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative">
                            <input 
                                type="date"
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 text-sm pr-2" 
                                placeholder="Filter by Date Range"
                                onChange={(e) => setDateFilter(e.target.value)}
                            />
                            {/* Icon purely visual if using native date picker, or can be used to trigger custom picker */}
                            <span className="material-symbols-outlined text-slate-400 absolute right-3 pointer-events-none text-[20px] bg-white dark:bg-slate-800 pl-2">calendar_today</span>
                        </label>
                        <button className="flex items-center justify-center h-11 w-11 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">filter_list</span>
                        </button>
                    </div>
                </div>

                {/* Batch Actions (Only show for All or Pending) */}
                {(activeOrderTab === 'All Orders' || activeOrderTab === 'Pending Payment') && (
                    <div className="bg-orange-50 dark:bg-primary/10 border border-primary/20 rounded-xl p-3 px-5 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4">
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <label className="flex items-center gap-3 cursor-pointer group select-none">
                                <input className="w-5 h-5 text-primary border-primary/40 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer bg-white" type="checkbox"/>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Select All</span>
                            </label>
                            <div className="h-6 w-px bg-primary/20"></div>
                            <span className="text-sm font-bold text-primary">0 items selected</span>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                            <div className="text-right flex flex-col items-end">
                                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Selected</span>
                                <span className="text-lg font-bold text-slate-900 dark:text-white leading-none">$0.00</span>
                            </div>
                            <button 
                                className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-orange-500/20 flex items-center gap-2 transition-transform active:scale-95"
                                onClick={() => setIsPaymentModalOpen(true)}
                            >
                                <span className="material-symbols-outlined text-[20px]">payments</span>
                                Batch Pay
                            </button>
                        </div>
                    </div>
                )}

                {/* Order List */}
                <div className="flex flex-col gap-4">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <div key={order.id} className="bg-white dark:bg-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-5 border border-primary/30 ring-1 ring-primary/10 dark:border-primary/20 shadow-sm transition-all hover:shadow-md">
                                <div className="flex items-center justify-start md:justify-center md:items-center pl-1 pr-1 pt-1 md:pt-0">
                                    <input className="w-5 h-5 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer" type="checkbox"/>
                                </div>
                                <div 
                                    className="w-full md:w-40 h-32 md:h-28 flex-shrink-0 bg-cover bg-center rounded-lg relative overflow-hidden group shadow-inner" 
                                    style={{backgroundImage: `url('${order.img}')`}}
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                        <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">#{order.id}</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> {order.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{order.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{order.desc}</p>
                                </div>
                                <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 min-w-[140px]">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${order.statusColor}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${order.dotColor}`}></span>
                                        {order.status}
                                    </span>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">{order.amount}</p>
                                        <p className="text-xs text-slate-400">Total Amount</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-2 md:w-[140px] justify-center">
                                    {order.status === 'Pending Payment' ? (
                                        <button onClick={() => setIsPaymentModalOpen(true)} className="flex-1 bg-primary hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
                                            Pay Now
                                        </button>
                                    ) : (
                                        <button onClick={() => alert("Action")} className="flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-900 dark:text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                            {order.status === 'In Progress' ? 'Track' : 'Invoice'}
                                        </button>
                                    )}
                                    <button onClick={() => alert("View Details")} className="flex-1 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-4xl mb-2 opacity-20">inbox</span>
                            <p>No orders found matching your filters.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center py-4 border-t border-slate-200 dark:border-slate-700 mt-2">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Showing {filteredOrders.length > 0 ? 1 : 0}-{filteredOrders.length} of {filteredOrders.length} results</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors" disabled>Previous</button>
                        <button className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
        {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </div>
  );
};

export default OrdersView;