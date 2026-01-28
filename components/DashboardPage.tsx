import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import PersonalCenterModal from './PersonalCenterModal';
import SettingsModal from './SettingsModal';
import ContractPreviewModal from './ContractPreviewModal';
import NotificationButton from './NotificationButton';
import HomeView from './HomeView';
import DigitalTwinsView from './DigitalTwinsView';
import AutoIngestionView from './AutoIngestionView';
import AutoNegotiationView from './AutoNegotiationView';
import SmartContractsView from './SmartContractsView';
import ServiceIntegrationView from './ServiceIntegrationView';
import OrdersView from './OrdersView';
import MerchantsView from './MerchantsView';
import MerchantAnalyticsView from './MerchantAnalyticsView';
import MessagesView from './MessagesView';
import MyContractsView from './MyContractsView';

type ViewType = 'home' | 'merchants' | 'merchant-analytics' | 'digital-twins' | 'auto-ingestion' | 'auto-negotiation' | 'smart-contracts' | 'service-integration' | 'orders' | 'messages' | 'my-contracts';
export type UserRole = 'Admin' | 'Merchant' | 'User';

const DashboardPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [userRole, setUserRole] = useState<UserRole>('Admin');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPersonalCenterOpen, setIsPersonalCenterOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  
  // State to pass asset data from Home to Digital Twins
  const [incomingAsset, setIncomingAsset] = useState<any>(null);

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Permission Logic
  const canAccess = (view: ViewType) => {
    if (userRole === 'Admin') return true;
    if (userRole === 'Merchant') {
        // Merchants can access everything except Service Integration (System level)
        // Merchants cannot access the 'merchants' view as it is for admin management
        return ['home', 'digital-twins', 'auto-ingestion', 'auto-negotiation', 'smart-contracts', 'orders', 'merchant-analytics', 'messages'].includes(view);
    }
    if (userRole === 'User') {
        // Users can only view Home, Assets (Digital Twins), their Orders, Messages, and My Contracts
        return ['home', 'digital-twins', 'orders', 'messages', 'my-contracts'].includes(view);
    }
    return false;
  };

  const handleAssetSelect = (asset: any) => {
    setIncomingAsset(asset);
    setCurrentView('digital-twins');
  };

  // Helper to check if a section header should be shown
  const showAssetPerception = canAccess('digital-twins') || canAccess('auto-ingestion') || canAccess('auto-negotiation');
  const showOps = canAccess('smart-contracts') || canAccess('service-integration') || canAccess('orders');

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

            {canAccess('my-contracts') && (
              <div 
                onClick={() => setCurrentView('my-contracts')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'my-contracts' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
              >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'my-contracts' ? 'fill-1' : ''}`}>description</span>
                <p className={`text-sm ${currentView === 'my-contracts' ? 'font-bold' : 'font-medium'}`}>My Contracts</p>
              </div>
            )}

            {canAccess('merchants') && (
                <div 
                onClick={() => setCurrentView('merchants')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'merchants' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'merchants' ? 'fill-1' : ''}`}>storefront</span>
                <p className={`text-sm ${currentView === 'merchants' ? 'font-bold' : 'font-medium'}`}>Merchants</p>
                </div>
            )}

            {canAccess('merchant-analytics') && (
                <div 
                onClick={() => setCurrentView('merchant-analytics')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'merchant-analytics' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'merchant-analytics' ? 'fill-1' : ''}`}>insights</span>
                <p className={`text-sm ${currentView === 'merchant-analytics' ? 'font-bold' : 'font-medium'}`}>Consumer Analytics</p>
                </div>
            )}
            
            {showAssetPerception && (
                <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">Asset Perception</p>
            )}
            
            {canAccess('digital-twins') && (
                <div 
                onClick={() => setCurrentView('digital-twins')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'digital-twins' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'digital-twins' ? 'fill-1' : ''}`}>deployed_code</span>
                <p className={`text-sm ${currentView === 'digital-twins' ? 'font-bold' : 'font-medium'}`}>Digital Twins</p>
                </div>
            )}
            
            {canAccess('auto-ingestion') && (
                <div 
                onClick={() => setCurrentView('auto-ingestion')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'auto-ingestion' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'auto-ingestion' ? 'fill-1' : ''}`}>cloud_upload</span>
                <p className={`text-sm ${currentView === 'auto-ingestion' ? 'font-bold' : 'font-medium'}`}>Auto-Ingestion</p>
                </div>
            )}

            {canAccess('auto-negotiation') && (
                <div 
                onClick={() => setCurrentView('auto-negotiation')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'auto-negotiation' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'auto-negotiation' ? 'fill-1' : ''}`}>handshake</span>
                <p className={`text-sm ${currentView === 'auto-negotiation' ? 'font-bold' : 'font-medium'}`}>Auto-Negotiation</p>
                </div>
            )}
            
            {showOps && (
                <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">Ops & Execution</p>
            )}
            
            {canAccess('orders') && (
                <div 
                onClick={() => setCurrentView('orders')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'orders' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'orders' ? 'fill-1' : ''}`}>receipt_long</span>
                <p className={`text-sm ${currentView === 'orders' ? 'font-bold' : 'font-medium'}`}>Orders</p>
                </div>
            )}

            {canAccess('messages') && (
                <div 
                onClick={() => setCurrentView('messages')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'messages' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'messages' ? 'fill-1' : ''}`}>chat_bubble</span>
                <p className={`text-sm ${currentView === 'messages' ? 'font-bold' : 'font-medium'}`}>Messages</p>
                </div>
            )}

            {canAccess('smart-contracts') && (
                <div 
                onClick={() => setCurrentView('smart-contracts')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'smart-contracts' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'smart-contracts' ? 'fill-1' : ''}`}>gavel</span>
                <p className={`text-sm ${currentView === 'smart-contracts' ? 'font-bold' : 'font-medium'}`}>Smart Contracts</p>
                </div>
            )}
            {canAccess('service-integration') && (
                <div 
                onClick={() => setCurrentView('service-integration')}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer group ${currentView === 'service-integration' ? 'bg-hermes/10 text-hermes border border-hermes/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                <span className={`material-symbols-outlined text-[20px] ${currentView === 'service-integration' ? 'fill-1' : ''}`}>hub</span>
                <p className={`text-sm ${currentView === 'service-integration' ? 'font-bold' : 'font-medium'}`}>Service Integration</p>
                </div>
            )}
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
              <p className="text-xs text-slate-500 truncate">{userRole}</p>
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
        
        {currentView === 'home' && canAccess('home') && (
           <HomeView 
             onNavigate={setCurrentView} 
             onOpenContractModal={() => setIsContractModalOpen(true)} 
             onAssetSelect={handleAssetSelect}
           />
        )}

        {currentView === 'merchants' && canAccess('merchants') && (
            <MerchantsView />
        )}

        {currentView === 'merchant-analytics' && canAccess('merchant-analytics') && (
            <MerchantAnalyticsView />
        )}

        {currentView === 'digital-twins' && canAccess('digital-twins') && (
           <div className="flex-1 flex flex-row overflow-hidden h-full">
                <DigitalTwinsView 
                    onOpenBookingModal={() => setIsBookingModalOpen(true)} 
                    incomingAsset={incomingAsset}
                    onAssetLoaded={() => setIncomingAsset(null)}
                />
           </div>
        )}
        
        {currentView === 'auto-ingestion' && canAccess('auto-ingestion') && (
            <AutoIngestionView onNavigate={setCurrentView} />
        )}

        {currentView === 'auto-negotiation' && canAccess('auto-negotiation') && (
            <AutoNegotiationView onNavigate={setCurrentView} />
        )}

        {currentView === 'smart-contracts' && canAccess('smart-contracts') && (
            <SmartContractsView 
                onNavigate={setCurrentView} 
                onOpenContractModal={() => setIsContractModalOpen(true)} 
                onOpenSettingsModal={() => setIsSettingsModalOpen(true)} 
            />
        )}

        {currentView === 'service-integration' && canAccess('service-integration') && (
            <ServiceIntegrationView />
        )}

        {currentView === 'orders' && canAccess('orders') && (
            <OrdersView />
        )}

        {currentView === 'messages' && canAccess('messages') && (
            <MessagesView />
        )}

        {currentView === 'my-contracts' && canAccess('my-contracts') && (
            <MyContractsView />
        )}

        {/* Fallback for restricted views or dev placeholders */}
        {!canAccess(currentView) && (
            <div className="flex-1 flex items-center justify-center bg-slate-50">
                 <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">lock</span>
                    <h3 className="text-xl font-bold text-slate-700">Access Restricted</h3>
                    <p className="text-slate-500 mt-2">You do not have permission to view this page as a {userRole}.</p>
                    <button 
                        onClick={() => setCurrentView('home')}
                        className="mt-6 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        )}
      </main>

      {/* Modals */}
      {isBookingModalOpen && (
        <BookingModal 
          onClose={() => setIsBookingModalOpen(false)} 
          onConfirm={() => {
            alert('Meeting booked successfully!');
            setIsBookingModalOpen(false);
          }}
        />
      )}
      {isPersonalCenterOpen && (
        <PersonalCenterModal 
            onClose={() => setIsPersonalCenterOpen(false)} 
            userRole={userRole}
            onRoleChange={(role) => {
                setUserRole(role);
                // Reset to home if current view becomes inaccessible
                if (role === 'User' && !['home', 'digital-twins', 'orders', 'messages', 'my-contracts'].includes(currentView)) {
                    setCurrentView('home');
                } else if (role === 'Merchant' && (currentView === 'service-integration' || currentView === 'merchants')) {
                    setCurrentView('home');
                }
            }}
        />
      )}
      {isSettingsModalOpen && (
        <SettingsModal onClose={() => setIsSettingsModalOpen(false)} />
      )}
      {isContractModalOpen && (
        <ContractPreviewModal onClose={() => setIsContractModalOpen(false)} />
      )}
    </div>
  );
};

export default DashboardPage;