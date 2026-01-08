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
  activeTab,
  setActiveTab,
  setGlobalSearch,
  profile,
  protocol,
  dominionRank,
}) => {
  return (
    <aside
      className={`bg-[#0D1642] border-r border-[#D4AF37]/10 flex flex-col transition-all duration-700 shrink-0 ${
        sidebarOpen ? 'w-80' : 'w-0 overflow-hidden'
      }`}
    >
      <div className='p-12 border-b border-[#D4AF37]/10 text-center'>
        <h2 className='text-xl font-extralight leading-[1.1] tracking-[0.2em] uppercase'>
          <span className='text-[#D4AF37]'>NORA</span> <br />
          <span className='text-[#D4AF37] text-[0.55rem] tracking-[0.45em] opacity-80 mt-1 block'>
            CAPITAL GROUP
          </span>
        </h2>
        <p className='text-[#D4AF37]/30 text-[0.35rem] tracking-[0.3em] uppercase mt-2'>
          Jesus Christ is the Cornerstone
        </p>
      </div>
      <nav className='flex-1 py-12 px-6 space-y-3 overflow-y-auto'>
        {SIDEBAR_ITEMS.map((item) => {
          const SidebarIcon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setGlobalSearch('');
              }}
              className={`w-full flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37]'
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <SidebarIcon size={18} />
              <span className='text-[0.65rem] tracking-[0.4em] uppercase font-black'>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
      <div className='p-10 border-t border-[#D4AF37]/10 bg-black/40'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center'>
            <User size={20} className='text-[#D4AF37]' />
          </div>
          <div>
            <p className='text-[0.7rem] font-black uppercase tracking-widest mb-1 truncate max-w-[120px]'>
              {profile.name || 'Steward'}
            </p>
            <p className='text-[0.5rem] text-white/40 uppercase'>
              {dominionRank}
            </p>
          </div>
        </div>
        <div
          className='flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5'
          title='Holy Spirit Fire'
        >
          <div className='flex items-center gap-2'>
            <Flame size={14} className='text-orange-500' />
            <span className='text-xs font-mono text-white'>12</span>
          </div>
          <div className='flex items-center gap-2'>
            <Award size={14} className='text-[#D4AF37]' />
            <span className='text-xs font-mono text-white'>
              {protocol.velocityScore}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

