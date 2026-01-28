import React, { useState } from 'react';

// Mock Data for Recommendations
const ALL_RECOMMENDED_PROPERTIES = [
  {
      title: "Sunrise Tower",
      loc: "Financial District, NY",
      price: "$65",
      area: "2,400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX",
      badge: "98% Match",
      badgeColor: "bg-green-500"
  },
  {
      title: "Westside Hub",
      loc: "Midtown, NY",
      price: "$55",
      area: "1,850",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-uPATa74iyyIUdpNkobDA9b6-vGmOLUF0ZUpq2_td-2mm1uJGxtKNTuvj-KBZe2W0tfyACxIU7ln0p1qtbl7J9S4NX_F5_4txZ_PKYfjso5QofRNAfO91SJCkX2eNB4g49VZQX2hLrnTFAJyqlu-mEqp3ISNmgAD4ERiDSfYhBejP6lVmgHLdAzCEhtCqcda6Dbd4C579AXBjxpdDqN47k2eJtyvwCEDgq9p4x9p5KXXjf1W9ahCo9U-WVQDXQd_1QtrMyWwxZx-",
      badge: "New",
      badgeColor: "bg-blue-500"
  },
  {
      title: "Creative Loft B",
      loc: "SoHo, NY",
      price: "$72",
      area: "3,200",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9-8h8XRLXVw8nWFfStSab9qafp7TWL6D8Bpn3Y6c61loP8tP5uhHY9iohXJLiHlwwzclnZhuiI3baVuo-zjGdum1tiKSDN9IKHwDQVhpSZaa5t-ggoW94E_Aj2_yZIPiSGFF2ad5PRC1DPaqov_eYD7MnTCGSGtcU2lHVRxBa9_8reL1cG0IH_FnYe21kY7HH3gZl_dvb8-fhiAplgO6kDlX3xQp97LusI63pvUtf56A0GG7QAp_k9COr07P8TM9H0jvBMsFL3vzl",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Ironworks Studio",
      loc: "Brooklyn, NY",
      price: "$48",
      area: "1,200",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHdlTDgb_qPwQnYgAkv_Gv57iprpN3TWEys93vBWnwCdhP2Vx1FeVDrIl4fG68XTXLGn-xN2likJQjOBwVqAUSqH_PrWmZiSjWb-Sd8PUxbP60Mxm6k-Ept8-giqcrjkJWciq4cfgVlkPTSOj_tMUtDdpzZE0NpEtslngm61FUWggkqjZugQww6DSJku_l9LovNm0tSJtR0wMBwmf31SeiQQ7O0ns8diSXPs1g7HkJpxICnb-jmgPONoxDQL3gzq9DBRPslz0gns7w",
      badge: "Trending",
      badgeColor: "bg-orange-500"
  },
  {
      title: "Harbor View",
      loc: "Seaport, NY",
      price: "$85",
      area: "5,000",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzFhTAeNaMvclUTUQ8kqLBSVRfovlMxEhfW6z2AuS1aC6bXJHe-T76-KuXGLO0bJ3g-Ck_IfzX2O2xChVrn-lja2kuW1Srw_OMBM8VjTf87sZ5oKiiWUwseHW3yo1a7HLry3C6CrllwrW40PezQbxitL78rdQZWpiI2AhRM4dqskCoB0WiJmmwhY88GE9vVf-8WLG0NROUVkpLYtcYRNOHYjDEDzv9u43sAkrb8KG-dHVSbTQyyCUHTYDIIKyLujZF3jaWZ5J950qw",
      badge: "Premium",
      badgeColor: "bg-purple-500"
  },
  {
      title: "Greenwich Space",
      loc: "Greenwich Village, NY",
      price: "$60",
      area: "1,500",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZFBLfeUo1A5OAFg-0hBNHnZJbnPiSgcmQ6WVx4EAJ5nCT6hFpDwKH_-FFLRMjkdscCTXChcY_jNDV0C32fxiURAx7rmMUF9eJOJ1jKf7YgqsfolFXbG3zVdZ6BQJMNUwnAvtrJtd_rimHF3w0ajR-Vcq6RMCzWTrFu1DsFxqcCtyhSkTus5zoj3DDPS3hXuvvruV766dHI3ab-YocmRsJmZSuwWBr2upn_OPreRB4eP_NtWzHuhHjIwnRA-0g9z0QXUe8LyIs4_fj",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Uptown Office",
      loc: "Harlem, NY",
      price: "$40",
      area: "2,000",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD61x3S7P2WMadZ7k2SOafb0kE_1RXWSvmsPC5PvqaHr3axQw-5VRgWRe3CMdYzBGt_uTwW06dM7U0FQmsdKwkyHyI7HGzdahZHtsir41oyeXfdTYVoC0KWDng4EufDqaw4SMcMuZsNNuYeLqoEoG73zZGB3cBCaq3m3isbnvtDHMx1r6-PosXmIfJWf2S16jr2ah1uqxjPLz-evjBFSk-wOWPdvpBn2hRIdpcJnSWFPcsLLGEVxBtDwYwfFLbIwKEEmiQwdiNkp3cV",
      badge: "Value",
      badgeColor: "bg-teal-500"
  },
  {
      title: "Chelsea Corner",
      loc: "Chelsea, NY",
      price: "$58",
      area: "1,100",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM6uKxTbtoIEV9AQpeXX74gcik8OMCxEkFBdarRR6MPe3Q-ewIUS3BdY6s2r7QBQNRYitfd2ozE-JKOf60io62r6iq1X1wfzv25Tu1_eisxiLGCF--qsjY85V-2qPJwZwSfWwOnAT2sXyEqATCINbh3flC-yqI2BHb4hWdzA9_Fo62QEB7nTMrhDpE--2rgGPoUCvDDVVc9JdVKQP2QNOGlfnEXUPxIZcNelFHh6z9AeU7kNmcYAFL4YAMirekwkF5kegt3YIiqeuJ",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Metro Tech Center",
      loc: "Downtown, NY",
      price: "$50",
      area: "3,100",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgj6TcCE1JIzLofbhgpEWovJ_semvVdhsCk00ieG25GV9Qop9oeQO8CvJpmtW-l-JP0KL1sqx-Lt8xoLZkAsQ68fzWJRnGjK4ucdhij8YqkSH6y4q0KNDLTuZMFNVemdwLAEznjod72wBGNenRC4vCqlutBCV5Osz4BoxnZuzvQNkqeL7zfp35vbF2v4JvrDA77QfVDstwZIccs2cPBynXqeS4mBZeIml0Xxr5iNAGHz7bjlSqzSAHoyUQwvMid4iTasKFVTb6dLzE",
      badge: "Popular",
      badgeColor: "bg-purple-500"
  },
  {
      title: "Lakeside Complex",
      loc: "Jersey City, NJ",
      price: "$42",
      area: "5,500",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKSNNVMxBQDVXRP7SRTo0dvorfbpM-FWl-BtHIDtob-VyURLznhvka1ZgE0fJjZkjlnqluqufWpT4w40cCB8Iy2AR9sZX7DbbsLq4W25CiB9EDZpb_cbY8_243hy_etydGCiP9iMSzIwgU4I0LKiMikjC2rCrsPOwUX29oO0XOoyeEY-6rxOInw_lclt0x_K8KLsH03OMXCyxj39aHSq6R1IQKMr2sO-m30PGk_OvHrY48stT6kWKYBb24CxFh42RBkrBsbBus5tWG",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Innovation Hub",
      loc: "Austin, TX",
      price: "$38",
      area: "1,800",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcHSyWgwbCoOTk_0VZstE6XsIoRLVjJemfVpxpsgeT6zDCxeasoeNn_jS_82T72VHeJ0TA6erwgdOhqT8sDiiYs_wHeWfNOyMr9BEHlxWcCTwY2REOYvbiebLTfw2FLCHn_RhvAIqbPvHjjyJZIKzuZgxREjuitiPj5a16fFRBpBDXA2d59dOO6nHEumKYgsAMPykzmg5iNtgvDSc4C7ESnRNw5TFc4UPVYUaZQ9T-uIxxPHOBg4x8AGrtD4_mma4rwkgotEIXAxfZ",
      badge: "New",
      badgeColor: "bg-blue-500"
  },
  {
      title: "Skyline Height",
      loc: "Chicago, IL",
      price: "$55",
      area: "2,200",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHdlTDgb_qPwQnYgAkv_Gv57iprpN3TWEys93vBWnwCdhP2Vx1FeVDrIl4fG68XTXLGn-xN2likJQjOBwVqAUSqH_PrWmZiSjWb-Sd8PUxbP60Mxm6k-Ept8-giqcrjkJWciq4cfgVlkPTSOj_tMUtDdpzZE0NpEtslngm61FUWggkqjZugQww6DSJku_l9LovNm0tSJtR0wMBwmf31SeiQQ7O0ns8diSXPs1g7HkJpxICnb-jmgPONoxDQL3gzq9DBRPslz0gns7w",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Sunrise Tower II",
      loc: "Financial District, NY",
      price: "$68",
      area: "2,600",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqsJvbSqeYubzb-Bm5vL5KBdJjvPATZeYbuyQcW6jsGf8XJ_nlZjXjftc4mG05q_hPSEW2Z1i71KoLzkslSPHz0vhuq6NuFHcfxUFZBsIk4Uj4g-Zt2zU_Zefxi9EV4u4kfUjXpx1fRupyoMUooAAOHgcUN8wxOqVPZuThXXFS2AD0BMp7hAh3X18CMsitxtiFs05haB62HmznKPb5N3p_25Wqk6f-A-TNgTfN93g0P0WMki9pT4AJitkGcFLK73AERqD_E6UCRGdX",
      badge: "Hot",
      badgeColor: "bg-red-500"
  },
  {
      title: "Westside Hub Expansion",
      loc: "Midtown, NY",
      price: "$58",
      area: "2,100",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-uPATa74iyyIUdpNkobDA9b6-vGmOLUF0ZUpq2_td-2mm1uJGxtKNTuvj-KBZe2W0tfyACxIU7ln0p1qtbl7J9S4NX_F5_4txZ_PKYfjso5QofRNAfO91SJCkX2eNB4g49VZQX2hLrnTFAJyqlu-mEqp3ISNmgAD4ERiDSfYhBejP6lVmgHLdAzCEhtCqcda6Dbd4C579AXBjxpdDqN47k2eJtyvwCEDgq9p4x9p5KXXjf1W9ahCo9U-WVQDXQd_1QtrMyWwxZx-",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Creative Loft C",
      loc: "SoHo, NY",
      price: "$75",
      area: "3,500",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9-8h8XRLXVw8nWFfStSab9qafp7TWL6D8Bpn3Y6c61loP8tP5uhHY9iohXJLiHlwwzclnZhuiI3baVuo-zjGdum1tiKSDN9IKHwDQVhpSZaa5t-ggoW94E_Aj2_yZIPiSGFF2ad5PRC1DPaqov_eYD7MnTCGSGtcU2lHVRxBa9_8reL1cG0IH_FnYe21kY7HH3gZl_dvb8-fhiAplgO6kDlX3xQp97LusI63pvUtf56A0GG7QAp_k9COr07P8TM9H0jvBMsFL3vzl",
      badge: null,
      badgeColor: ""
  },
  {
      title: "Ironworks Studio II",
      loc: "Brooklyn, NY",
      price: "$52",
      area: "1,400",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHdlTDgb_qPwQnYgAkv_Gv57iprpN3TWEys93vBWnwCdhP2Vx1FeVDrIl4fG68XTXLGn-xN2likJQjOBwVqAUSqH_PrWmZiSjWb-Sd8PUxbP60Mxm6k-Ept8-giqcrjkJWciq4cfgVlkPTSOj_tMUtDdpzZE0NpEtslngm61FUWggkqjZugQww6DSJku_l9LovNm0tSJtR0wMBwmf31SeiQQ7O0ns8diSXPs1g7HkJpxICnb-jmgPONoxDQL3gzq9DBRPslz0gns7w",
      badge: "Value",
      badgeColor: "bg-teal-500"
  }
];

interface HomeViewProps {
  onNavigate: (view: any) => void;
  onOpenContractModal: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenContractModal }) => {
  const [homeSearchQuery, setHomeSearchQuery] = useState('');
  const [recommendationBatch, setRecommendationBatch] = useState(0);
  const ITEMS_PER_BATCH = 12;

  const handleGenerateSearch = () => {
    if (homeSearchQuery.trim()) {
      alert(`Generating results for: ${homeSearchQuery}`);
    }
  };

  const handleRefreshRecommendations = () => {
    setRecommendationBatch(prev => prev + 1);
  };

  const getCurrentBatch = () => {
    const startIndex = (recommendationBatch * ITEMS_PER_BATCH) % ALL_RECOMMENDED_PROPERTIES.length;
    const batch = [];
    for (let i = 0; i < ITEMS_PER_BATCH; i++) {
        batch.push(ALL_RECOMMENDED_PROPERTIES[(startIndex + i) % ALL_RECOMMENDED_PROPERTIES.length]);
    }
    return batch;
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col p-6 lg:p-10 scroll-smooth">
      <div className="w-full flex flex-col items-center pt-10 pb-20">
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
        
        {/* Recommended Properties Section */}
        <div className="w-full max-w-5xl mt-16 relative z-10 px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recommended for You</h2>
            <div className="flex items-center gap-3">
                <button 
                    onClick={handleRefreshRecommendations}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <span className="material-symbols-outlined text-[18px]">refresh</span>
                    Change Batch
                </button>
                <button 
                    onClick={() => onNavigate('digital-twins')}
                    className="text-primary hover:text-primary-hover font-semibold text-sm flex items-center gap-1 transition-colors group"
                >
                    View All <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {getCurrentBatch().map((item, index) => (
                <div 
                    key={`${recommendationBatch}-${index}`}
                    onClick={onOpenContractModal}
                    className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all cursor-pointer animate-[fadeIn_0.5s_ease-out]"
                >
                    <div className="h-48 bg-cover bg-center relative transition-transform duration-500 hover:scale-105" style={{backgroundImage: `url("${item.img}")`}}>
                        {item.badge && (
                            <div className={`absolute top-3 left-3 ${item.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm`}>{item.badge}</div>
                        )}
                        <button className="absolute top-3 right-3 p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[16px]">favorite_border</span>
                        </button>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 group-hover:text-primary transition-colors truncate">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-3 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">location_on</span> {item.loc}
                        </p>
                        <div className="flex justify-between items-center text-sm font-medium text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700 pt-3">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-slate-400">square_foot</span> {item.area}</span>
                            <span className="font-bold text-slate-900 dark:text-white">{item.price}<span className="text-xs font-normal text-slate-400">/sqft</span></span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeView;