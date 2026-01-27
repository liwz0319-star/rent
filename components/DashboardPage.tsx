import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import PersonalCenterModal from './PersonalCenterModal';
import SettingsModal from './SettingsModal';

type ViewType = 'home' | 'digital-twins' | 'auto-ingestion' | 'auto-negotiation' | 'smart-contracts' | 'service-integration';

const DashboardPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [assetFilter, setAssetFilter] = useState<'all' | 'available' | 'occupied'>('all');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPersonalCenterOpen, setIsPersonalCenterOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [homeSearchQuery, setHomeSearchQuery] = useState('');
  const [activeServiceTab, setActiveServiceTab] = useState('Cleaning');
  const [iotStates, setIotStates] = useState({
    lighting: true,
    hvac: true,
    blinds: false,
  });

  const toggleIot = (device: keyof typeof iotStates) => {
    setIotStates(prev => ({ ...prev, [device]: !prev[device] }));
  };

  const handleGenerateSearch = () => {
    if (homeSearchQuery.trim()) {
      alert(`Generating results for: ${homeSearchQuery}`);
      // In a real app, this would trigger navigation or API call
    }
  };

  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'North_Tower_L05_Arch.ifc', size: '124 MB', date: '2 mins ago', status: 'Processing', progress: 45 },
    { id: 2, name: 'East_Wing_MEP.rvt', size: '450 MB', date: '1 hour ago', status: 'Completed', progress: 100 },
    { id: 3, name: 'Site_Survey_Scan.e57', size: '1.2 GB', date: '3 hours ago', status: 'Completed', progress: 100 },
  ]);

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    alert('Files dropped! (Simulation)');
  };

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
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'smart-contracts' ? 'fill-1' : ''}`}>contract</span>
              <p className={`text-sm ${currentView === 'smart-contracts' ? 'font-bold' : 'font-medium'}`}>Smart Contracts</p>
            </div>
            <div 
              onClick={() => setCurrentView('service-integration')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'service-integration' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === 'service-integration' ? 'fill-1' : ''}`}>hub</span>
              <p className={`text-sm ${currentView === 'service-integration' ? 'font-bold' : 'font-medium'}`}>Service Integration</p>
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
              </div>
           </div>
        )}

        {/* ... (rest of the file content remains unchanged, but included for completeness if needed) ... */}
        {currentView === 'digital-twins' && (
          <>
            {/* Secondary Sidebar for Digital Twins */}
            <div className="w-96 flex flex-col border-r border-slate-200 bg-white z-10 shrink-0">
              {/* ... (Digital Twins content) ... */}
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
          <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50 p-6 lg:p-10 scroll-smooth">
             {/* ... (Auto Ingestion content remains unchanged) ... */}
             <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                    <span className="cursor-pointer hover:text-hermes transition-colors">Asset Perception</span>
                    <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                    <span className="text-slate-800 font-bold bg-slate-200/50 px-2 py-0.5 rounded">Auto-Ingestion</span>
                  </nav>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Auto-Ingestion Pipeline</h1>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-hermes text-white hover:bg-orange-600 transition-all font-semibold text-sm shadow-lg shadow-orange-500/20 active:translate-y-0.5">
                    <span className="material-symbols-outlined text-[18px]">upload_file</span>
                    Upload New Asset
                  </button>
                </div>
             </header>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                 <div>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Ingested</p>
                   <p className="text-3xl font-extrabold text-slate-900">1,284</p>
                 </div>
                 <div className="size-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                   <span className="material-symbols-outlined">folder_open</span>
                 </div>
               </div>
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                 <div>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Processing</p>
                   <p className="text-3xl font-extrabold text-slate-900">3</p>
                 </div>
                 <div className="size-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                   <span className="material-symbols-outlined animate-spin">sync</span>
                 </div>
               </div>
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                 <div>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Success Rate</p>
                   <p className="text-3xl font-extrabold text-slate-900">99.2%</p>
                 </div>
                 <div className="size-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                   <span className="material-symbols-outlined">check_circle</span>
                 </div>
               </div>
             </div>

             <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-10 flex flex-col items-center justify-center text-center hover:border-hermes hover:bg-orange-50/10 transition-colors cursor-pointer mb-10" onDragOver={handleDragOver} onDrop={handleDrop}>
               <div className="size-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:text-hermes group-hover:bg-hermes/10 transition-colors">
                 <span className="material-symbols-outlined text-3xl">cloud_upload</span>
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-2">Drag & Drop files here</h3>
               <p className="text-slate-500 text-sm mb-6 max-w-sm">Support for IFC, RVT, DWG, PDF and Point Cloud data (E57, LAS). Max file size 5GB.</p>
               <button className="px-6 py-2 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:border-hermes hover:text-hermes transition-colors">Browse Files</button>
             </div>

             <div className="flex flex-col gap-4">
               <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
               <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                 <table className="w-full text-left text-sm">
                   <thead className="bg-slate-50 border-b border-slate-200">
                     <tr>
                       <th className="px-6 py-3 font-semibold text-slate-600">File Name</th>
                       <th className="px-6 py-3 font-semibold text-slate-600">Size</th>
                       <th className="px-6 py-3 font-semibold text-slate-600">Date</th>
                       <th className="px-6 py-3 font-semibold text-slate-600">Status</th>
                       <th className="px-6 py-3 font-semibold text-slate-600 text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                     {uploadedFiles.map((file) => (
                       <tr key={file.id} className="hover:bg-slate-50 transition-colors">
                         <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                           <span className="material-symbols-outlined text-slate-400">description</span>
                           {file.name}
                         </td>
                         <td className="px-6 py-4 text-slate-500">{file.size}</td>
                         <td className="px-6 py-4 text-slate-500">{file.date}</td>
                         <td className="px-6 py-4">
                           {file.status === 'Processing' ? (
                             <div className="flex items-center gap-2">
                               <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-hermes rounded-full animate-pulse" style={{width: `${file.progress}%`}}></div>
                               </div>
                               <span className="text-xs font-bold text-hermes">{file.progress}%</span>
                             </div>
                           ) : (
                             <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-200">
                               Completed
                             </span>
                           )}
                         </td>
                         <td className="px-6 py-4 text-right">
                           <button className="text-slate-400 hover:text-slate-600 p-1">
                             <span className="material-symbols-outlined text-[20px]">more_vert</span>
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>
          </div>
        )}

        {/* ... (Rest of views remain the same) ... */}
        {currentView === 'auto-negotiation' && (
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-900">
             {/* ... (Auto Negotiation content) ... */}
             <header className="h-16 px-8 flex justify-between items-center bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 shrink-0">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <a className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer" onClick={() => setCurrentView('home')}>
                        <span className="material-symbols-outlined text-[18px]">home</span>
                    </a>
                    <span className="material-symbols-outlined text-[16px] text-gray-300 dark:text-gray-600">chevron_right</span>
                    <span className="font-medium">Smart Matching</span>
                    <span className="material-symbols-outlined text-[16px] text-gray-300 dark:text-gray-600">chevron_right</span>
                    <span className="font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">Auto-Negotiation</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">tune</span>
                        Parameters
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-all shadow-md shadow-primary/20">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        New Negotiation
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden p-6 gap-6">
                {/* Column 1: Queue */}
                <section className="w-[300px] flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 shrink-0 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/30 dark:bg-slate-700/30">
                        <h2 className="font-bold text-gray-900 dark:text-white text-sm">Negotiation Queue</h2>
                        <span className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-600">3 Active</span>
                    </div>
                    <div className="flex-1 overflow-y-auto no-scrollbar p-3 flex flex-col gap-3">
                        {/* Item 1 */}
                        <div className="cursor-pointer group rounded-lg border border-primary/40 bg-orange-50/30 dark:bg-orange-900/10 p-3 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-primary bg-white dark:bg-slate-800 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    Agent Negotiating
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium">2m ago</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5 group-hover:text-primary transition-colors">Tech Hub - Unit 402</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Offer: <span className="text-gray-900 dark:text-white">$45/sqft</span></span>
                                <span className="text-[10px] text-gray-400">Target: $42</span>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="cursor-pointer group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-400 p-3 hover:shadow-md transition-all">
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 px-2 py-0.5 rounded-full">
                                    Awaiting Approval
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium">2h ago</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">Skyline Tower - Floor 12</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Offer: <span className="text-gray-900 dark:text-white">$52/sqft</span></span>
                                <span className="text-[10px] text-gray-400">Target: $50</span>
                            </div>
                        </div>
                        {/* Item 3 */}
                         <div className="cursor-pointer group rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-slate-800/50 p-3 opacity-60 hover:opacity-100 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[10px]">check</span>
                                    Deal Closed
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium">1d ago</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">Westside Loft - 3B</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Final: <span className="text-gray-900 dark:text-white">$38/sqft</span></span>
                                <span className="text-[10px] text-green-600 dark:text-green-500 font-bold">Saved 12%</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Column 2: Lab */}
                <section className="flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                     <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/30 dark:bg-slate-700/30">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-primary/10 rounded-md">
                                    <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                                </div>
                                <div>
                                    <h2 className="font-bold text-gray-900 dark:text-white text-sm">AI Negotiation Lab</h2>
                                    <p className="text-[11px] text-gray-500 dark:text-gray-400">Active session with Tech Hub Leasing Agent</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 bg-white dark:bg-slate-700 px-2 py-1 border border-gray-200 dark:border-gray-600 rounded">ID: #NEG-8842</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 shadow-sm relative overflow-hidden">
                                <div className="absolute right-0 top-0 p-2 opacity-10">
                                    <span className="material-symbols-outlined text-4xl dark:text-white">target</span>
                                </div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-300 font-bold uppercase tracking-wider mb-1">Target Price</p>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">$45.00</p>
                                    <span className="text-xs font-medium text-gray-400">/sqft</span>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 shadow-sm relative overflow-hidden group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                                <div className="absolute right-0 top-0 p-2 opacity-10">
                                    <span className="material-symbols-outlined text-4xl dark:text-white">trending_up</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[10px] text-gray-500 dark:text-gray-300 font-bold uppercase tracking-wider mb-1">Current Offer</p>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-xl font-bold text-gray-900 dark:text-white">$48.50</p>
                                            <span className="text-xs font-medium text-gray-400">/sqft</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded border border-red-100 dark:border-red-900/50">+7.7% Gap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col gap-5 bg-gray-50/30 dark:bg-slate-900/50">
                        <div className="flex justify-center">
                            <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full shadow-sm">Today, 10:23 AM</span>
                        </div>
                        {/* AI Thought */}
                        <div className="flex gap-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-white dark:from-slate-800 dark:to-slate-800/80 border border-orange-100 dark:border-slate-700 rounded-lg mx-8 shadow-sm relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/40"></div>
                            <div className="shrink-0 bg-white dark:bg-slate-700 border border-orange-100 dark:border-slate-600 rounded-full p-1 h-fit shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-wide">AI Reasoning Engine</p>
                                    <span className="text-[10px] text-orange-600/70 dark:text-orange-400 font-mono">Confidence: 85%</span>
                                </div>
                                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">Analyzing supplier response. Resistance detected on base rent reduction. <span className="font-medium">Strategy shift: Leverage lease duration to secure discount.</span></p>
                                <div className="flex gap-2 mt-1">
                                    <span className="text-[9px] px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-orange-200 dark:border-slate-600 rounded text-orange-800 dark:text-orange-300 font-medium shadow-sm">Strategy: Value Extension</span>
                                </div>
                            </div>
                        </div>

                        {/* AI Message */}
                        <div className="flex flex-col items-end self-end max-w-[85%]">
                            <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-2xl rounded-tr-none p-4 shadow-sm text-gray-800 dark:text-gray-200 text-sm leading-relaxed relative group">
                                <div className="absolute -right-2 -top-2 bg-primary text-white rounded-full p-1 shadow-sm border-2 border-white dark:border-slate-700">
                                    <span className="material-symbols-outlined text-[12px]">smart_toy</span>
                                </div>
                                <p>We appreciate the updated terms. However, <span className="font-medium bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-1 rounded">$48.50</span> remains above our cap for this location. What if we commit to a <span className="font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1 rounded">24-month lease</span> instead of 12? Could this unlock the $45 rate?</p>
                            </div>
                            <span className="text-[10px] text-gray-400 mt-1.5 mr-1 font-medium">AI Agent • 10:24 AM</span>
                        </div>

                        {/* Supplier Message */}
                        <div className="flex flex-col items-start self-start max-w-[85%]">
                            <div className="flex items-end gap-2">
                                <div className="bg-slate-800 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-sm border border-gray-200 dark:border-gray-600">
                                    <span className="material-symbols-outlined text-[16px]">apartment</span>
                                </div>
                                <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-2xl rounded-tl-none p-4 shadow-sm text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                                    <p>That's an interesting proposition. A 2-year commitment does give us more security. Let me run numbers. I can't do $45 flat, but maybe we can meet at <span className="font-medium text-gray-900 dark:text-white">$46</span> with a <span className="font-medium text-gray-900 dark:text-white">2-month free period</span>?</p>
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-400 mt-1.5 ml-11 font-medium">Supplier • 10:28 AM</span>
                        </div>

                        {/* Calculation */}
                         <div className="flex gap-3 px-4 py-3 bg-white dark:bg-slate-700 border border-primary/20 rounded-lg mx-8 shadow-sm ring-1 ring-primary/5">
                            <div className="shrink-0 bg-primary/10 rounded-full p-1.5 h-fit">
                                <span className="material-symbols-outlined text-primary text-[16px] animate-spin">sync</span>
                            </div>
                            <div className="flex flex-col gap-1 justify-center w-full">
                                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Calculating Net Effective Rate...</p>
                                <div className="flex justify-between items-center text-xs text-gray-700 dark:text-gray-300">
                                    <span className="italic">2 mo free @ $46/sqft (24mo) → <span className="font-bold text-gray-900 dark:text-white">$42.16 effective</span></span>
                                    <span className="font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-[10px] border border-green-100 dark:border-green-800">Within Target</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700">
                        <div className="relative flex items-center gap-2">
                            <button className="p-2.5 text-gray-400 hover:text-primary transition-colors bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 border border-transparent hover:border-gray-200 dark:hover:border-gray-600">
                                <span className="material-symbols-outlined text-[20px]">mic</span>
                            </button>
                            <input className="w-full bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 transition-all shadow-sm" placeholder="Type to intervene or guide the AI..." type="text"/>
                            <button className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-all shadow-md shadow-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Column 3: Summary */}
                <section className="w-[320px] flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 shrink-0 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/30 dark:bg-slate-700/30">
                        <h2 className="font-bold text-gray-900 dark:text-white text-sm mb-4">Deal Terms Summary</h2>
                        <div className="mb-2">
                            <div className="flex justify-between text-xs font-semibold mb-1.5">
                                <span className="text-gray-500 dark:text-gray-400">Deal Progress</span>
                                <span className="text-primary">85%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2 shadow-inner">
                                <div className="bg-primary h-2 rounded-full relative" style={{width: '85%'}}>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-3 bg-white dark:bg-slate-600 border-[3px] border-primary rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1.5 text-right font-medium">Stage: Drafting Contract</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto no-scrollbar p-4 bg-white dark:bg-slate-800">
                        <div className="flex flex-col gap-3">
                             <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-slate-700/30 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white dark:bg-slate-600 p-2 rounded-md shadow-sm border border-gray-100 dark:border-gray-600 text-gray-500 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-[18px]">attach_money</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Monthly Rent</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">$46.00 <span className="text-[10px] font-normal text-gray-400">/sqft</span></p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-slate-700/30 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white dark:bg-slate-600 p-2 rounded-md shadow-sm border border-gray-100 dark:border-gray-600 text-gray-500 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Lease Duration</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">24 Months</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                            </div>

                             <div className="flex items-center justify-between p-3 rounded-lg border border-primary/40 bg-orange-50/40 dark:bg-orange-900/10 relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-white dark:bg-slate-600 p-2 rounded-md shadow-sm border border-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-[18px]">savings</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-wide">Free Period</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">2 Months</p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-600 rounded-full p-1 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[18px] animate-pulse" title="Pending Confirmation">pending</span>
                                </div>
                            </div>

                             <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-slate-700/30 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white dark:bg-slate-600 p-2 rounded-md shadow-sm border border-gray-100 dark:border-gray-600 text-gray-500 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Amenities</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">Gym & Parking</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-green-500 text-[20px]" title="Term Agreed">check_circle</span>
                            </div>

                            <div className="rounded-lg overflow-hidden h-36 relative border border-gray-200 dark:border-gray-700 mt-2 shadow-sm group">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJEYwkj0ykfuHw_Lbh53YvWm-Rd5STzEwBB6LJGQOW1dFgx0rnbJA4_v2dOCb_9JO5w8sLTV0IIl5K-jRb6OI6ikUeKQGkUiznZfpcAD6gnebPfTl2e2wHM0rVGvznoDBLl0xdqQrhFhN4ay0EUv9jjdRZCajelcTMiIWOt3MF_U3PAco_MRKtojlGRxUga_LG1CEdqP3t53rRQSlFJjfl9LkZuEPxVOMyQW0CEywDIQkpgZodoN_vtZzq_kyJtR_yjpJn1mTwsozO")'}}>
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                                </div>
                                <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-2 rounded border border-gray-200 dark:border-gray-600 shadow-sm flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-900 dark:text-white">Tech Hub, Unit 402</p>
                                        <p className="text-[9px] text-gray-500 dark:text-gray-400">San Francisco, CA</p>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-400 text-[16px]">location_on</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-slate-700/30 flex flex-col gap-3">
                        <button className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 text-sm group">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">verified</span>
                            Approve & Sign Deal
                        </button>
                        <button className="w-full py-2.5 px-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all flex items-center justify-center gap-2 text-xs shadow-sm">
                            <span className="material-symbols-outlined text-gray-400 text-[16px]">pan_tool</span>
                            Manual Intervention
                        </button>
                    </div>
                </section>
            </div>
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
      </main>
      
      {/* Personal Center Modal */}
      {isPersonalCenterOpen && (
        <PersonalCenterModal onClose={() => setIsPersonalCenterOpen(false)} />
      )}

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <SettingsModal onClose={() => setIsSettingsModalOpen(false)} />
      )}
    </div>
  );
};

export default DashboardPage;