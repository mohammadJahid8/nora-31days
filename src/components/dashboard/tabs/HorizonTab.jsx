import { Microscope } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { HORIZON_GATES } from '../../../utils/data';

const HorizonTab = ({ gateProgress, protocol }) => {
  return (
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            90-Day <span className='gold-text-gradient'>Horizon</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Unified Gate Trajectory
          </p>
        </div>
        <Microscope size={64} className='opacity-10 text-[#D4AF37]' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 h-full'>
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
              <div className='space-y-8'>
                <div className='flex justify-between items-center'>
                  <div
                    className={`px-4 py-1 rounded-full text-[0.5rem] font-black uppercase tracking-widest ${
                      isGateActive
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                        : 'bg-white/5 text-white/20'
                    }`}
                  >
                    {isGateActive ? 'ACTIVE' : 'LOCKED'}
                  </div>
                  <p className='text-2xl font-thin font-mono text-white/40'>
                    {idx === 0 ? gateProgress : 0}%
                  </p>
                </div>
                <div className='space-y-4'>
                  {gate.nodes.map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className='flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl'
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          idx === 0 &&
                          (protocol.sealedDays?.length || 0) > nIdx * 7
                            ? 'bg-green-500'
                            : 'bg-white/10'
                        }`}
                      />
                      <span className='text-xs font-light tracking-wide'>
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

