import { Fingerprint } from 'lucide-react';
import GlobalStyles from './global-styles';
import GlassPanel from './glass-panel';
import FiduciaryInput from './fiduciary-input';

const Auth = ({
  isEnroll,
  setIsEnroll,
  authName,
  setAuthName,
  authEmail,
  setAuthEmail,
  setLogicLabel,
  updateRegistry,
  setView,
}) => {
  return (
    <div className='min-h-screen bg-[#0D1642] flex flex-col items-center justify-center px-4 py-8 md:p-6 text-white overflow-hidden relative'>
      <GlobalStyles />
      <div className='text-center mb-8 md:mb-16 relative z-20'>
        <p className='text-[#D4AF37] text-sm md:text-base tracking-[0.3em] md:tracking-[0.5em] uppercase mb-6 md:mb-10 font-bold flex items-center justify-center gap-3 md:gap-4'>
          <Fingerprint size={18} className='md:w-6 md:h-6' /> Access Protocol
          Active
        </p>
        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.1em] md:tracking-[0.2em] leading-[0.95] urbanist-font uppercase'>
          <span className='gold-text-gradient block'>NORA</span>
          <span className='gold-text-gradient block mt-1 md:mt-2'>
            CAPITAL GROUP
          </span>
        </h1>
        <p className='text-white/30 tracking-[0.3em] md:tracking-[0.5em] uppercase text-xs md:text-sm font-bold mt-6 md:mt-12'>
          Absolute Stewardship Command | Doctorate Tier
        </p>
        <p className='text-[#D4AF37]/50 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold mt-3 md:mt-4'>
          Jesus Christ is the Cornerstone
        </p>
      </div>
      <GlassPanel
        floating={true}
        className='w-full max-w-xl p-0 relative shadow-[0_0_100px_rgba(212,175,55,0.15)]'
      >
        <div className='scanning-line'></div>
        <div className='flex border-b border-[#D4AF37]/10'>
          <button
            onClick={() => setIsEnroll(false)}
            className={`flex-1 py-4 md:py-6 tracking-[0.15em] md:tracking-[0.3em] text-sm md:text-base uppercase font-bold transition-all ${
              !isEnroll
                ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-b-2 border-[#D4AF37]'
                : 'text-white/40'
            }`}
          >
            Steward Login
          </button>
          <button
            onClick={() => setIsEnroll(true)}
            className={`flex-1 py-4 md:py-6 tracking-[0.15em] md:tracking-[0.3em] text-sm md:text-base uppercase font-bold transition-all ${
              isEnroll
                ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-b-2 border-[#D4AF37]'
                : 'text-white/40'
            }`}
          >
            Architect Enroll
          </button>
        </div>
        <div className='p-6 md:p-10 space-y-6 md:space-y-10'>
          <FiduciaryInput
            label='Legal Identity Name'
            value={authName}
            onChange={setAuthName}
            onLogic={setLogicLabel}
          />
          <FiduciaryInput
            label='Primary Neural Email'
            value={authEmail}
            onChange={setAuthEmail}
            onLogic={setLogicLabel}
          />
          <button
            onClick={async () => {
              await updateRegistry({ name: authName, email: authEmail });
              isEnroll ? setView('season') : setView('dashboard');
            }}
            disabled={!authName || !authEmail}
            className='w-full py-4 md:py-6 border-2 border-[#D4AF37] text-[#D4AF37] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold text-base md:text-lg hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all disabled:opacity-40 disabled:cursor-not-allowed'
          >
            Initialize Session
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default Auth;
