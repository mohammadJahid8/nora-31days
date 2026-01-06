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
    <div className='space-y-1 w-full'>
      <div className='flex justify-between items-center'>
        <label className='text-[0.52rem] tracking-[0.2em] uppercase text-[#D4AF37]/60 font-black block'>
          {label}
        </label>
        {DOCTORATE_LOGIC[label] && onLogic && (
          <button
            onClick={() => onLogic(label)}
            className='text-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors'
          >
            <Info size={12} />
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
        className={`w-full bg-transparent border-b border-[#D4AF37]/20 py-1 text-white focus:border-[#D4AF37] transition-all font-medium text-base placeholder:text-white/5 ${
          fiduciary ? 'font-mono' : ''
        }`}
      />
    </div>
  );
};

export default FiduciaryInput;
