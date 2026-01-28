import React, { useState, useRef } from 'react';
import NotificationButton from './NotificationButton';
import ManualEditModal from './ManualEditModal';

interface AutoIngestionViewProps {
  onNavigate: (view: any) => void;
}

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-uPATa74iyyIUdpNkobDA9b6-vGmOLUF0ZUpq2_td-2mm1uJGxtKNTuvj-KBZe2W0tfyACxIU7ln0p1qtbl7J9S4NX_F5_4txZ_PKYfjso5QofRNAfO91SJCkX2eNB4g49VZQX2hLrnTFAJyqlu-mEqp3ISNmgAD4ERiDSfYhBejP6lVmgHLdAzCEhtCqcda6Dbd4C579AXBjxpdDqN47k2eJtyvwCEDgq9p4x9p5KXXjf1W9ahCo9U-WVQDXQd_1QtrMyWwxZx-",
    alt: "Modern office interior",
    tags: "3 tags detected",
    isMain: true
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4qU0OJoPWCxeCX6x18MUHemFFlOB2m0Le4LrDpzTctnHO-OZMaqYRsIDMQo0fTrEgM__cWyNYw_gyVMYvB2b_1Qyy67PsERPoths32Jtq9SgmucYuy17GWseq1P66ahVww23NLVLAim9DXboPJ1Jf3BD-C6w-VrnbUI0oOXXuxiBqqZGs4ipzb_Cc6P7lF-5tBk3WE7exDA9pJKmbLpicyqimln-ctlCIwz5shPnZ2D5fD0usZrCrmqjI2__hD0MfFr_FeOiHZ6L1",
    alt: "Office main view",
    tags: "No tags"
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD61x3S7P2WMadZ7k2SOafb0kE_1RXWSvmsPC5PvqaHr3axQw-5VRgWRe3CMdYzBGt_uTwW06dM7U0FQmsdKwkyHyI7HGzdahZHtsir41oyeXfdTYVoC0KWDng4EufDqaw4SMcMuZsNNuYeLqoEoG73zZGB3cBCaq3m3isbnvtDHMx1r6-PosXmIfJWf2S16jr2ah1uqxjPLz-evjBFSk-wOWPdvpBn2hRIdpcJnSWFPcsLLGEVxBtDwYwfFLbIwKEEmiQwdiNkp3cV",
    alt: "Conference room",
    tags: "4 tags"
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM6uKxTbtoIEV9AQpeXX74gcik8OMCxEkFBdarRR6MPe3Q-ewIUS3BdY6s2r7QBQNRYitfd2ozE-JKOf60io62r6iq1X1wfzv25Tu1_eisxiLGCF--qsjY85V-2qPJwZwSfWwOnAT2sXyEqATCINbh3flC-yqI2BHb4hWdzA9_Fo62QEB7nTMrhDpE--2rgGPoUCvDDVVc9JdVKQP2QNOGlfnEXUPxIZcNelFHh6z9AeU7kNmcYAFL4YAMirekwkF5kegt3YIiqeuJ",
    alt: "Desk setup",
    tags: "2 tags"
  }
];

const AutoIngestionView: React.FC<AutoIngestionViewProps> = ({ onNavigate }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<'detail' | 'grid'>('detail');
  const [isManualEditOpen, setIsManualEditOpen] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // In a real application, you would handle the file upload here.
      // For this demo, we'll just show an alert with the selected file names.
      const fileNames = Array.from(files).map(f => f.name).join('\n');
      alert(`Files selected for upload:\n${fileNames}`);
      
      // Reset the input so the same file can be selected again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
        <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            multiple 
            accept="image/*,video/*"
            onChange={handleFileChange}
        />

        {/* Header */}
        <header className="h-16 border-b border-slate-200 flex items-center justify-between px-8 bg-white flex-shrink-0 z-20">
            <div className="flex items-center text-sm text-slate-500 font-medium">
                <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('home')}>
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
                <NotificationButton />
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
                    {/* Buttons Removed as requested */}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <div 
                            className="rounded-xl flex flex-col items-center justify-center p-8 text-center h-64 bg-slate-50/50 hover:bg-orange-50/30 transition-all cursor-pointer group relative overflow-hidden"
                            onClick={handleUploadClick}
                            style={{
                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzT7TC2BGLv0Kyjx0igwPGdPMC3h1YOPtmF4hQmFs6FUjjwTrwlGoAFJzk5Ow7a9QVlA_VRfGZ6zjXonIkIvp0RwVkC_z-2RVen7KUKA4cTqAsKrprqqnWOqOqSr807qyR_aikggunz3PE66SNP2PcTO0O7CC5yHqVQyAxTFnXfvTCXgrO59BiN1bB67Y0Q2yuS36yuuK6D3oX7DKQA8Ph1FVd-SqSZfZQVJvcQe2KxnmDz2vbDq03gG2fFVin8fjiK-AbNkd4NhGe")`,
                                backgroundSize: 'cover'
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
                                <button 
                                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`} 
                                    onClick={() => setViewMode('grid')}
                                >
                                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                                </button>
                                <button 
                                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'detail' ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`} 
                                    onClick={() => setViewMode('detail')}
                                >
                                    <span className="material-symbols-outlined text-[18px]">list</span>
                                </button>
                            </div>
                        </div>
                        
                        {viewMode === 'detail' ? (
                            /* Detail View */
                            <div className="flex-1 flex flex-col gap-4 animate-[fadeIn_0.3s_ease-out]">
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-900 group shadow-md">
                                    <img alt="Modern office interior" className="w-full h-full object-cover opacity-90 transition-opacity duration-300" src={GALLERY_IMAGES[0].src}/>
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
                                        <img alt={GALLERY_IMAGES[1].alt} className="w-full h-full object-cover rounded-md" src={GALLERY_IMAGES[1].src}/>
                                        <div className="absolute inset-0 bg-primary/10"></div>
                                    </div>
                                    {GALLERY_IMAGES.slice(2).map((img) => (
                                        <div key={img.id} className="relative w-28 h-20 rounded-lg border border-slate-200 cursor-pointer flex-shrink-0 overflow-hidden group hover:border-primary/50 transition-colors" onClick={() => alert(`${img.alt} selected`)}>
                                            <img alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={img.src}/>
                                            {img.tags && <div className="absolute bottom-0 right-0 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-tl-lg font-bold">{img.tags}</div>}
                                        </div>
                                    ))}
                                    <div 
                                        className="relative w-28 h-20 rounded-lg border-2 border-dashed border-slate-200 cursor-pointer flex-shrink-0 flex items-center justify-center bg-gray-50 hover:bg-orange-50 hover:border-primary/50 hover:text-primary transition-all text-gray-400" 
                                        onClick={handleUploadClick}
                                    >
                                        <span className="material-symbols-outlined text-[24px]">add_photo_alternate</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Grid View */
                            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto animate-[fadeIn_0.3s_ease-out] content-start">
                                {GALLERY_IMAGES.map((img) => (
                                    <div key={img.id} className="relative aspect-[4/3] rounded-lg border border-slate-200 bg-slate-50 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all shadow-sm hover:shadow-md" onClick={() => alert(`${img.alt} selected`)}>
                                        <img alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={img.src} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                                            <p className="text-white text-xs font-bold truncate">{img.alt}</p>
                                            <p className="text-slate-300 text-[10px]">{img.tags}</p>
                                        </div>
                                        {img.isMain && (
                                            <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Main</div>
                                        )}
                                    </div>
                                ))}
                                <div 
                                    className="relative aspect-[4/3] rounded-lg border-2 border-dashed border-slate-200 cursor-pointer flex flex-col items-center justify-center bg-gray-50 hover:bg-orange-50 hover:border-primary/50 hover:text-primary transition-all text-gray-400 gap-2" 
                                    onClick={handleUploadClick}
                                >
                                    <span className="material-symbols-outlined text-[32px]">add_photo_alternate</span>
                                    <span className="text-xs font-semibold">Add Photo</span>
                                </div>
                            </div>
                        )}
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
                <button 
                    className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm" 
                    onClick={() => setIsManualEditOpen(true)}
                >
                    Manual Edit
                </button>
                <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center gap-2" onClick={() => alert("Syncing to Digital Twin Library...")}>
                    <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                    Sync to Digital Twin Library
                </button>
            </div>
        </div>

        {isManualEditOpen && (
            <ManualEditModal onClose={() => setIsManualEditOpen(false)} />
        )}
    </div>
  );
};

export default AutoIngestionView;