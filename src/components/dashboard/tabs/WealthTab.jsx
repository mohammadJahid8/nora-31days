import { Award, Layers, Target, Video } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import {
  BLUEPRINT_CURRICULUM,
  BLUEPRINT_LOGIC,
  HORIZON_GATES,
} from '../../../utils/data';

const WealthTab = ({ profile }) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            Wealth <span className='gold-text-gradient'>Station</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Blueprint Dominion
          </p>
        </div>
        <Target size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8'>
        <GlassPanel title='Active Accord' icon={Award}>
          <p className='text-2xl md:text-3xl font-light uppercase text-[#D4AF37]'>
            {profile.accord || 'CALIBRATING...'}
          </p>
        </GlassPanel>
        <GlassPanel title='Strategic Blueprint' icon={Layers}>
          <p className='text-2xl md:text-3xl font-light uppercase text-white'>
            {profile.blueprint || 'CALIBRATING...'}
          </p>
        </GlassPanel>
      </div>
      
      {/* Blueprint Logic Roadmap */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {(
          BLUEPRINT_LOGIC[profile.blueprint] || { gates: HORIZON_GATES }
        ).gates.map((gate, idx) => (
          <GlassPanel key={idx} title={gate.title}>
            <div className='space-y-4 md:space-y-6'>
              <span className='text-xs md:text-sm font-bold uppercase tracking-wider text-[#D4AF37]'>
                {gate.id}
              </span>
              <div className='space-y-2'>
                {gate.nodes.map((n) => (
                  <div
                    key={n}
                    className='flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white/5 rounded-lg border border-white/5'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0' />
                    <span className='text-sm md:text-base font-light'>{n}</span>
                  </div>
                ))}
              </div>
              <div className='pt-3 md:pt-4 border-t border-white/10'>
                <p className='text-xs uppercase text-white/50 mb-1'>
                  Exit Criteria
                </p>
                <p className='text-sm md:text-base font-bold text-green-500'>
                  {gate.exit}
                </p>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
      
      {/* Blueprint Curriculum */}
      <GlassPanel
        title={`Curriculum: ${
          (
            BLUEPRINT_CURRICULUM[profile.blueprint] ||
            BLUEPRINT_CURRICULUM['default']
          ).title
        }`}
        icon={Video}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
          {(
            BLUEPRINT_CURRICULUM[profile.blueprint] ||
            BLUEPRINT_CURRICULUM['default']
          ).modules.map((m, i) => (
            <div
              key={i}
              className='flex justify-between items-center p-4 md:p-5 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer'
            >
              <span className='text-sm md:text-base font-light text-white'>
                {m}
              </span>
              <div className='flex items-center gap-2 shrink-0'>
                <div className='w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse' />
                <span className='text-xs uppercase tracking-wider text-white/50 hidden sm:inline'>
                  Watch
                </span>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};

export default WealthTab;

