import {
  Crown,
  Gem,
  Handshake,
  Lock,
  MessageSquareCode,
  Send,
} from 'lucide-react';
import GlassPanel from '../../glass-panel';

const CommonwealthTab = ({
  commonwealthLocked,
  setCommonwealthLocked,
}) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            The <span className='gold-text-gradient'>Commonwealth</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Kingdom Economy
          </p>
        </div>
        <Crown size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>

      {/* Lock Screen */}
      {commonwealthLocked ? (
        <div className='relative min-h-[400px] md:min-h-[500px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4AF37]/20'>
          <div className='absolute inset-0 bg-[#0D1642] z-0 flex flex-col items-center justify-center space-y-6 md:space-y-8 p-6 md:p-12 text-center'>
            <div className='w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center animate-pulse'>
              <Lock size={28} className='text-[#D4AF37] md:w-8 md:h-8' />
            </div>
            <h3 className='text-2xl md:text-3xl font-extralight uppercase tracking-wider text-white'>
              Access Locked
            </h3>
            <p className='text-sm md:text-base font-light text-white/60 max-w-lg leading-relaxed'>
              The Commonwealth is reserved for Governors who have sealed the 31-Day Protocol and established a verified Vessel Entity.
            </p>
            <button
              onClick={() => setCommonwealthLocked(false)}
              className='px-8 md:px-10 py-4 md:py-5 bg-[#D4AF37] text-[#0D1642] font-bold text-sm md:text-base uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]'
            >
              Unlock Access
            </button>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 animate-in zoom-in-95'>
          <GlassPanel title='Barter Exchange' icon={Handshake}>
            <div className='space-y-3'>
              {[
                'Legal Contract Review',
                'Brand Identity Design',
                'Tax Strategy Consult',
                'SEO Audit',
              ].map((s) => (
                <div
                  key={s}
                  className='flex justify-between items-center p-3 md:p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#D4AF37]/50 cursor-pointer transition-all gap-2'
                >
                  <div className='flex items-center gap-2 md:gap-3 min-w-0'>
                    <div className='w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-xs shrink-0'>
                      SV
                    </div>
                    <span className='text-sm md:text-base font-light text-white truncate'>
                      {s}
                    </span>
                  </div>
                  <button className='text-xs font-bold uppercase text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded shrink-0'>
                    Swap
                  </button>
                </div>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel title='Deal Room' icon={Gem}>
            <div className='space-y-3'>
              {[
                { title: 'Multifamily - Austin, TX', raise: '$5M', min: '$50k' },
                { title: 'SaaS Seed - FinTech', raise: '$2M', min: '$25k' },
              ].map((d) => (
                <div
                  key={d.title}
                  className='p-4 md:p-5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer'
                >
                  <div className='flex justify-between items-start mb-2 gap-2'>
                    <span className='text-sm md:text-base font-bold text-white uppercase'>
                      {d.title}
                    </span>
                    <span className='text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded shrink-0'>
                      OPEN
                    </span>
                  </div>
                  <div className='flex gap-4 text-xs md:text-sm text-white/50'>
                    <span>Raise: {d.raise}</span>
                    <span>Min: {d.min}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel title='Community Chat' icon={MessageSquareCode} className='lg:col-span-2'>
            <div className='h-48 md:h-64 flex flex-col space-y-3 md:space-y-4 overflow-y-auto p-2 md:p-4'>
              <div className='flex gap-2 md:gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs font-bold shrink-0'>
                  JD
                </div>
                <div className='bg-white/5 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
                  <p className='text-sm md:text-base font-light text-white'>
                    Has anyone utilized the SBA 7(a) for acquisition of a SaaS under $2M ARR?
                  </p>
                </div>
              </div>
              <div className='flex gap-2 md:gap-3 flex-row-reverse'>
                <div className='w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-bold shrink-0'>
                  MK
                </div>
                <div className='bg-[#D4AF37]/10 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl'>
                  <p className='text-sm md:text-base font-light text-white'>
                    Yes, I just closed one. The key is DSCR above 1.25x. Check the Armory for templates.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-4 flex gap-3'>
              <input
                type='text'
                placeholder='Contribute...'
                className='flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-base text-white outline-none focus:border-[#D4AF37]'
              />
              <button className='p-3 bg-[#D4AF37] rounded-full text-[#0D1642] hover:bg-white'>
                <Send size={18} />
              </button>
            </div>
          </GlassPanel>
        </div>
      )}
    </div>
  );
};

export default CommonwealthTab;

