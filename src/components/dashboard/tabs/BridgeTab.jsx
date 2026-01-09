import { Activity, Brain, Calendar, FileBadge, Hourglass } from 'lucide-react';
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
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            Funding <span className='gold-text-gradient'>Bridge</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            Capital Allocation
          </p>
        </div>
        <button
          onClick={() => setShowComplianceOverlay(true)}
          className='flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg md:rounded-xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
        >
          <FileBadge size={16} className='md:w-5 md:h-5' />
          <span className='text-xs md:text-sm font-bold uppercase tracking-wider'>
            Generate Packet
          </span>
        </button>
      </div>

      {/* Live Market Ticker */}
      <div className='w-full bg-[#0D1642]/80 border-y border-[#D4AF37]/20 overflow-hidden py-2'>
        <div className='animate-marquee whitespace-nowrap flex gap-6 md:gap-10 text-xs md:text-sm font-mono text-[#D4AF37] tracking-wider uppercase'>
          <span>Prime: 8.50%</span>
          <span>SBA 7(a): 11.25%</span>
          <span>10Y Treasury: 4.10%</span>
          <span>CPI: 3.2%</span>
          <span>Fed Funds: 5.50%</span>
          <span>SOFR: 5.31%</span>
        </div>
      </div>

      <GlassPanel title='Readiness Analysis' icon={Hourglass}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center'>
          <div className='text-center'>
            <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2 md:mb-4'>
              Readiness Score
            </p>
            <div className='text-5xl md:text-6xl font-thin font-mono text-[#D4AF37]'>
              {fundingReadiness.score}%
            </div>
          </div>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl'>
              <Calendar size={20} className='text-[#D4AF37] md:w-6 md:h-6 shrink-0' />
              <div className='min-w-0'>
                <p className='text-xs md:text-sm font-bold text-white/50 uppercase tracking-wider'>
                  Projected Horizon
                </p>
                <p className='text-lg md:text-xl font-light uppercase text-white truncate'>
                  {fundingReadiness.horizon}
                </p>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {FUNDING_VECTORS.map((v) => (
          <GlassPanel key={v.id} title={v.title}>
            <div className='space-y-4 flex flex-col justify-between h-full'>
              <div>
                <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2'>
                  Cap: {v.limit}
                </p>
                <p className='text-sm md:text-base text-white/50 leading-relaxed font-light'>
                  {v.desc}
                </p>
              </div>
              <button className='w-full py-3 md:py-4 border border-[#D4AF37]/30 text-[#D4AF37] text-xs md:text-sm font-bold uppercase hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all rounded-lg'>
                Initialize
              </button>
            </div>
          </GlassPanel>
        ))}
      </div>
      
      <GlassPanel title='Neural Capital Audit' icon={Brain} scrollable={true}>
        <div className='space-y-6 md:space-y-10'>
          <div className='p-6 md:p-10 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl'>
            {aiAnalysis ? (
              <div className='text-base md:text-lg font-light leading-relaxed text-white/80 whitespace-pre-wrap'>
                {aiAnalysis}
              </div>
            ) : (
              <div className='flex flex-col items-center py-8 md:py-12 opacity-30'>
                <Activity size={40} className='mb-4 md:mb-6 animate-pulse text-[#D4AF37] md:w-12 md:h-12' />
                <p className='text-sm md:text-base tracking-wider uppercase font-bold'>
                  Awaiting Analysis
                </p>
              </div>
            )}
          </div>
          <button
            onClick={runNeuralAudit}
            disabled={aiLoading}
            className='w-full py-4 md:py-6 border-2 border-[#D4AF37] text-[#D4AF37] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-base md:text-lg hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all disabled:opacity-50 rounded-lg md:rounded-none'
          >
            Run Gap Analysis
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default BridgeTab;

