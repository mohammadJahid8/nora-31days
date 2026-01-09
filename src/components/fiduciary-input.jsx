import { useEffect, useState } from 'react';
import { DOCTORATE_LOGIC } from '../utils/data';
import { Info } from 'lucide-react';

const FiduciaryInput = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  fiduciary = false,
  onLogic,
}) => {
  const [local, setLocal] = useState(value);
  useEffect(() => {
    setLocal(value);
  }, [value]);
  return (
    <div className='space-y-2 w-full'>
      <div className='flex justify-between items-center'>
        <label className='text-sm md:text-base tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#D4AF37]/70 font-bold block'>
          {label}
        </label>
        {DOCTORATE_LOGIC[label] && onLogic && (
          <button
            onClick={() => onLogic(label)}
            className='text-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors p-1'
          >
            <Info size={16} className='md:w-5 md:h-5' />
          </button>
        )}
      </div>
      <input
        type={type}
        value={String(local || '')}
        onChange={(e) => {
          setLocal(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b-2 border-[#D4AF37]/20 py-3 md:py-4 text-white focus:border-[#D4AF37] transition-all font-medium text-lg md:text-xl placeholder:text-white/10 ${
          fiduciary ? 'font-mono' : ''
        }`}
      />
    </div>
  );
};

export default FiduciaryInput;
