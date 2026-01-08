import { Key, Users, XCircle } from 'lucide-react';
import GlassPanel from '../../glass-panel';

const WarRoomOverlay = ({ showWarRoom, setShowWarRoom }) => {
  if (!showWarRoom) return null;

  return (
    <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0A1128]/95 backdrop-blur-xl animate-in zoom-in-95'>
      <GlassPanel className='max-w-2xl w-full relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
        <button
          onClick={() => setShowWarRoom(false)}
          className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
        >
          <XCircle size={24} />
        </button>
        <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8 mb-8'>
          <Users size={40} className='text-[#D4AF37]' />
          <div>
            <h2 className='text-3xl font-extralight uppercase tracking-widest text-white'>
              The War Room
            </h2>
            <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
              Collaboration Node
            </p>
          </div>
        </div>
        <div className='space-y-10'>
          <div className='p-6 bg-white/5 border border-white/10 rounded-xl'>
            <p className='text-xs font-light text-white/60 leading-relaxed mb-4'>
              Grant read-only "Lieutenant Access" to key stakeholders
              (Spouse, CFO, Legal). They can view the Wealth Station and
              Protocol but cannot alter the Sovereign Registry.
            </p>
            <button
              onClick={() => alert('Access Key Generated: NCG-8X9-LT')}
              className='flex items-center gap-3 px-6 py-3 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-lg uppercase text-xs font-black tracking-widest hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
            >
              <Key size={14} /> Generate Lieutenant Key
            </button>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default WarRoomOverlay;

