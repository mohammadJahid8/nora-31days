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
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            The <span className='gold-text-gradient'>Armory</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Institutional Arsenal & Legal Vault
          </p>
        </div>
        <BookOpen size={64} className='opacity-10 text-[#D4AF37]' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <GlassPanel title='Institutional Output Engines' icon={Printer}>
          <div className='grid grid-cols-1 gap-6'>
            {ARMORY.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleGenerator(item.title)}
                className='flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer group'
              >
                <div>
                  <h4 className='text-sm font-black uppercase text-white mb-2 group-hover:text-[#D4AF37] transition-colors'>
                    {item.title}
                  </h4>
                  <p className='text-xs font-light text-white/50'>
                    {item.desc}
                  </p>
                </div>
                <ArrowLeft
                  size={16}
                  className='rotate-180 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all'
                />
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel title='Letter of Law Database' icon={ScrollText}>
          <div className='space-y-8'>
            <div>
              <p className='text-[0.55rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4 border-b border-white/5 pb-2'>
                Business Operations
              </p>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  'Independent Contractor Agmt',
                  'Non-Disclosure Agmt (NDA)',
                  'Cease & Desist Order',
                  'Corporate Resolution',
                ].map((t) => (
                  <div
                    key={t}
                    className='p-3 bg-white/5 rounded-lg text-xs font-light text-white/80 hover:bg-[#D4AF37]/10 cursor-pointer'
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='text-[0.55rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4 border-b border-white/5 pb-2'>
                Acquisition Contracts
              </p>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  'LOI (Real Estate)',
                  'LOI (Business M&A)',
                  'Asset Purchase Agmt',
                  'Seller Finance Note',
                ].map((t) => (
                  <div
                    key={t}
                    className='p-3 bg-white/5 rounded-lg text-xs font-light text-white/80 hover:bg-[#D4AF37]/10 cursor-pointer'
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <GlassPanel title='Strategic Uplinks' icon={Link2}>
          <div className='space-y-4'>
            {[
              {
                name: 'Secretary of State (TX)',
                link: 'Direct Filing Portal',
              },
              { name: 'Dun & Bradstreet', link: 'D-U-N-S Request' },
              { name: 'IRS.gov', link: 'EIN Assistant' },
            ].map((l, i) => (
              <div
                key={i}
                className='flex justify-between items-center p-4 border border-white/10 rounded-lg'
              >
                <span className='text-xs font-black uppercase text-white'>
                  {l.name}
                </span>
                <span className='text-[0.5rem] uppercase tracking-widest text-[#D4AF37]'>
                  {l.link}
                </span>
              </div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel title='Vendor Tier List' icon={Layers}>
          <div className='space-y-4'>
            <div className='flex justify-between p-2 border-b border-white/5'>
              <span className='text-xs font-light'>Uline</span>
              <span className='text-xs font-black text-green-500'>
                Tier 1
              </span>
            </div>
            <div className='flex justify-between p-2 border-b border-white/5'>
              <span className='text-xs font-light'>Quill</span>
              <span className='text-xs font-black text-green-500'>
                Tier 1
              </span>
            </div>
            <div className='flex justify-between p-2 border-b border-white/5'>
              <span className='text-xs font-light'>Grainger</span>
              <span className='text-xs font-black text-green-500'>
                Tier 1
              </span>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default ArmoryTab;

