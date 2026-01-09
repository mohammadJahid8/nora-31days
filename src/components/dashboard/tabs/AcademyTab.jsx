import { Book, GraduationCap, Video } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { BLUEPRINT_CURRICULUM } from '../../../utils/data';

const AcademyTab = ({ profile }) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            The <span className='gold-text-gradient'>Academy</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Blueprint Training
          </p>
        </div>
        <GraduationCap size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
        <GlassPanel
          title={`Curriculum: ${
            (
              BLUEPRINT_CURRICULUM[profile.blueprint] ||
              BLUEPRINT_CURRICULUM['default']
            ).title
          }`}
          icon={Video}
        >
          <div className='space-y-3 md:space-y-4'>
            {(
              BLUEPRINT_CURRICULUM[profile.blueprint] ||
              BLUEPRINT_CURRICULUM['default']
            ).modules.map((m, i) => (
              <div
                key={i}
                className='flex justify-between items-center p-4 md:p-5 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer gap-3'
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
        <GlassPanel title='Sovereign Library' icon={Book}>
          <div className='grid grid-cols-1 gap-3 md:gap-4'>
            {[
              'Trust Architecture 101',
              'Institutional Credit Stacking',
              'The Theology of Wealth',
            ].map((b) => (
              <div
                key={b}
                className='p-4 md:p-5 border border-white/10 rounded-lg text-sm md:text-base font-light hover:text-[#D4AF37] hover:border-[#D4AF37]/40 cursor-pointer transition-colors'
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

