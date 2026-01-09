import { ArrowLeft, Layers } from 'lucide-react';
import GlobalStyles from './global-styles';

const BlueprintSelection = ({ selectedAccord, setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] px-4 py-6 md:p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('accord')}
        className='absolute top-4 left-4 md:top-10 md:left-10 flex items-center gap-2 md:gap-3 text-white/50 hover:text-[#D4AF37] transition-all uppercase tracking-wider text-sm md:text-base font-bold p-2'
      >
        <ArrowLeft size={18} className='md:w-5 md:h-5' /> Back
      </button>
      <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.15em] md:tracking-[0.3em] mb-8 md:mb-16 mt-12 md:mt-0 text-center'>
        Wealth Path <span className='gold-text-gradient'>Specifics</span>
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl w-full'>
        {selectedAccord.blueprints.map((bp) => (
          <div
            key={bp}
            onClick={() => {
              updateRegistry({ blueprint: bp });
              setView('fiduciary-audit');
            }}
            className='cursor-pointer bg-white/5 border border-white/10 p-6 md:p-10 rounded-xl md:rounded-2xl hover:border-[#D4AF37] transition-all hover:bg-white/10 shadow-xl text-center group active:scale-[0.98]'
          >
            <Layers
              size={24}
              className='mx-auto mb-4 md:mb-6 text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-all md:w-8 md:h-8'
            />
            <h3 className='text-sm md:text-lg font-light uppercase tracking-wider leading-tight'>
              {bp}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlueprintSelection;
