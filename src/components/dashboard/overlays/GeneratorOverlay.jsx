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
    <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0A1128]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-2xl w-full relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowGeneratorOverlay(false)}
          className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
        >
          <XCircle size={24} />
        </button>
        <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8 mb-8'>
          <Printer size={40} className='text-[#D4AF37]' />
          <div>
            <h2 className='text-3xl font-extralight uppercase tracking-widest text-white'>
              Neural Generator Active
            </h2>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
              {activeGeneratorType}
            </p>
          </div>
        </div>
        <div className='space-y-8 text-center py-12'>
          <div className='animate-spin w-12 h-12 border-t-2 border-[#D4AF37] rounded-full mx-auto' />
          <p className='text-xs font-light uppercase tracking-widest'>
            Synthesizing Registry Data for {profile.name}...
          </p>
          <p className='text-[0.6rem] font-mono text-white/40'>
            Drafting Executive Summary... Calibrating Financials...
            Formatting PDF...
          </p>
          <button className='px-8 py-4 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-xl mt-8'>
            Download Final Asset
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default GeneratorOverlay;

