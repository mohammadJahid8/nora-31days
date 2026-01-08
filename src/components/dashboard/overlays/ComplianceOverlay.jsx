import { FileBadge, XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const ComplianceOverlay = ({
  showComplianceOverlay,
  setShowComplianceOverlay,
  profile,
  institutionalDelta,
}) => {
  if (!showComplianceOverlay) return null;

  return (
    <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0D1642]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-3xl w-full h-[85vh] flex flex-col relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowComplianceOverlay(false)}
          className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
        >
          <XCircle size={32} />
        </button>
        <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8'>
          <FileBadge size={48} className='text-[#D4AF37]' />
          <div>
            <h2 className='text-4xl font-extralight uppercase tracking-widest text-white'>
              Lender Compliance Dossier
            </h2>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
              Vessel DNA Export
            </p>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto py-12 px-8 space-y-12 fiduciary-scroll'>
          <div className='space-y-6'>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.3em] border-b border-[#D4AF37]/20 pb-2'>
              I. Vessel Identity
            </p>
            <div className='grid grid-cols-2 gap-y-4 gap-x-12'>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  Entity Name
                </span>
                <span className='text-sm font-light text-white uppercase'>
                  {profile.bizName || 'N/A'}
                </span>
              </div>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  EIN Protocol
                </span>
                <span className='text-sm font-light text-white'>
                  {profile.ein || 'N/A'}
                </span>
              </div>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  DUNS Ref
                </span>
                <span className='text-sm font-light text-white'>
                  {profile.duns || 'N/A'}
                </span>
              </div>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  Structure
                </span>
                <span className='text-sm font-light text-white uppercase'>
                  {profile.entityType || 'N/A'}
                </span>
              </div>
            </div>
          </div>
          <div className='space-y-6'>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.3em] border-b border-[#D4AF37]/20 pb-2'>
              II. Financial Forensics
            </p>
            <div className='grid grid-cols-2 gap-y-4 gap-x-12'>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  Annual Gross
                </span>
                <span className='text-sm font-light text-white'>
                  ${profile.annualRevenue?.toLocaleString() || 0}
                </span>
              </div>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  Operational Burn
                </span>
                <span className='text-sm font-light text-white'>
                  ${profile.operationalBurn?.toLocaleString() || 0}
                </span>
              </div>
              <div className='flex justify-between border-b border-white/5 pb-1'>
                <span className='text-xs text-white/40 uppercase'>
                  Institutional Delta
                </span>
                <span className='text-sm font-light text-[#D4AF37]'>
                  {institutionalDelta}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 border-t border-[#D4AF37]/20 flex justify-between items-center px-8 pb-8'>
          <p className='text-[0.5rem] uppercase tracking-[0.2em] text-white/30'>
            Certified by Nora Capital Stewardship Terminal
          </p>
          <button className='flex items-center gap-4 px-8 py-4 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all'>
            <FileBadge size={16} /> Export Dossier
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default ComplianceOverlay;

