import React, { useState, useRef, useEffect } from 'react';

interface DigitalTwinsViewProps {
  onOpenBookingModal: () => void;
  incomingAsset?: any;
  onAssetLoaded?: () => void;
  batchAssets?: any[];
  onAssetsConsumed?: () => void;
  userRole: 'Admin' | 'Merchant' | 'User';
  favorites?: any[];
  onToggleFavorite?: (item: any) => void;
}

const DEFAULT_ASSETS = [
  {
    id: 1,
    name: "North Tower - Suite 501",
    owner: "Apex Workspaces",
    locationCode: "L05",
    status: "Available",
    area: "1250 sqm",
    health: 95,
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9-8h8XRLXVw8nWFfStSab9qafp7TWL6D8Bpn3Y6c61loP8tP5uhHY9iohXJLiHlwwzclnZhuiI3baVuo-zjGdum1tiKSDN9IKHwDQVhpSZaa5t-ggoW94E_Aj2_yZIPiSGFF2ad5PRC1DPaqov_eYD7MnTCGSGtcU2lHVRxBa9_8reL1cG0IH_FnYe21kY7HH3gZl_dvb8-fhiAplgO6kDlX3xQp97LusI63pvUtf56A0GG7QAp_k9COr07P8TM9H0jvBMsFL3vzl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF37S8p1faGRX8BiWB27EzDpJhdr7sPuES7ntT7JC4rAqW7oJd20oxdnCvJ4zsTbJiWYbobRmf_hr9eD9OUSz6PIoHFW3pjPpmuqW52LjnebE4Eyy8cPA4CnLshbYJGiKwWkRR8hUc1tqiAOQfl-JnxGDVzO68c7Y_ytm9DxYVCRs904HfoxvvxlhfRPV37b2jzbIUidd5YGILsdiDpfvhTobgDq6G9zh5pRp9-TJ3asa4tpvPMLnnBog_2WAMtpIYBvw780yVXRgT",
    workstations: "45 units",
    color: "green"
  },
  {
    id: 2,
    name: "East Wing - Conf Room B",
    owner: "Downtown Hub",
    locationCode: "L02",
    status: "Occupied",
    area: "450 sqm",
    health: 85,
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpD7UJ0K3qXpW6VrNHcxNS6eEQlJdDHS3PhW2v5PAwEJH6yd-ONO8YKJLnKoSKFh4dOj_2svfz3EfrUGdeQHX5uMHa8qf_HV1o_gL-HvRltE00sAzHA1OHuJ9VohWd8fdwN34z12mCR76AkzodlEEg0bFsDOsZwdMNGwo6WIaIYk6eB0YhMhIVasq8Ca2v-kRyLuScVgBevBa0grOEtA-m5Bq4uVdg8l-fYb_W3ESO-CGaIqr2KHKimW13uk7CowKTMAUWniVJ3iJj",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFD6LHgI5Xrot3lnWPSkQeXX5sj_y4vLSEh4Q7JZfrD23XXEmVa3DtqAV5P4k5Nu7tBa8yRxSN0NNWDLwSN_LVSQ12Db9Tqz6V_5xjyD22tR8_spnBNkZQrziYl1jFWK1LM-xyQxxytPgopvMJTrMTjR6g4ls6b8ptMMOueqJ0zHH0cftfca1QG96pOddDXLXf_SUpVDKhEOCorC8pUfmXt6nSeKd0xSxq-b-YlOtXKFjsHUw5e2Su39TVWaHJhePSodefB6TW8VwA",
    workstations: "12 units",
    color: "orange"
  },
  {
    id: 3,
    name: "Skyline - Exec Office",
    owner: "Apex Workspaces",
    locationCode: "L08",
    status: "Maintenance",
    area: "800 sqm",
    health: 78,
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcHSyWgwbCoOTk_0VZstE6XsIoRLVjJemfVpxpsgeT6zDCxeasoeNn_jS_82T72VHeJ0TA6erwgdOhqT8sDiiYs_wHeWfNOyMr9BEHlxWcCTwY2REOYvbiebLTfw2FLCHn_RhvAIqbPvHjjyJZIKzuZgxREjuitiPj5a16fFRBpBDXA2d59dOO6nHEumKYgsAMPykzmg5iNtgvDSc4C7ESnRNw5TFc4UPVYUaZQ9T-uIxxPHOBg4x8AGrtD4_mma4rwkgotEIXAxfZ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcHSyWgwbCoOTk_0VZstE6XsIoRLVjJemfVpxpsgeT6zDCxeasoeNn_jS_82T72VHeJ0TA6erwgdOhqT8sDiiYs_wHeWfNOyMr9BEHlxWcCTwY2REOYvbiebLTfw2FLCHn_RhvAIqbPvHjjyJZIKzuZgxREjuitiPj5a16fFRBpBDXA2d59dOO6nHEumKYgsAMPykzmg5iNtgvDSc4C7ESnRNw5TFc4UPVYUaZQ9T-uIxxPHOBg4x8AGrtD4_mma4rwkgotEIXAxfZ",
    workstations: "20 units",
    color: "orange"
  },
  {
    id: 4,
    name: "Harbor View - Hall A",
    owner: "Downtown Hub",
    locationCode: "L01",
    status: "Available",
    area: "2000 sqm",
    health: 99,
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX",
    workstations: "80 units",
    color: "green"
  }
];

const DigitalTwinsView: React.FC<DigitalTwinsViewProps> = ({ 
    onOpenBookingModal, 
    incomingAsset, 
    onAssetLoaded, 
    batchAssets, 
    onAssetsConsumed, 
    userRole, 
    favorites, 
    onToggleFavorite 
}) => {
  const [assets, setAssets] = useState(DEFAULT_ASSETS);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  
  // Advanced Filter State
  const [aiPrompt, setAiPrompt] = useState('');
  const [filterAvailable, setFilterAvailable] = useState(false); // Default false to show all initially
  const [filterVideo, setFilterVideo] = useState(false);
  const [filterWhiteboard, setFilterWhiteboard] = useState(false);
  const [filterCapacity, setFilterCapacity] = useState('Any Size');
  const [filterTime, setFilterTime] = useState('Today');
  const [filterZone, setFilterZone] = useState('All Zones');

  const [selectedAsset, setSelectedAsset] = useState<any | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const digitalTwinRef = useRef<HTMLElement>(null);
  const [iotStates, setIotStates] = useState({
    lighting: true,
    hvac: true,
    blinds: false,
  });

  // Handle single asset from Home
  useEffect(() => {
    if (incomingAsset) {
        // Adapt incoming asset from Home view to Digital Twin structure if it doesn't exist
        const adaptedAsset = {
            id: Date.now(), // Temporary unique ID for viewing
            name: incomingAsset.title,
            owner: "Apex Workspaces", // Default for new incoming
            locationCode: incomingAsset.loc ? incomingAsset.loc.split(',')[0].substring(0, 3).toUpperCase() + '01' : 'TBD',
            status: "Available",
            area: incomingAsset.area ? `${incomingAsset.area} sqft` : "Unknown",
            health: 98,
            thumb: incomingAsset.img,
            image: incomingAsset.img,
            workstations: "Flexible",
            color: "green"
        };
        
        // Add to list transiently for viewing
        setAssets(prev => [adaptedAsset, ...prev]);
        setSelectedAsset(adaptedAsset);
        
        if (onAssetLoaded) onAssetLoaded();
    }
  }, [incomingAsset, onAssetLoaded]);

  // Handle batch assets from Auto-Ingestion
  useEffect(() => {
    if (batchAssets && batchAssets.length > 0) {
        setAssets(prev => [...batchAssets, ...prev]);
        if (onAssetsConsumed) onAssetsConsumed();
    }
  }, [batchAssets, onAssetsConsumed]);

  const toggleIot = (device: keyof typeof iotStates) => {
    setIotStates(prev => ({ ...prev, [device]: !prev[device] }));
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3)); 
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 1)); 
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      digitalTwinRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const isFavorite = (asset: any) => {
    return favorites?.some((fav: any) => fav.title === asset.name);
  };

  // Combined filtering logic
  const filteredAssets = assets.filter(asset => {
    // 1. Role-based filtering
    // If Merchant, assume current user is "Apex Workspaces" for simulation
    if (userRole === 'Merchant' && asset.owner !== 'Apex Workspaces') {
        return false;
    }
    // Admin and User see everything (User is consumer, Admin is superuser)

    // 2. Search & UI Filters
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          asset.locationCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          asset.name.toLowerCase().includes(aiPrompt.toLowerCase());
    
    const matchesAvailability = filterAvailable ? asset.status === 'Available' : true;

    return matchesSearch && matchesAvailability;
  });

  if (!selectedAsset) {
    return (
        <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            {/* Header */}
            <div className="px-8 py-8 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Digital Twins Library</h1>
                        <p className="text-slate-500">Real-time spatial data and IoT control center for {userRole === 'Merchant' ? 'your' : 'enterprise'} assets.</p>
                    </div>
                    
                    {/* Advanced AI Search & Filter Bar */}
                    <div className="flex flex-col gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm">
                        {/* 1. AI Input */}
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary text-[22px] animate-pulse">auto_awesome</span>
                            </div>
                            <input 
                                type="text"
                                className="block w-full rounded-xl border-slate-200 bg-white pl-12 pr-12 py-3.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary shadow-sm text-sm transition-all"
                                placeholder="Tell AI: A quiet room for 6 people tomorrow afternoon..."
                                value={aiPrompt}
                                onChange={(e) => setAiPrompt(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">mic</span>
                            </button>
                        </div>

                        {/* 2. Filters & Toggles */}
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Dropdowns */}
                            <div className="relative min-w-[160px] flex-1 sm:flex-none">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-[18px]">group</span>
                                </div>
                                <select 
                                    value={filterCapacity}
                                    onChange={(e) => setFilterCapacity(e.target.value)}
                                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-sm py-2.5 pl-10 pr-8 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer hover:border-slate-300 transition-colors shadow-sm"
                                >
                                    <option>Any Size</option>
                                    <option>1-4 People</option>
                                    <option>5-10 People</option>
                                    <option>10+ People</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] pointer-events-none">expand_more</span>
                            </div>

                            <div className="relative min-w-[160px] flex-1 sm:flex-none">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-[18px]">calendar_today</span>
                                </div>
                                <select 
                                    value={filterTime}
                                    onChange={(e) => setFilterTime(e.target.value)}
                                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-sm py-2.5 pl-10 pr-8 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer hover:border-slate-300 transition-colors shadow-sm"
                                >
                                    <option>Available Now</option>
                                    <option>Today</option>
                                    <option>Tomorrow</option>
                                    <option>Custom Date</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] pointer-events-none">expand_more</span>
                            </div>

                            <div className="relative min-w-[160px] flex-1 sm:flex-none">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-[18px]">location_on</span>
                                </div>
                                <select 
                                    value={filterZone}
                                    onChange={(e) => setFilterZone(e.target.value)}
                                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-sm py-2.5 pl-10 pr-8 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer hover:border-slate-300 transition-colors shadow-sm"
                                >
                                    <option>All Zones</option>
                                    <option>Floor A</option>
                                    <option>Floor B</option>
                                    <option>Quiet Zone</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] pointer-events-none">expand_more</span>
                            </div>

                            <div className="h-8 w-px bg-slate-200 mx-2 hidden lg:block"></div>

                            {/* Toggles */}
                            <div className="flex flex-wrap gap-2">
                                <button 
                                    onClick={() => setFilterAvailable(!filterAvailable)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold border transition-all shadow-sm ${
                                        filterAvailable 
                                        ? 'bg-green-50 text-green-700 border-green-200' 
                                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    {filterAvailable ? <span className="material-symbols-outlined text-[18px]">check_circle</span> : <span className="material-symbols-outlined text-[18px] text-slate-300">circle</span>}
                                    Available Only
                                </button>

                                <button 
                                    onClick={() => setFilterVideo(!filterVideo)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold border transition-all shadow-sm ${
                                        filterVideo
                                        ? 'bg-blue-50 text-blue-700 border-blue-200' 
                                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    <span className={`material-symbols-outlined text-[18px] ${filterVideo ? 'text-blue-600' : 'text-slate-400'}`}>videocam</span>
                                    Video Conf
                                </button>

                                <button 
                                    onClick={() => setFilterWhiteboard(!filterWhiteboard)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold border transition-all shadow-sm ${
                                        filterWhiteboard
                                        ? 'bg-purple-50 text-purple-700 border-purple-200' 
                                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    <span className={`material-symbols-outlined text-[18px] ${filterWhiteboard ? 'text-purple-600' : 'text-slate-400'}`}>edit_note</span>
                                    Whiteboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAssets.map(asset => {
                        const isFav = isFavorite(asset);
                        return (
                        <div 
                            key={asset.id}
                            onClick={() => setSelectedAsset(asset)}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer group flex flex-col h-full transform hover:-translate-y-1 duration-300"
                        >
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: `url('${asset.thumb}')`}}></div>
                                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide border shadow-sm backdrop-blur-md ${asset.color === 'green' ? 'bg-white/90 text-green-700 border-green-200' : 'bg-white/90 text-orange-700 border-orange-200'}`}>
                                        {asset.status}
                                    </span>
                                </div>
                                {/* Favorite Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (onToggleFavorite) onToggleFavorite({ ...asset, title: asset.name, img: asset.thumb, loc: asset.locationCode + ' - ' + asset.owner, price: 'Contact for Price' });
                                    }}
                                    className={`absolute top-3 right-3 p-1.5 backdrop-blur-md rounded-full transition-colors z-10 ${isFav ? 'bg-white text-primary' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'}`}
                                >
                                    <span className="material-symbols-outlined text-[16px]" style={isFav ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite_border</span>
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                                     <p className="text-white font-bold truncate text-lg shadow-black/50 drop-shadow-sm">{asset.name}</p>
                                     <p className="text-white/80 text-xs font-medium">{asset.locationCode}</p>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col gap-4 flex-1">
                                {userRole === 'Admin' && (
                                    <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded w-fit">
                                        Owner: {asset.owner}
                                    </div>
                                )}
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-[18px] text-slate-400">crop_square</span>
                                        <span className="font-medium">{asset.area}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-[18px] text-slate-400">desk</span>
                                        <span className="font-medium">{asset.workstations}</span>
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Health Score</span>
                                        <span className={`text-xs font-bold ${asset.health > 90 ? 'text-green-600' : 'text-orange-500'}`}>{asset.health}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${asset.health > 90 ? 'bg-green-500' : 'bg-orange-500'}`} style={{width: `${asset.health}%`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );})}
                    {filteredAssets.length === 0 && (
                        <div className="col-span-full py-20 text-center text-slate-400 flex flex-col items-center">
                            <span className="material-symbols-outlined text-5xl mb-2 opacity-30">domain_disabled</span>
                            <p className="text-lg font-medium">No assets found.</p>
                            {userRole === 'Merchant' && <p className="text-sm">You haven't listed any assets matching the criteria.</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
  }

  const isSelectedFav = selectedAsset ? isFavorite(selectedAsset) : false;

  // Split View (When an asset is selected)
  return (
    <>
      <div className="w-80 flex flex-col border-r border-slate-200 bg-white z-10 shrink-0">
        <div className="p-4 border-b border-slate-200 bg-white shadow-sm z-10">
          <button 
             onClick={() => setSelectedAsset(null)}
             className="w-full mb-4 flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-bold group p-2 rounded-lg hover:bg-slate-50 uppercase tracking-wide"
          >
             <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
             Back to Library
          </button>
          
          {/* 1. AI Search Input */}
          <div className="relative mb-3">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-primary text-[18px] animate-pulse">auto_awesome</span>
             </div>
             <input 
                className="w-full bg-indigo-50/50 border border-indigo-100/80 text-slate-900 text-sm rounded-xl pl-9 pr-8 py-2.5 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" 
                placeholder="Ask AI for a space..." 
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">mic</span>
              </button>
          </div>

          {/* 2. Core Dropdown Filters */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="relative">
                <select 
                    value={filterCapacity}
                    onChange={(e) => setFilterCapacity(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 pl-8 pr-8 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-shadow cursor-pointer hover:bg-slate-50"
                >
                    <option>Any Size</option>
                    <option>1-4 People (Small)</option>
                    <option>5-10 People (Medium)</option>
                    <option>10+ People (Large)</option>
                </select>
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[16px] pointer-events-none">group</span>
                <span className="material-symbols-outlined absolute right-2.5 top-2 text-slate-400 text-[16px] pointer-events-none">expand_more</span>
            </div>

            <div className="relative">
                <select 
                    value={filterTime}
                    onChange={(e) => setFilterTime(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 pl-8 pr-8 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-shadow cursor-pointer hover:bg-slate-50"
                >
                    <option>Available Now</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>Custom Date</option>
                </select>
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[16px] pointer-events-none">calendar_today</span>
                <span className="material-symbols-outlined absolute right-2.5 top-2 text-slate-400 text-[16px] pointer-events-none">expand_more</span>
            </div>

            <div className="relative">
                <select 
                    value={filterZone}
                    onChange={(e) => setFilterZone(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 pl-8 pr-8 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-shadow cursor-pointer hover:bg-slate-50"
                >
                    <option>All Zones</option>
                    <option>Floor A - Executive</option>
                    <option>Floor B - Creative</option>
                    <option>Quiet Zone</option>
                </select>
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[16px] pointer-events-none">location_on</span>
                <span className="material-symbols-outlined absolute right-2.5 top-2 text-slate-400 text-[16px] pointer-events-none">expand_more</span>
            </div>
          </div>

          {/* 3. Quick Status Toggles */}
          <div className="flex flex-wrap gap-2">
            <button 
                onClick={() => setFilterAvailable(!filterAvailable)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-bold border transition-all ${
                    filterAvailable 
                    ? 'bg-green-50 text-green-700 border-green-200 shadow-sm' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
            >
                {filterAvailable && <span className="material-symbols-outlined text-[12px] font-bold">check</span>}
                Available Only
            </button>
            
            <button 
                onClick={() => setFilterVideo(!filterVideo)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-bold border transition-all ${
                    filterVideo 
                    ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
            >
                {filterVideo && <span className="material-symbols-outlined text-[12px] font-bold">check</span>}
                Video Conf
            </button>

            <button 
                onClick={() => setFilterWhiteboard(!filterWhiteboard)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-bold border transition-all ${
                    filterWhiteboard 
                    ? 'bg-purple-50 text-purple-700 border-purple-200 shadow-sm' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
            >
                {filterWhiteboard && <span className="material-symbols-outlined text-[12px] font-bold">check</span>}
                Whiteboard
            </button>
          </div>
        </div>

        {/* Filtered List Results */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 bg-slate-50">
          <div className="px-1 pb-1">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{filteredAssets.length} Results Found</p>
          </div>
          {filteredAssets.map((asset) => (
            <div 
              key={asset.id}
              onClick={() => setSelectedAsset(asset)}
              className={`group flex flex-col p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${selectedAsset?.id === asset.id ? 'bg-white border-primary shadow-md ring-1 ring-primary/20' : 'bg-white border-slate-200 hover:border-primary/30 hover:shadow-md'}`}
            >
              {selectedAsset?.id === asset.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>}
              <div className="flex gap-3 mb-3">
                <div className="shrink-0 size-16 rounded-lg bg-cover bg-center relative shadow-inner" style={{backgroundImage: `url("${asset.thumb}")`}}>
                  <div className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-sm rounded px-1.5 py-0.5 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-900">{asset.locationCode}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className={`text-sm font-bold truncate leading-tight mb-1 ${selectedAsset?.id === asset.id ? 'text-slate-900' : 'text-slate-700'}`}>{asset.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${asset.color === 'green' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-orange-50 text-orange-600 border-orange-200'}`}>{asset.status}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-slate-500 text-xs font-medium">Health</span>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${asset.color === 'green' ? 'bg-primary' : 'bg-primary/80'}`} style={{width: `${asset.health}%`}}></div>
                </div>
                <span className={`text-xs font-bold text-primary`}>{asset.health}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50 p-6 lg:p-10 scroll-smooth">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                <span className="cursor-pointer hover:text-primary transition-colors" onClick={() => setSelectedAsset(null)}>Assets</span>
                <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
                <span className="text-slate-800 font-bold bg-slate-200/50 px-2 py-0.5 rounded">Suite {selectedAsset.locationCode === 'L05' ? '501' : '502'}</span>
              </nav>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{selectedAsset.name}</h1>
                {userRole === 'Admin' && (
                    <span className="text-xs font-semibold text-white bg-slate-800 px-2 py-1 rounded">Owner: {selectedAsset.owner}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Detail View Favorite Button */}
              <button
                onClick={() => {
                    if (onToggleFavorite) onToggleFavorite({ ...selectedAsset, title: selectedAsset.name, img: selectedAsset.thumb, loc: selectedAsset.locationCode + ' - ' + selectedAsset.owner, price: 'Contact for Price' });
                }}
                className={`p-2 rounded-lg border transition-all ${isSelectedFav ? 'bg-red-50 border-red-200 text-red-500' : 'bg-white border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200'}`}
              >
                <span className="material-symbols-outlined text-[24px]" style={isSelectedFav ? {fontVariationSettings: "'FILL' 1"} : {}}>favorite</span>
              </button>
              
              <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white hover:bg-orange-600 transition-all font-semibold text-sm shadow-lg shadow-orange-500/20 active:translate-y-0.5" onClick={onOpenBookingModal}>
                <span className="material-symbols-outlined text-[18px]">event_available</span>
                Book Meeting
              </button>
            </div>
          </header>

          <section ref={digitalTwinRef} className="w-full aspect-[21/9] min-h-[300px] bg-slate-900 rounded-2xl mb-8 relative group overflow-hidden border border-slate-300 shadow-lg shadow-slate-200/50">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out" 
              style={{
                backgroundImage: `url("${selectedAsset.image}")`,
                transform: `scale(${zoomLevel})`
              }}
            ></div>
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
              <div className="size-8 rounded-full bg-primary/30 backdrop-blur-sm border-2 border-white flex items-center justify-center animate-bounce shadow-lg">
                <div className="size-2 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity whitespace-nowrap arrow-top">
                Workstation Cluster A
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 pointer-events-auto">
              <button 
                onClick={handleZoomIn}
                className="size-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
              </button>
              <button 
                onClick={handleZoomOut}
                className="size-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">zoom_out</span>
              </button>
              <button 
                onClick={handleFullscreen}
                className="size-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all shadow-sm active:scale-95"
              >
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
                    <span className="text-2xl font-bold text-slate-900">{selectedAsset.area}</span>
                  </div>
                  <div className="size-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined">grid_4x4</span>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">Workstations</span>
                    <span className="text-2xl font-bold text-slate-900">{selectedAsset.workstations}</span>
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
                      <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary transition-colors"></div>
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
                      <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary transition-colors"></div>
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
    </>
  );
};

export default DigitalTwinsView;