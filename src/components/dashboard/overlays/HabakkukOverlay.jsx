import { MapPin, XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const HabakkukOverlay = ({
  showHabakkuk,
  setShowHabakkuk,
  habakkukTargets,
  addHabakkukTarget,
}) => {
  if (!showHabakkuk) return null;

  return (
    <div className='fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-[#0D1642]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-4xl w-full h-[90vh] md:h-[80vh] flex flex-col relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowHabakkuk(false)}
          className='absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white transition-all p-1'
        >
          <XCircle size={28} className='md:w-8 md:h-8' />
        </button>
        <div className='flex items-center gap-4 md:gap-6 border-b border-[#D4AF37]/20 pb-6 md:pb-8'>
          <MapPin size={32} className='text-[#D4AF37] md:w-12 md:h-12 shrink-0' />
          <div className='min-w-0'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-extralight uppercase tracking-wider text-white'>
              Habakkuk Board
            </h2>
            <p className='text-sm md:text-base font-bold text-[#D4AF37] uppercase tracking-wider mt-1 md:mt-2'>
              Write the Vision
            </p>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto py-6 md:py-10 space-y-6 md:space-y-10 fiduciary-scroll'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            <div className='p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl'>
              <p className='text-sm md:text-base font-light text-white/60 mb-4'>
                Add Target Asset
              </p>
              <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Asset Name'
                  className='w-full bg-white/5 border-b-2 border-white/20 py-3 text-base md:text-lg text-white outline-none focus:border-[#D4AF37]'
                />
                <input
                  type='number'
                  placeholder='Cost'
                  className='w-full bg-white/5 border-b-2 border-white/20 py-3 text-base md:text-lg text-white outline-none focus:border-[#D4AF37]'
                />
                <button
                  onClick={() => addHabakkukTarget('New Asset', 1000000)}
                  className='w-full py-3 md:py-4 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] rounded-lg uppercase text-sm md:text-base font-bold tracking-wider hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
                >
                  Map Vision
                </button>
              </div>
            </div>
            <div className='space-y-3 md:space-y-4'>
              {habakkukTargets.map((t, i) => (
                <div
                  key={i}
                  className='p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center gap-3'
                >
                  <div className='min-w-0'>
                    <p className='text-sm md:text-base font-bold text-white uppercase truncate'>
                      {t.name}
                    </p>
                    <p className='text-xs md:text-sm text-white/50'>
                      ${t.cost.toLocaleString()}
                    </p>
                  </div>
                  <div className='text-right shrink-0'>
                    <p className='text-xs uppercase tracking-wider text-[#D4AF37]'>
                      Est. Date
                    </p>
                    <p className='text-base md:text-lg font-mono text-white'>{t.date}</p>
                  </div>
                </div>
              ))}
              {habakkukTargets.length === 0 && (
                <p className='text-center text-white/30 italic text-sm md:text-base py-8'>
                  No visions mapped yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default HabakkukOverlay;

