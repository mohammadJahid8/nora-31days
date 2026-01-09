import { XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const SimulatorOverlay = ({
  isSimulating,
  setIsSimulating,
  simulationData,
  setSimulationData,
  institutionalDelta,
}) => {
  if (!isSimulating) return null;

  return (
    <div className='fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 bg-[#0A1128]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel
        className='max-w-xl w-full relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'
        title='War Game Simulator'
      >
        <button
          onClick={() => setIsSimulating(false)}
          className='absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white transition-all p-1'
        >
          <XCircle size={24} className='md:w-7 md:h-7' />
        </button>
        <div className='space-y-6 md:space-y-8 mt-4 md:mt-6'>
          <div>
            <label className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider block mb-3 md:mb-4'>
              Revenue Adjustment
            </label>
            <input
              type='range'
              min='0'
              max='100000'
              step='1000'
              value={simulationData.revenueAdj}
              onChange={(e) =>
                setSimulationData((p) => ({
                  ...p,
                  revenueAdj: parseInt(e.target.value),
                }))
              }
              className='w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#D4AF37]'
            />
            <p className='text-right text-sm md:text-base font-mono mt-2 text-[#D4AF37]'>
              +${simulationData.revenueAdj.toLocaleString()}
            </p>
          </div>
          <div>
            <label className='text-xs md:text-sm font-bold text-white/60 uppercase tracking-wider block mb-3 md:mb-4'>
              Debt Load
            </label>
            <input
              type='range'
              min='0'
              max='50000'
              step='500'
              value={simulationData.debtAdj}
              onChange={(e) =>
                setSimulationData((p) => ({
                  ...p,
                  debtAdj: parseInt(e.target.value),
                }))
              }
              className='w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-red-500'
            />
            <p className='text-right text-sm md:text-base font-mono mt-2 text-red-500'>
              +${simulationData.debtAdj.toLocaleString()}
            </p>
          </div>
          <div className='p-4 md:p-6 bg-white/5 rounded-xl border border-white/10 text-center'>
            <p className='text-xs md:text-sm uppercase tracking-wider text-white/50 mb-2'>
              Simulated Delta
            </p>
            <p
              className={`text-4xl md:text-5xl font-thin font-mono ${
                institutionalDelta > 30 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {institutionalDelta}%
            </p>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default SimulatorOverlay;

