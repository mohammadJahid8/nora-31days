import { Scale, ArrowLeft, Landmark } from 'lucide-react';
import GlobalStyles from './global-styles';
import GlassPanel from './glass-panel';
import FiduciaryInput from './fiduciary-input';

const FiduciaryAudit = ({
  setView,
  profile,
  updateRegistry,
  setLogicLabel,
  personalFiduciaryScore,
  vesselCommandScore,
  institutionalDelta,
  providentTaxShield,
}) => {
  return (
    <div className='min-h-screen bg-[#0D1642] px-4 py-6 md:p-10 flex flex-col items-center text-white relative overflow-y-auto custom-scrollbar'>
      <GlobalStyles />
      <button
        onClick={() => setView('blueprint')}
        className='absolute top-4 left-4 md:top-10 md:left-10 flex items-center gap-2 md:gap-3 text-white/50 hover:text-[#D4AF37] transition-all uppercase tracking-wider text-sm md:text-base font-bold p-2'
      >
        <ArrowLeft size={18} className='md:w-5 md:h-5' /> Back
      </button>
      <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 md:mb-12 mt-12 md:mt-0 text-center'>
        Fiduciary <span className='gold-text-gradient'>Forensic</span>
      </h2>
      
      {/* Mobile: Delta Display First */}
      <div className='lg:hidden w-full max-w-md mb-6'>
        <div className='flex flex-col items-center justify-center text-center p-6 bg-[#13225A]/40 border border-[#D4AF37]/10 rounded-2xl'>
          <p className='text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-bold mb-4'>
            Institutional Delta
          </p>
          <div className='text-6xl font-thin text-[#D4AF37] font-mono leading-none drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] mb-4'>
            {institutionalDelta}%
          </div>
          <p className='text-white/30 text-xs uppercase tracking-wider font-bold mb-4'>
            Velocity Calibration
          </p>
          <div className='p-3 bg-white/5 border border-white/10 rounded-lg flex justify-between w-full'>
            <span className='text-xs uppercase tracking-wider text-white/40'>
              Tax Shield
            </span>
            <span className='text-sm font-bold text-green-500'>
              {providentTaxShield}
            </span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 max-w-[98rem] w-full mb-8 md:mb-16'>
        <GlassPanel
          title='Personal Fiduciary Ledger'
          icon={Scale}
          scrollable={true}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6'>
            <FiduciaryInput
              label='Monthly Net Inflow'
              type='number'
              value={profile.income}
              onChange={(v) => updateRegistry({ income: parseFloat(v) })}
              fiduciary
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Total Monthly Burden'
              type='number'
              value={profile.burden}
              onChange={(v) => updateRegistry({ burden: parseFloat(v) })}
              fiduciary
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Housing Allocation'
              type='number'
              value={profile.rentMortgage}
              onChange={(v) => updateRegistry({ rentMortgage: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Reserve Savings'
              type='number'
              value={profile.savings}
              onChange={(v) => updateRegistry({ savings: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Health Pool'
              type='number'
              value={profile.health}
              onChange={(v) => updateRegistry({ health: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Kingdom Tithing'
              type='number'
              value={profile.tithing}
              onChange={(v) => updateRegistry({ tithing: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
          </div>
          <div className='mt-6 md:mt-10 p-4 md:p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl flex justify-between items-center'>
            <p className='text-xs md:text-sm font-bold uppercase tracking-wider text-[#D4AF37]'>
              Personal Score
            </p>
            <p className='text-3xl md:text-4xl font-thin font-mono text-[#D4AF37]'>
              {personalFiduciaryScore}%
            </p>
          </div>
        </GlassPanel>
        <GlassPanel
          title='Vessel Command Ledger'
          icon={Landmark}
          scrollable={true}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6'>
            <FiduciaryInput
              label='Annual Revenue'
              type='number'
              value={profile.annualRevenue}
              onChange={(v) => updateRegistry({ annualRevenue: parseFloat(v) })}
              fiduciary
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Operational Burn'
              type='number'
              value={profile.operationalBurn}
              onChange={(v) =>
                updateRegistry({ operationalBurn: parseFloat(v) })
              }
              fiduciary
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Payroll'
              type='number'
              value={profile.payroll}
              onChange={(v) => updateRegistry({ payroll: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Marketing'
              type='number'
              value={profile.marketing}
              onChange={(v) => updateRegistry({ marketing: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='COGS'
              type='number'
              value={profile.cogs}
              onChange={(v) => updateRegistry({ cogs: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Total Liabilities'
              type='number'
              value={profile.liabilityTotal}
              onChange={(v) =>
                updateRegistry({ liabilityTotal: parseFloat(v) })
              }
              onLogic={setLogicLabel}
            />
          </div>
          <div className='mt-6 md:mt-10 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center'>
            <p className='text-xs md:text-sm font-bold uppercase tracking-wider text-white/50'>
              Vessel Score
            </p>
            <p className='text-3xl md:text-4xl font-thin font-mono text-white'>
              {vesselCommandScore}%
            </p>
          </div>
        </GlassPanel>
        
        {/* Desktop: Delta Display */}
        <div className='hidden lg:flex flex-col items-center justify-center text-center p-8 md:p-12 bg-[#13225A]/40 border border-[#D4AF37]/10 rounded-2xl md:rounded-[2rem] min-h-[400px] md:min-h-[500px]'>
          <p className='text-[#D4AF37] text-sm md:text-base tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold mb-8 md:mb-12'>
            Institutional Delta
          </p>
          <div className='delta-display font-thin text-[#D4AF37] font-mono leading-none drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] mb-6 md:mb-8'>
            {institutionalDelta}%
          </div>
          <p className='text-white/30 text-sm uppercase tracking-wider font-bold mb-8 md:mb-12'>
            Velocity Calibration Sealed
          </p>
          <div className='p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between w-full'>
            <span className='text-xs md:text-sm uppercase tracking-wider text-white/40'>
              Tax Shield (EST)
            </span>
            <span className='text-sm md:text-base font-bold text-green-500'>
              {providentTaxShield}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setView('dashboard')}
        className='w-full max-w-2xl py-5 md:py-8 bg-[#D4AF37] text-[#0D1642] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-base md:text-lg hover:bg-white transition-all shadow-xl mb-8 md:mb-16 rounded-lg md:rounded-none'
      >
        Seal Fiduciary Mandate
      </button>
    </div>
  );
};

export default FiduciaryAudit;
