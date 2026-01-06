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
    <div className='min-h-screen bg-[#0D1642] flex flex-col items-center justify-center p-6 text-white overflow-hidden relative'>
      <GlobalStyles />
      <div className='text-center mb-16 relative z-20'>
        <p className='text-[#D4AF37] text-[0.65rem] tracking-[0.7em] uppercase mb-10 font-black flex items-center justify-center gap-4'>
          <Fingerprint size={16} /> Access Protocol Active
        </p>
        <h1 className='text-7xl md:text-[8.5rem] font-extralight tracking-[0.28em] leading-[0.9] urbanist-font uppercase'>
          <span className='gold-text-gradient block'>NORA</span>
          <span className='gold-text-gradient block mt-2'>CAPITAL GROUP</span>
        </h1>
        <p className='text-white/20 tracking-[1em] uppercase text-[0.55rem] font-black mt-16'>
          Absolute Stewardship Command | Doctorate Tier
        </p>
        <p className='text-[#D4AF37]/40 text-[0.45rem] uppercase tracking-[0.6em] font-black mt-4'>
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
            className={`flex-1 py-8 tracking-[0.4em] text-[0.6rem] uppercase font-black transition-all ${
              !isEnroll
                ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-b-2 border-[#D4AF37]'
                : 'text-white/30'
            }`}
          >
            Steward Login
          </button>
          <button
            onClick={() => setIsEnroll(true)}
            className={`flex-1 py-8 tracking-[0.4em] text-[0.6rem] uppercase font-black transition-all ${
              isEnroll
                ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-b-2 border-[#D4AF37]'
                : 'text-white/30'
            }`}
          >
            Architect Enroll
          </button>
        </div>
        <div className='p-12 space-y-12'>
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
            className='w-full py-8 border-2 border-[#D4AF37] text-[#D4AF37] tracking-[0.6em] uppercase font-black text-xs hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
          >
            Initialize Session
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default Auth;
