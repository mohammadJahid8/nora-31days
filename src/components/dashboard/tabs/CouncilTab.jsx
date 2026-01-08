import { Bot, Brain, Send, Sparkles, User } from 'lucide-react';
import { Activity } from 'react';
import GlassPanel from '../../glass-panel';
import { COUNCIL_PERSONAS } from '../../../utils/data';

const CouncilTab = ({
  chatMessages,
  activePersona,
  setActivePersona,
  chatEndRef,
  handleChat,
  aiLoading,
  setChatInput,
  chatInput,
}) => {
  return (
    <div className='h-full flex flex-col space-y-12 animate-in fade-in'>
      <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-12'>
        <div>
          <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
            Neural <span className='gold-text-gradient'>Council</span>
          </h2>
          <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
            Conversational Fiduciary Intelligence
          </p>
        </div>
        <Sparkles size={64} className='opacity-10 text-[#D4AF37]' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 flex-1'>
        <div className='lg:col-span-1 space-y-4'>
          {COUNCIL_PERSONAS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(p)}
              className={`w-full text-left p-6 rounded-2xl border transition-all ${
                activePersona.id === p.id
                  ? 'bg-[#D4AF37]/15 border-[#D4AF37] shadow-xl'
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <p
                className={`text-sm font-black uppercase tracking-widest ${
                  activePersona.id === p.id
                    ? 'text-[#D4AF37]'
                    : 'text-white/40'
                }`}
              >
                {p.name}
              </p>
              <p className='text-[0.5rem] font-bold text-white/20 uppercase tracking-widest mt-1'>
                {p.task}
              </p>
            </button>
          ))}
        </div>
        <GlassPanel
          className='lg:col-span-3 flex flex-col h-[700px] p-0'
          title={`Institutional Dialogue: ${activePersona.name}`}
        >
          <div className='flex-1 overflow-y-auto p-10 space-y-8 fiduciary-scroll'>
            {chatMessages.length === 0 && (
              <div className='h-full flex flex-col items-center justify-center opacity-20 text-center'>
                <Brain size={48} className='mb-6' />
                <p className='text-xs uppercase tracking-widest'>
                  Counsel Awaiting Strategic Signal
                </p>
              </div>
            )}
            {chatMessages.map((m, i) => (
              <div
                key={i}
                className={`chat-bubble ${
                  m.role === 'steward'
                    ? 'steward-bubble'
                    : 'council-bubble shadow-2xl'
                }`}
              >
                <div className='flex items-center gap-3 mb-3 border-b border-white/5 pb-2'>
                  {m.role === 'steward' ? (
                    <User size={14} className='text-[#D4AF37]' />
                  ) : (
                    <Bot size={14} className='text-[#D4AF37]' />
                  )}
                  <span className='text-[0.5rem] font-black uppercase tracking-widest'>
                    {m.role === 'steward'
                      ? 'Steward'
                      : activePersona.name}
                  </span>
                </div>
                <div className='whitespace-pre-wrap font-light'>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form
            onSubmit={handleChat}
            className='p-8 border-t border-[#D4AF37]/10 bg-white/5 flex gap-6 items-center'
          >
            <input
              type='text'
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder={`Ask ${activePersona.name} for counsel...`}
              className='flex-1 bg-transparent text-white text-sm font-light outline-none border-b border-white/10 focus:border-[#D4AF37] transition-all'
            />
            <button
              type='submit'
              disabled={aiLoading || !chatInput.trim()}
              className='p-4 bg-[#D4AF37] rounded-full text-[#0D1642] hover:bg-white transition-all shadow-xl'
            >
              {aiLoading ? (
                <Activity size={20} className='animate-spin' />
              ) : (
                <Send size={20} />
              )}
            </button>
          </form>
        </GlassPanel>
      </div>
    </div>
  );
};

export default CouncilTab;

