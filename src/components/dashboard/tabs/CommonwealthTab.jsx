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
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            The <span className='gold-text-gradient'>Commonwealth</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Kingdom Economy & Capital Pool
          </p>
        </div>
        <Crown size={64} className='opacity-10 text-[#D4AF37]' />
      </div>

      {/* GOLDEN GATE LOCK */}
      {commonwealthLocked ? (
        <div className='relative min-h-[600px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/20'>
          <div className='absolute inset-0 bg-[#0D1642] z-0 flex flex-col items-center justify-center space-y-8 p-12 text-center'>
            <div className='w-24 h-24 rounded-full border-2 border-[#D4AF37] flex items-center justify-center animate-pulse'>
              <Lock size={40} className='text-[#D4AF37]' />
            </div>
            <h3 className='text-4xl font-extralight uppercase tracking-widest text-white'>
              Dominion Access Locked
            </h3>
            <p className='text-sm font-light text-white/60 max-w-xl leading-relaxed'>
              The Commonwealth is the internal economy of Nora Capital.
              Access is reserved for Governors who have sealed the
              31-Day Protocol and established a verified Vessel Entity.
            </p>
            <button
              onClick={() => setCommonwealthLocked(false)}
              className='px-10 py-5 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]'
            >
              Unlock Kingdom Access
            </button>
          </div>
          <div className='absolute inset-0 blur-xl opacity-20 pointer-events-none z-[-1] grid grid-cols-3 gap-8 p-12'>
            <div className='bg-white/10 h-64 rounded-2xl border border-white/20'></div>
            <div className='bg-white/10 h-64 rounded-2xl border border-white/20'></div>
            <div className='bg-white/10 h-64 rounded-2xl border border-white/20'></div>
            <div className='col-span-2 bg-white/10 h-48 rounded-2xl border border-white/20'></div>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in zoom-in-95'>
          <GlassPanel title='Barter Exchange' icon={Handshake}>
            <div className='space-y-4'>
              {[
                'Legal Contract Review',
                'Brand Identity Design',
                'Tax Strategy Consult',
                'SEO Audit',
              ].map((s) => (
                <div
                  key={s}
                  className='flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#D4AF37]/50 cursor-pointer transition-all'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-xs'>
                      SV
                    </div>
                    <span className='text-xs font-light text-white'>
                      {s}
                    </span>
                  </div>
                  <button className='text-[0.5rem] font-black uppercase text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded'>
                    Request Swap
                  </button>
                </div>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel title='Capital Pool Deal Room' icon={Gem}>
            <div className='space-y-4'>
              {[
                {
                  title: 'Multifamily Syndication - Austin, TX',
                  raise: '$5M',
                  min: '$50k',
                },
                {
                  title: 'SaaS Seed Round - FinTech',
                  raise: '$2M',
                  min: '$25k',
                },
              ].map((d) => (
                <div
                  key={d.title}
                  className='p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer'
                >
                  <div className='flex justify-between mb-2'>
                    <span className='text-xs font-bold text-white uppercase'>
                      {d.title}
                    </span>
                    <span className='text-[0.6rem] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded'>
                      OPEN
                    </span>
                  </div>
                  <div className='flex gap-4 text-[0.6rem] text-white/40'>
                    <span>Target Raise: {d.raise}</span>
                    <span>Min Check: {d.min}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel
            title='Iron Sharpens Iron'
            icon={MessageSquareCode}
            className='lg:col-span-2'
          >
            <div className='h-64 flex flex-col space-y-4 overflow-y-auto p-4'>
              {/* MOCK CHAT FEED */}
              <div className='flex gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs font-bold'>
                  JD
                </div>
                <div className='bg-white/5 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
                  <p className='text-xs font-light text-white'>
                    Has anyone utilized the SBA 7(a) for acquisition of
                    a SaaS under $2M ARR?
                  </p>
                </div>
              </div>
              <div className='flex gap-3 flex-row-reverse'>
                <div className='w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-bold'>
                  MK
                </div>
                <div className='bg-[#D4AF37]/10 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl'>
                  <p className='text-xs font-light text-white'>
                    Yes, I just closed one. The key is the Debt Service
                    Coverage Ratio (DSCR) being above 1.25x. Check the
                    Armory for the P&L template.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-4 flex gap-4'>
              <input
                type='text'
                placeholder='Contribute to the war room...'
                className='flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white outline-none focus:border-[#D4AF37]'
              />
              <button className='p-2 bg-[#D4AF37] rounded-full text-[#0D1642] hover:bg-white'>
                <Send size={14} />
              </button>
            </div>
          </GlassPanel>
        </div>
      )}
    </div>
  );
};

export default CommonwealthTab;

