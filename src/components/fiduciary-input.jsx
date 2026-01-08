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
        <label className='text-xs md:text-sm tracking-[0.2em] uppercase text-[#D4AF37]/60 font-black block'>
          {label}
        </label>
        {DOCTORATE_LOGIC[label] && onLogic && (
          <button
            onClick={() => onLogic(label)}
            className='text-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors'
          >
            <Info size={14} className='md:w-4 md:h-4' />
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
        className={`w-full bg-transparent border-b border-[#D4AF37]/20 py-2 md:py-3 text-white focus:border-[#D4AF37] transition-all font-medium text-base md:text-lg placeholder:text-white/5 ${
          fiduciary ? 'font-mono' : ''
        }`}
      />
    </div>
  );
};

export default FiduciaryInput;
