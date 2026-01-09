import { Printer, XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const GeneratorOverlay = ({
  showGeneratorOverlay,
  setShowGeneratorOverlay,
  activeGeneratorType,
  profile,
}) => {
  if (!showGeneratorOverlay) return null;

  return (
    <div className='fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#0A1128]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-2xl w-full relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowGeneratorOverlay(false)}
          className='absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white transition-all p-1'
        >
          <XCircle size={24} className='md:w-7 md:h-7' />
        </button>
        <div className='flex items-center gap-4 md:gap-6 border-b border-[#D4AF37]/20 pb-6 md:pb-8 mb-6 md:mb-8'>
          <Printer size={32} className='text-[#D4AF37] md:w-10 md:h-10 shrink-0' />
          <div className='min-w-0'>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-extralight uppercase tracking-wider text-white'>
              Generator Active
            </h2>
            <p className='text-sm md:text-base font-bold text-[#D4AF37] uppercase tracking-wider mt-1 md:mt-2 truncate'>
              {activeGeneratorType}
            </p>
          </div>
        </div>
        <div className='space-y-6 md:space-y-8 text-center py-8 md:py-12'>
          <div className='animate-spin w-10 h-10 md:w-12 md:h-12 border-t-2 border-[#D4AF37] rounded-full mx-auto' />
          <p className='text-sm md:text-base font-light uppercase tracking-wider'>
            Synthesizing data for {profile.name}...
          </p>
          <p className='text-xs md:text-sm font-mono text-white/50'>
            Drafting Summary... Calibrating... Formatting...
          </p>
          <button className='px-6 md:px-8 py-3 md:py-4 bg-[#D4AF37] text-[#0D1642] font-bold text-sm md:text-base uppercase tracking-wider rounded-lg hover:bg-white transition-all shadow-xl mt-4 md:mt-8'>
            Download Asset
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default GeneratorOverlay;

