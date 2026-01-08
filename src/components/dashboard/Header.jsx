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
    <header className='px-12 py-8 border-b border-[#D4AF37]/10 flex justify-between items-center bg-[#0D1642]/95 backdrop-blur-3xl z-50'>
      <div className='flex items-center gap-12 flex-1'>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className='p-3 hover:bg-white/5 rounded-2xl transition-all text-[#D4AF37] border border-[#D4AF37]/20'
        >
          <Menu size={20} />
        </button>
        {/* PROACTIVE NEURAL BRIEFING WIDGET */}
        {morningBriefing && (
          <div
            className={`hidden lg:flex items-center gap-4 bg-white/5 border px-6 py-2 rounded-full animate-in slide-in-from-top-4 ${
              morningBriefing.type === 'CRITICAL'
                ? 'border-red-500/30 bg-red-900/10'
                : 'border-white/5'
            }`}
          >
            {morningBriefing.type === 'CRITICAL' ? (
              <AlertCircle
                size={14}
                className='text-red-500 animate-pulse'
              />
            ) : (
              <Bell size={14} className='text-[#D4AF37] animate-pulse' />
            )}
            <p className='text-[0.55rem] font-black uppercase tracking-widest text-white/60'>
              Briefing:{' '}
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

            {/* PHASE 15: AUDIO INTELLIGENCE */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 ${
                isPlayingAudio
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                  : 'bg-transparent text-white/40'
              }`}
            >
              {isPlayingAudio ? (
                <div className='flex gap-0.5'>
                  <div className='audio-bar h-3'></div>
                  <div className='audio-bar h-2 delay-75'></div>
                  <div className='audio-bar h-3 delay-150'></div>
                </div>
              ) : (
                <PlayCircle size={12} />
              )}
              <span className='text-[0.45rem] font-black uppercase tracking-widest'>
                {isPlayingAudio ? 'TRANSMITTING' : 'LISTEN'}
              </span>
            </button>
          </div>
        )}
        <div className='relative max-w-md w-full'>
          <Search
            size={16}
            className='absolute left-6 top-1/2 -translate-y-1/2 text-[#D4AF37]/40'
          />
          <input
            type='text'
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            placeholder='Forensic Search...'
            className='w-full bg-white/5 border border-[#D4AF37]/10 rounded-full py-3 pl-14 pr-10 text-xs font-light text-white search-input outline-none'
          />
        </div>
        {/* PHASE 17: HABAKKUK BOARD TOGGLE */}
        <button
          onClick={() => setShowHabakkuk(true)}
          className='flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all'
        >
          <MapPin size={14} className='text-[#D4AF37]' />
          <span className='text-[0.5rem] font-black uppercase tracking-widest text-white/60'>
            Vision
          </span>
        </button>
        {/* WAR ROOM TOGGLE */}
        <button
          onClick={() => setShowWarRoom(true)}
          className='flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all'
        >
          <Users size={14} className='text-[#D4AF37]' />
          <span className='text-[0.5rem] font-black uppercase tracking-widest text-white/60'>
            War Room
          </span>
        </button>
        {/* PHASE 14: SIMULATOR TOGGLE */}
        <button
          onClick={() => setIsSimulating(true)}
          className='flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
        >
          <PlayCircle size={14} />
          <span className='text-[0.5rem] font-black uppercase tracking-widest'>
            Simulate
          </span>
        </button>
      </div>
      <div className='flex gap-16 items-center'>
        <div className='text-right'>
          <p className='text-[0.55rem] uppercase tracking-[0.4em] text-[#D4AF37]/50 font-black'>
            Target Goal
          </p>
          <p className='text-sm font-black tracking-widest text-[#D4AF37]'>
            {profile.goal?.toUpperCase() || 'SELECTING...'}
          </p>
        </div>
        <button
          onClick={() => setView('auth')}
          className='text-white/20 hover:text-red-500 transition-colors'
        >
          <LogOut size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;

