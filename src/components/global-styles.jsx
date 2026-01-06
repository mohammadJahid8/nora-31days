const GlobalStyles = () => (
  <style>{`
    @keyframes floatVault { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
    @keyframes scanLine { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
    @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
    @keyframes wave { 0%, 100% { height: 4px; } 50% { height: 16px; } }
    .floating-vault { animation: floatVault 10s ease-in-out infinite; }
    .scanning-line { position: absolute; width: 100%; height: 2px; background: linear-gradient(to right, transparent, #D4AF37, transparent); animation: scanLine 4s linear infinite; z-index: 50; }
    .animate-marquee { animation: marquee 20s linear infinite; }
    .gold-text-gradient { background: linear-gradient(to bottom, #D4AF37 0%, #B5942D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .urbanist-font { font-family: 'Urbanist', sans-serif; font-style: normal !important; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
    * { font-style: normal !important; box-sizing: border-box; outline: none; }
    .fiduciary-scroll { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #D4AF37 transparent; }
    .fiduciary-scroll::-webkit-scrollbar { width: 4px; }
    .fiduciary-scroll::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
    .chat-bubble { max-width: 80%; border-radius: 1.5rem; padding: 1.25rem; font-size: 0.9rem; line-height: 1.6; }
    .steward-bubble { background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-bottom-right-radius: 0.25rem; align-self: flex-end; color: white; }
    .council-bubble { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-bottom-left-radius: 0.25rem; align-self: flex-start; color: rgba(255,255,255,0.9); }
    .delta-display { font-size: clamp(3rem, 10vw, 10rem); }
    .audio-bar { width: 3px; background: #D4AF37; border-radius: 2px; animation: wave 1s ease-in-out infinite; }
  `}</style>
);

export default GlobalStyles;
