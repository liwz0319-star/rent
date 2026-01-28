import React from 'react';

interface SignContractModalProps {
  onClose: () => void;
  onComplete?: () => void;
}

const SignContractModal: React.FC<SignContractModalProps> = ({ onClose, onComplete }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans text-stone-900 dark:text-stone-100" role="dialog" aria-modal="true">
      <style>{`
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #d6d3d1;
            border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #44403c;
        }

        /* Signature Pad Simulation */
        .signature-pad {
            background-image: radial-gradient(#d6d3d1 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .dark .signature-pad {
            background-image: radial-gradient(#44403c 1px, transparent 1px);
        }
      `}</style>
      
      {/* Modal Backdrop */}
      <div className="fixed inset-0 z-40 bg-background-dark/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}></div>

      {/* Modal Window */}
      <div className="bg-white dark:bg-background-dark w-full max-w-7xl h-[90vh] flex flex-col rounded-xl shadow-2xl overflow-hidden ring-1 ring-stone-900/5 relative group/design-root z-50 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-background-dark z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>description</span>
            </div>
            <div>
              <h2 className="text-stone-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Sign Contract - #ORD-2024-8892</h2>
              <p className="text-stone-500 dark:text-stone-400 text-xs font-medium">Commercial Lease Agreement • Revision 2</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors rounded-full p-1 hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body (Split View) */}
        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          
          {/* Left Pane: Document Preview */}
          <div className="flex-1 bg-stone-50 dark:bg-[#1c140d] overflow-y-auto custom-scrollbar p-6 lg:p-10 relative">
            
            {/* PDF/Doc Container */}
            <div className="max-w-[800px] mx-auto bg-white dark:bg-[#251b14] shadow-lg min-h-full p-12 lg:p-16 text-stone-800 dark:text-stone-200 text-sm leading-relaxed border border-stone-200 dark:border-stone-800">
              
              {/* Simulated Doc Header */}
              <div className="flex justify-between items-start mb-12 border-b-2 border-stone-900 dark:border-white pb-6">
                <div>
                  <h1 className="text-2xl font-bold uppercase tracking-wider mb-2">Commercial Lease Agreement</h1>
                  <p className="text-stone-500 text-xs">Document ID: 8892-ORD-X99</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">AssetAI Inc.</p>
                  <p className="text-xs text-stone-500">Real Estate Solutions</p>
                </div>
              </div>

              {/* Simulated Doc Content */}
              <div className="space-y-6 text-justify">
                <p>This Lease Agreement (the "Agreement") is made and entered into on <span className="bg-primary/20 text-primary-900 dark:text-primary-100 font-semibold px-1 py-0.5 rounded cursor-help border-b border-primary relative group" title="Start Date">November 1, 2024</span>, by and between <span className="font-bold">Skyline Holdings Group</span> ("Landlord") and <span className="font-bold">TechFlow Solutions LLC</span> ("Tenant").</p>
                <h3 className="font-bold text-stone-900 dark:text-white mt-8 mb-2">1. PREMISES</h3>
                <p>Landlord hereby leases to Tenant and Tenant hereby leases from Landlord the premises known as <span className="bg-stone-100 dark:bg-stone-800 font-medium px-1">Skyline Tower, Floor 45, Suite 4501</span> (the "Premises"), located at 123 Business District Blvd, consisting of approximately 4,500 square feet.</p>
                <h3 className="font-bold text-stone-900 dark:text-white mt-8 mb-2">2. TERM</h3>
                <p>The term of this Lease shall be for a period of <span className="bg-primary/20 text-primary-900 dark:text-primary-100 font-semibold px-1 py-0.5 rounded cursor-help border-b border-primary relative group">36 Months</span> commencing on the Start Date and ending on October 31, 2027.</p>
                <h3 className="font-bold text-stone-900 dark:text-white mt-8 mb-2">3. RENT</h3>
                <p>Tenant agrees to pay Landlord as base rent the sum of <span className="bg-primary/20 text-primary-900 dark:text-primary-100 font-semibold px-1 py-0.5 rounded cursor-help border-b border-primary relative group">$12,500.00 per month</span>, payable in advance on the first day of each calendar month. The total contract value for the duration is estimated at <span className="font-bold">$450,000.00</span> excluding utilities and maintenance fees.</p>
                <h3 className="font-bold text-stone-900 dark:text-white mt-8 mb-2">4. SECURITY DEPOSIT</h3>
                <p>Upon execution of this Lease, Tenant shall deposit with Landlord the sum of $25,000.00 as security for the full and faithful performance by Tenant of all terms, covenants, and conditions of this Lease.</p>
                <h3 className="font-bold text-stone-900 dark:text-white mt-8 mb-2">5. USE OF PREMISES</h3>
                <p>The Premises shall be used and occupied by Tenant for general office purposes and for no other purpose without the prior written consent of Landlord. Tenant shall comply with all laws, ordinances, rules, and regulations of any governmental authority having jurisdiction over the Premises.</p>
                
                <div className="h-32"></div> {/* Spacer */}
                
                <div className="border-t border-stone-300 dark:border-stone-700 pt-8 mt-12 grid grid-cols-2 gap-12">
                  <div>
                    <div className="h-16 border-b border-stone-400 mb-2 relative flex items-end pb-2">
                      <div className="text-stone-400 font-serif text-2xl absolute bottom-2 left-4 italic opacity-50 select-none pointer-events-none">Pending Signature...</div>
                    </div>
                    <p className="text-xs uppercase tracking-wider font-bold text-stone-500">Tenant Signature</p>
                  </div>
                  <div>
                    <div className="h-16 border-b border-stone-400 mb-2 relative flex items-end pb-2">
                      {/* Simulated Landlord Sig */}
                      <img alt="Landlord Signature" className="h-10 opacity-70 absolute bottom-1 left-4 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmLg5UjqAMbMCwc7lkiZHeLDNyb990ebDw9K2zluFaLBYPhtO9zy89BwRUvugcOcjzz9kzH360yBxrHBQkwb-NWPner8byexvYouojsGM1eAWpoducK_eEKCpLBYPhnqE_EE8nnS3hSd-aANXb2nI6BWG-lOfJRN5TvK0_BE71tSIlQ6Ieu9ltQoohFmw1iq_uBtmpmYExlaGntPpDjYo9Vdai6NNq2WgBRrO9PIxR45tUrydZFnCzCyLPfL6CAx7FXTQwhxaYA_C-"/>
                    </div>
                    <p className="text-xs uppercase tracking-wider font-bold text-stone-500">Landlord Signature</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating AI Helper Badge */}
            <div className="absolute top-10 right-14 bg-white dark:bg-stone-800 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-xs font-medium text-stone-600 dark:text-stone-300 border border-primary/20 animate-pulse">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              AI Key Terms Detected
            </div>
          </div>

          {/* Right Pane: Signing Panel */}
          <div className="w-full lg:w-[420px] bg-white dark:bg-background-dark border-l border-stone-200 dark:border-stone-800 flex flex-col shrink-0 z-20 shadow-[-5px_0_15px_-5px_rgba(0,0,0,0.05)]">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
              
              {/* Summary Section */}
              <div className="space-y-4">
                <h3 className="text-stone-900 dark:text-white tracking-tight text-lg font-bold flex items-center gap-2">
                  Contract Summary
                  <span className="material-symbols-outlined text-stone-400 text-sm" title="Verified by AssetAI">verified</span>
                </h3>
                {/* Chips */}
                <div className="flex gap-2 flex-wrap">
                  <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-stone-100 dark:bg-stone-800 pl-2 pr-3 border border-stone-200 dark:border-stone-700">
                    <span className="material-symbols-outlined text-stone-500" style={{fontSize: '16px'}}>calendar_month</span>
                    <p className="text-stone-700 dark:text-stone-300 text-xs font-medium">36 Months</p>
                  </div>
                  <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-stone-100 dark:bg-stone-800 pl-2 pr-3 border border-stone-200 dark:border-stone-700">
                    <span className="material-symbols-outlined text-stone-500" style={{fontSize: '16px'}}>schedule</span>
                    <p className="text-stone-700 dark:text-stone-300 text-xs font-medium">Nov 1, 2024</p>
                  </div>
                </div>
                {/* Description List */}
                <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4 border border-stone-100 dark:border-stone-800">
                  <div className="flex justify-between gap-x-6 py-2 border-b border-stone-200 dark:border-stone-800/50">
                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal">Asset Name</p>
                    <p className="text-stone-900 dark:text-stone-200 text-sm font-medium text-right">Skyline Tower, Floor 45</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2 border-b border-stone-200 dark:border-stone-800/50">
                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal">Monthly Rent</p>
                    <p className="text-stone-900 dark:text-stone-200 text-sm font-medium text-right">$12,500.00</p>
                  </div>
                  <div className="flex justify-between gap-x-6 pt-2">
                    <p className="text-stone-500 dark:text-stone-400 text-sm font-normal">Total Contract Value</p>
                    <p className="text-primary text-sm font-bold text-right">$450,000.00</p>
                  </div>
                </div>
              </div>
              
              <hr className="border-stone-100 dark:border-stone-800"/>
              
              {/* Security Verification */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-stone-900 dark:text-white text-sm font-bold uppercase tracking-wide">Security Verification</h3>
                  <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">Required</span>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-normal">
                  Enter the 6-digit code sent to <span className="text-stone-800 dark:text-stone-200 font-medium">+1 (555) ***-8899</span>
                </p>
                <div className="flex gap-2 justify-between max-w-[320px]">
                  <input className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" maxLength={1} type="text" defaultValue="8"/>
                  <input className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" maxLength={1} type="text" defaultValue="4"/>
                  <input className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" maxLength={1} placeholder="•" type="text"/>
                  <input className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" maxLength={1} placeholder="•" type="text"/>
                  <input className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" maxLength={1} placeholder="•" type="text"/>
                  <input className="w-10 h-12 text-center text-xl font-bold rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" maxLength={1} placeholder="•" type="text"/>
                </div>
                <button className="text-xs text-primary hover:underline font-medium">Resend Code</button>
              </div>
              
              <hr className="border-stone-100 dark:border-stone-800"/>
              
              {/* E-Signature Pad */}
              <div className="space-y-4">
                <h3 className="text-stone-900 dark:text-white text-sm font-bold uppercase tracking-wide">E-Signature</h3>
                {/* Tabs */}
                <div className="flex p-1 bg-stone-100 dark:bg-stone-800 rounded-lg w-fit">
                  <button className="px-4 py-1.5 rounded-md text-xs font-medium bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm transition-all">Draw</button>
                  <button className="px-4 py-1.5 rounded-md text-xs font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-all">Type</button>
                  <button className="px-4 py-1.5 rounded-md text-xs font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-all">Digital Seal</button>
                </div>
                {/* Canvas */}
                <div className="relative group cursor-crosshair">
                  <div className="signature-pad h-32 w-full rounded-lg border-2 border-dashed border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-[#1c140d] flex items-center justify-center overflow-hidden relative">
                    <p className="text-stone-400 text-sm select-none pointer-events-none group-hover:opacity-50 transition-opacity">Draw your signature here</p>
                    {/* Simulated drawn line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none text-stone-800 dark:text-white" viewBox="0 0 400 150">
                      <path className="opacity-0" d="M 50 80 Q 80 40 120 80 T 200 60 T 300 90" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                    </svg>
                  </div>
                  <button className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1 bg-white dark:bg-stone-800 rounded shadow-sm border border-stone-200 dark:border-stone-700" title="Clear">
                    <span className="material-symbols-outlined" style={{fontSize: '16px'}}>restart_alt</span>
                  </button>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="flex items-center h-5">
                    <input className="h-4 w-4 rounded border-stone-300 text-primary focus:ring-primary bg-stone-50 dark:bg-stone-800 dark:border-stone-600" id="terms" type="checkbox"/>
                  </div>
                  <div className="text-xs leading-5">
                    <label className="font-medium text-stone-700 dark:text-stone-300" htmlFor="terms">I agree to the Terms of Service</label>
                    <p className="text-stone-500 dark:text-stone-400">By clicking Complete, you legally bind yourself to this agreement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Actions (Sticky) */}
            <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#1a120b] shrink-0">
              <div className="flex gap-4">
                <button 
                    onClick={onClose}
                    className="flex-1 py-3 px-4 rounded-lg border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200 font-semibold text-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                    onClick={() => {
                        alert("Contract Signed!");
                        onClose();
                        if(onComplete) onComplete();
                    }}
                    className="flex-[2] py-3 px-4 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="material-symbols-outlined group-hover:animate-pulse">ink_pen</span>
                  Complete & Execute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignContractModal;