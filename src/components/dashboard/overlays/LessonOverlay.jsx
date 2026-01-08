import { Award, CheckSquare, GraduationCap, Play, XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const LessonOverlay = ({
  activeLesson,
  setActiveLesson,
  protocol,
  updateProtocol,
}) => {
  if (!activeLesson) return null;

  return (
    <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0D1642]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-4xl w-full h-[80vh] flex flex-col relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setActiveLesson(null)}
          className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
        >
          <XCircle size={32} />
        </button>
        <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8'>
          <GraduationCap size={48} className='text-[#D4AF37]' />
          <div>
            <h2 className='text-4xl font-extralight uppercase tracking-widest text-white'>
              Sovereign Learning Interface
            </h2>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
              Doctorate Level Instruction
            </p>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto py-12 px-8 space-y-12 fiduciary-scroll'>
          <div className='w-full aspect-video bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-white/10'>
            <Play size={64} className='text-[#D4AF37] opacity-50' />
            <p className='text-xs uppercase tracking-widest mt-4'>
              Module Loading: {activeLesson}
            </p>
          </div>
          <div className='space-y-6'>
            <p className='text-xs font-black uppercase text-white/40 tracking-widest border-b border-white/10 pb-2'>
              Key Takeaways
            </p>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <CheckSquare size={16} className='text-[#D4AF37] mt-1' />
                <p className='text-sm font-light leading-relaxed'>
                  Understanding the forensic difference between personal and
                  commercial underwriting logic.
                </p>
              </div>
              <div className='flex items-start gap-4'>
                <CheckSquare size={16} className='text-[#D4AF37] mt-1' />
                <p className='text-sm font-light leading-relaxed'>
                  Structuring the entity to withstand Tier 1 bank audits
                  without triggering high-risk flags.
                </p>
              </div>
              <div className='flex items-start gap-4'>
                <CheckSquare size={16} className='text-[#D4AF37] mt-1' />
                <p className='text-sm font-light leading-relaxed'>
                  Leveraging the specific 31-day protocol to maximize credit
                  velocity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 border-t border-[#D4AF37]/20 flex justify-end'>
          <button
            onClick={() => {
              updateProtocol({
                velocityScore: protocol.velocityScore + 50,
              });
              setActiveLesson(null);
            }}
            className='flex items-center gap-4 px-8 py-4 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all'
          >
            <Award size={16} /> Seal Knowledge (+50 XP)
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

export default LessonOverlay;

