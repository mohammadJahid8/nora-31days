import {
  AlertCircle,
  Bell,
  LogOut,
  MapPin,
  Menu,
  PlayCircle,
  Search,
  Users,
} from 'lucide-react';

const Header = ({
  setSidebarOpen,
  sidebarOpen,
  morningBriefing,
  isPlayingAudio,
  setIsPlayingAudio,
  globalSearch,
  setGlobalSearch,
  setShowHabakkuk,
  setShowWarRoom,
  setIsSimulating,
  profile,
  setView,
}) => {
  return (
    <header className='px-4 py-4 md:px-8 md:py-6 lg:px-12 lg:py-8 border-b border-[#D4AF37]/10 flex justify-between items-center bg-[#0D1642]/95 backdrop-blur-3xl z-50'>
      <div className='flex items-center gap-3 md:gap-6 lg:gap-8 flex-1'>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className='p-2 md:p-3 hover:bg-white/5 rounded-xl md:rounded-2xl transition-all text-[#D4AF37] border border-[#D4AF37]/20'
        >
          <Menu size={20} className='md:w-6 md:h-6' />
        </button>
        
        {/* PROACTIVE NEURAL BRIEFING WIDGET - Hidden on mobile */}
        {morningBriefing && (
          <div
            className={`hidden xl:flex items-center gap-3 bg-white/5 border px-4 py-2 rounded-full animate-in slide-in-from-top-4 max-w-lg ${
              morningBriefing.type === 'CRITICAL'
                ? 'border-red-500/30 bg-red-900/10'
                : 'border-white/5'
            }`}
          >
            {morningBriefing.type === 'CRITICAL' ? (
              <AlertCircle size={16} className='text-red-500 animate-pulse shrink-0' />
            ) : (
              <Bell size={16} className='text-[#D4AF37] animate-pulse shrink-0' />
            )}
            <p className='text-xs font-bold uppercase tracking-wider text-white/60 truncate'>
              <span
                className={
                  morningBriefing.type === 'CRITICAL'
                    ? 'text-red-400'
                    : 'text-[#D4AF37]'
                }
              >
                {morningBriefing.msg}
              </span>
            </p>
          </div>
        )}
        
        {/* Search - Responsive */}
        <div className='relative flex-1 max-w-xs md:max-w-md'>
          <Search
            size={16}
            className='absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/40'
          />
          <input
            type='text'
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            placeholder='Search...'
            className='w-full bg-white/5 border border-[#D4AF37]/10 rounded-full py-2 md:py-3 pl-10 md:pl-12 pr-4 text-sm md:text-base font-light text-white search-input outline-none'
          />
        </div>
        
        {/* Action buttons - Hidden on small screens */}
        <div className='hidden md:flex items-center gap-2 lg:gap-4'>
          <button
            onClick={() => setShowHabakkuk(true)}
            className='flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all'
          >
            <MapPin size={16} className='text-[#D4AF37]' />
            <span className='hidden lg:inline text-xs font-bold uppercase tracking-wider text-white/60'>
              Vision
            </span>
          </button>
          <button
            onClick={() => setShowWarRoom(true)}
            className='flex items-center gap-2 px-3 lg:px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all'
          >
            <Users size={16} className='text-[#D4AF37]' />
            <span className='hidden lg:inline text-xs font-bold uppercase tracking-wider text-white/60'>
              War Room
            </span>
          </button>
          <button
            onClick={() => setIsSimulating(true)}
            className='flex items-center gap-2 px-3 lg:px-4 py-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
          >
            <PlayCircle size={16} />
            <span className='hidden lg:inline text-xs font-bold uppercase tracking-wider'>
              Simulate
            </span>
          </button>
        </div>
      </div>
      
      <div className='flex gap-4 md:gap-8 lg:gap-12 items-center'>
        <div className='text-right hidden sm:block'>
          <p className='text-xs md:text-sm uppercase tracking-wider text-[#D4AF37]/60 font-bold'>
            Goal
          </p>
          <p className='text-sm md:text-base font-bold tracking-wider text-[#D4AF37]'>
            {profile.goal?.toUpperCase() || 'SELECTING...'}
          </p>
        </div>
        <button
          onClick={() => setView('auth')}
          className='text-white/30 hover:text-red-500 transition-colors p-2'
        >
          <LogOut size={22} className='md:w-6 md:h-6' />
        </button>
      </div>
    </header>
  );
};

export default Header;

