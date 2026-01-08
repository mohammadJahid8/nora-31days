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
    <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0D1642]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-4xl w-full h-[80vh] flex flex-col relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowHabakkuk(false)}
          className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
        >
          <XCircle size={32} />
        </button>
        <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8'>
          <MapPin size={48} className='text-[#D4AF37]' />
          <div>
            <h2 className='text-4xl font-extralight uppercase tracking-widest text-white'>
              The Habakkuk Board
            </h2>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
              Write the Vision, Make it Plain
            </p>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto py-12 px-8 space-y-12 fiduciary-scroll'>
          <div className='grid grid-cols-2 gap-8'>
            <div className='p-6 bg-white/5 border border-white/10 rounded-xl'>
              <p className='text-xs font-light text-white/60 mb-4'>
                Add Target Asset Node
              </p>
              <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Asset Name (e.g. Dream Estate)'
                  className='w-full bg-white/5 border-b border-white/20 py-2 text-white outline-none focus:border-[#D4AF37]'
                />
                <input
                  type='number'
                  placeholder='Acquisition Cost'
                  className='w-full bg-white/5 border-b border-white/20 py-2 text-white outline-none focus:border-[#D4AF37]'
                />
                <button
                  onClick={() => addHabakkukTarget('New Asset', 1000000)}
                  className='w-full py-3 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] rounded-lg uppercase text-xs font-black tracking-widest hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
                >
                  Map Vision
                </button>
              </div>
            </div>
            <div className='space-y-4'>
              {habakkukTargets.map((t, i) => (
                <div
                  key={i}
                  className='p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center'
                >
                  <div>
                    <p className='text-sm font-bold text-white uppercase'>
                      {t.name}
                    </p>
                    <p className='text-xs text-white/40'>
                      ${t.cost.toLocaleString()}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-[0.6rem] uppercase tracking-widest text-[#D4AF37]'>
                      Est. Acquisition
                    </p>
                    <p className='text-lg font-mono text-white'>{t.date}</p>
                  </div>
                </div>
              ))}
              {habakkukTargets.length === 0 && (
                <p className='text-center text-white/20 italic'>
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

