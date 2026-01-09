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
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            Admin <span className='gold-text-gradient'>Command</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Forensic Directory
          </p>
        </div>
        <ShieldAlert size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>
      
      {/* Ecosystem Stats */}
      <GlassPanel title='Ecosystem Overview' icon={Globe}>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10'>
          <div className='text-center'>
            <p className='text-xs md:text-sm font-bold text-white/50 uppercase tracking-wider mb-2'>
              Capital Under Management
            </p>
            <p className='text-3xl md:text-4xl font-thin font-mono text-[#D4AF37]'>
              ${ecosystemStats.totalRevenue.toLocaleString()}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-xs md:text-sm font-bold text-white/50 uppercase tracking-wider mb-2'>
              Active Architects
            </p>
            <p className='text-3xl md:text-4xl font-thin font-mono text-white'>
              {ecosystemStats.activeUsers}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-xs md:text-sm font-bold text-white/50 uppercase tracking-wider mb-2'>
              Avg Delta
            </p>
            <p className='text-3xl md:text-4xl font-thin font-mono text-green-500'>
              42%
            </p>
          </div>
        </div>
      </GlassPanel>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8'>
        <GlassPanel title='Directory' className='lg:col-span-1' scrollable={true}>
          <div className='space-y-3'>
            {architects
              .filter((a) =>
                (a.name || '').toLowerCase().includes(globalSearch.toLowerCase())
              )
              .map((arc) => (
                <button
                  key={arc.id}
                  onClick={() => setSelectedArchitect(arc)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all ${
                    selectedArchitect?.id === arc.id
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37]'
                      : 'bg-white/5 border-white/5 hover:border-[#D4AF37]/40'
                  }`}
                >
                  <div className='flex justify-between items-center mb-1'>
                    <p className='text-sm md:text-base font-bold uppercase text-[#D4AF37]'>
                      {arc.name || 'UNNAMED'}
                    </p>
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        arc.creditScoreExpe > 700 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <p className='text-xs md:text-sm text-white/50 truncate'>
                    {arc.email}
                  </p>
                </button>
              ))}
          </div>
        </GlassPanel>
        <GlassPanel title='Oversight View' className='lg:col-span-2' scrollable={true}>
          {selectedArchitect ? (
            <div className='space-y-6 md:space-y-10'>
              <div className='grid grid-cols-2 gap-4 md:gap-6'>
                <div className='p-4 md:p-6 bg-white/5 border border-white/5 rounded-xl text-center'>
                  <p className='text-xs md:text-sm text-white/40 uppercase mb-2'>
                    Readiness
                  </p>
                  <p className='text-2xl md:text-3xl font-thin text-[#D4AF37]'>
                    {selectedArchitect.creditScoreExpe > 700 ? '90%' : '40%'}
                  </p>
                </div>
                <div className='p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl text-center'>
                  <p className='text-xs md:text-sm text-white/40 uppercase mb-2'>
                    Revenue
                  </p>
                  <p className='text-xl md:text-2xl font-thin text-white'>
                    ${selectedArchitect.annualRevenue?.toLocaleString() || 0}
                  </p>
                </div>
              </div>
              <div className='space-y-3'>
                <p className='text-xs md:text-sm font-bold text-white/50 uppercase'>
                  Governance Override
                </p>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <input
                    type='text'
                    value={adminDirective}
                    onChange={(e) => setAdminDirective(e.target.value)}
                    placeholder='Issue directive...'
                    className='flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base text-white outline-none focus:border-[#D4AF37]'
                  />
                  <button
                    onClick={sendGovernanceOverride}
                    className='px-6 py-3 bg-red-900/40 border border-red-500/50 text-red-500 text-sm font-bold uppercase rounded-lg hover:bg-red-900/80 transition-all'
                  >
                    Send Alert
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center py-16 md:py-24 opacity-30'>
              <Eye size={40} className='mb-4 md:w-12 md:h-12' />
              <p className='text-sm font-bold uppercase tracking-wider'>
                Select Architect
              </p>
            </div>
          )}
        </GlassPanel>
      </div>
    </div>
  );
};

export default AdminTab;

