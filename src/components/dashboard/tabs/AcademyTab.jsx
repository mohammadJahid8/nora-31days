import { Book, GraduationCap, Video } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { BLUEPRINT_CURRICULUM } from '../../../utils/data';

const AcademyTab = ({ profile }) => {
  return (
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            The <span className='gold-text-gradient'>Academy</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Blueprint-Specific Dominion Training
          </p>
        </div>
        <GraduationCap
          size={64}
          className='opacity-10 text-[#D4AF37]'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <GlassPanel
          title={`Curriculum: ${
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
        <GlassPanel title='Sovereign Library' icon={Book}>
          <div className='grid grid-cols-1 gap-4'>
            {[
              'Trust Architecture 101',
              'Institutional Credit Stacking',
              'The Theology of Wealth',
            ].map((b) => (
              <div
                key={b}
                className='p-4 border border-white/10 rounded-lg text-xs font-light hover:text-[#D4AF37] cursor-pointer transition-colors'
              >
                {b}
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default AcademyTab;

