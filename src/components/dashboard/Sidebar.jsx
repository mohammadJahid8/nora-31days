import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Compass,
  Crown,
  FileText,
  Flame,
  GraduationCap,
  Link2,
  ShieldAlert,
  User,
  X,
  Zap,
} from 'lucide-react';

const SIDEBAR_ITEMS = [
  { id: 'canvas', label: 'Command Hub', icon: Zap },
  { id: 'profile', label: 'Sovereign Profile', icon: User },
  { id: 'bridge', label: 'Funding Bridge', icon: Link2 },
  { id: 'wealth', label: 'Wealth Station', icon: Compass },
  { id: 'protocol', label: '31-Day Protocol', icon: FileText },
  { id: 'horizon', label: '90-Day Horizon', icon: BarChart3 },
  { id: 'armory', label: 'The Armory', icon: BookOpen },
  { id: 'academy', label: 'The Academy', icon: GraduationCap },
  { id: 'council', label: 'Neural Council', icon: Brain },
  { id: 'admin', label: 'Admin Command', icon: ShieldAlert },
  { id: 'commonwealth', label: 'Commonwealth', icon: Crown },
];

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
  setGlobalSearch,
  profile,
  protocol,
  dominionRank,
}) => {
  const handleNavClick = (itemId) => {
    setActiveTab(itemId);
    setGlobalSearch('');
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative bg-[#0D1642] border-r border-[#D4AF37]/10 flex flex-col transition-all duration-300 shrink-0 z-50 h-full ${
          sidebarOpen 
            ? 'w-72 md:w-80 translate-x-0' 
            : 'w-72 md:w-80 -translate-x-full lg:w-0 lg:translate-x-0 overflow-hidden'
        }`}
      >
        {/* Mobile close button */}
        <button 
          onClick={() => setSidebarOpen(false)}
          className='lg:hidden absolute top-4 right-4 p-2 text-white/40 hover:text-white'
        >
          <X size={24} />
        </button>
        
        <div className='p-6 md:p-8 lg:p-10 border-b border-[#D4AF37]/10 text-center'>
          <h2 className='text-xl md:text-2xl font-extralight leading-[1.1] tracking-[0.15em] md:tracking-[0.2em] uppercase'>
            <span className='text-[#D4AF37]'>NORA</span> <br />
            <span className='text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] opacity-80 mt-1 block'>
              CAPITAL GROUP
            </span>
          </h2>
          <p className='text-[#D4AF37]/40 text-xs tracking-[0.2em] uppercase mt-2'>
            Jesus Christ is the Cornerstone
          </p>
        </div>
        <nav className='flex-1 py-6 md:py-8 px-3 md:px-4 space-y-2 overflow-y-auto'>
          {SIDEBAR_ITEMS.map((item) => {
            const SidebarIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37]'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <SidebarIcon size={18} className='md:w-5 md:h-5 shrink-0' />
                <span className='text-xs md:text-sm tracking-wider md:tracking-[0.2em] uppercase font-bold'>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
        <div className='p-4 md:p-6 lg:p-8 border-t border-[#D4AF37]/10 bg-black/40'>
          <div className='flex items-center gap-3 md:gap-4 mb-3 md:mb-4'>
            <div className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center shrink-0'>
              <User size={18} className='md:w-5 md:h-5 text-[#D4AF37]' />
            </div>
            <div className='min-w-0'>
              <p className='text-sm md:text-base font-bold uppercase tracking-wider mb-1 truncate'>
                {profile.name || 'Steward'}
              </p>
              <p className='text-xs md:text-sm text-white/50 uppercase'>
                {dominionRank}
              </p>
            </div>
          </div>
          <div
            className='flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5'
            title='Holy Spirit Fire'
          >
            <div className='flex items-center gap-2'>
              <Flame size={16} className='text-orange-500' />
              <span className='text-sm font-mono text-white'>12</span>
            </div>
            <div className='flex items-center gap-2'>
              <Award size={16} className='text-[#D4AF37]' />
              <span className='text-sm font-mono text-white'>
                {protocol.velocityScore}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

