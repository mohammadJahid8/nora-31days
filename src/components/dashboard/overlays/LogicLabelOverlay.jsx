import GlassPanel from '../../glass-panel';
import { DOCTORATE_LOGIC } from '../../../utils/data';

const LogicLabelOverlay = ({ logicLabel, setLogicLabel }) => {
  if (!logicLabel) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#0A1128]/80 backdrop-blur-md'>
      <GlassPanel
        className='max-w-md w-full animate-in zoom-in-95 duration-300 shadow-[0_0_100px_rgba(212,175,55,0.2)]'
        title='Doctorate Logic'
      >
        <div className='space-y-4 md:space-y-6'>
          <h3 className='text-xl md:text-2xl font-extralight uppercase text-[#D4AF37] tracking-wider leading-tight'>
            {logicLabel}
          </h3>
          <p className='text-sm md:text-base font-light text-white/80 leading-relaxed italic'>
            "{DOCTORATE_LOGIC[logicLabel]}"
          </p>
          <button
            onClick={() => setLogicLabel(null)}
            className='w-full py-3 md:py-4 border border-[#D4AF37]/20 text-[#D4AF37] text-sm md:text-base font-bold uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-all rounded-lg'
          >
            Clear
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default LogicLabelOverlay;

