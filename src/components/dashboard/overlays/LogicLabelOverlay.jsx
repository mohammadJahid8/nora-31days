import GlassPanel from '../../glass-panel';
import { DOCTORATE_LOGIC } from '../../../utils/data';

const LogicLabelOverlay = ({ logicLabel, setLogicLabel }) => {
  if (!logicLabel) return null;

  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center p-6 bg-[#0A1128]/80 backdrop-blur-md'>
      <GlassPanel
        className='max-w-md w-full animate-in zoom-in-95 duration-300 shadow-[0_0_100px_rgba(212,175,55,0.2)]'
        title='Doctorate logic node'
      >
        <div className='space-y-6'>
          <h3 className='text-2xl font-extralight uppercase text-[#D4AF37] tracking-widest leading-tight'>
            {logicLabel}
          </h3>
          <p className='text-sm font-light text-white/80 leading-relaxed italic'>
            "{DOCTORATE_LOGIC[logicLabel]}"
          </p>
          <button
            onClick={() => setLogicLabel(null)}
            className='w-full py-4 border border-[#D4AF37]/20 text-[#D4AF37] text-[0.6rem] font-black uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all'
          >
            Clear Node
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default LogicLabelOverlay;

