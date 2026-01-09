import {
  FileCheck,
  Landmark,
  Scan,
  Scroll,
  ShieldCheck,
  UploadCloud,
  User,
  UserCheck,
} from 'lucide-react';
import GlassPanel from '../../glass-panel';
import FiduciaryInput from '../../fiduciary-input';
import { FIDUCIARY_INPUTS } from '../../../utils/data';

const ProfileTab = ({
  profile,
  activeRegistryTab,
  setActiveRegistryTab,
  globalSearch,
  updateRegistry,
  setLogicLabel,
  scanningDoc,
  simulateDocScan,
}) => {
  return (
    <div className='space-y-6 md:space-y-12 lg:space-y-16 animate-in slide-in-from-bottom-12'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-8 border-b border-[#D4AF37]/10 pb-6 md:pb-12'>
        <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
          Registry
        </h2>
        <div className='flex flex-wrap gap-2 md:gap-4'>
          <button
            onClick={() => setActiveRegistryTab('personal')}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              activeRegistryTab === 'personal'
                ? 'bg-[#D4AF37] text-[#0D1642]'
                : 'bg-white/5 text-white/50 border border-white/10'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveRegistryTab('business')}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              activeRegistryTab === 'business'
                ? 'bg-[#D4AF37] text-[#0D1642]'
                : 'bg-white/5 text-white/50 border border-white/10'
            }`}
          >
            Vessel
          </button>
          <button
            onClick={() => setActiveRegistryTab('legacy')}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              activeRegistryTab === 'legacy'
                ? 'bg-[#D4AF37] text-[#0D1642]'
                : 'bg-white/5 text-white/50 border border-white/10'
            }`}
          >
            Legacy
          </button>
        </div>
      </div>

      {/* PHASE 17: LEGACY VAULT TAB */}
      {activeRegistryTab === 'legacy' && (
        <GlassPanel
          title='Succession Protocol'
          icon={Scroll}
          scrollable={true}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10'>
            <div className='space-y-6 md:space-y-8'>
              <p className='text-sm md:text-base font-light text-white/60 leading-relaxed'>
                Designate a Successor Architect to inherit dominion over
                this terminal. If inactivity exceeds the trigger
                threshold, full access keys will be transferred
                automatically.
              </p>
              <FiduciaryInput
                label='Successor Name'
                value={profile.successorName}
                onChange={(v) => updateRegistry({ successorName: v })}
              />
              <FiduciaryInput
                label='Successor Email'
                value={profile.successorEmail}
                onChange={(v) => updateRegistry({ successorEmail: v })}
              />
              <div>
                <label className='text-sm md:text-base tracking-wider uppercase text-[#D4AF37]/70 font-bold block mb-2'>
                  Switch Trigger
                </label>
                <select
                  value={profile.legacyTrigger}
                  onChange={(e) =>
                    updateRegistry({ legacyTrigger: e.target.value })
                  }
                  className='w-full bg-white/5 border-b-2 border-[#D4AF37]/20 py-3 md:py-4 text-white text-lg outline-none'
                >
                  <option>30 Days Inactivity</option>
                  <option>60 Days Inactivity</option>
                  <option>90 Days Inactivity</option>
                </select>
              </div>
              <button className='w-full py-4 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] text-sm md:text-base font-bold uppercase hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all rounded-lg'>
                Seal Succession Protocol
              </button>
            </div>
            <div className='hidden lg:flex items-center justify-center opacity-30'>
              <UserCheck size={100} />
            </div>
          </div>
        </GlassPanel>
      )}

      {activeRegistryTab === 'personal' && (
        <GlassPanel
          title='Personal Identity Vault'
          icon={User}
          scrollable={true}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6'>
            {Object.entries({
              'Legal Name': profile.name,
              'Email': profile.email,
              'Date of Birth': profile.dob,
              'SSN (Last 4)': profile.ssnLast4,
              'Passport': profile.passportNo,
              'Citizenship': profile.citizenship,
              'Address': profile.address,
              'Primary Phone': profile.phone,
              'Secondary Phone': profile.secondaryPhone,
              'Occupation': profile.occupation,
              'Employer': profile.employer,
              'Tax ID (TIN)': profile.taxID,
              'Marital Status': profile.maritalStatus,
              'Emergency Contact': profile.emergencyContact,
              'Emergency Phone': profile.emergencyPhone,
              'Years in Field': profile.yearsInField,
              'Dependents': profile.dependents,
            })
              .filter(([label]) =>
                label.toLowerCase().includes(globalSearch.toLowerCase())
              )
              .map(([label, val]) => (
                <FiduciaryInput
                  key={label}
                  label={label}
                  value={String(val || '')}
                  onChange={(v) =>
                    updateRegistry({
                      [label.toLowerCase().replace(/ /g, '')]: v,
                    })
                  }
                  onLogic={setLogicLabel}
                />
              ))}
          </div>
          <p className='text-sm md:text-base tracking-wider uppercase font-bold text-[#D4AF37] mt-8 md:mt-12 mb-6 md:mb-8 border-b border-white/10 pb-4'>
            Credit Forensic Baseline
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
            <FiduciaryInput
              label='Experian'
              type='number'
              value={profile.creditScoreExpe}
              onChange={(v) =>
                updateRegistry({ creditScoreExpe: parseInt(v) })
              }
              fiduciary
            />
            <FiduciaryInput
              label='Equifax'
              type='number'
              value={profile.creditScoreEqui}
              onChange={(v) =>
                updateRegistry({ creditScoreEqui: parseInt(v) })
              }
              fiduciary
            />
            <FiduciaryInput
              label='TransUnion'
              type='number'
              value={profile.creditScoreTrans}
              onChange={(v) =>
                updateRegistry({ creditScoreTrans: parseInt(v) })
              }
              fiduciary
            />
            <FiduciaryInput
              label='Utilization %'
              type='number'
              value={profile.totalUtilization}
              onChange={(v) =>
                updateRegistry({ totalUtilization: parseInt(v) })
              }
            />
            <FiduciaryInput
              label='Inquiries (6mo)'
              type='number'
              value={profile.inquiries6m}
              onChange={(v) =>
                updateRegistry({ inquiries6m: parseInt(v) })
              }
            />
            <FiduciaryInput
              label='Account Age'
              type='number'
              value={profile.ageOfAccounts}
              onChange={(v) =>
                updateRegistry({ ageOfAccounts: parseInt(v) })
              }
            />
          </div>
        </GlassPanel>
      )}

      {activeRegistryTab === 'business' && (
        <div className='space-y-6 md:space-y-10'>
          <GlassPanel
            title='Vessel Entity Registry'
            icon={Landmark}
            scrollable={true}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6'>
              {FIDUCIARY_INPUTS.map((f) => (
                <FiduciaryInput
                  key={f.key}
                  label={f.label}
                  value={profile[f.key]}
                  onChange={(v) => updateRegistry({ [f.key]: v })}
                  fiduciary={f.fiduciary}
                  onLogic={setLogicLabel}
                />
              ))}
            </div>
          </GlassPanel>
          <GlassPanel
            title='Evidence & Documents'
            icon={ShieldCheck}
          >
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6'>
              {[
                { label: 'Articles of Org', key: 'docArticles' },
                { label: 'IRS SS-4', key: 'docSS4' },
                { label: 'Operating Accord', key: 'docOpAccord' },
                { label: 'Passport', key: 'docPassport' },
              ].map((d) => (
                <button
                  key={d.key}
                  onClick={() => simulateDocScan(d.key)}
                  className={`p-4 md:p-6 rounded-xl md:rounded-2xl border flex items-center justify-between gap-2 transition-all ${
                    profile[d.key]
                      ? 'bg-green-500/10 border-green-500/40 text-green-500'
                      : scanningDoc === d.key
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#D4AF37]'
                      : 'bg-white/5 border-white/10 text-white/30'
                  }`}
                >
                  <div className='flex flex-col items-start gap-1 min-w-0'>
                    <span className='text-xs md:text-sm font-bold uppercase tracking-wider truncate w-full'>
                      {d.label}
                    </span>
                    <span className='text-xs font-light uppercase tracking-wider'>
                      {scanningDoc === d.key
                        ? 'SCANNING...'
                        : profile[d.key]
                        ? 'VERIFIED'
                        : 'PENDING'}
                    </span>
                  </div>
                  {scanningDoc === d.key ? (
                    <Scan size={18} className='animate-spin shrink-0 md:w-5 md:h-5' />
                  ) : profile[d.key] ? (
                    <FileCheck size={18} className='shrink-0 md:w-5 md:h-5' />
                  ) : (
                    <UploadCloud size={18} className='shrink-0 md:w-5 md:h-5' />
                  )}
                </button>
              ))}
            </div>
          </GlassPanel>
        </div>
      )}
    </div>
  );
};

export default ProfileTab;

