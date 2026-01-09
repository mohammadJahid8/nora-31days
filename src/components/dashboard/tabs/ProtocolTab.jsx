import { CheckCircle2, ChevronRight, Download } from 'lucide-react';
import GlassPanel from '../../glass-panel';
import { MASTER_PROTOCOL_DATA } from '../../../utils/data';

const ProtocolTab = ({
  protocol,
  updateProtocol,
  setShowMandateOverlay,
}) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 md:gap-8 animate-in fade-in min-h-[calc(100vh-250px)] lg:h-[calc(100vh-280px)]'>
      {/* Day selector - horizontal scroll on mobile */}
      <div className='lg:w-72 xl:w-80 shrink-0'>
        <div className='flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 lg:pr-2 lg:h-full fiduciary-scroll'>
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
                className={`shrink-0 lg:w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all min-w-[120px] lg:min-w-0 ${
                  isActive
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37]'
                    : isSealed
                    ? 'bg-green-500/5 border-green-500/20'
                    : 'bg-white/5 border-white/5'
                } ${
                  isLocked ? 'opacity-20' : 'hover:border-[#D4AF37]/50'
                }`}
              >
                <div className='flex justify-between items-center mb-1 md:mb-2'>
                  <span className='text-xs md:text-sm font-bold uppercase text-[#D4AF37]'>
                    Day {d.toString().padStart(2, '0')}
                  </span>
                  {isSealed && (
                    <CheckCircle2 size={14} className='text-green-500 md:w-4 md:h-4' />
                  )}
                </div>
                <h4 className='text-xs md:text-sm font-bold uppercase tracking-wider leading-tight truncate lg:whitespace-normal'>
                  {MASTER_PROTOCOL_DATA[d]?.title || 'Locked'}
                </h4>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Main content */}
      <div className='flex-1 min-h-0'>
        <GlassPanel
          title='Mandate Execution'
          className='h-full'
          scrollable={true}
        >
          <div className='flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 md:mb-10 border-b border-white/5 pb-6 md:pb-8'>
            <div className='min-w-0 w-full sm:w-auto'>
              <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2 md:mb-4'>
                Tactical Mandate
              </p>
              <h3 className='text-3xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-tight leading-tight'>
                {MASTER_PROTOCOL_DATA[protocol.currentDay]?.title ||
                  'Mandate Awaiting'}
              </h3>
            </div>
            <button
              onClick={() => setShowMandateOverlay(true)}
              className='flex items-center sm:flex-col gap-2 sm:gap-1 opacity-60 hover:opacity-100 transition-all'
            >
              <Download size={18} className='text-[#D4AF37] md:w-5 md:h-5' />
              <span className='text-xs font-bold uppercase'>
                Export
              </span>
            </button>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10 mb-6 md:mb-10'>
            <div className='space-y-6 md:space-y-8'>
              <div className='bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-4 md:p-6 rounded-r-xl'>
                <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2 md:mb-4'>
                  Strategic Devotion
                </p>
                <p className='text-lg md:text-xl font-light italic leading-relaxed text-white/90'>
                  "{MASTER_PROTOCOL_DATA[protocol.currentDay]?.devotion}"
                </p>
              </div>
              <div className='bg-white/5 p-4 md:p-6 border border-white/10 rounded-xl md:rounded-2xl'>
                <p className='text-xs md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2 md:mb-4'>
                  Institutional Logic
                </p>
                <p className='text-sm md:text-base font-light leading-relaxed text-white/60'>
                  {MASTER_PROTOCOL_DATA[protocol.currentDay]?.logic}
                </p>
              </div>
            </div>
            <div className='space-y-4 md:space-y-6'>
              <p className='text-sm md:text-base font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3 md:pb-4'>
                Command Tasks
              </p>
              {MASTER_PROTOCOL_DATA[protocol.currentDay]?.tasks?.map(
                (step, idx) => (
                  <div
                    key={idx}
                    className='flex items-start gap-3 text-sm md:text-base font-light'
                  >
                    <ChevronRight
                      size={16}
                      className='text-[#D4AF37] shrink-0 mt-0.5 md:w-5 md:h-5'
                    />
                    <span>{step}</span>
                  </div>
                )
              )}
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
            className='w-full py-4 md:py-6 bg-[#D4AF37] text-[#0D1642] font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-base md:text-lg hover:bg-white transition-all shadow-xl rounded-lg md:rounded-none'
          >
            Seal Mandate
          </button>
        </GlassPanel>
      </div>
    </div>
  );
};

export default ProtocolTab;

