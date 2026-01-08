import { Award, Layers, Target, Video } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import {
  BLUEPRINT_CURRICULUM,
  BLUEPRINT_LOGIC,
  HORIZON_GATES,
} from '../../../utils/data';

const WealthTab = ({ profile }) => {
  return (
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            Wealth <span className='gold-text-gradient'>Station</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Blueprint Dominion
          </p>
        </div>
        <Target size={64} className='opacity-10 text-[#D4AF37]' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <GlassPanel title='Active Accord Node' icon={Award}>
          <p className='text-4xl font-extralight uppercase text-[#D4AF37]'>
            {profile.accord || 'CALIBRATING...'}
          </p>
        </GlassPanel>
        <GlassPanel title='Strategic Blueprint' icon={Layers}>
          <p className='text-4xl font-extralight uppercase text-white'>
            {profile.blueprint || 'CALIBRATING...'}
          </p>
        </GlassPanel>
      </div>
      {/* RESTORED: BLUEPRINT LOGIC ROADMAP */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {(
          BLUEPRINT_LOGIC[profile.blueprint] || { gates: HORIZON_GATES }
        ).gates.map((gate, idx) => (
          <GlassPanel key={idx} title={gate.title}>
            <div className='space-y-6'>
              <div className='flex justify-between items-center'>
                <span className='text-[0.6rem] font-black uppercase tracking-widest text-[#D4AF37]'>
                  {gate.id}
                </span>
              </div>
              <div className='space-y-2'>
                {gate.nodes.map((n) => (
                  <div
                    key={n}
                    className='flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-[#D4AF37]' />
                    <span className='text-xs font-light'>{n}</span>
                  </div>
                ))}
              </div>
              <div className='mt-4 pt-4 border-t border-white/10'>
                <p className='text-[0.5rem] uppercase text-white/40 mb-1'>
                  Exit Criteria
                </p>
                <p className='text-xs font-bold text-green-500'>
                  {gate.exit}
                </p>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
      {/* RESTORED: BLUEPRINT CURRICULUM */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>
        <GlassPanel
          title={`Kingdom Curriculum: ${
            (
              BLUEPRINT_CURRICULUM[profile.blueprint] ||
              BLUEPRINT_CURRICULUM['default']
            ).title
          }`}
          icon={Video}
        >
          <div className='space-y-6'>
            {(
              BLUEPRINT_CURRICULUM[profile.blueprint] ||
              BLUEPRINT_CURRICULUM['default']
            ).modules.map((m, i) => (
              <div
                key={i}
                className='flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer'
              >
                <span className='text-sm font-light text-white'>
                  {m}
                </span>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse' />
                  <span className='text-[0.5rem] uppercase tracking-widest text-white/40'>
                    Watch Node
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default WealthTab;

