import { Brain, Calendar, FileBadge, Hourglass } from 'lucide-react';
import { Activity } from 'react';
import GlassPanel from '../../glass-panel';
import { FUNDING_VECTORS } from '../../../utils/data';

const BridgeTab = ({
  setShowComplianceOverlay,
  fundingReadiness,
  aiAnalysis,
  aiLoading,
  runNeuralAudit,
}) => {
  return (
    <div className='space-y-20 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            Funding <span className='gold-text-gradient'>Bridge</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Multivariate Allocation
          </p>
        </div>
        <button
          onClick={() => setShowComplianceOverlay(true)}
          className='flex items-center gap-4 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
        >
          <FileBadge size={16} />
          <span className='text-[0.6rem] font-black uppercase tracking-widest'>
            Generate Packet
          </span>
        </button>
      </div>

      {/* 10.2 LIVE MARKET TICKER */}
      <div className='w-full bg-[#0D1642]/80 border-y border-[#D4AF37]/20 overflow-hidden py-2 mb-8'>
        <div className='animate-marquee whitespace-nowrap flex gap-12 text-[0.6rem] font-mono text-[#D4AF37] tracking-widest uppercase'>
          <span>Prime Rate: 8.50%</span>
          <span>SBA 7(a) Peg: 11.25%</span>
          <span>10Y Treasury: 4.10%</span>
          <span>CPI Inflation: 3.2%</span>
          <span>Fed Funds: 5.50%</span>
          <span>SOFR: 5.31%</span>
        </div>
      </div>

      <GlassPanel
        title='Institutional Readiness Analysis'
        icon={Hourglass}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-center'>
          <div className='text-center'>
            <p className='text-[0.6rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4'>
              Readiness score
            </p>
            <div className='text-6xl font-thin font-mono text-[#D4AF37]'>
              {fundingReadiness.score}%
            </div>
          </div>
          <div className='md:col-span-2 space-y-6'>
            <div className='flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl'>
              <Calendar size={24} className='text-[#D4AF37]' />
              <div>
                <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest'>
                  Projected Horizon
                </p>
                <p className='text-2xl font-extralight uppercase text-white'>
                  {fundingReadiness.horizon}
                </p>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {FUNDING_VECTORS.map((v) => (
          <GlassPanel key={v.id} title={v.title}>
            <div className='space-y-6 flex flex-col justify-between h-full'>
              <div>
                <p className='text-[0.55rem] font-black text-[#D4AF37] uppercase tracking-widest mb-2'>
                  Cap Node: {v.limit}
                </p>
                <p className='text-sm text-white/40 leading-relaxed font-light'>
                  {v.desc}
                </p>
              </div>
              <button className='w-full py-4 border border-[#D4AF37]/30 text-[#D4AF37] text-[0.6rem] font-black uppercase hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl'>
                Initialize Vector
              </button>
            </div>
          </GlassPanel>
        ))}
      </div>
      <GlassPanel
        title='Neural Capital Audit'
        icon={Brain}
        scrollable={true}
      >
        <div className='space-y-12'>
          <div className='p-12 bg-white/5 border border-white/10 rounded-[3rem]'>
            {aiAnalysis ? (
              <div className='text-xl font-light leading-relaxed text-white/80 whitespace-pre-wrap'>
                {aiAnalysis}
              </div>
            ) : (
              <div className='flex flex-col items-center py-16 opacity-20'>
                <Activity
                  size={64}
                  className='mb-8 animate-pulse text-[#D4AF37]'
                />
                <p className='text-xs tracking-[0.6em] uppercase font-black'>
                  Awaiting Strategic Signal
                </p>
              </div>
            )}
          </div>
          <button
            onClick={runNeuralAudit}
            disabled={aiLoading}
            className='w-full py-10 border-2 border-[#D4AF37] text-[#D4AF37] font-black tracking-[1em] uppercase text-xs hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl'
          >
            Run Gap Analysis
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default BridgeTab;

