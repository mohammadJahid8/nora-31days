import { ArrowLeft, Layers } from 'lucide-react';
import GlobalStyles from './global-styles';

const BlueprintSelection = ({ selectedAccord, setView, updateRegistry }) => {
  return (
    <div className='min-h-screen bg-[#0D1642] p-10 flex flex-col items-center text-white relative'>
      <GlobalStyles />
      <button
        onClick={() => setView('accord')}
        className='absolute top-10 left-10 flex items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-all uppercase tracking-widest text-xs font-black'
      >
        <ArrowLeft size={16} /> Previous Node
      </button>
      <h2 className='text-5xl md:text-8xl font-extralight uppercase tracking-[0.4em] mb-24 text-center'>
        Wealth Path <span className='gold-text-gradient'>Specifics</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full'>
        {selectedAccord.blueprints.map((bp) => (
          <div
            key={bp}
            onClick={() => {
              updateRegistry({ blueprint: bp });
              setView('fiduciary-audit');
            }}
            className='cursor-pointer bg-white/5 border border-white/10 p-12 rounded-3xl hover:border-[#D4AF37] transition-all hover:bg-white/10 shadow-xl text-center group'
          >
            <Layers
              size={32}
              className='mx-auto mb-8 text-[#D4AF37] opacity-40 group-hover:opacity-100 transition-all'
            />
            <h3 className='text-xl font-extralight uppercase tracking-widest leading-tight'>
              {bp}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlueprintSelection;
