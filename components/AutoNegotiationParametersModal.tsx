import React, { useState } from 'react';

interface AutoNegotiationParametersModalProps {
  onClose: () => void;
}

const AutoNegotiationParametersModal: React.FC<AutoNegotiationParametersModalProps> = ({ onClose }) => {
  const [leaseDuration, setLeaseDuration] = useState(true);
  const [amenitiesTradeOff, setAmenitiesTradeOff] = useState(false);
  const [parkingInclusion, setParkingInclusion] = useState(true);
  const [strategy, setStrategy] = useState('Balanced Strategy');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 font-display text-gray-900">
      <div 
        aria-hidden="true" 
        className="fixed inset-0 z-40 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative z-50 bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Negotiation Parameters</h3>
            <p className="text-xs text-gray-500 mt-0.5">Configuration for: <span className="font-semibold text-primary">Tech Hub - Unit 402</span></p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto custom-scroll space-y-8 bg-white">
          
          {/* Price Strategy */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                <div className="bg-orange-50 p-1 rounded text-primary">
                  <span className="material-symbols-outlined text-[18px]">payments</span>
                </div>
                Price Strategy
              </h4>
              <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">Range: $42 - $48 /sqft</span>
            </div>
            <div className="px-2 pb-2">
              <div className="relative h-2 bg-gray-100 rounded-full mb-8">
                <div className="absolute top-0 bottom-0 left-[20%] right-[30%] bg-primary rounded-full opacity-90"></div>
                {/* Min Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[20%] -ml-3 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform flex items-center justify-center z-10 ring-4 ring-primary/10">
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap shadow-lg flex flex-col items-center">
                    Min: $42.00
                    <div className="w-2 h-2 bg-gray-800 rotate-45 absolute -bottom-1"></div>
                  </div>
                </div>
                {/* Target Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 right-[30%] -mr-3 w-5 h-5 bg-primary border-2 border-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform z-10 ring-4 ring-primary/20">
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap shadow-lg flex flex-col items-center">
                    Target: $45.50
                    <div className="w-2 h-2 bg-gray-800 rotate-45 absolute -bottom-1"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between -mt-4 text-[10px] text-gray-400 font-medium font-mono">
                <span>$35.00</span>
                <span>$55.00</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Controls & Behavior */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-400 text-[18px]">tune</span>
                Flexibility Controls
              </h4>
              <div className="space-y-3.5">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Lease Duration</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={leaseDuration}
                        onChange={() => setLeaseDuration(!leaseDuration)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Amenities Trade-off</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={amenitiesTradeOff}
                        onChange={() => setAmenitiesTradeOff(!amenitiesTradeOff)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Parking Inclusion</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={parkingInclusion}
                        onChange={() => setParkingInclusion(!parkingInclusion)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-400 text-[18px]">psychology</span>
                AI Agent Behavior
              </h4>
              <div className="space-y-3">
                <div className="relative">
                  <select 
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                    className="block w-full rounded-lg border-gray-200 text-xs font-medium focus:border-primary focus:ring-primary/20 bg-gray-50 hover:bg-white transition-colors py-2.5 pl-3 pr-8 shadow-sm cursor-pointer"
                  >
                    <option>Balanced Strategy</option>
                    <option>Aggressive (Cost Focus)</option>
                    <option>Relational (Long-term)</option>
                  </select>
                </div>
                <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                  <p className="text-[10px] text-blue-700 leading-snug">
                    <span className="font-bold">Note:</span> Balanced mode prioritizes fair market value while maintaining positive landlord relations score &gt; 80%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Priority Matrix */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-400 text-[18px]">low_priority</span>
                Priority Matrix
              </h4>
              <span className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded border border-gray-200 font-medium">Drag to reorder</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-gradient-to-br from-orange-50 to-white border border-primary/40 rounded-lg p-2.5 flex flex-col items-center gap-1.5 cursor-move hover:shadow-md transition-all relative group shadow-sm">
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-300">
                  <span className="material-symbols-outlined text-[12px]">drag_indicator</span>
                </div>
                <span className="text-[9px] font-bold text-primary bg-white px-1.5 py-0.5 rounded border border-primary/20 shadow-sm">01</span>
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">attach_money</span>
                <span className="text-[11px] font-bold text-gray-800">Price</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col items-center gap-1.5 cursor-move hover:shadow-md transition-all relative group shadow-sm hover:border-gray-300">
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-300">
                  <span className="material-symbols-outlined text-[12px]">drag_indicator</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">02</span>
                <span className="material-symbols-outlined text-gray-400 text-[20px] mt-0.5">location_on</span>
                <span className="text-[11px] font-medium text-gray-600">Location</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col items-center gap-1.5 cursor-move hover:shadow-md transition-all relative group shadow-sm hover:border-gray-300">
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-300">
                  <span className="material-symbols-outlined text-[12px]">drag_indicator</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">03</span>
                <span className="material-symbols-outlined text-gray-400 text-[20px] mt-0.5">schedule</span>
                <span className="text-[11px] font-medium text-gray-600">Timing</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col items-center gap-1.5 cursor-move hover:shadow-md transition-all relative group shadow-sm hover:border-gray-300">
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-300">
                  <span className="material-symbols-outlined text-[12px]">drag_indicator</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">04</span>
                <span className="material-symbols-outlined text-gray-400 text-[20px] mt-0.5">meeting_room</span>
                <span className="text-[11px] font-medium text-gray-600">Facilities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center shrink-0">
          <button 
            onClick={() => {
                setLeaseDuration(true);
                setAmenitiesTradeOff(false);
                setParkingInclusion(true);
                setStrategy('Balanced Strategy');
            }}
            className="text-gray-500 hover:text-gray-800 text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-200/50 transition-colors"
          >
            Restore Defaults
          </button>
          <div className="flex gap-3">
            <button 
                onClick={onClose}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button 
                onClick={() => {
                    alert("AI Strategy Updated Successfully!");
                    onClose();
                }}
                className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all flex items-center gap-2 transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
              Update AI Strategy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoNegotiationParametersModal;