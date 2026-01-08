import { Eye, Globe, ShieldAlert } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const AdminTab = ({
  ecosystemStats,
  architects,
  globalSearch,
  selectedArchitect,
  setSelectedArchitect,
  adminDirective,
  setAdminDirective,
  sendGovernanceOverride,
}) => {
  return (
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            Admin <span className='gold-text-gradient'>Command</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Forensic Directory
          </p>
        </div>
        <ShieldAlert size={64} className='opacity-10 text-[#D4AF37]' />
      </div>
      {/* ADMIN GOD MODE ANALYTICS */}
      <GlassPanel title='Ecosystem Dominion (God Mode)' icon={Globe}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <div className='text-center'>
            <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest mb-2'>
              Total Capital Under Management
            </p>
            <p className='text-4xl font-thin font-mono text-[#D4AF37]'>
              ${ecosystemStats.totalRevenue.toLocaleString()}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest mb-2'>
              Active Architects
            </p>
            <p className='text-4xl font-thin font-mono text-white'>
              {ecosystemStats.activeUsers}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest mb-2'>
              Avg Institutional Delta
            </p>
            <p className='text-4xl font-thin font-mono text-green-500'>
              42%
            </p>
          </div>
        </div>
      </GlassPanel>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <GlassPanel
          title='Master Directory'
          className='lg:col-span-1'
          scrollable={true}
        >
          <div className='space-y-4'>
            {architects
              .filter((a) =>
                (a.name || '')
                  .toLowerCase()
                  .includes(globalSearch.toLowerCase())
              )
              .map((arc) => (
                <button
                  key={arc.id}
                  onClick={() => setSelectedArchitect(arc)}
                  className={`w-full text-left p-6 rounded-xl border transition-all ${
                    selectedArchitect?.id === arc.id
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37]'
                      : 'bg-white/5 border-white/5 hover:border-[#D4AF37]/40'
                  }`}
                >
                  <div className='flex justify-between items-center mb-1'>
                    <p className='text-xs font-black uppercase text-[#D4AF37]'>
                      {arc.name || 'UNNAMED'}
                    </p>
                    {/* 7.1 HEALTH HEATMAP */}
                    <div
                      className={`w-2 h-2 rounded-full ${
                        arc.creditScoreExpe > 700
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <p className='text-[0.6rem] text-white/40 truncate'>
                    {arc.email}
                  </p>
                </button>
              ))}
          </div>
        </GlassPanel>
        <GlassPanel
          title='Forensic Oversight View'
          className='lg:col-span-2'
          scrollable={true}
        >
          {selectedArchitect ? (
            <div className='space-y-12'>
              <div className='grid grid-cols-3 gap-8'>
                <div className='p-6 bg-white/5 border border-white/5 rounded-2xl text-center'>
                  <p className='text-[0.5rem] text-white/20 uppercase mb-2'>
                    Readiness
                  </p>
                  <p className='text-3xl font-thin text-[#D4AF37]'>
                    {selectedArchitect.creditScoreExpe > 700
                      ? '90%'
                      : '40%'}
                  </p>
                </div>
                <div className='p-6 bg-white/5 border border-white/10 rounded-2xl text-center'>
                  <p className='text-[0.5rem] text-white/20 uppercase mb-2'>
                    Vessel Revenue
                  </p>
                  <p className='text-2xl font-thin text-white'>
                    $
                    {selectedArchitect.annualRevenue?.toLocaleString() ||
                      0}
                  </p>
                </div>
              </div>
              <div className='space-y-4'>
                <p className='text-[0.5rem] font-black text-white/40 uppercase'>
                  Direct Governance Override
                </p>
                <div className='flex gap-4'>
                  <input
                    type='text'
                    value={adminDirective}
                    onChange={(e) => setAdminDirective(e.target.value)}
                    placeholder='Issue high-priority directive...'
                    className='flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-white outline-none focus:border-[#D4AF37]'
                  />
                  <button
                    onClick={sendGovernanceOverride}
                    className='px-6 py-2 bg-red-900/40 border border-red-500/50 text-red-500 text-[0.6rem] font-black uppercase rounded-lg hover:bg-red-900/80 transition-all'
                  >
                    Send Alert
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center py-32 opacity-20'>
              <Eye size={48} className='mb-6' />
              <p className='text-xs font-black uppercase tracking-widest'>
                Select Architect Node
              </p>
            </div>
          )}
        </GlassPanel>
      </div>
    </div>
  );
};

export default AdminTab;

