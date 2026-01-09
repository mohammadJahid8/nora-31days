import { ArrowLeft } from 'lucide-react';
import GlobalStyles from './global-styles';
import { GENERAL_GOALS } from '../utils/data';

const GoalSelection = ({ setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] px-4 py-6 md:p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('season')}
        className='absolute top-4 left-4 md:top-10 md:left-10 flex items-center gap-2 md:gap-3 text-white/50 hover:text-[#D4AF37] transition-all uppercase tracking-wider text-sm md:text-base font-bold p-2'
      >
        <ArrowLeft size={18} className='md:w-5 md:h-5' /> Back
      </button>
      <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.15em] md:tracking-[0.3em] mb-8 md:mb-16 mt-12 md:mt-0 text-center'>
        Goal <span className='gold-text-gradient'>Horizon</span>
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 max-w-7xl w-full'>
        {GENERAL_GOALS.map((g) => {
          const GoalIcon = g.icon;
          return (
            <div
              key={g.id}
              onClick={() => {
                updateRegistry({ goal: g.title });
                setView('accord');
              }}
              className='group cursor-pointer bg-white/5 border border-white/10 p-4 md:p-8 rounded-xl md:rounded-2xl hover:border-[#D4AF37] transition-all duration-300 text-center flex flex-col items-center min-h-[180px] md:min-h-[280px] justify-between shadow-xl active:scale-[0.98]'
            >
              <div className='w-12 h-12 md:w-16 md:h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                <GoalIcon size={20} className='md:w-7 md:h-7 text-[#D4AF37]' />
              </div>
              <h3 className='text-sm md:text-lg font-light uppercase tracking-wider leading-tight flex items-center text-center'>
                {g.title}
              </h3>
              <p className='text-white/40 text-xs md:text-sm leading-relaxed hidden sm:block'>
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
