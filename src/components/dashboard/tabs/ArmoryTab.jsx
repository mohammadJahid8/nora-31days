import {
  ArrowLeft,
  BookOpen,
  Layers,
  Link2,
  Printer,
  ScrollText,
} from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { ARMORY } from '../../../utils/data';

const ArmoryTab = ({ handleGenerator }) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            The <span className='gold-text-gradient'>Armory</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Institutional Arsenal
          </p>
        </div>
        <BookOpen size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
        <GlassPanel title='Output Engines' icon={Printer}>
          <div className='grid grid-cols-1 gap-3 md:gap-4'>
            {ARMORY.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleGenerator(item.title)}
                className='flex justify-between items-center p-4 md:p-5 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer group gap-3'
              >
                <div className='min-w-0'>
                  <h4 className='text-sm md:text-base font-bold uppercase text-white mb-1 group-hover:text-[#D4AF37] transition-colors'>
                    {item.title}
                  </h4>
                  <p className='text-xs md:text-sm font-light text-white/50 truncate'>
                    {item.desc}
                  </p>
                </div>
                <ArrowLeft
                  size={16}
                  className='rotate-180 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all shrink-0 md:w-5 md:h-5'
                />
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel title='Legal Templates' icon={ScrollText}>
          <div className='space-y-6'>
            <div>
              <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-3 border-b border-white/5 pb-2'>
                Business Operations
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3'>
                {[
                  'Contractor Agreement',
                  'NDA',
                  'Cease & Desist',
                  'Corporate Resolution',
                ].map((t) => (
                  <div
                    key={t}
                    className='p-3 md:p-4 bg-white/5 rounded-lg text-sm md:text-base font-light text-white/80 hover:bg-[#D4AF37]/10 cursor-pointer transition-colors'
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-3 border-b border-white/5 pb-2'>
                Acquisition
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3'>
                {[
                  'LOI (Real Estate)',
                  'LOI (M&A)',
                  'Asset Purchase',
                  'Seller Finance',
                ].map((t) => (
                  <div
                    key={t}
                    className='p-3 md:p-4 bg-white/5 rounded-lg text-sm md:text-base font-light text-white/80 hover:bg-[#D4AF37]/10 cursor-pointer transition-colors'
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        <GlassPanel title='Strategic Links' icon={Link2}>
          <div className='space-y-3'>
            {[
              { name: 'Secretary of State (TX)', link: 'Filing Portal' },
              { name: 'Dun & Bradstreet', link: 'D-U-N-S Request' },
              { name: 'IRS.gov', link: 'EIN Assistant' },
            ].map((l, i) => (
              <div
                key={i}
                className='flex justify-between items-center p-3 md:p-4 border border-white/10 rounded-lg gap-2'
              >
                <span className='text-sm md:text-base font-bold uppercase text-white'>
                  {l.name}
                </span>
                <span className='text-xs uppercase tracking-wider text-[#D4AF37] shrink-0'>
                  {l.link}
                </span>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel title='Vendor Tier List' icon={Layers}>
          <div className='space-y-3'>
            {['Uline', 'Quill', 'Grainger'].map((vendor) => (
              <div key={vendor} className='flex justify-between p-3 border-b border-white/5'>
                <span className='text-sm md:text-base font-light'>{vendor}</span>
                <span className='text-sm md:text-base font-bold text-green-500'>Tier 1</span>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default ArmoryTab;

