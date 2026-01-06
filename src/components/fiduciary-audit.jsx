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
    <div className='min-h-screen bg-[#0D1642] p-10 flex flex-col items-center text-white relative overflow-y-auto custom-scrollbar'>
      <GlobalStyles />
      <button
        onClick={() => setView('blueprint')}
        className='absolute top-10 left-10 flex items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-all uppercase tracking-widest text-xs font-black'
      >
        <ArrowLeft size={16} /> Previous Node
      </button>
      <h2 className='text-5xl md:text-7xl font-extralight uppercase tracking-[0.3em] mb-16 text-center'>
        Fiduciary <span className='gold-text-gradient'>Forensic Heart</span>
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-[98rem] w-full mb-20'>
        <GlassPanel
          title='Personal Fiduciary Ledger'
          icon={Scale}
          scrollable={true}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6'>
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
              label='Reserve Savings Seed'
              type='number'
              value={profile.savings}
              onChange={(v) => updateRegistry({ savings: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Health Hub Pool'
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
          <div className='mt-10 p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl flex justify-between items-center'>
            <p className='text-[0.6rem] font-black uppercase tracking-widest text-[#D4AF37]'>
              Personal Ledger Score
            </p>
            <p className='text-4xl font-thin font-mono text-[#D4AF37]'>
              {personalFiduciaryScore}%
            </p>
          </div>
        </GlassPanel>
        <GlassPanel
          title='Vessel Command Ledger'
          icon={Landmark}
          scrollable={true}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6'>
            <FiduciaryInput
              label='Annual Entity Revenue'
              type='number'
              value={profile.annualRevenue}
              onChange={(v) => updateRegistry({ annualRevenue: parseFloat(v) })}
              fiduciary
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Operational Burn Rate'
              type='number'
              value={profile.operationalBurn}
              onChange={(v) =>
                updateRegistry({ operationalBurn: parseFloat(v) })
              }
              fiduciary
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Payroll Allocation'
              type='number'
              value={profile.payroll}
              onChange={(v) => updateRegistry({ payroll: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Marketing Node'
              type='number'
              value={profile.marketing}
              onChange={(v) => updateRegistry({ marketing: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='COGS Protocol'
              type='number'
              value={profile.cogs}
              onChange={(v) => updateRegistry({ cogs: parseFloat(v) })}
              onLogic={setLogicLabel}
            />
            <FiduciaryInput
              label='Liability Total Node'
              type='number'
              value={profile.liabilityTotal}
              onChange={(v) =>
                updateRegistry({ liabilityTotal: parseFloat(v) })
              }
              onLogic={setLogicLabel}
            />
          </div>
          <div className='mt-10 p-6 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center'>
            <p className='text-[0.6rem] font-black uppercase tracking-widest text-white/40'>
              Vessel Command Score
            </p>
            <p className='text-4xl font-thin font-mono text-white'>
              {vesselCommandScore}%
            </p>
          </div>
        </GlassPanel>
        <div className='flex flex-col items-center justify-center text-center p-12 bg-[#13225A]/40 border border-[#D4AF37]/10 rounded-[3rem] min-h-[500px]'>
          <p className='text-[#D4AF37] text-[0.8rem] tracking-[0.6em] uppercase font-black mb-12'>
            Institutional Delta
          </p>
          <div className='delta-display font-thin text-[#D4AF37] font-mono leading-none drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] mb-8'>
            {institutionalDelta}%
          </div>
          <p className='text-white/20 text-[0.7rem] uppercase tracking-widest font-black mb-12'>
            Velocity Calibration Sealed
          </p>
          <div className='p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between w-full'>
            <span className='text-[0.5rem] uppercase tracking-widest text-white/40'>
              Tax Shield (EST)
            </span>
            <span className='text-xs font-black text-green-500'>
              {providentTaxShield}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setView('dashboard')}
        className='w-full max-w-2xl py-10 bg-[#D4AF37] text-[#0D1642] font-black tracking-[1em] uppercase text-xs hover:bg-white transition-all shadow-xl mb-20'
      >
        Seal Fiduciary Mandate
      </button>
    </div>
  );
};

export default FiduciaryAudit;
