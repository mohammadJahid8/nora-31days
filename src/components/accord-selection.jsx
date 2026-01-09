import { ArrowLeft, ChevronRight } from 'lucide-react';
import GlobalStyles from './global-styles';
import { ACCORDS } from '../utils/data';

const AccordSelection = ({ setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] px-4 py-6 md:p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('goal')}
        className='absolute top-4 left-4 md:top-10 md:left-10 flex items-center gap-2 md:gap-3 text-white/50 hover:text-[#D4AF37] transition-all uppercase tracking-wider text-sm md:text-base font-bold p-2'
      >
        <ArrowLeft size={18} className='md:w-5 md:h-5' /> Back
      </button>
      <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.15em] md:tracking-[0.3em] mb-8 md:mb-16 mt-12 md:mt-0 text-center'>
        Master <span className='gold-text-gradient'>Accord</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl w-full'>
        {ACCORDS.map((a, idx) => (
          <div
            key={a.id}
            onClick={() => {
              updateRegistry({ accord: a.id });
              setView('blueprint');
            }}
            className='group cursor-pointer bg-white/5 border border-[#D4AF37]/20 p-6 md:p-10 rounded-xl md:rounded-2xl hover:border-[#D4AF37] transition-all duration-300 shadow-xl active:scale-[0.98]'
          >
            <p className='text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4 md:mb-8 font-bold'>
              Accord Category {String.fromCharCode(65 + idx)}
            </p>
            <h3 className='text-2xl md:text-3xl font-extralight uppercase mb-4 md:mb-8 leading-tight tracking-wider'>
              {a.title}
            </h3>
            <p className='text-white/50 text-sm md:text-base leading-relaxed mb-6 md:mb-10'>
              {a.desc}
            </p>
            <div className='flex items-center gap-2 md:gap-3 text-[#D4AF37] font-bold tracking-wider text-sm md:text-base uppercase opacity-60 group-hover:opacity-100 transition-opacity'>
              Initialize Path <ChevronRight size={16} className='md:w-5 md:h-5' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordSelection;
