import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import PersonalCenterModal from './PersonalCenterModal';
import SettingsModal from './SettingsModal';
import ContractPreviewModal from './ContractPreviewModal';

type ViewType = 'home' | 'digital-twins' | 'auto-ingestion' | 'auto-negotiation' | 'smart-contracts' | 'service-integration' | 'orders';

const DashboardPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [assetFilter, setAssetFilter] = useState<'all' | 'available' | 'occupied'>('all');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPersonalCenterOpen, setIsPersonalCenterOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [homeSearchQuery, setHomeSearchQuery] = useState('');
  const [activeServiceTab, setActiveServiceTab] = useState('Cleaning');
  const [activeOrderTab, setActiveOrderTab] = useState('Pending Payment');
  const [iotStates, setIotStates] = useState({
    lighting: true,
    hvac: true,
    blinds: false,
  });

  // State for Auto-Ingestion
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'North_Tower_L05_Arch.ifc', size: '124 MB', date: '2 mins ago', status: 'Processing', progress: 45, type: 'ifc' },
    { id: 2, name: 'East_Wing_MEP.rvt', size: '450 MB', date: '1 hour ago', status: 'Completed', progress: 100, type: 'rvt' },
    { id: 3, name: 'Site_Survey_Scan.e57', size: '1.2 GB', date: '3 hours ago', status: 'Completed', progress: 100, type: 'scan' },
  ]);

  const toggleIot = (device: keyof typeof iotStates) => {
    setIotStates(prev => ({ ...prev, [device]: !prev[device] }));
  };

  const handleGenerateSearch = () => {
    if (homeSearchQuery.trim()) {
      alert(`Generating results for: ${homeSearchQuery}`);
      // In a real app, this would trigger navigation or API call
    }
  };

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    alert('Files dropped! (Simulation)');
  };

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-display overflow-hidden h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 h-full flex flex-col bg-white border-r border-slate-200 shrink-0 z-20 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-lg shadow-primary/10" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpBUMJyc5ZFL5cyneyUX4d5ffcb--jW0KLX_gGerLJLiqYtvAszmlUdem86x20eK6wSDYBI3dDwxZ5M5ZdzOKqt-O8MUlaJgIVvERwIEzs3qDyI3byNGAew09oVoffjEtQNrDy7THfHkbIeemCMQrVxi1pkBkaTqd6SxbIV1eyv-PUk4sL3SIqFLpRctWJJ5SkNd0M9UcK9EtYjE3YtMtPwvGIK3AQF4gl6InUvoTVlrm36RtwvWrKARj8bE7DzGPmJDBq7WMv8S5s")'}}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-lg font-bold leading-none tracking-tight">AssetAI</h1>
              <p className="text-slate-500 text-xs font-normal mt-1">Enterprise</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-200px)] no-scrollbar">
            <div 
              onClick={() => setCurrentView('home')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'home' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'home' ? 'fill-1' : ''}`}>home</span>
              <p className={`text-sm ${currentView === 'home' ? 'font-bold' : 'font-medium'}`}>Home</p>
            </div>
            
            <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">Asset Perception</p>
            
            <div 
              onClick={() => setCurrentView('digital-twins')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'digital-twins' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'digital-twins' ? 'fill-1' : ''}`}>deployed_code</span>
              <p className={`text-sm ${currentView === 'digital-twins' ? 'font-bold' : 'font-medium'}`}>Digital Twins</p>
            </div>
            
            <div 
              onClick={() => setCurrentView('auto-ingestion')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'auto-ingestion' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'auto-ingestion' ? 'fill-1' : ''}`}>cloud_upload</span>
              <p className={`text-sm ${currentView === 'auto-ingestion' ? 'font-bold' : 'font-medium'}`}>Auto-Ingestion</p>
            </div>

            <div 
              onClick={() => setCurrentView('auto-negotiation')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'auto-negotiation' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'auto-negotiation' ? 'fill-1' : ''}`}>handshake</span>
              <p className={`text-sm ${currentView === 'auto-negotiation' ? 'font-bold' : 'font-medium'}`}>Auto-Negotiation</p>
            </div>
            
            <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">Ops & Execution</p>
            
            <div 
              onClick={() => setCurrentView('smart-contracts')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'smart-contracts' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'smart-contracts' ? 'fill-1' : ''}`}>gavel</span>
              <p className={`text-sm ${currentView === 'smart-contracts' ? 'font-bold' : 'font-medium'}`}>Smart Contracts</p>
            </div>
            <div 
              onClick={() => setCurrentView('service-integration')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'service-integration' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'service-integration' ? 'fill-1' : ''}`}>hub</span>
              <p className={`text-sm ${currentView === 'service-integration' ? 'font-bold' : 'font-medium'}`}>Service Integration</p>
            </div>
            <div 
              onClick={() => setCurrentView('orders')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'orders' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'orders' ? 'fill-1' : ''}`}>receipt_long</span>
              <p className={`text-sm ${currentView === 'orders' ? 'font-bold' : 'font-medium'}`}>Orders</p>
            </div>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t border-slate-200 bg-slate-50/50">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:bg-slate-100 p-2 -mx-2 rounded-xl transition-colors group"
            onClick={() => setIsPersonalCenterOpen(true)}
          >
            <div className="size-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold border border-slate-300 group-hover:border-slate-400 transition-colors">
              JD
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate group-hover:text-primary transition-colors">John Doe</p>
              <p className="text-xs text-slate-500 truncate">Facility Manager</p>
            </div>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsSettingsModalOpen(true);
                }}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden bg-slate-50">
        
        {/* Render Views based on currentView */}
        
        {currentView === 'home' && (
           <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col p-6 lg:p-10">
              <div className="flex-1 flex flex-col items-center justify-center -mt-10">
                <div className="mb-8 relative group">
                  <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full transform scale-150 group-hover:scale-175 transition-transform duration-700"></div>
                  <div className="relative w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 border border-slate-100">
                    <span className="material-icons-round text-6xl text-primary">auto_awesome</span>
                  </div>
                </div>
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                  <h1 className="text-5xl font-bold tracking-tight text-slate-900">
                    Hey John! <br />
                    <span className="text-slate-600">
                      What would you like to
                    </span>
                    <span className="text-hermes ml-2">manage today?</span>
                  </h1>
                  <p className="text-lg text-slate-500">
                    Ready to assist you with analyzing market trends, listing new assets, and finding the perfect commercial tenants in seconds.
                  </p>
                </div>
                <div className="w-full max-w-2xl relative z-20">
                  <div className="bg-white rounded-2xl p-2.5 shadow-2xl shadow-slate-200/50 flex items-center gap-3 border border-slate-200 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
                    <div className="pl-4 text-slate-400">
                      <span className="material-symbols-outlined text-2xl">search</span>
                    </div>
                    <input 
                      className="flex-1 bg-transparent border-none text-slate-900 placeholder-slate-400 focus:ring-0 text-lg py-3" 
                      placeholder="Paste a property listing URL or describe the ideal office space..." 
                      type="text" 
                      value={homeSearchQuery}
                      onChange={(e) => setHomeSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleGenerateSearch()}
                    />
                    <button 
                      onClick={handleGenerateSearch}
                      className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-0.5"
                    >
                      <span className="material-icons-round text-xl">auto_fix_high</span>
                      Generate
                    </button>
                  </div>
                </div>

                {/* Visual Asset Clips */}
                <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-4">
                  {/* Card 1 */}
                  <div className="group relative h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgj6TcCE1JIzLofbhgpEWovJ_semvVdhsCk00ieG25GV9Qop9oeQO8CvJpmtW-l-JP0KL1sqx-Lt8xoLZkAsQ68fzWJRnGjK4ucdhij8YqkSH6y4q0KNDLTuZMFNVemdwLAEznjod72wBGNenRC4vCqlutBCV5Osz4BoxnZuzvQNkqeL7zfp35vbF2v4JvrDA77QfVDstwZIccs2cPBynXqeS4mBZeIml0Xxr5iNAGHz7bjlSqzSAHoyUQwvMid4iTasKFVTb6dLzE")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold border border-white/30 uppercase tracking-wide">Virtual Tour</span>
                        <span className="flex items-center text-[10px] font-medium opacity-80"><span className="material-symbols-outlined text-[12px] mr-0.5">schedule</span> 2:15</span>
                      </div>
                      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">Downtown Loft Series</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl">
                        <span className="material-symbols-outlined text-[28px] ml-1">play_arrow</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group relative h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKSNNVMxBQDVXRP7SRTo0dvorfbpM-FWl-BtHIDtob-VyURLznhvka1ZgE0fJjZkjlnqluqufWpT4w40cCB8Iy2AR9sZX7DbbsLq4W25CiB9EDZpb_cbY8_243hy_etydGCiP9iMSzIwgU4I0LKiMikjC2rCrsPOwUX29oO0XOoyeEY-6rxOInw_lclt0x_K8KLsH03OMXCyxj39aHSq6R1IQKMr2sO-m30PGk_OvHrY48stT6kWKYBb24CxFh42RBkrBsbBus5tWG")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold border border-white/10 uppercase tracking-wide">Featured</span>
                        <span className="flex items-center text-[10px] font-medium opacity-80"><span className="material-symbols-outlined text-[12px] mr-0.5">visibility</span> 1.2k</span>
                      </div>
                      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">Tech Park Campus</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl">
                        <span className="material-symbols-outlined text-[28px] ml-1">play_arrow</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group relative h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcHSyWgwbCoOTk_0VZstE6XsIoRLVjJemfVpxpsgeT6zDCxeasoeNn_jS_82T72VHeJ0TA6erwgdOhqT8sDiiYs_wHeWfNOyMr9BEHlxWcCTwY2REOYvbiebLTfw2FLCHn_RhvAIqbPvHjjyJZIKzuZgxREjuitiPj5a16fFRBpBDXA2d59dOO6nHEumKYgsAMPykzmg5iNtgvDSc4C7ESnRNw5TFc4UPVYUaZQ9T-uIxxPHOBg4x8AGrtD4_mma4rwkgotEIXAxfZ")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold border border-white/30 uppercase tracking-wide">Design</span>
                        <span className="flex items-center text-[10px] font-medium opacity-80"><span className="material-symbols-outlined text-[12px] mr-0.5">location_on</span> NY</span>
                      </div>
                      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">Minimalist Studio</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white shadow-xl">
                        <span className="material-symbols-outlined text-[28px] ml-1">play_arrow</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
           </div>
        )}

        {currentView === 'digital-twins' && (
          <>
            {/* Secondary Sidebar for Digital Twins */}
            <div className="w-96 flex flex-col border-r border-slate-200 bg-white z-10 shrink-0">
              <div className="p-4 border-b border-slate-200 bg-white">
                <label className="flex flex-col w-full h-10 mb-3">
                  <div className="flex w-full flex-1 items-stretch rounded-lg bg-slate-100 border border-slate-200 focus-within:border-hermes focus-within:ring-1 focus-within:ring-hermes/20 transition-all overflow-hidden">
                    <div className="text-slate-400 flex items-center justify-center pl-3">
                      <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input className="w-full bg-transparent border-none text-slate-900 text-sm placeholder:text-slate-400 focus:ring-0 px-3" placeholder="Search assets..." />
                  </div>
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  <button 
                    onClick={() => setAssetFilter('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap shadow-sm transition-colors ${assetFilter === 'all' ? 'bg-hermes/10 text-hermes border-hermes/20 font-semibold' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                  >
                    All Assets
                  </button>
                  <button 
                    onClick={() => setAssetFilter('available')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap shadow-sm transition-colors ${assetFilter === 'available' ? 'bg-hermes/10 text-hermes border-hermes/20 font-semibold' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                  >
                    Available
                  </button>
                  <button 
                    onClick={() => setAssetFilter('occupied')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap shadow-sm transition-colors ${assetFilter === 'occupied' ? 'bg-hermes/10 text-hermes border-hermes/20 font-semibold' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                  >
                    Occupied
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 bg-slate-50">
                {/* Asset Cards */}
                <div className="group flex flex-col p-3 rounded-xl bg-white border border-hermes shadow-sm ring-1 ring-hermes/20 cursor-pointer relative overflow-hidden transition-all">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-hermes rounded-l-xl"></div>
                  <div className="flex gap-3 mb-3">
                    <div className="shrink-0 size-16 rounded-lg bg-cover bg-center relative shadow-inner" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9-8h8XRLXVw8nWFfStSab9qafp7TWL6D8Bpn3Y6c61loP8tP5uhHY9iohXJLiHlwwzclnZhuiI3baVuo-zjGdum1tiKSDN9IKHwDQVhpSZaa5t-ggoW94E_Aj2_yZIPiSGFF2ad5PRC1DPaqov_eYD7MnTCGSGtcU2lHVRxBa9_8reL1cG0IH_FnYe21kY7HH3gZl_dvb8-fhiAplgO6kDlX3xQp97LusI63pvUtf56A0GG7QAp_k9COr07P8TM9H0jvBMsFL3vzl")'}}>
                      <div className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-sm rounded px-1.5 py-0.5 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-900">L05</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="text-slate-900 text-sm font-bold truncate leading-tight mb-1">North Tower - Suite 501</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-600 border border-green-200 uppercase tracking-wide">Available</span>
                        <span className="text-slate-500 text-xs truncate">1250 sqm</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-500 text-xs font-medium">Health</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-hermes rounded-full shadow-[0_0_8px_rgba(253,120,15,0.4)]" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-hermes text-xs font-bold">95%</span>
                  </div>
                </div>

                <div className="group flex flex-col p-3 rounded-xl bg-white border border-slate-200 hover:border-hermes/30 hover:shadow-md cursor-pointer transition-all">
                  <div className="flex gap-3 mb-3">
                    <div className="shrink-0 size-16 rounded-lg bg-cover bg-center relative shadow-inner" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpD7UJ0K3qXpW6VrNHcxNS6eEQlJdDHS3PhW2v5PAwEJH6yd-ONO8YKJLnKoSKFh4dOj_2svfz3EfrUGdeQHX5uMHa8qf_HV1o_gL-HvRltE00sAzHA1OHuJ9VohWd8fdwN34z12mCR76AkzodlEEg0bFsDOsZwdMNGwo6WIaIYk6eB0YhMhIVasq8Ca2v-kRyLuScVgBevBa0grOEtA-m5Bq4uVdg8l-fYb_W3ESO-CGaIqr2KHKimW13uk7CowKTMAUWniVJ3iJj")'}}>
                      <div className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-sm rounded px-1.5 py-0.5 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-900">L02</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="text-slate-700 text-sm font-semibold truncate leading-tight mb-1">East Wing - Conf Room B</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-200 uppercase tracking-wide">Occupied</span>
                        <span className="text-slate-400 text-xs truncate">450 sqm</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-400 text-xs font-medium">Health</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-hermes/80 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-hermes/80 text-xs font-bold">85%</span>
                  </div>
                </div>

                {/* More asset cards could go here */}
              </div>
            </div>

            {/* Digital Twin Content */}
            <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50 p-6 lg:p-10 scroll-smooth">
              <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                    <span className="cursor-pointer hover:text-hermes transition-colors">Assets</span>
                    <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                    <span className="cursor-pointer hover:text-hermes transition-colors">North Tower</span>
                    <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                    <span className="text-slate-800 font-bold bg-slate-200/50 px-2 py-0.5 rounded">Suite 501</span>
                  </nav>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">North Tower - Suite 501</h1>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-hermes text-white hover:bg-orange-600 transition-all font-semibold text-sm shadow-lg shadow-orange-500/20 active:translate-y-0.5" onClick={() => setIsBookingModalOpen(true)}>
                    <span className="material-symbols-outlined text-[18px]">event_available</span>
                    Book Meeting
                  </button>
                </div>
              </header>

              <section className="w-full aspect-[21/9] min-h-[300px] bg-slate-900 rounded-2xl mb-8 relative group overflow-hidden border border-slate-300 shadow-lg shadow-slate-200/50">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF37S8p1faGRX8BiWB27EzDpJhdr7sPuES7ntT7JC4rAqW7oJd20oxdnCvJ4zsTbJiWYbobRmf_hr9eD9OUSz6PIoHFW3pjPpmuqW52LjnebE4Eyy8cPA4CnLshbYJGiKwWkRR8hUc1tqiAOQfl-JnxGDVzO68c7Y_ytm9DxYVCRs904HfoxvvxlhfRPV37b2jzbIUidd5YGILsdiDpfvhTobgDq6G9zh5pRp9-TJ3asa4tpvPMLnnBog_2WAMtpIYBvw780yVXRgT")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>
                <div className="absolute top-6 left-6 flex items-center gap-3 pointer-events-auto">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full border border-white/50 flex items-center gap-2 shadow-sm">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                    LIVE FEED
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] align-middle">360</span> 
                    VR MODE
                  </span>
                </div>
                {/* Hotspots */}
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 group/hotspot cursor-pointer pointer-events-auto">
                  <div className="size-8 rounded-full bg-hermes/30 backdrop-blur-sm border-2 border-white flex items-center justify-center animate-bounce shadow-lg">
                    <div className="size-2 bg-hermes rounded-full"></div>
                  </div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity whitespace-nowrap arrow-top">
                    Workstation Cluster A
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 flex items-center gap-2 pointer-events-auto">
                  <button className="size-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                  </button>
                  <button className="size-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">zoom_out</span>
                  </button>
                  <button className="size-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">fullscreen</span>
                  </button>
                </div>
              </section>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                {/* Stats */}
                <div className="xl:col-span-1 flex flex-col gap-5">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">square_foot</span>
                    Spatial Parameters
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Total Area</span>
                        <span className="text-2xl font-bold text-slate-900">1,250 <span className="text-sm text-slate-400 font-normal">sqm</span></span>
                      </div>
                      <div className="size-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined">grid_4x4</span>
                      </div>
                    </div>
                    {/* Additional Stats */}
                    <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Workstations</span>
                        <span className="text-2xl font-bold text-slate-900">45 <span className="text-sm text-slate-400 font-normal">units</span></span>
                      </div>
                      <div className="size-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined">desk</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IoT Controls */}
                <div className="xl:col-span-2 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <span className="material-symbols-outlined text-hermes">router</span>
                      IoT Device Status
                    </h2>
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1 bg-green-50 border border-green-200 px-2 py-1 rounded-full">
                      <div className="size-1.5 rounded-full bg-green-500"></div> Connected
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                    {/* Lighting */}
                    <div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                      <div className="absolute top-0 right-0 p-4">
                        <label className="inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={iotStates.lighting} 
                            onChange={() => toggleIot('lighting')}
                          />
                          <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-hermes transition-colors"></div>
                        </label>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className={`size-12 rounded-full flex items-center justify-center border ${iotStates.lighting ? 'bg-yellow-50 text-yellow-500 border-yellow-100' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                          <span className="material-symbols-outlined">lightbulb</span>
                        </div>
                        <div>
                          <h3 className="text-slate-900 font-bold text-lg">Lighting</h3>
                          <p className="text-slate-500 text-sm">Main Zone</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="flex justify-between text-xs mb-2 text-slate-500 font-medium">
                          <span>Intensity</span>
                          <span className="text-slate-900 font-mono">80%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className={`h-2 rounded-full shadow-[0_0_6px_rgba(250,204,21,0.5)] transition-all ${iotStates.lighting ? 'bg-yellow-400' : 'bg-slate-300'}`} style={{width: '80%'}}></div>
                        </div>
                      </div>
                    </div>
                    {/* HVAC */}
                    <div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                       <div className="absolute top-0 right-0 p-4">
                        <label className="inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={iotStates.hvac} 
                            onChange={() => toggleIot('hvac')}
                          />
                          <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-hermes transition-colors"></div>
                        </label>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100">
                          <span className="material-symbols-outlined">ac_unit</span>
                        </div>
                        <div>
                          <h3 className="text-slate-900 font-bold text-lg">HVAC</h3>
                          <p className="text-slate-500 text-sm">Climate Control</p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <button className="size-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-light text-slate-900">22°</span>
                          <span className="text-[10px] text-blue-500 uppercase font-bold tracking-wider">Cooling</span>
                        </div>
                        <button className="size-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-6">
                  <span>Last Synced: <span className="text-slate-600 font-medium">2 mins ago</span></span>
                  <span>Firmware: <span className="text-slate-600 font-medium">v4.5.2-alpha</span></span>
                </div>
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span className="font-medium">Secure Connection via TLS 1.3</span>
                </div>
              </div>
            </div>
            
            {/* Booking Modal Render */}
            {isBookingModalOpen && (
              <BookingModal 
                onClose={() => setIsBookingModalOpen(false)} 
                onConfirm={() => {
                  alert('Meeting booked successfully!');
                  setIsBookingModalOpen(false);
                }} 
              />
            )}
          </>
        )}
        
        {currentView === 'auto-ingestion' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
                {/* Header */}
                <header className="h-16 border-b border-slate-200 flex items-center justify-between px-8 bg-white flex-shrink-0 z-20">
                    <div className="flex items-center text-sm text-slate-500 font-medium">
                        <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => setCurrentView('home')}>
                            <span className="material-symbols-outlined text-[20px]">home</span>
                        </a>
                        <span className="material-symbols-outlined text-[16px] mx-2 text-slate-300">chevron_right</span>
                        <span className="hover:text-slate-900 transition-colors cursor-pointer">Asset Perception</span>
                        <span className="material-symbols-outlined text-[16px] mx-2 text-slate-300">chevron_right</span>
                        <span className="text-slate-900 font-semibold bg-slate-100 px-2 py-0.5 rounded">Auto-Ingestion</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative mr-4 hidden md:block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <span className="material-symbols-outlined text-[18px]">search</span>
                            </span>
                            <input className="w-64 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-primary focus:border-primary block pl-9 p-2 placeholder-slate-400 transition-all hover:bg-slate-100" placeholder="Search assets..." type="text"/>
                        </div>
                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors" onClick={() => alert("Toggle theme")}>
                            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
                        </button>
                        <button className="relative p-2 text-slate-400 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors" onClick={() => alert("Notifications")}>
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-white p-8 pb-32">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        <div className="flex justify-between items-end">
                            <div>
                                <h1 className="text-2xl font-bold font-display text-slate-900 tracking-tight">Auto-Ingestion Dashboard</h1>
                                <p className="text-slate-500 mt-1 text-sm">Manage data sources and AI-driven asset analysis pipeline.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-500 hover:border-primary hover:text-primary transition-all bg-white font-medium text-sm shadow-sm" onClick={() => alert("History Log clicked")}>
                                    <span className="material-symbols-outlined text-[18px]">history</span>
                                    History Log
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-500 hover:border-primary hover:text-primary transition-all bg-white font-medium text-sm shadow-sm" onClick={() => alert("Config clicked")}>
                                    <span className="material-symbols-outlined text-[18px]">settings</span>
                                    Config
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                <div 
                                    className="rounded-xl flex flex-col items-center justify-center p-8 text-center h-64 bg-slate-50/50 hover:bg-orange-50/30 transition-all cursor-pointer group relative overflow-hidden"
                                    onClick={() => alert("Browse files dialog")}
                                    style={{
                                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzT7TC2BGLv0Kyjx0igwPGdPMC3h1YOPtmF4hQmFs6FUjjwTrwlGoAFJzk5Ow7a9QVlA_VRfGZ6zjXonIkIvp0RwVkC_z-2RVen7KUKA4cTqAsKrprqqnWOqOqSr807qyR_aikggunz3PE66SNP2PcTO0O7CC5yHqVQyAxTFnXfvTCXgrO59BiN1bB67Y0Q2yuS36yuuK6D3oX7DKQA8Ph1FVd-SqSZfZQVJvcQe2KxnmDz2vbDq03gG2fFVin8fjiK-AbNkd4NhGe")`,
                                        backgroundSize: 'cover' // or repeat based on intent, but url suggests pattern
                                    }}
                                >
                                    <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-transform z-10">
                                        <span className="material-symbols-outlined text-primary text-[28px]">cloud_upload</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 z-10">Upload Assets</h3>
                                    <p className="text-sm text-slate-500 mt-2 mb-4 max-w-[200px] z-10">Drag & drop photos or videos here, or click to browse files.</p>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide z-10">JPG, PNG, MP4 (Max 500MB)</span>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-5 flex-1">
                                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                                        <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
                                        Analysis Pipeline
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="font-medium text-slate-700">Object Detection</span>
                                                <span className="text-green-600 font-bold text-xs flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Complete</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 w-full rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="font-medium text-slate-700">Spatial Parameters</span>
                                                <span className="text-primary font-bold text-xs">85%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[85%] rounded-full relative overflow-hidden shadow-[0_0_10px_rgba(253,120,15,0.4)]">
                                                    <div className="absolute inset-0 bg-white/30 animate-[pulse_1.5s_infinite]"></div>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-slate-400 font-mono">Calibrating dimensions from reference points...</p>
                                        </div>
                                        <div className="flex flex-col gap-2 opacity-40">
                                            <div className="flex justify-between text-sm">
                                                <span className="font-medium text-slate-700">Digital Twin Gen</span>
                                                <span className="text-slate-400 text-xs font-semibold">Pending</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-slate-300 w-0 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto bg-slate-900 text-slate-300 p-3 rounded-lg border border-slate-800 shadow-inner">
                                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">LIVE LOG</span>
                                            <span className="text-[10px] text-slate-500 font-mono">PID: 49201</span>
                                        </div>
                                        <div className="text-[10px] font-mono space-y-1.5">
                                            <p className="text-slate-400"><span className="text-green-500">✓</span> Image_04.jpg: Identified 'Herman Miller Aeron' (98%)</p>
                                            <p className="text-slate-400"><span className="text-green-500">✓</span> Image_04.jpg: Detected 'Floor-to-ceiling Window'</p>
                                            <p className="text-primary animate-pulse">&gt; Calculation: Ceiling height est. 3.2m</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-slate-900 text-lg">AI Vision Analysis</h3>
                                    <div className="flex bg-slate-100 rounded-lg p-1 gap-1">
                                        <button className="p-1.5 rounded-md bg-white shadow-sm text-primary" onClick={() => alert("Grid view")}>
                                            <span className="material-symbols-outlined text-[18px]">grid_view</span>
                                        </button>
                                        <button className="p-1.5 rounded-md hover:bg-white text-slate-400 hover:text-slate-600 transition-colors" onClick={() => alert("List view")}>
                                            <span className="material-symbols-outlined text-[18px]">list</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-900 group shadow-md">
                                        <img alt="Modern office interior" className="w-full h-full object-cover opacity-90 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK-uPATa74iyyIUdpNkobDA9b6-vGmOLUF0ZUpq2_td-2mm1uJGxtKNTuvj-KBZe2W0tfyACxIU7ln0p1qtbl7J9S4NX_F5_4txZ_PKYfjso5QofRNAfO91SJCkX2eNB4g49VZQX2hLrnTFAJyqlu-mEqp3ISNmgAD4ERiDSfYhBejP6lVmgHLdAzCEhtCqcda6Dbd4C579AXBjxpdDqN47k2eJtyvwCEDgq9p4x9p5KXXjf1W9ahCo9U-WVQDXQd_1QtrMyWwxZx-"/>
                                        <div 
                                            className="absolute top-[45%] left-[15%] w-[12%] h-[25%] rounded flex items-start justify-center cursor-pointer transition-all hover:bg-primary/20"
                                            style={{border: '2px solid #FD780F', background: 'rgba(253, 120, 15, 0.1)'}}
                                            onClick={() => alert("Herman Miller Chair selected")}
                                        >
                                            <div className="absolute -top-6 left-0 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap z-10" style={{background: '#FD780F', color: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                                                <span className="material-symbols-outlined text-[12px]">chair</span>
                                                Herman Miller Chair (99%)
                                            </div>
                                        </div>
                                        <div 
                                            className="absolute top-[30%] right-[10%] w-[15%] h-[30%] rounded flex items-start justify-center cursor-pointer transition-all hover:bg-primary/20"
                                            style={{border: '2px solid #FD780F', background: 'rgba(253, 120, 15, 0.1)'}}
                                            onClick={() => alert("Whiteboard selected")}
                                        >
                                            <div className="absolute -top-6 right-0 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap z-10" style={{background: '#FD780F', color: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                                                <span className="material-symbols-outlined text-[12px]">edit_note</span>
                                                Whiteboard
                                            </div>
                                        </div>
                                        <div 
                                            className="absolute top-[10%] left-[30%] w-[40%] h-[50%] border-2 border-blue-400 bg-blue-400/10 rounded flex items-start justify-center cursor-pointer transition-all hover:bg-blue-400/20"
                                            onClick={() => alert("Window selected")}
                                        >
                                            <div className="absolute -top-6 left-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap shadow-sm z-10">
                                                <span className="material-symbols-outlined text-[12px]">window</span>
                                                Floor-to-ceiling Window
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 overflow-x-auto pb-2 pt-2 no-scrollbar">
                                        <div className="relative w-28 h-20 rounded-lg border-2 border-primary cursor-pointer flex-shrink-0 shadow-md">
                                            <img alt="Office main view" className="w-full h-full object-cover rounded-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4qU0OJoPWCxeCX6x18MUHemFFlOB2m0Le4LrDpzTctnHO-OZMaqYRsIDMQo0fTrEgM__cWyNYw_gyVMYvB2b_1Qyy67PsERPoths32Jtq9SgmucYuy17GWseq1P66ahVww23NLVLAim9DXboPJ1Jf3BD-C6w-VrnbUI0oOXXuxiBqqZGs4ipzb_Cc6P7lF-5tBk3WE7exDA9pJKmbLpicyqimln-ctlCIwz5shPnZ2D5fD0usZrCrmqjI2__hD0MfFr_FeOiHZ6L1"/>
                                            <div className="absolute inset-0 bg-primary/10"></div>
                                        </div>
                                        <div className="relative w-28 h-20 rounded-lg border border-slate-200 cursor-pointer flex-shrink-0 overflow-hidden group hover:border-primary/50 transition-colors" onClick={() => alert("Image 2 selected")}>
                                            <img alt="Conference room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61x3S7P2WMadZ7k2SOafb0kE_1RXWSvmsPC5PvqaHr3axQw-5VRgWRe3CMdYzBGt_uTwW06dM7U0FQmsdKwkyHyI7HGzdahZHtsir41oyeXfdTYVoC0KWDng4EufDqaw4SMcMuZsNNuYeLqoEoG73zZGB3cBCaq3m3isbnvtDHMx1r6-PosXmIfJWf2S16jr2ah1uqxjPLz-evjBFSk-wOWPdvpBn2hRIdpcJnSWFPcsLLGEVxBtDwYwfFLbIwKEEmiQwdiNkp3cV"/>
                                            <div className="absolute bottom-0 right-0 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-tl-lg font-bold">4 tags</div>
                                        </div>
                                        <div className="relative w-28 h-20 rounded-lg border border-slate-200 cursor-pointer flex-shrink-0 overflow-hidden group hover:border-primary/50 transition-colors" onClick={() => alert("Image 3 selected")}>
                                            <img alt="Desk setup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM6uKxTbtoIEV9AQpeXX74gcik8OMCxEkFBdarRR6MPe3Q-ewIUS3BdY6s2r7QBQNRYitfd2ozE-JKOf60io62r6iq1X1wfzv25Tu1_eisxiLGCF--qsjY85V-2qPJwZwSfWwOnAT2sXyEqATCINbh3flC-yqI2BHb4hWdzA9_Fo62QEB7nTMrhDpE--2rgGPoUCvDDVVc9JdVKQP2QNOGlfnEXUPxIZcNelFHh6z9AeU7kNmcYAFL4YAMirekwkF5kegt3YIiqeuJ"/>
                                            <div className="absolute bottom-0 right-0 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-tl-lg font-bold">2 tags</div>
                                        </div>
                                        <div className="relative w-28 h-20 rounded-lg border-2 border-dashed border-slate-200 cursor-pointer flex-shrink-0 flex items-center justify-center bg-gray-50 hover:bg-orange-50 hover:border-primary/50 hover:text-primary transition-all text-gray-400" onClick={() => alert("Add more photos")}>
                                            <span className="material-symbols-outlined text-[24px]">add_photo_alternate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur border-t border-slate-200 p-4 px-8 flex justify-between items-center z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span><span className="font-bold text-slate-900">3 Files</span> ready for sync. <span className="font-bold text-slate-900">12 Tags</span> detected.</span>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm" onClick={() => alert("Manual edit mode")}>
                            Manual Edit
                        </button>
                        <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center gap-2" onClick={() => alert("Syncing to Digital Twin Library...")}>
                            <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                            Sync to Digital Twin Library
                        </button>
                    </div>
                </div>
            </div>
        )}

        {currentView === 'auto-negotiation' && (
            <div className="flex-1 flex flex-col h-full min-w-0 bg-slate-50 dark:bg-slate-900">
                <header className="h-16 px-8 flex justify-between items-center bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shrink-0">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                            <span className="material-symbols-outlined text-[18px]">home</span>
                        </a>
                        <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                        <span className="font-medium">Smart Matching</span>
                        <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                        <span className="font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">Auto-Negotiation</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button 
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            onClick={() => alert("Notifications")}
                        >
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                        <button 
                            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                            onClick={() => alert("Opening parameters...")}
                        >
                            <span className="material-symbols-outlined text-[18px]">tune</span>
                            Parameters
                        </button>
                        <button 
                            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-all shadow-md shadow-primary/20"
                            onClick={() => alert("Starting new negotiation...")}
                        >
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            New Negotiation
                        </button>
                    </div>
                </header>
                <div className="flex flex-1 overflow-hidden p-6 gap-6">
                    {/* Left Column: Negotiation Queue */}
                    <section className="w-[300px] flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/30 dark:bg-slate-900/30">
                            <h2 className="font-bold text-slate-900 dark:text-white text-sm">Negotiation Queue</h2>
                            <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-600">3 Active</span>
                        </div>
                        <div className="flex-1 overflow-y-auto no-scrollbar p-3 flex flex-col gap-3">
                            <div 
                                className="cursor-pointer group rounded-lg border border-primary/40 bg-orange-50/30 dark:bg-orange-900/10 p-3 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                                onClick={() => alert("Selecting Tech Hub - Unit 402")}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold text-primary bg-white dark:bg-slate-800 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        Agent Negotiating
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-medium">2m ago</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5 group-hover:text-primary transition-colors">Tech Hub - Unit 402</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Offer: <span className="text-slate-900 dark:text-white">$45/sqft</span></span>
                                    <span className="text-[10px] text-slate-400">Target: $42</span>
                                </div>
                            </div>
                            <div 
                                className="cursor-pointer group rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 p-3 hover:shadow-md transition-all"
                                onClick={() => alert("Selecting Skyline Tower")}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 px-2 py-0.5 rounded-full">
                                        Awaiting Approval
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-medium">2h ago</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">Skyline Tower - Floor 12</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Offer: <span className="text-slate-900 dark:text-white">$52/sqft</span></span>
                                    <span className="text-[10px] text-slate-400">Target: $50</span>
                                </div>
                            </div>
                            <div 
                                className="cursor-pointer group rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-3 opacity-60 hover:opacity-100 transition-all"
                                onClick={() => alert("Selecting Westside Loft")}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[10px]">check</span>
                                        Deal Closed
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-medium">1d ago</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">Westside Loft - 3B</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Final: <span className="text-slate-900 dark:text-white">$38/sqft</span></span>
                                    <span className="text-[10px] text-green-600 dark:text-green-400 font-bold">Saved 12%</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Center Column: AI Negotiation Lab */}
                    <section className="flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-primary/10 rounded-md">
                                        <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-slate-900 dark:text-white text-sm">AI Negotiation Lab</h2>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Active session with Tech Hub Leasing Agent</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-700 px-2 py-1 border border-slate-200 dark:border-slate-600 rounded">ID: #NEG-8842</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-slate-200 dark:border-slate-600 shadow-sm relative overflow-hidden">
                                    <div className="absolute right-0 top-0 p-2 opacity-10">
                                        <span className="material-symbols-outlined text-4xl dark:text-white">target</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Target Price</p>
                                    <div className="flex items-baseline gap-1">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">$45.00</p>
                                        <span className="text-xs font-medium text-slate-400">/sqft</span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-slate-200 dark:border-slate-600 shadow-sm relative overflow-hidden group">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                                    <div className="absolute right-0 top-0 p-2 opacity-10">
                                        <span className="material-symbols-outlined text-4xl dark:text-white">trending_up</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Current Offer</p>
                                            <div className="flex items-baseline gap-1">
                                                <p className="text-xl font-bold text-slate-900 dark:text-white">$48.50</p>
                                                <span className="text-xs font-medium text-slate-400">/sqft</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded border border-red-100 dark:border-red-800">+7.7% Gap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col gap-5 bg-slate-50/30 dark:bg-slate-900/30">
                            <div className="flex justify-center">
                                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full shadow-sm">Today, 10:23 AM</span>
                            </div>
                            <div className="flex gap-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-white dark:from-orange-900/10 dark:to-slate-800 border border-orange-100 dark:border-orange-900/30 rounded-lg mx-8 shadow-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/40"></div>
                                <div className="shrink-0 bg-white dark:bg-slate-700 border border-orange-100 dark:border-orange-900/30 rounded-full p-1 h-fit shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-wide">AI Reasoning Engine</p>
                                        <span className="text-[10px] text-orange-600/70 dark:text-orange-400/70 font-mono">Confidence: 85%</span>
                                    </div>
                                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">Analyzing supplier response. Resistance detected on base rent reduction. <span className="font-medium">Strategy shift: Leverage lease duration to secure discount.</span></p>
                                    <div className="flex gap-2 mt-1">
                                        <span className="text-[9px] px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-orange-200 dark:border-orange-900/50 rounded text-orange-800 dark:text-orange-300 font-medium shadow-sm">Strategy: Value Extension</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end self-end max-w-[85%]">
                                <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl rounded-tr-none p-4 shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed relative group">
                                    <div className="absolute -right-2 -top-2 bg-primary text-white rounded-full p-1 shadow-sm border-2 border-white dark:border-slate-700">
                                        <span className="material-symbols-outlined text-[12px]">smart_toy</span>
                                    </div>
                                    <p>We appreciate the updated terms. However, <span className="font-medium bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-1 rounded">$48.50</span> remains above our cap for this location. What if we commit to a <span className="font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1 rounded">24-month lease</span> instead of 12? Could this unlock the $45 rate?</p>
                                </div>
                                <span className="text-[10px] text-slate-400 mt-1.5 mr-1 font-medium">AI Agent • 10:24 AM</span>
                            </div>
                            <div className="flex flex-col items-start self-start max-w-[85%]">
                                <div className="flex items-end gap-2">
                                    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 dark:border-slate-600">
                                        <span className="material-symbols-outlined text-[16px]">apartment</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl rounded-tl-none p-4 shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                                        <p>That's an interesting proposition. A 2-year commitment does give us more security. Let me run numbers. I can't do $45 flat, but maybe we can meet at <span className="font-medium text-slate-900 dark:text-white">$46</span> with a <span className="font-medium text-slate-900 dark:text-white">2-month free period</span>?</p>
                                    </div>
                                </div>
                                <span className="text-[10px] text-slate-400 mt-1.5 ml-11 font-medium">Supplier • 10:28 AM</span>
                            </div>
                            <div className="flex gap-3 px-4 py-3 bg-white dark:bg-slate-700 border border-primary/20 rounded-lg mx-8 shadow-sm ring-1 ring-primary/5">
                                <div className="shrink-0 bg-primary/10 rounded-full p-1.5 h-fit">
                                    <span className="material-symbols-outlined text-primary text-[16px] animate-spin">sync</span>
                                </div>
                                <div className="flex flex-col gap-1 justify-center w-full">
                                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Calculating Net Effective Rate...</p>
                                    <div className="flex justify-between items-center text-xs text-slate-700 dark:text-slate-300">
                                        <span className="italic">2 mo free @ $46/sqft (24mo) → <span className="font-bold text-slate-900 dark:text-white">$42.16 effective</span></span>
                                        <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-[10px] border border-green-100 dark:border-green-800">Within Target</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                            <div className="relative flex items-center gap-2">
                                <button 
                                    className="p-2.5 text-slate-400 hover:text-primary transition-colors bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 border border-transparent hover:border-slate-200 dark:hover:border-slate-500"
                                    onClick={() => alert("Microphone activated")}
                                >
                                    <span className="material-symbols-outlined text-[20px]">mic</span>
                                </button>
                                <input className="w-full bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white placeholder-slate-400 transition-all shadow-sm" placeholder="Type to intervene or guide the AI..." type="text"/>
                                <button 
                                    className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-all shadow-md shadow-primary/20 flex items-center justify-center"
                                    onClick={() => alert("Message sent")}
                                >
                                    <span className="material-symbols-outlined text-[18px]">send</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Right Column: Deal Summary */}
                    <section className="w-[320px] flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/30">
                            <h2 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Deal Terms Summary</h2>
                            <div className="mb-2">
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-slate-500 dark:text-slate-400">Deal Progress</span>
                                    <span className="text-primary">85%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 shadow-inner">
                                    <div className="bg-primary h-2 rounded-full relative" style={{width: '85%'}}>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-3 bg-white dark:bg-slate-800 border-[3px] border-primary rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1.5 text-right font-medium">Stage: Drafting Contract</p>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto no-scrollbar p-4 bg-white dark:bg-slate-800">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[18px]">attach_money</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Monthly Rent</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">$46.00 <span className="text-[10px] font-normal text-slate-400">/sqft</span></p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Lease Duration</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">24 Months</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg border border-primary/40 bg-orange-50/40 dark:bg-orange-900/20 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-[18px]">savings</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-primary uppercase tracking-wide">Free Period</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">2 Months</p>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-700 rounded-full p-1 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-[18px] animate-pulse" title="Pending Confirmation">pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white dark:bg-slate-700 p-2 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Amenities</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Gym &amp; Parking</p>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                                </div>
                                <div className="rounded-lg overflow-hidden h-36 relative border border-slate-200 dark:border-slate-600 mt-2 shadow-sm group">
                                    <div 
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJEYwkj0ykfuHw_Lbh53YvWm-Rd5STzEwBB6LJGQOW1dFgx0rnbJA4_v2dOCb_9JO5w8sLTV0IIl5K-jRb6OI6ikUeKQGkUiznZfpcAD6gnebPfTl2e2wHM0rVGvznoDBLl0xdqQrhFhN4ay0EUv9jjdRZCajelcTMiIWOt3MF_U3PAco_MRKtojlGRxUga_LG1CEdqP3t53rRQSlFJjfl9LkZuEPxVOMyQW0CEywDIQkpgZodoN_vtZzq_kyJtR_yjpJn1mTwsozO")'}}
                                    >
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                                    </div>
                                    <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-2 rounded border border-slate-200 dark:border-slate-600 shadow-sm flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-900 dark:text-white">Tech Hub, Unit 402</p>
                                            <p className="text-[9px] text-slate-500 dark:text-slate-400">San Francisco, CA</p>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 text-[16px]">location_on</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col gap-3">
                            <button 
                                className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-sm group"
                                onClick={() => alert("Approving deal...")}
                            >
                                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">verified</span>
                                Approve &amp; Sign Deal
                            </button>
                            <button 
                                className="w-full py-2.5 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 font-medium rounded-lg transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
                                onClick={() => alert("Switching to manual mode...")}
                            >
                                <span className="material-symbols-outlined text-slate-400 text-[16px]">pan_tool</span>
                                Manual Intervention
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        )}

        {currentView === 'smart-contracts' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-900 overflow-hidden">
              <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-8 flex-shrink-0 z-10">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <a className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentView('home')}>
                    <span className="material-symbols-outlined text-[18px]">home</span>
                  </a>
                  <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                  <span className="font-medium">OPS & EXECUTION</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-300 dark:text-slate-600">chevron_right</span>
                  <span className="font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-xs tracking-wide uppercase">Smart Contracts</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative hidden sm:block group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">search</span>
                    </span>
                    <input className="block w-64 rounded-full border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-primary/20 placeholder:text-slate-400 transition-all" placeholder="Search contracts, hash, or tags..." type="text"/>
                  </div>
                  <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                  <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors" onClick={() => alert('Notifications clicked')}>
                    <span className="material-symbols-outlined text-[22px]">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white dark:border-slate-800"></span>
                  </button>
                  <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors" onClick={() => setIsSettingsModalOpen(true)}>
                    <span className="material-symbols-outlined text-[22px]">settings</span>
                  </button>
                </div>
              </header>
              <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto flex flex-col gap-8">
                  <div className="flex flex-wrap justify-between items-end gap-4">
                    <div>
                      <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-2">Contracts Dashboard</h1>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">AI-verified immutable records for commercial leasing and asset transfers.</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm" onClick={() => alert('Filter clicked')}>
                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter View
                      </button>
                      <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover shadow-md shadow-orange-500/20 flex items-center gap-2 transition-all" onClick={() => setIsContractModalOpen(true)}>
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        New Contract
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                      <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-[80px]">pending_actions</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 z-10">
                        <div className="p-1.5 bg-orange-50 dark:bg-orange-900/20 rounded text-primary">
                          <span className="material-symbols-outlined text-[20px]">history_edu</span>
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-wide">Pending Signatures</span>
                      </div>
                      <div className="flex items-baseline gap-2 z-10">
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
                        <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[12px]">trending_up</span> 8.2%
                        </span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                      <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-[80px]">verified_user</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 z-10">
                        <div className="p-1.5 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400">
                          <span className="material-symbols-outlined text-[20px]">verified</span>
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-wide">Active Contracts</span>
                      </div>
                      <div className="flex items-baseline gap-2 z-10">
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">45</p>
                        <p className="text-xs text-slate-400">Total value: <span className="text-slate-700 dark:text-slate-300 font-medium">$4.2M</span></p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                      <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-[80px]">archive</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 z-10">
                        <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                          <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-wide">Archived</span>
                      </div>
                      <div className="flex items-baseline gap-2 z-10">
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">128</p>
                        <p className="text-xs text-slate-400">Stored on-chain</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex-1">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50/80 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-12">
                              <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                            </th>
                            <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contract ID</th>
                            <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Asset Name</th>
                            <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Counterparty</th>
                            <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                          <tr className="group bg-orange-50/40 dark:bg-orange-900/10 hover:bg-orange-50/70 dark:hover:bg-orange-900/20 transition-colors cursor-pointer border-l-4 border-l-primary relative">
                            <td className="py-4 px-6 relative">
                              <input defaultChecked className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-900 dark:text-white">#CTR-2023-889</span>
                                <span className="material-symbols-outlined text-primary text-[14px]" title="AI Generated">auto_awesome</span>
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">HASH: 0x7f83...a4b</div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-900 dark:text-white font-medium">
                              Tech Plaza, Suite 400
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-700 dark:text-blue-300 text-xs font-bold shadow-sm">N</div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-slate-900 dark:text-white">NexGen Logistics</span>
                                  <span className="text-[10px] text-slate-400">ID: 992-12</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                                <span className="size-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                Pending Signature
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="px-3 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-primary hover:text-orange-700 dark:hover:text-orange-300 hover:border-orange-200 dark:hover:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium text-xs shadow-sm transition-all" onClick={() => setIsContractModalOpen(true)}>Review</button>
                            </td>
                          </tr>
                          <tr className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-l-4 border-l-transparent">
                            <td className="py-4 px-6">
                              <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                            </td>
                            <td className="py-4 px-6">
                              <span className="font-medium text-slate-700 dark:text-slate-300">#CTR-2023-842</span>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                              Sunset Blvd Retail, Unit B
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 flex items-center justify-center text-green-700 dark:text-green-300 text-xs font-bold shadow-sm">G</div>
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">GreenLife Organic</span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                                <span className="size-1.5 rounded-full bg-green-500"></span>
                                Active
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm p-1" onClick={() => alert('View clicked')}>
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                              </button>
                            </td>
                          </tr>
                          <tr className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-l-4 border-l-transparent">
                            <td className="py-4 px-6">
                              <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                            </td>
                            <td className="py-4 px-6">
                              <span className="font-medium text-slate-700 dark:text-slate-300">#CTR-2023-755</span>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                              Harbor View Warehouse
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 flex items-center justify-center text-purple-700 dark:text-purple-300 text-xs font-bold shadow-sm">A</div>
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Apex Shipping</span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                                <span className="size-1.5 rounded-full bg-green-500"></span>
                                Active
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm p-1" onClick={() => alert('View clicked')}>
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                              </button>
                            </td>
                          </tr>
                          <tr className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-l-4 border-l-transparent">
                            <td className="py-4 px-6">
                              <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 dark:bg-slate-800" type="checkbox"/>
                            </td>
                            <td className="py-4 px-6">
                              <span className="font-medium text-slate-700 dark:text-slate-300">#CTR-2022-991</span>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                              Downtown Lofts, 12A
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 text-xs font-bold shadow-sm">S</div>
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Studio 54</span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                <span className="size-1.5 rounded-full bg-slate-400"></span>
                                Expired
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm p-1" onClick={() => alert('Archive clicked')}>
                                <span className="material-symbols-outlined text-[20px]">archive</span>
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
            {/* Right Sidebar - Contract Details */}
            <aside className="w-[420px] bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 flex flex-col h-full flex-shrink-0 z-10 shadow-xl overflow-hidden">
              <div className="h-16 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 flex-shrink-0 bg-slate-50/50 dark:bg-slate-700/50">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">article</span>
                  Contract Details
                </h3>
                <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 p-1 rounded-md border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all" onClick={() => alert('Close details')}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">#CTR-2023-889</h2>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wide border border-orange-200 dark:border-orange-800">Action Required</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Tech Plaza, Suite 400 • Commercial Lease Agreement</p>
                  <div className="flex gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span> Due: Oct 24, 2023
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                      <span className="material-symbols-outlined text-[14px]">smart_toy</span> AI Verified
                    </span>
                  </div>
                </div>
                <div className="relative py-2">
                  <div className="absolute top-3 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-600 -z-10 rounded"></div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-800 shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Payment</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-800 shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Generated</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="size-6 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary ring-4 ring-white dark:ring-slate-800 shadow-sm">
                        <span className="material-symbols-outlined text-[14px] animate-pulse">edit_document</span>
                      </div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Signatures</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="size-6 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-400 ring-4 ring-white dark:ring-slate-800">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 flex gap-4 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-colors group cursor-pointer">
                  <div className="w-16 h-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-red-500 text-3xl">picture_as_pdf</span>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Lease_Agreement_Final.pdf</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">2.4 MB • Generated via AssetAI Core</p>
                    <div className="flex gap-3 mt-1">
                      <span className="text-xs text-primary font-semibold hover:underline flex items-center gap-1" onClick={() => alert('Download clicked')}>
                        <span className="material-symbols-outlined text-[14px]">download</span> Download
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium hover:underline flex items-center gap-1" onClick={() => setIsContractModalOpen(true)}>
                        <span className="material-symbols-outlined text-[14px]">visibility</span> Preview
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50/40 dark:bg-blue-900/10 rounded-xl p-5 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-600 dark:text-blue-400">
                      <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">AI Legal Extraction</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-blue-500 mt-1 text-[8px] material-symbols-outlined">circle</span>
                      <span><span className="font-semibold text-slate-900 dark:text-white">Term Length:</span> 36 Months fixed.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-blue-500 mt-1 text-[8px] material-symbols-outlined">circle</span>
                      <span><span className="font-semibold text-slate-900 dark:text-white">Rent Escalation:</span> 3% annual increase on base rent starting Year 2.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-blue-500 mt-1 text-[8px] material-symbols-outlined">circle</span>
                      <span><span className="font-semibold text-slate-900 dark:text-white">Early Termination:</span> 2-month penalty fee applies if exited before 18 months.</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-[18px]">hub</span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Blockchain Verification</h4>
                    </div>
                    <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide border border-green-200 dark:border-green-800">Secured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 border border-slate-200 dark:border-slate-600 group hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                    <code className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate flex-1 select-all">0x7f839a2b1c...a4b291c</code>
                    <button className="text-slate-400 hover:text-primary transition-colors tooltip" title="Copy Hash" onClick={() => alert('Hash copied')}>
                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    </button>
                    <button className="text-slate-400 hover:text-primary transition-colors tooltip" title="View on Explorer" onClick={() => alert('Viewing on explorer')}>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 text-right">Last sync: 2 mins ago</p>
                </div>
              </div>
              <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3 bg-white dark:bg-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]" onClick={() => alert('Signing Contract')}>
                  <span className="material-symbols-outlined">ink_pen</span>
                  Sign Contract
                </button>
                <button className="w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm" onClick={() => setIsContractModalOpen(true)}>
                  View Full Document
                </button>
              </div>
            </aside>
          </div>
        )}

        {currentView === 'service-integration' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* ... (Service Integration content) ... */}
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
                        {/* Static List Items from Design */}
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
        )}

        {currentView === 'orders' && (
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
                        <button 
                            className="size-9 flex items-center justify-center text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 relative"
                            onClick={() => alert("Notifications")}
                        >
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border border-white dark:border-slate-800"></span>
                        </button>
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
                            <button 
                                className="bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-orange-500/20 flex items-center gap-2 active:scale-95"
                                onClick={() => alert("Create Order")}
                            >
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Create Order
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-slate-200 dark:border-slate-700">
                            <div className="flex gap-8 overflow-x-auto no-scrollbar">
                                {[
                                    { label: 'All Orders', count: 12 },
                                    { label: 'Pending Payment', count: 3 },
                                    { label: 'In Progress', count: 5 },
                                    { label: 'Completed', count: 5 }
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
                                <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm ml-2" placeholder="Search by Order ID, Asset Name..."/>
                            </label>
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <label className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 h-11 min-w-[240px] cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors relative">
                                    <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 text-sm pr-8" placeholder="Filter by Date Range"/>
                                    <span className="material-symbols-outlined text-slate-400 absolute right-3 pointer-events-none text-[20px]">calendar_today</span>
                                </label>
                                <button className="flex items-center justify-center h-11 w-11 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">filter_list</span>
                                </button>
                            </div>
                        </div>

                        {/* Batch Actions */}
                        <div className="bg-orange-50 dark:bg-primary/10 border border-primary/20 rounded-xl p-3 px-5 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <label className="flex items-center gap-3 cursor-pointer group select-none">
                                    <input defaultChecked className="w-5 h-5 text-primary border-primary/40 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer bg-white" type="checkbox"/>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Select All</span>
                                </label>
                                <div className="h-6 w-px bg-primary/20"></div>
                                <span className="text-sm font-bold text-primary">2 items selected</span>
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-right flex flex-col items-end">
                                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Selected</span>
                                    <span className="text-lg font-bold text-slate-900 dark:text-white leading-none">$5,350.00</span>
                                </div>
                                <button 
                                    className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-orange-500/20 flex items-center gap-2 transition-transform active:scale-95"
                                    onClick={() => alert("Batch Pay")}
                                >
                                    <span className="material-symbols-outlined text-[20px]">payments</span>
                                    Batch Pay
                                </button>
                            </div>
                        </div>

                        {/* Order List */}
                        <div className="flex flex-col gap-4">
                            {/* Order 1 */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-5 border border-primary/30 ring-1 ring-primary/10 dark:border-primary/20 shadow-sm transition-all hover:shadow-md">
                                <div className="flex items-center justify-start md:justify-center md:items-center pl-1 pr-1 pt-1 md:pt-0">
                                    <input defaultChecked className="w-5 h-5 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer" type="checkbox"/>
                                </div>
                                <div 
                                    className="w-full md:w-40 h-32 md:h-28 flex-shrink-0 bg-cover bg-center rounded-lg relative overflow-hidden group shadow-inner" 
                                    style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgj6TcCE1JIzLofbhgpEWovJ_semvVdhsCk00ieG25GV9Qop9oeQO8CvJpmtW-l-JP0KL1sqx-Lt8xoLZkAsQ68fzWJRnGjK4ucdhij8YqkSH6y4q0KNDLTuZMFNVemdwLAEznjod72wBGNenRC4vCqlutBCV5Osz4BoxnZuzvQNkqeL7zfp35vbF2v4JvrDA77QfVDstwZIccs2cPBynXqeS4mBZeIml0Xxr5iNAGHz7bjlSqzSAHoyUQwvMid4iTasKFVTb6dLzE')`}}
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                        <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">#ORD-2023-001</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> Oct 24, 2023</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Skyline Flex Office - Suite 8B</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Monthly Lease • 12 Months</p>
                                </div>
                                <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 min-w-[140px]">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Pending Payment
                                    </span>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">$4,500.00</p>
                                        <p className="text-xs text-slate-400">Total Amount</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-2 md:w-[140px] justify-center">
                                    <button onClick={() => alert("Pay Now")} className="flex-1 bg-primary hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
                                        Pay Now
                                    </button>
                                    <button onClick={() => alert("Details")} className="flex-1 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                        Details
                                    </button>
                                </div>
                            </div>

                            {/* Order 2 */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-5 border border-primary/30 ring-1 ring-primary/10 dark:border-primary/20 shadow-sm transition-all hover:shadow-md">
                                <div className="flex items-center justify-start md:justify-center md:items-center pl-1 pr-1 pt-1 md:pt-0">
                                    <input defaultChecked className="w-5 h-5 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer" type="checkbox"/>
                                </div>
                                <div 
                                    className="w-full md:w-40 h-32 md:h-28 flex-shrink-0 bg-cover bg-center rounded-lg shadow-inner" 
                                    style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKSNNVMxBQDVXRP7SRTo0dvorfbpM-FWl-BtHIDtob-VyURLznhvka1ZgE0fJjZkjlnqluqufWpT4w40cCB8Iy2AR9sZX7DbbsLq4W25CiB9EDZpb_cbY8_243hy_etydGCiP9iMSzIwgU4I0LKiMikjC2rCrsPOwUX29oO0XOoyeEY-6rxOInw_lclt0x_K8KLsH03OMXCyxj39aHSq6R1IQKMr2sO-m30PGk_OvHrY48stT6kWKYBb24CxFh42RBkrBsbBus5tWG')`}}
                                >
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                        <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">#ORD-2023-002</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> Oct 20, 2023</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tech Park Meeting Room A</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Hourly Booking • 12 Hours</p>
                                </div>
                                <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 min-w-[140px]">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Pending Payment
                                    </span>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">$850.00</p>
                                        <p className="text-xs text-slate-400">Total Amount</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-2 md:w-[140px] justify-center">
                                    <button onClick={() => alert("Pay Now")} className="flex-1 bg-primary hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
                                        Pay Now
                                    </button>
                                    <button onClick={() => alert("Invoice")} className="flex-1 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                        Invoice
                                    </button>
                                </div>
                            </div>

                            {/* Order 3 */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-5 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:shadow-md opacity-90 hover:opacity-100">
                                <div className="flex items-center justify-start md:justify-center md:items-center pl-1 pr-1 pt-1 md:pt-0">
                                    <input className="w-5 h-5 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer" type="checkbox"/>
                                </div>
                                <div 
                                    className="w-full md:w-40 h-32 md:h-28 flex-shrink-0 bg-cover bg-center rounded-lg shadow-inner" 
                                    style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcHSyWgwbCoOTk_0VZstE6XsIoRLVjJemfVpxpsgeT6zDCxeasoeNn_jS_82T72VHeJ0TA6erwgdOhqT8sDiiYs_wHeWfNOyMr9BEHlxWcCTwY2REOYvbiebLTfw2FLCHn_RhvAIqbPvHjjyJZIKzuZgxREjuitiPj5a16fFRBpBDXA2d59dOO6nHEumKYgsAMPykzmg5iNtgvDSc4C7ESnRNw5TFc4UPVYUaZQ9T-uIxxPHOBg4x8AGrtD4_mma4rwkgotEIXAxfZ')`}}
                                >
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-1.5">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                                        <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-mono">#ORD-2023-005</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> Sep 15, 2023</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Creative Studio Loft</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Weekly Rental • 2 Weeks</p>
                                </div>
                                <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 min-w-[140px]">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Pending Payment
                                    </span>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">$1,200.00</p>
                                        <p className="text-xs text-slate-400">Total Amount</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-2 md:w-[140px] justify-center">
                                    <button onClick={() => alert("Pay Now")} className="flex-1 bg-primary hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
                                        Pay Now
                                    </button>
                                    <button onClick={() => alert("View Details")} className="flex-1 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-between items-center py-4 border-t border-slate-200 dark:border-slate-700 mt-2">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Showing 1-3 of 3 pending orders</p>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors" disabled>Previous</button>
                                <button className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors" disabled>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </main>
      
      {/* Personal Center Modal */}
      {isPersonalCenterOpen && (
        <PersonalCenterModal onClose={() => setIsPersonalCenterOpen(false)} />
      )}

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <SettingsModal onClose={() => setIsSettingsModalOpen(false)} />
      )}

      {/* Contract Preview Modal */}
      {isContractModalOpen && (
        <ContractPreviewModal onClose={() => setIsContractModalOpen(false)} />
      )}
    </div>
  );
};

export default DashboardPage;