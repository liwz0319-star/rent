import React, { useState, useRef, useEffect } from 'react';
import NegotiationModal from './NegotiationModal';

interface BookingModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose, onConfirm }) => {
  // --- Date Picker State ---
  const [selectedDate, setSelectedDate] = useState("Oct 24, 2023");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  
  // --- Participants State ---
  const [participants, setParticipants] = useState("6 People");
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [isCustomInputMode, setIsCustomInputMode] = useState(false);
  const [customParticipants, setCustomParticipants] = useState("");

  // --- Negotiation State ---
  const [isNegotiationModalOpen, setIsNegotiationModalOpen] = useState(false);

  // --- Time Slot State ---
  // Range: 08:00 (8.0) to 18:00 (18.0)
  const [timeRange, setTimeRange] = useState({ start: 9.0, end: 11.0 });
  const [draggingHandle, setDraggingHandle] = useState<'start' | 'end' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // --- Date Picker Helpers ---
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // --- Time Helpers ---
  const formatTime = (value: number) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const getPercentage = (value: number) => {
    return ((value - 8) / 10) * 100;
  };

  // --- Time Drag Logic ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingHandle || !trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      let newValue = 8 + (relativeX / rect.width) * 10;

      // Clamp between 08:00 and 18:00
      newValue = Math.max(8, Math.min(18, newValue));
      
      // Snap to 15 mins (0.25)
      newValue = Math.round(newValue * 4) / 4;

      if (draggingHandle === 'start') {
        // Ensure start < end (min 30 mins gap)
        const maxStart = timeRange.end - 0.5;
        newValue = Math.min(newValue, maxStart);
        setTimeRange(prev => ({ ...prev, start: newValue }));
      } else {
        // Ensure end > start
        const minEnd = timeRange.start + 0.5;
        newValue = Math.max(newValue, minEnd);
        setTimeRange(prev => ({ ...prev, end: newValue }));
      }
    };

    const handleMouseUp = () => {
      setDraggingHandle(null);
    };

    if (draggingHandle) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingHandle, timeRange]);

  // --- Participants Logic ---
  const handleParticipantSelect = (option: string) => {
    if (option === 'Custom') {
      setIsCustomInputMode(true);
      setCustomParticipants("");
    } else {
      setParticipants(option);
      setIsCustomInputMode(false);
    }
    setIsParticipantsOpen(false);
  };

  const handleCustomSubmit = () => {
    if (customParticipants && !isNaN(Number(customParticipants))) {
      setParticipants(`${customParticipants} People`);
    }
    setIsCustomInputMode(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden h-full w-full font-display text-slate-900">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-90 transition-opacity" 
        style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrlwzaR7xaowZKjrGDt9Mfk92A7W4nRowV7OdoZczTDGHaA3swyZID-iHuH_871t8nvziap5rC35uOKV9R4Q43Vfmqv6Md_J0wf1B0EyhBu1kQYtwP9Ov4eZ-xYR0Uo4XbGFsuIFqkLviea7rebN_KhcJTVABSBB3yfKuqtnJUzLBALG48eosT5A83cKco0qjD0VCBbHjC3VGxekco8vRKiQjUPTNlrWp3tSC9w3tBjdjIiPeU9hRQZzXIiKe0BfwYoSOWFsIqdsiN')", 
            filter: "grayscale(100%) invert(1)"
        }}
      ></div>

      {/* Modal Container */}
      <div className="absolute inset-0 z-10 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl border border-white/60 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-auto ring-1 ring-black/5 animate-[fadeIn_0.3s_ease-out]">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 text-gray-400 hover:text-slate-800 transition-colors md:hidden bg-white/50 rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          
          {/* Left Side - Image & Info */}
          <div className="w-full md:w-5/12 relative h-48 md:h-auto bg-gray-900 group">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFD6LHgI5Xrot3lnWPSkQeXX5sj_y4vLSEh4Q7JZfrD23XXEmVa3DtqAV5P4k5Nu7tBa8yRxSN0NNWDLwSN_LVSQ12Db9Tqz6V_5xjyD22tR8_spnBNkZQrziYl1jFWK1LM-xyQxxytPgopvMJTrMTjR6g4ls6b8ptMMOueqJ0zHH0cftfca1QG96pOddDXLXf_SUpVDKhEOCorC8pUfmXt6nSeKd0xSxq-b-YlOtXKFjsHUw5e2Su39TVWaHJhePSodefB6TW8VwA')"}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary">meeting_room</span>
                <span className="font-bold text-lg tracking-tight">Executive Suite A</span>
                </div>
                <div className="flex items-center justify-between">
                <p className="text-gray-300 text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    Tokyo HQ, Level 34
                </p>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg border border-white/30 transition-all text-xs font-medium text-white">
                    <span>View Map</span>
                    <span className="material-symbols-outlined text-[14px]">map</span>
                </button>
                </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-7/12 flex flex-col p-6 md:p-8 overflow-y-auto no-scrollbar bg-white">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-1">Book Meeting Room</h2>
                <p className="text-slate-500 text-sm">Configure your session details below.</p>
            </div>
            
            <div className="flex-1 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date Picker */}
                    <label className="flex flex-col gap-2 group relative">
                        <span className="text-sm font-bold text-slate-500 group-focus-within:text-primary transition-colors">Date</span>
                        <div 
                            className="relative"
                            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                        >
                            <input 
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer hover:border-slate-300" 
                                readOnly 
                                type="text" 
                                value={selectedDate}
                            />
                            <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">calendar_today</span>
                        </div>
                        {isDatePickerOpen && (
                            <div className="absolute top-full left-0 mt-2 w-full sm:w-[280px] bg-white rounded-lg shadow-xl border border-slate-100 z-50 p-4 animate-[fadeIn_0.2s_ease-out]">
                                <div className="flex justify-between items-center mb-4">
                                    <button className="p-1 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined text-[20px] text-slate-500">chevron_left</span></button>
                                    <span className="font-bold text-slate-700 text-sm">October 2023</span>
                                    <button className="p-1 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined text-[20px] text-slate-500">chevron_right</span></button>
                                </div>
                                <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                                    {weekDays.map(d => <span key={d} className="text-[10px] font-bold text-slate-400">{d}</span>)}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    <div className="col-span-2"></div> {/* Padding for month start */}
                                    {days.map(d => (
                                        <button 
                                            key={d}
                                            onClick={() => {
                                                setSelectedDate(`Oct ${d}, 2023`);
                                                setIsDatePickerOpen(false);
                                            }}
                                            className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                                                selectedDate === `Oct ${d}, 2023` 
                                                ? 'bg-primary text-white shadow-md' 
                                                : 'text-slate-600 hover:bg-slate-100'
                                            }`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {isDatePickerOpen && (
                            <div className="fixed inset-0 z-40" onClick={() => setIsDatePickerOpen(false)}></div>
                        )}
                    </label>

                    {/* Participants Dropdown */}
                    <label className="flex flex-col gap-2 group relative">
                        <span className="text-sm font-bold text-slate-500 group-focus-within:text-primary transition-colors">Participants</span>
                        <div 
                            className="relative"
                            onClick={() => !isCustomInputMode && setIsParticipantsOpen(!isParticipantsOpen)}
                        >
                            {!isCustomInputMode ? (
                                <>
                                    <div className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-10 py-3 text-slate-800 font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer hover:border-slate-300 flex items-center h-[46px]">
                                        {participants}
                                    </div>
                                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400 pointer-events-none">groups</span>
                                    <span className={`material-symbols-outlined absolute right-3 top-3.5 text-gray-400 cursor-pointer transition-transform duration-200 ${isParticipantsOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </>
                            ) : (
                                <>
                                    <input 
                                        autoFocus
                                        className="w-full bg-slate-50 border border-primary rounded-lg pl-10 pr-10 py-3 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-all h-[46px]"
                                        type="number"
                                        placeholder="Enter number..."
                                        min="1"
                                        value={customParticipants}
                                        onChange={(e) => setCustomParticipants(e.target.value)}
                                        onBlur={handleCustomSubmit}
                                        onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">groups</span>
                                    <button 
                                        className="absolute right-3 top-3 text-primary hover:text-primary-hover"
                                        onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                                        onClick={handleCustomSubmit}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">check</span>
                                    </button>
                                </>
                            )}
                        </div>
                        {isParticipantsOpen && (
                            <>
                                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-slate-100 z-50 py-1 animate-[fadeIn_0.1s_ease-out]">
                                    {['4 People', '6 People', '8 People', '10 People', '12 People', 'Custom'].map(option => (
                                        <button 
                                            key={option}
                                            className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors flex justify-between items-center"
                                            onClick={() => handleParticipantSelect(option)}
                                        >
                                            {option}
                                            {option === 'Custom' && <span className="material-symbols-outlined text-[16px] text-slate-400">edit</span>}
                                        </button>
                                    ))}
                                </div>
                                <div className="fixed inset-0 z-40" onClick={() => setIsParticipantsOpen(false)}></div>
                            </>
                        )}
                    </label>
                </div>

                {/* Time Slot Slider */}
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-slate-500">Time Slot</span>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                            {formatTime(timeRange.start)} - {formatTime(timeRange.end)} ({(timeRange.end - timeRange.start).toFixed(1)}h)
                        </span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 select-none">
                        <div 
                            className="relative h-10 w-full flex items-center px-2 cursor-pointer"
                            ref={trackRef}
                        >
                            {/* Track */}
                            <div className="absolute h-1.5 w-[calc(100%-1rem)] bg-gray-200 rounded-full"></div>
                            
                            {/* Active Range Bar */}
                            <div 
                                className="absolute h-1.5 bg-primary rounded-full"
                                style={{
                                    left: `${getPercentage(timeRange.start)}%`,
                                    width: `${getPercentage(timeRange.end) - getPercentage(timeRange.start)}%`
                                }}
                            ></div>

                            {/* Start Handle */}
                            <div 
                                className="absolute -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-md border-2 border-primary cursor-ew-resize hover:scale-110 transition-transform flex items-center justify-center z-10 group"
                                style={{ left: `${getPercentage(timeRange.start)}%` }}
                                onMouseDown={() => setDraggingHandle('start')}
                            >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <div className="absolute -top-9 bg-slate-800 text-xs text-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-slate-800 pointer-events-none">
                                    Start: {formatTime(timeRange.start)}
                                </div>
                            </div>

                            {/* End Handle */}
                            <div 
                                className="absolute -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-md border-2 border-primary cursor-ew-resize hover:scale-110 transition-transform flex items-center justify-center z-10 group"
                                style={{ left: `${getPercentage(timeRange.end)}%` }}
                                onMouseDown={() => setDraggingHandle('end')}
                            >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <div className="absolute -top-9 bg-slate-800 text-xs text-white px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-slate-800 pointer-events-none">
                                    End: {formatTime(timeRange.end)}
                                </div>
                            </div>

                            {/* Markers */}
                            <div className="absolute top-8 left-0 text-[10px] text-gray-400 font-medium">08:00</div>
                            <div className="absolute top-8 left-1/4 text-[10px] text-gray-400 font-medium">10:30</div>
                            <div className="absolute top-8 left-1/2 text-[10px] text-gray-400 font-medium">13:00</div>
                            <div className="absolute top-8 left-3/4 text-[10px] text-gray-400 font-medium">15:30</div>
                            <div className="absolute top-8 right-0 text-[10px] text-gray-400 font-medium">18:00</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-slate-500">Included Amenities</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 hover:border-primary/30 transition-all shadow-sm group">
                    <input defaultChecked className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                    <span className="text-sm font-medium text-slate-800 group-hover:text-primary transition-colors">4K Projector</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 hover:border-primary/30 transition-all shadow-sm group">
                    <input defaultChecked className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                    <span className="text-sm font-medium text-slate-800 group-hover:text-primary transition-colors">Smart Whiteboard</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 hover:border-primary/30 transition-all shadow-sm group">
                    <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:border-primary checked:bg-primary transition-all" type="checkbox"/>
                    <span className="text-sm font-medium text-slate-800 group-hover:text-primary transition-colors">Catering Service</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer opacity-50 shadow-sm">
                    <input className="w-5 h-5 rounded border-gray-300 text-gray-400 focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed" disabled type="checkbox"/>
                    <span className="text-sm font-medium text-gray-400">Video Conferencing</span>
                    </label>
                </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-1">
                        <div className="inline-flex items-center gap-1.5 self-start px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-[14px]">auto_awesome</span>
                            <span className="text-[11px] font-bold text-primary tracking-wide uppercase">AI Price Optimization Active</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-slate-800 tracking-tight">$120.00</span>
                            <span className="text-sm text-slate-500">/ session</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 w-full md:w-auto min-w-[300px]">
                        <button 
                            onClick={() => setIsNegotiationModalOpen(true)}
                            className="w-full h-12 rounded-lg bg-white border-2 border-primary/20 hover:border-primary/50 text-primary font-bold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:bg-orange-50 group"
                        >
                            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">handshake</span>
                            <span>Negotiate Price</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={onClose}
                                className="flex-1 h-11 rounded-lg border border-gray-300 text-slate-700 font-medium hover:bg-slate-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all text-sm"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={onConfirm}
                                className="flex-1 h-11 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition-all text-sm flex items-center justify-center gap-2"
                            >
                                <span>Confirm</span>
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {isNegotiationModalOpen && (
        <NegotiationModal onClose={() => setIsNegotiationModalOpen(false)} />
      )}
    </div>
  );
};

export default BookingModal;