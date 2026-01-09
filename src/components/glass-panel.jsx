const GlassPanel = ({
  children,
  className = '',
  title = '',
  icon: Icon,
  floating = false,
  scrollable = false,
}) => (
  <div
    className={`relative bg-[#0D1642]/98 border border-[#D4AF37]/20 rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.6)] transition-all duration-700 hover:border-[#D4AF37]/50 ${
      floating ? 'floating-vault' : ''
    } ${className}`}
  >
    {title && (
      <div className='flex items-center justify-between px-4 py-3 md:px-8 md:py-5 border-b border-[#D4AF37]/10 bg-white/5'>
        <div className='flex items-center gap-2 md:gap-3'>
          {Icon && <Icon size={16} className='md:w-5 md:h-5 text-[#D4AF37]' />}
          <span className='text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold text-[#D4AF37]'>
            {title}
          </span>
        </div>
      </div>
    )}
    <div
      className={`p-4 md:p-8 ${
        scrollable ? 'fiduciary-scroll h-full max-h-[500px] md:max-h-[650px]' : ''
      }`}
    >
      {children}
    </div>
  </div>
);

export default GlassPanel;
