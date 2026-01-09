import { Microscope } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { HORIZON_GATES } from '../../../utils/data';

const HorizonTab = ({ gateProgress, protocol }) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            90-Day <span className='gold-text-gradient'>Horizon</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Gate Trajectory
          </p>
        </div>
        <Microscope size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {HORIZON_GATES.map((gate, idx) => {
          const isGateActive =
            (idx === 0 && gateProgress < 100) ||
            (idx === 1 && gateProgress >= 100);
          return (
            <GlassPanel
              key={gate.id}
              title={`${gate.month}: ${gate.title}`}
              scrollable={true}
            >
              <div className='space-y-4 md:space-y-6'>
                <div className='flex justify-between items-center'>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isGateActive
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                        : 'bg-white/5 text-white/30'
                    }`}
                  >
                    {isGateActive ? 'ACTIVE' : 'LOCKED'}
                  </div>
                  <p className='text-xl md:text-2xl font-thin font-mono text-white/50'>
                    {idx === 0 ? gateProgress : 0}%
                  </p>
                </div>
                <div className='space-y-2 md:space-y-3'>
                  {gate.nodes.map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className='flex items-center gap-3 p-3 md:p-4 bg-white/5 border border-white/5 rounded-lg md:rounded-xl'
                    >
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          idx === 0 &&
                          (protocol.sealedDays?.length || 0) > nIdx * 7
                            ? 'bg-green-500'
                            : 'bg-white/20'
                        }`}
                      />
                      <span className='text-sm md:text-base font-light'>
                        {node}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          );
        })}
      </div>
    </div>
  );
};

export default HorizonTab;

