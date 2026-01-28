import React from 'react';

interface ManualEditModalProps {
  onClose: () => void;
}

const ManualEditModal: React.FC<ManualEditModalProps> = ({ onClose }) => {
  return (
    <div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans text-slate-900" role="dialog">
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out] flex-shrink-0 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white flex-shrink-0">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg text-primary">
                        <span className="material-symbols-outlined">edit_document</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 leading-tight" id="modal-title">Manual Asset Tag Editor</h2>
                        <p className="text-sm text-gray-500 mt-0.5">Review and fine-tune AI-detected asset labels for accurate inventory.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">IMG-2023-004.jpg</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left: Image Canvas */}
                <div className="flex-1 bg-gray-50 relative flex flex-col border-r border-gray-200">
                    {/* Tools */}
                    <div className="absolute top-6 left-6 z-10 flex flex-col gap-2 bg-white rounded-lg shadow-md border border-gray-100 p-1.5">
                        <button className="p-2 rounded bg-orange-50 text-primary hover:bg-orange-100 transition-colors" title="Select Tool">
                            <span className="material-symbols-outlined text-[20px]">arrow_selector_tool</span>
                        </button>
                        <button className="p-2 rounded text-gray-500 hover:bg-gray-100 transition-colors" title="Draw Box">
                            <span className="material-symbols-outlined text-[20px]">crop_free</span>
                        </button>
                        <button className="p-2 rounded text-gray-500 hover:bg-gray-100 transition-colors" title="Pan Image">
                            <span className="material-symbols-outlined text-[20px]">pan_tool</span>
                        </button>
                        <hr className="border-gray-100 my-1"/>
                        <button className="p-2 rounded text-gray-500 hover:bg-gray-100 transition-colors" title="Reset View">
                            <span className="material-symbols-outlined text-[20px]">restart_alt</span>
                        </button>
                    </div>

                    {/* Image Area */}
                    <div className="flex-1 flex items-center justify-center p-8 overflow-hidden relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                        <div className="relative shadow-xl rounded-lg overflow-hidden inline-block border border-gray-200 select-none">
                            <img alt="Asset reference" className="max-h-[60vh] object-contain pointer-events-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK-uPATa74iyyIUdpNkobDA9b6-vGmOLUF0ZUpq2_td-2mm1uJGxtKNTuvj-KBZe2W0tfyACxIU7ln0p1qtbl7J9S4NX_F5_4txZ_PKYfjso5QofRNAfO91SJCkX2eNB4g49VZQX2hLrnTFAJyqlu-mEqp3ISNmgAD4ERiDSfYhBejP6lVmgHLdAzCEhtCqcda6Dbd4C579AXBjxpdDqN47k2eJtyvwCEDgq9p4x9p5KXXjf1W9ahCo9U-WVQDXQd_1QtrMyWwxZx-"/>
                            
                            {/* Tags Overlays */}
                            <div className="absolute top-[45%] left-[15%] w-[12%] h-[25%] border-2 border-primary bg-primary/10 cursor-pointer shadow-[0_0_0_9999px_rgba(0,0,0,0.3)] z-20 group">
                                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full border-2 border-white cursor-nw-resize"></div>
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full border-2 border-white cursor-ne-resize"></div>
                                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary rounded-full border-2 border-white cursor-sw-resize"></div>
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full border-2 border-white cursor-se-resize"></div>
                                <div className="absolute -top-8 left-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">
                                    Herman Miller Chair
                                </div>
                            </div>

                            <div className="absolute top-[30%] right-[10%] w-[15%] h-[30%] border-2 border-blue-400 hover:border-blue-500 bg-blue-400/5 hover:bg-blue-400/10 cursor-pointer z-10 transition-colors">
                                <div className="absolute -top-7 right-0 bg-white/90 text-gray-800 border border-gray-200 text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap flex items-center gap-1 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Whiteboard
                                </div>
                            </div>
                            
                            <div className="absolute top-[10%] left-[30%] w-[40%] h-[50%] border-2 border-blue-400 hover:border-blue-500 bg-blue-400/5 hover:bg-blue-400/10 cursor-pointer z-10 transition-colors">
                            </div>
                        </div>
                        
                        {/* Zoom Controls */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 p-1.5 flex items-center gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                            <span className="text-xs font-bold text-gray-700 w-10 text-center font-mono">100%</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"><span className="material-symbols-outlined text-[18px]">add</span></button>
                        </div>
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className="w-[400px] flex-shrink-0 bg-white flex flex-col h-full overflow-hidden">
                    <div className="p-5 border-b border-gray-100 bg-gray-50/30 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide">Detected Labels</h3>
                            <p className="text-xs text-gray-500">3 objects identified</p>
                        </div>
                        <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">High Confidence</span>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-5 space-y-4">
                        {/* Tag Item 1 */}
                        <div className="group relative bg-white rounded-xl border-2 border-primary shadow-sm overflow-hidden transition-all">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                            <div className="p-4 pl-5">
                                <div className="flex justify-between items-start mb-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-wider">Object #1</label>
                                    <span className="flex items-center gap-1 text-[10px] font-medium bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-100">
                                        <span className="material-symbols-outlined text-[12px]">visibility</span> 99%
                                    </span>
                                </div>
                                <div className="relative mb-2">
                                    <input className="w-full text-sm font-bold text-gray-900 border-0 border-b border-gray-200 focus:border-primary focus:ring-0 px-0 py-1 bg-transparent placeholder-gray-400" type="text" defaultValue="Herman Miller Chair"/>
                                    <span className="absolute right-0 top-1 text-gray-400 material-symbols-outlined text-[16px] cursor-pointer hover:text-primary">edit</span>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-400 font-mono">Source:</span>
                                        <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">AI Vision v2.4</span>
                                    </div>
                                    <button className="text-gray-300 hover:text-red-500 transition-colors" title="Delete Tag">
                                        <span className="material-symbols-outlined text-[18px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Tag Item 2 */}
                        <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm overflow-hidden transition-all opacity-80 hover:opacity-100">
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Object #2</label>
                                    <span className="flex items-center gap-1 text-[10px] font-medium bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                                        <span className="material-symbols-outlined text-[12px]">visibility</span> 92%
                                    </span>
                                </div>
                                <div className="relative mb-2">
                                    <input className="w-full text-sm font-medium text-gray-700 border-0 border-b border-transparent hover:border-gray-200 focus:border-primary focus:ring-0 px-0 py-1 bg-transparent" type="text" defaultValue="Whiteboard"/>
                                    <span className="absolute right-0 top-1 text-gray-300 material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-400 font-mono">Source:</span>
                                        <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">AI Vision v2.4</span>
                                    </div>
                                    <button className="text-gray-300 hover:text-red-500 transition-colors" title="Delete Tag">
                                        <span className="material-symbols-outlined text-[18px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Tag Item 3 */}
                        <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm overflow-hidden transition-all opacity-80 hover:opacity-100">
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Object #3</label>
                                    <span className="flex items-center gap-1 text-[10px] font-medium bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded border border-yellow-100">
                                        <span className="material-symbols-outlined text-[12px]">warning</span> 85%
                                    </span>
                                </div>
                                <div className="relative mb-2">
                                    <input className="w-full text-sm font-medium text-gray-700 border-0 border-b border-transparent hover:border-gray-200 focus:border-primary focus:ring-0 px-0 py-1 bg-transparent" type="text" defaultValue="Floor-to-ceiling Window"/>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-400 font-mono">Source:</span>
                                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Geometric Inf.</span>
                                    </div>
                                    <button className="text-gray-300 hover:text-red-500 transition-colors" title="Delete Tag">
                                        <span className="material-symbols-outlined text-[18px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                        <button className="w-full py-2.5 border border-dashed border-gray-300 bg-white rounded-lg text-gray-500 text-sm font-semibold hover:border-primary hover:text-primary hover:bg-orange-50 transition-all flex items-center justify-center gap-2 group">
                            <div className="bg-gray-100 group-hover:bg-white rounded p-0.5 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                            </div>
                            Manually Add Tag
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-white flex justify-between items-center flex-shrink-0 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
                <button onClick={onClose} className="px-5 py-2 text-gray-500 font-semibold hover:text-gray-800 transition-colors text-sm">Cancel</button>
                <div className="flex gap-3">
                    <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-600 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 text-sm transition-colors">
                        <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                        Reset
                    </button>
                    <button onClick={() => { alert('Changes saved!'); onClose(); }} className="px-6 py-2 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:shadow-orange-500/20 transition-all text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">save</span>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ManualEditModal;