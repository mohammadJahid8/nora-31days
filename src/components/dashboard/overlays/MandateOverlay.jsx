import { Award, CheckCircle2, Download, XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { MASTER_PROTOCOL_DATA } from '../../../utils/data';

const MandateOverlay = ({
  showMandateOverlay,
  setShowMandateOverlay,
  profile,
  protocol,
}) => {
  if (!showMandateOverlay) return null;

  return (
    <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0D1642]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-4xl w-full h-[80vh] flex flex-col relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowMandateOverlay(false)}
          className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
        >
          <XCircle size={32} />
        </button>
        <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8'>
          <Award size={48} className='text-[#D4AF37]' />
          <div>
            <h2 className='text-4xl font-extralight uppercase tracking-widest text-white'>
              Official Mandate Directive
            </h2>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
              10-Day Institutional Report
            </p>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto py-12 px-4 space-y-12 fiduciary-scroll'>
          <div className='grid grid-cols-3 gap-8'>
            <div className='p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-center'>
              <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase mb-2'>
                Architect
              </p>
              <p className='text-xl font-light text-white'>
                {profile.name}
              </p>
            </div>
            <div className='p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-center'>
              <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase mb-2'>
                Protocol Score
              </p>
              <p className='text-xl font-light text-white'>
                {protocol.velocityScore}
              </p>
            </div>
            <div className='p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-center'>
              <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase mb-2'>
                Accord
              </p>
              <p className='text-xl font-light text-white'>
                {profile.accord}
              </p>
            </div>
          </div>
          <div className='space-y-6'>
            <p className='text-xs font-black uppercase text-white/40 tracking-widest border-b border-white/10 pb-2'>
              Sealed Mandates
            </p>
            {(protocol.sealedDays || []).slice(0, 10).map((d) => (
              <div
                key={d}
                className='flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5'
              >
                <span className='text-xs font-light text-[#D4AF37]'>
                  Day {d}
                </span>
                <span className='text-sm font-light text-white'>
                  {MASTER_PROTOCOL_DATA[d]?.title}
                </span>
                <CheckCircle2 size={16} className='text-green-500' />
              </div>
            ))}
          </div>
        </div>
        <div className='pt-8 border-t border-[#D4AF37]/20 flex justify-end'>
          <button className='flex items-center gap-4 px-8 py-4 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all'>
            <Download size={16} /> Download Official PDF
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default MandateOverlay;

