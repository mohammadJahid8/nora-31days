import { ArrowLeft } from 'lucide-react';
import GlobalStyles from './global-styles';
import { GENERAL_GOALS } from '../utils/data';

const GoalSelection = ({ setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('season')}
        className='absolute top-10 left-10 flex items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-all uppercase tracking-widest text-xs font-black'
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h2 className='text-5xl md:text-8xl font-extralight uppercase tracking-[0.4em] mb-24 text-center'>
        Goal <span className='gold-text-gradient'>Horizon</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-6 max-w-380 w-full'>
        {GENERAL_GOALS.map((g) => {
          const GoalIcon = g.icon;
          return (
            <div
              key={g.id}
              onClick={() => {
                updateRegistry({ goal: g.title });
                setView('accord');
              }}
              className='group cursor-pointer bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-[#D4AF37] transition-all duration-500 text-center flex flex-col items-center h-[340px] justify-between shadow-2xl'
            >
              <div className='w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                <GoalIcon size={28} className='text-[#D4AF37]' />
              </div>
              <h3 className='text-base font-extralight uppercase tracking-widest leading-tight h-12 flex items-center'>
                {g.title}
              </h3>
              <p className='text-white/20 text-[0.65rem] leading-relaxed font-light'>
                {g.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalSelection;
