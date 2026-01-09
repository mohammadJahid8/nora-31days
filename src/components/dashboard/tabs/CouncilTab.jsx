import { Bot, Brain, Loader2, Send, Sparkles, User } from 'lucide-react';
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
    <div className='flex flex-col space-y-6 md:space-y-10 animate-in fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#D4AF37]/10 pb-6 md:pb-10'>
        <div>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.1em] md:tracking-[0.15em]'>
            Neural <span className='gold-text-gradient'>Council</span>
          </h2>
          <p className='text-white/40 text-sm md:text-base tracking-wider uppercase mt-2 md:mt-4'>
            AI Advisory System
          </p>
        </div>
        <Sparkles size={40} className='opacity-20 text-[#D4AF37] hidden sm:block md:w-12 md:h-12' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 flex-1'>
        {/* Persona selector - horizontal on mobile */}
        <div className='lg:col-span-1'>
          <div className='flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0'>
            {COUNCIL_PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePersona(p)}
                className={`shrink-0 lg:w-full text-left p-4 md:p-5 rounded-xl md:rounded-2xl border transition-all min-w-[140px] lg:min-w-0 ${
                  activePersona.id === p.id
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] shadow-xl'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <p
                  className={`text-sm md:text-base font-bold uppercase tracking-wider ${
                    activePersona.id === p.id
                      ? 'text-[#D4AF37]'
                      : 'text-white/50'
                  }`}
                >
                  {p.name}
                </p>
                <p className='text-xs text-white/30 uppercase tracking-wider mt-1'>
                  {p.task}
                </p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Chat panel */}
        <GlassPanel
          className='lg:col-span-3 flex flex-col h-[400px] md:h-[500px] lg:h-[600px] p-0'
          title={activePersona.name}
        >
          <div className='flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 fiduciary-scroll'>
            {chatMessages.length === 0 && (
              <div className='h-full flex flex-col items-center justify-center opacity-30 text-center'>
                <Brain size={40} className='mb-4 md:w-12 md:h-12' />
                <p className='text-sm uppercase tracking-wider'>
                  Awaiting Input
                </p>
              </div>
            )}
            {chatMessages.map((m, i) => (
              <div
                key={i}
                className={`chat-bubble max-w-[90%] md:max-w-[80%] ${
                  m.role === 'steward'
                    ? 'steward-bubble ml-auto'
                    : 'council-bubble shadow-xl'
                }`}
              >
                <div className='flex items-center gap-2 mb-2 border-b border-white/5 pb-2'>
                  {m.role === 'steward' ? (
                    <User size={14} className='text-[#D4AF37]' />
                  ) : (
                    <Bot size={14} className='text-[#D4AF37]' />
                  )}
                  <span className='text-xs font-bold uppercase tracking-wider'>
                    {m.role === 'steward' ? 'You' : activePersona.name}
                  </span>
                </div>
                <div className='whitespace-pre-wrap text-sm md:text-base font-light'>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form
            onSubmit={handleChat}
            className='p-4 md:p-6 border-t border-[#D4AF37]/10 bg-white/5 flex gap-3 md:gap-4 items-center'
          >
            <input
              type='text'
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder={`Ask ${activePersona.name}...`}
              className='flex-1 bg-transparent text-white text-base md:text-lg font-light outline-none border-b-2 border-white/10 focus:border-[#D4AF37] transition-all py-2'
            />
            <button
              type='submit'
              disabled={aiLoading || !chatInput.trim()}
              className='p-3 md:p-4 bg-[#D4AF37] rounded-full text-[#0D1642] hover:bg-white transition-all shadow-xl disabled:opacity-50'
            >
              {aiLoading ? (
                <Loader2 size={20} className='animate-spin md:w-6 md:h-6' />
              ) : (
                <Send size={20} className='md:w-6 md:h-6' />
              )}
            </button>
          </form>
        </GlassPanel>
      </div>
    </div>
  );
};

export default CouncilTab;

