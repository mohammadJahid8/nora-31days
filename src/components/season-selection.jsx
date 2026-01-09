import { ArrowLeft } from 'lucide-react';
import GlobalStyles from './global-styles';
import { SEASONS } from '../utils/data';

const SeasonSelection = ({ setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] px-4 py-6 md:p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('auth')}
        className='absolute top-4 left-4 md:top-10 md:left-10 flex items-center gap-2 md:gap-3 text-white/50 hover:text-[#D4AF37] transition-all uppercase tracking-wider text-sm md:text-base font-bold p-2'
      >
        <ArrowLeft size={18} className='md:w-5 md:h-5' /> Back
      </button>
      <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.15em] md:tracking-[0.3em] mb-8 md:mb-16 mt-12 md:mt-0 text-center'>
        Baseline <span className='gold-text-gradient'>Season</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl w-full'>
        {SEASONS.map((s) => (
          <div
            key={s.id}
            onClick={() => {
              updateRegistry({ season: s.id });
              setView('goal');
            }}
            className={`cursor-pointer bg-white/5 border border-white/5 border-l-4 md:border-l-8 ${s.border} p-6 md:p-10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all shadow-xl active:scale-[0.98]`}
          >
            <h3 className='text-xl md:text-2xl font-extralight uppercase mb-2 md:mb-3 tracking-wider leading-tight'>
              {s.label}
            </h3>
            <p className='text-xs md:text-sm text-[#D4AF37] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-4 md:mb-6'>
              {s.id}
            </p>
            <p className='text-sm md:text-base text-white/50 leading-relaxed'>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonSelection;
