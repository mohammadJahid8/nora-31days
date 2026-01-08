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
    <div className='space-y-20 animate-in slide-in-from-bottom-12'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
        <h2 className='text-9xl font-extralight uppercase tracking-[0.2em]'>
          Registry
        </h2>
        <div className='flex gap-6'>
          <button
            onClick={() => setActiveRegistryTab('personal')}
            className={`px-10 py-4 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${
              activeRegistryTab === 'personal'
                ? 'bg-[#D4AF37] text-[#0D1642]'
                : 'bg-white/5 text-white/40 border border-white/10'
            }`}
          >
            Personal Fiduciary
          </button>
          <button
            onClick={() => setActiveRegistryTab('business')}
            className={`px-10 py-4 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${
              activeRegistryTab === 'business'
                ? 'bg-[#D4AF37] text-[#0D1642]'
                : 'bg-white/5 text-white/40 border border-white/10'
            }`}
          >
            Vessel Entity
          </button>
          <button
            onClick={() => setActiveRegistryTab('legacy')}
            className={`px-10 py-4 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${
              activeRegistryTab === 'legacy'
                ? 'bg-[#D4AF37] text-[#0D1642]'
                : 'bg-white/5 text-white/40 border border-white/10'
            }`}
          >
            Legacy Vault
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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
              <p className='text-xs font-light text-white/60 leading-relaxed'>
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
                label='Successor Neural Email'
                value={profile.successorEmail}
                onChange={(v) => updateRegistry({ successorEmail: v })}
              />
              <div>
                <label className='text-[0.52rem] tracking-[0.2em] uppercase text-[#D4AF37]/60 font-black block mb-2'>
                  Dead Man's Switch Trigger
                </label>
                <select
                  value={profile.legacyTrigger}
                  onChange={(e) =>
                    updateRegistry({ legacyTrigger: e.target.value })
                  }
                  className='w-full bg-white/5 border-b border-[#D4AF37]/20 py-2 text-white outline-none'
                >
                  <option>30 Days Inactivity</option>
                  <option>60 Days Inactivity</option>
                  <option>90 Days Inactivity</option>
                </select>
              </div>
              <button className='w-full py-4 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] text-[0.6rem] font-black uppercase hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'>
                Seal Succession Protocol
              </button>
            </div>
            <div className='flex items-center justify-center opacity-30'>
              <UserCheck size={128} />
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8'>
            {Object.entries({
              'Legal Name Signature': profile.name,
              'Neural Email Link': profile.email,
              'Date of Sovereignty': profile.dob,
              'Neural ID (SSN-4)': profile.ssnLast4,
              'Passport Registry': profile.passportNo,
              'Citizenship Node': profile.citizenship,
              'Physical Hub Address': profile.address,
              'Primary Phone': profile.phone,
              'Secondary Phone': profile.secondaryPhone,
              'Occupation Node': profile.occupation,
              'Employer Hub': profile.employer,
              'Tax Registry (TIN)': profile.taxID,
              'Marital Logic': profile.maritalStatus,
              'Emergency Contact': profile.emergencyContact,
              'Emergency Phone': profile.emergencyPhone,
              'Years in Field': profile.yearsInField,
              Dependents: profile.dependents,
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
          <p className='text-[0.6rem] tracking-[0.4em] uppercase font-black text-[#D4AF37] mt-16 mb-10 border-b border-white/5 pb-4'>
            Credit Forensic Baseline
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <FiduciaryInput
              label='Experian Score'
              type='number'
              value={profile.creditScoreExpe}
              onChange={(v) =>
                updateRegistry({ creditScoreExpe: parseInt(v) })
              }
              fiduciary
            />
            <FiduciaryInput
              label='Equifax Score'
              type='number'
              value={profile.creditScoreEqui}
              onChange={(v) =>
                updateRegistry({ creditScoreEqui: parseInt(v) })
              }
              fiduciary
            />
            <FiduciaryInput
              label='TransUnion Score'
              type='number'
              value={profile.creditScoreTrans}
              onChange={(v) =>
                updateRegistry({ creditScoreTrans: parseInt(v) })
              }
              fiduciary
            />
            <FiduciaryInput
              label='Utilization (%)'
              type='number'
              value={profile.totalUtilization}
              onChange={(v) =>
                updateRegistry({ totalUtilization: parseInt(v) })
              }
            />
            <FiduciaryInput
              label='6mo Inquiries'
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
        <div className='space-y-12'>
          <GlassPanel
            title='Vessel Entity Registry'
            icon={Landmark}
            scrollable={true}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8'>
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
            title='Evidence & Document Nodes'
            icon={ShieldCheck}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                { label: 'Articles of Org', key: 'docArticles' },
                { label: 'IRS SS-4 Stamp', key: 'docSS4' },
                { label: 'Operating Accord', key: 'docOpAccord' },
                { label: 'Passport Node', key: 'docPassport' },
              ].map((d) => (
                <button
                  key={d.key}
                  onClick={() => simulateDocScan(d.key)}
                  className={`p-6 rounded-2xl border flex items-center justify-between transition-all ${
                    profile[d.key]
                      ? 'bg-green-500/10 border-green-500/40 text-green-500'
                      : scanningDoc === d.key
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#D4AF37]'
                      : 'bg-white/5 border-white/10 text-white/20'
                  }`}
                >
                  <div className='flex flex-col items-start gap-1'>
                    <span className='text-[0.5rem] font-black uppercase tracking-widest'>
                      {d.label}
                    </span>
                    <span className='text-[0.6rem] font-light uppercase tracking-widest'>
                      {scanningDoc === d.key
                        ? 'SCANNING...'
                        : profile[d.key]
                        ? 'VERIFIED'
                        : 'UPLOAD PENDING'}
                    </span>
                  </div>
                  {scanningDoc === d.key ? (
                    <Scan size={20} className='animate-spin' />
                  ) : profile[d.key] ? (
                    <FileCheck size={20} />
                  ) : (
                    <UploadCloud size={20} />
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

