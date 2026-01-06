import { ArrowLeft, ChevronRight } from 'lucide-react';
import GlobalStyles from './global-styles';
import { ACCORDS } from '../utils/data';

const AccordSelection = ({ setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('goal')}
        className='absolute top-10 left-10 flex items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-all uppercase tracking-widest text-xs font-black'
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h2 className='text-5xl md:text-8xl font-extralight uppercase tracking-[0.4em] mb-24 text-center'>
        Master <span className='gold-text-gradient'>Accord</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full'>
        {ACCORDS.map((a, idx) => (
          <div
            key={a.id}
            onClick={() => {
              updateRegistry({ accord: a.id });
              setView('blueprint');
            }}
            className='group cursor-pointer bg-white/5 border border-[#D4AF37]/20 p-14 rounded-3xl hover:border-[#D4AF37] transition-all duration-500 shadow-2xl'
          >
            <p className='text-[#D4AF37] text-[0.7rem] tracking-[0.5em] uppercase mb-10 font-black'>
              Accord Category {String.fromCharCode(65 + idx)}
            </p>
            <h3 className='text-4xl font-extralight uppercase mb-10 leading-none tracking-widest'>
              {a.title}
            </h3>
            <p className='text-white/40 text-sm leading-relaxed mb-12 h-20 font-light'>
              {a.desc}
            </p>
            <div className='flex items-center gap-3 text-[#D4AF37] font-black tracking-widest text-[0.6rem] uppercase opacity-40 group-hover:opacity-100'>
              Initialize Path <ChevronRight size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordSelection;
