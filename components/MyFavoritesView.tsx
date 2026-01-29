import React, { useState } from 'react';

interface MyFavoritesViewProps {
  favorites: any[];
  onToggleFavorite: (item: any) => void;
  onNavigate: (view: any) => void;
}

const MyFavoritesView: React.FC<MyFavoritesViewProps> = ({ favorites, onToggleFavorite, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Top Header */}
      <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex-shrink-0 z-10">
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input 
              className="block w-full rounded-lg border-none bg-slate-50 dark:bg-slate-900 py-2 pl-10 pr-3 text-sm placeholder-slate-400 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-900 dark:text-white" 
              placeholder="Search saved assets..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm shadow-primary/30">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Inquiry
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[1200px] mx-auto space-y-6">
          
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">My Favorites</h2>
              <p className="text-slate-500 dark:text-slate-400">Manage your saved office assets and meeting rooms.</p>
            </div>
            {/* Sort Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-[20px]">sort</span>
                Sort by: Date Added
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
            </div>
          </div>

          {/* Filters & Controls Bar */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {/* Chips */}
            <div className="flex gap-2 overflow-x-auto p-1 no-scrollbar">
              {['All', 'Offices', 'Meeting Rooms', 'Desks'].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex h-9 shrink-0 items-center justify-center px-4 rounded-lg font-medium text-sm transition-colors ${
                    activeFilter === filter 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            {/* Action Panel / Compare Toggle */}
            <div className="flex items-center gap-3 px-3 py-1 border-t xl:border-t-0 xl:border-l border-slate-200 dark:border-slate-700 pt-3 xl:pt-0">
              <div className="flex flex-col items-end xl:items-start leading-tight">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Compare Mode</span>
                <span className="text-xs text-slate-500">Select for comparison</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" value=""/>
                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          {/* Asset Grid */}
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-full mb-4">
                    <span className="material-symbols-outlined text-4xl text-slate-400">favorite_border</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No favorites yet</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">Start exploring properties and click the heart icon to save them here for quick access.</p>
                <button 
                    onClick={() => onNavigate('home')}
                    className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors"
                >
                    Explore Properties
                </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                {favorites.map((item, index) => (
                    <article key={index} className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        {/* Image Section */}
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url('${item.img}')`}}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                            {/* Favorite Heart (Filled) */}
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleFavorite(item);
                                }}
                                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-sm hover:bg-white transition-colors"
                            >
                                <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                            </button>
                            {/* Status Badge */}
                            {item.badge && (
                                <div className={`absolute top-3 left-3 flex items-center gap-1 rounded-full ${item.badgeColor} px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm uppercase tracking-wide`}>
                                    {item.badge === 'Available' && <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>}
                                    {item.badge}
                                </div>
                            )}
                        </div>
                        {/* Content Section */}
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-1 flex items-start justify-between">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1" title={item.title}>{item.title}</h3>
                            </div>
                            <div className="mb-3 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                <span className="line-clamp-1">{item.loc}</span>
                            </div>
                            <div className="mt-auto flex items-end justify-between border-t border-slate-100 dark:border-slate-700 pt-3">
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Starting from</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-bold text-slate-900 dark:text-white">{item.price}</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">/ sqm / day</span>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                Quick Book
                            </button>
                        </div>
                    </article>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavoritesView;