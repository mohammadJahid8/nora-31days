import { ArrowLeft } from 'lucide-react';
import GlobalStyles from './global-styles';
import { SEASONS } from '../utils/data';

const SeasonSelection = ({ setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('auth')}
        className='absolute top-10 left-10 flex items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-all uppercase tracking-widest text-xs font-black'
      >
        <ArrowLeft size={16} /> Revert
      </button>
      <h2 className='text-5xl md:text-8xl font-extralight uppercase tracking-[0.4em] mb-24 text-center'>
        Baseline <span className='gold-text-gradient'>Season</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl w-full'>
        {SEASONS.map((s) => (
          <div
            key={s.id}
            onClick={() => {
              updateRegistry({ season: s.id });
              setView('goal');
            }}
            className={`cursor-pointer bg-white/5 border border-white/5 border-l-8 ${s.border} p-12 rounded-3xl hover:bg-white/10 transition-all shadow-xl`}
          >
            <h3 className='text-2xl font-extralight uppercase mb-3 tracking-widest leading-tight'>
              {s.label}
            </h3>
            <p className='text-[0.6rem] text-[#D4AF37] uppercase tracking-[0.4em] font-black mb-6'>
              {s.id}
            </p>
            <p className='text-xs text-white/40 leading-relaxed'>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonSelection;
