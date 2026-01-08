import { CheckCircle2, ChevronRight, Download } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { MASTER_PROTOCOL_DATA } from '../../../utils/data';

const ProtocolTab = ({
  protocol,
  updateProtocol,
  setShowMandateOverlay,
}) => {
  return (
    <div className='flex gap-12 animate-in fade-in h-[calc(100vh-350px)]'>
      <div className='w-80 space-y-4 overflow-y-auto pr-4 fiduciary-scroll'>
        {Array.from({ length: 31 }).map((_, i) => {
          const d = i + 1;
          const isActive = d === protocol.currentDay;
          const isSealed = (protocol.sealedDays || []).includes(d);
          const isLocked = d > (protocol.currentDay || 1);
          return (
            <button
              key={d}
              disabled={isLocked}
              onClick={() => updateProtocol({ currentDay: d })}
              className={`w-full text-left p-8 rounded-2xl border transition-all ${
                isActive
                  ? 'bg-[#D4AF37]/15 border-[#D4AF37]'
                  : isSealed
                  ? 'bg-green-500/5 border-green-500/20'
                  : 'bg-white/5 border-white/5'
              } ${
                isLocked ? 'opacity-20' : 'hover:border-[#D4AF37]/50'
              }`}
            >
              <div className='flex justify-between items-center mb-2'>
                <span className='text-[0.55rem] font-black uppercase text-[#D4AF37]'>
                  Day {d.toString().padStart(2, '0')}
                </span>
                {isSealed && (
                  <CheckCircle2 size={14} className='text-green-500' />
                )}
              </div>
              <h4 className='text-sm font-black uppercase tracking-widest leading-tight'>
                {MASTER_PROTOCOL_DATA[d]?.title || 'Locked Node'}
              </h4>
            </button>
          );
        })}
      </div>
      <div className='flex-1'>
        <GlassPanel
          title='Mandate Execution Core'
          className='h-full'
          scrollable={true}
        >
          <div className='flex justify-between items-start mb-12 border-b border-white/5 pb-10'>
            <div>
              <p className='text-[0.65rem] font-black text-[#D4AF37] uppercase tracking-[0.4em] mb-4'>
                Tactical Mandate
              </p>
              <h3 className='text-7xl font-extralight uppercase tracking-tighter'>
                {MASTER_PROTOCOL_DATA[protocol.currentDay]?.title ||
                  'Mandate Awaiting'}
              </h3>
            </div>
            <button
              onClick={() => setShowMandateOverlay(true)}
              className='flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-all shadow-xl'
            >
              <Download size={20} className='text-[#D4AF37]' />
              <span className='text-[0.5rem] font-black uppercase'>
                10D Export
              </span>
            </button>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 mb-12'>
            <div className='space-y-10'>
              <div className='bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-8 rounded-r-xl'>
                <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4'>
                  Strategic Devotion
                </p>
                <p className='text-2xl font-light italic leading-relaxed text-white/90'>
                  "{MASTER_PROTOCOL_DATA[protocol.currentDay]?.devotion}
                  "
                </p>
              </div>
              <div className='bg-white/5 p-8 border border-white/10 rounded-2xl'>
                <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4'>
                  Institutional Logic
                </p>
                <p className='text-sm font-light leading-relaxed text-white/60'>
                  {MASTER_PROTOCOL_DATA[protocol.currentDay]?.logic}
                </p>
              </div>
            </div>
            <div className='space-y-10'>
              <div className='space-y-4'>
                <p className='text-[0.6rem] font-black text-white uppercase tracking-widest border-b border-white/10 pb-4'>
                  Command Tasks (The How)
                </p>
                {MASTER_PROTOCOL_DATA[protocol.currentDay]?.tasks?.map(
                  (step, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-4 text-sm font-light'
                    >
                      <ChevronRight
                        size={14}
                        className='text-[#D4AF37]'
                      />{' '}
                      {step}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              const updatedSealed = [
                ...(protocol.sealedDays || []),
                protocol.currentDay,
              ];
              const newScore =
                (protocol.velocityScore || 0) +
                (MASTER_PROTOCOL_DATA[protocol.currentDay]?.score || 0);
              updateProtocol({
                sealedDays: updatedSealed,
                currentDay: protocol.currentDay + 1,
                velocityScore: newScore,
              });
            }}
            className='w-full py-8 bg-[#D4AF37] text-[#0D1642] font-black tracking-[1em] uppercase text-xs hover:bg-white transition-all shadow-xl'
          >
            Seal Mandate
          </button>
        </GlassPanel>
      </div>
    </div>
  );
};

export default ProtocolTab;

