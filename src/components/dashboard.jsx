import {
  AlertCircle,
  ArrowLeft,
  Award,
  BarChart3,
  Bell,
  Book,
  BookOpen,
  Bot,
  Brain,
  Calendar,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Compass,
  Crown,
  Download,
  Eye,
  FileBadge,
  FileCheck,
  FileText,
  Fingerprint,
  Flame,
  Gem,
  Globe,
  GraduationCap,
  Handshake,
  Hourglass,
  Key,
  Landmark,
  Layers,
  Link2,
  Lock,
  LogOut,
  MapPin,
  Menu,
  MessageSquareCode,
  Microscope,
  Play,
  PlayCircle,
  Printer,
  Scan,
  Scroll,
  ScrollText,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  UploadCloud,
  User,
  UserCheck,
  Users,
  Video,
  XCircle,
  Zap,
} from 'lucide-react';
import {
  ARMORY,
  BLUEPRINT_CURRICULUM,
  BLUEPRINT_LOGIC,
  COUNCIL_PERSONAS,
  DOCTORATE_LOGIC,
  FIDUCIARY_INPUTS,
  FUNDING_VECTORS,
  HORIZON_GATES,
  MASTER_PROTOCOL_DATA,
} from '../utils/data';
import GlobalStyles from './global-styles';
import GlassPanel from './glass-panel';
import FiduciaryInput from './fiduciary-input';
import { Activity } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
const Dashboard = ({
  showGeneratorOverlay,
  setShowGeneratorOverlay,
  activeGeneratorType,
  profile,
  isSimulating,
  setIsSimulating,
  setSimulationData,
  simulationData,
  activeLesson,
  institutionalDelta,
  setActiveLesson,
  protocol,
  updateProtocol,
  setShowHabakkuk,
  showHabakkuk,
  habakkukTargets,
  addHabakkukTarget,
  logicLabel,
  setShowMandateOverlay,
  showMandateOverlay,
  setShowWarRoom,
  showWarRoom,
  setShowComplianceOverlay,
  showComplianceOverlay,
  setLogicLabel,
  sidebarOpen,
  dominionRank,
  activeTab,
  setGlobalSearch,
  setActiveTab,
  isPlayingAudio,
  setIsPlayingAudio,
  morningBriefing,
  setSidebarOpen,
  globalSearch,
  updateRegistry,
  activeRegistryTab,
  setActiveRegistryTab,
  setView,
  scanningDoc,
  simulateDocScan,
  chatMessages,
  activePersona,
  setActivePersona,
  chatEndRef,
  handleChat,
  aiLoading,
  setChatInput,
  chatInput,
  trajectoryData,
  gateProgress,
  fundingReadiness,
  aiAnalysis,
  handleGenerator,
  ecosystemStats,
  architects,
  selectedArchitect,
  setSelectedArchitect,
  setAdminDirective,
  sendGovernanceOverride,
  adminDirective,
  setCommonwealthLocked,
  commonwealthLocked,
  runNeuralAudit,
}) => {
  return (
    <div className="h-screen bg-[#0A1128] flex overflow-hidden text-white font-['Urbanist']">
      <GlobalStyles />
      {/* 14.1 GENERATOR OVERLAY */}
      {showGeneratorOverlay && (
        <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0A1128]/95 backdrop-blur-xl animate-in zoom-in-95'>
          <GlassPanel className='max-w-2xl w-full relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
            <button
              onClick={() => setShowGeneratorOverlay(false)}
              className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
            >
              <XCircle size={24} />
            </button>
            <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8 mb-8'>
              <Printer size={40} className='text-[#D4AF37]' />
              <div>
                <h2 className='text-3xl font-extralight uppercase tracking-widest text-white'>
                  Neural Generator Active
                </h2>
                <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
                  {activeGeneratorType}
                </p>
              </div>
            </div>
            <div className='space-y-8 text-center py-12'>
              <div className='animate-spin w-12 h-12 border-t-2 border-[#D4AF37] rounded-full mx-auto' />
              <p className='text-xs font-light uppercase tracking-widest'>
                Synthesizing Registry Data for {profile.name}...
              </p>
              <p className='text-[0.6rem] font-mono text-white/40'>
                Drafting Executive Summary... Calibrating Financials...
                Formatting PDF...
              </p>
              <button className='px-8 py-4 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-xl mt-8'>
                Download Final Asset
              </button>
            </div>
          </GlassPanel>
        </div>
      )}

      {/* 14.1 SCENARIO SIMULATOR OVERLAY */}
      {isSimulating && (
        <div className='fixed inset-0 z-150 flex items-center justify-center p-6 bg-[#0A1128]/95 backdrop-blur-xl animate-in zoom-in-95'>
          <GlassPanel
            className='max-w-xl w-full relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'
            title='War Game Simulator'
          >
            <button
              onClick={() => setIsSimulating(false)}
              className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
            >
              <XCircle size={24} />
            </button>
            <div className='space-y-8 mt-6'>
              <div>
                <label className='text-[0.5rem] font-black text-[#D4AF37] uppercase tracking-widest block mb-4'>
                  Projected Revenue Adjustment
                </label>
                <input
                  type='range'
                  min='0'
                  max='100000'
                  step='1000'
                  value={simulationData.revenueAdj}
                  onChange={(e) =>
                    setSimulationData((p) => ({
                      ...p,
                      revenueAdj: parseInt(e.target.value),
                    }))
                  }
                  className='w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#D4AF37]'
                />
                <p className='text-right text-xs font-mono mt-2 text-[#D4AF37]'>
                  +${simulationData.revenueAdj.toLocaleString()}
                </p>
              </div>
              <div>
                <label className='text-[0.5rem] font-black text-white/60 uppercase tracking-widest block mb-4'>
                  Projected Debt Load
                </label>
                <input
                  type='range'
                  min='0'
                  max='50000'
                  step='500'
                  value={simulationData.debtAdj}
                  onChange={(e) =>
                    setSimulationData((p) => ({
                      ...p,
                      debtAdj: parseInt(e.target.value),
                    }))
                  }
                  className='w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-red-500'
                />
                <p className='text-right text-xs font-mono mt-2 text-red-500'>
                  +${simulationData.debtAdj.toLocaleString()}
                </p>
              </div>
              <div className='p-6 bg-white/5 rounded-xl border border-white/10 text-center'>
                <p className='text-[0.5rem] uppercase tracking-widest text-white/40'>
                  Simulated Delta
                </p>
                <p
                  className={`text-4xl font-thin font-mono ${
                    institutionalDelta > 30 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {institutionalDelta}%
                </p>
              </div>
            </div>
          </GlassPanel>
        </div>
      )}

      {/* PHASE 16: ACTIVE LESSON OVERLAY */}
      {activeLesson && (
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
      )}

      {/* PHASE 17: HABAKKUK BOARD OVERLAY */}
      {showHabakkuk && (
        <div className='fixed inset-0 z-200 flex items-center justify-center p-6 bg-[#0D1642]/95 backdrop-blur-xl animate-in zoom-in-95'>
          <GlassPanel className='max-w-4xl w-full h-[80vh] flex flex-col relative shadow-[0_0_150px_rgba(212,175,55,0.3)]'>
            <button
              onClick={() => setShowHabakkuk(false)}
              className='absolute top-6 right-6 text-white/40 hover:text-white transition-all'
            >
              <XCircle size={32} />
            </button>
            <div className='flex items-center gap-6 border-b border-[#D4AF37]/20 pb-8'>
              <MapPin size={48} className='text-[#D4AF37]' />
              <div>
                <h2 className='text-4xl font-extralight uppercase tracking-widest text-white'>
                  The Habakkuk Board
                </h2>
                <p className='text-xs font-black text-[#D4AF37] uppercase tracking-[0.5em] mt-2'>
                  Write the Vision, Make it Plain
                </p>
              </div>
            </div>
            <div className='flex-1 overflow-y-auto py-12 px-8 space-y-12 fiduciary-scroll'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='p-6 bg-white/5 border border-white/10 rounded-xl'>
                  <p className='text-xs font-light text-white/60 mb-4'>
                    Add Target Asset Node
                  </p>
                  <div className='space-y-4'>
                    <input
                      type='text'
                      placeholder='Asset Name (e.g. Dream Estate)'
                      className='w-full bg-white/5 border-b border-white/20 py-2 text-white outline-none focus:border-[#D4AF37]'
                    />
                    <input
                      type='number'
                      placeholder='Acquisition Cost'
                      className='w-full bg-white/5 border-b border-white/20 py-2 text-white outline-none focus:border-[#D4AF37]'
                    />
                    <button
                      onClick={() => addHabakkukTarget('New Asset', 1000000)}
                      className='w-full py-3 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] rounded-lg uppercase text-xs font-black tracking-widest hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
                    >
                      Map Vision
                    </button>
                  </div>
                </div>
                <div className='space-y-4'>
                  {habakkukTargets.map((t, i) => (
                    <div
                      key={i}
                      className='p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center'
                    >
                      <div>
                        <p className='text-sm font-bold text-white uppercase'>
                          {t.name}
                        </p>
                        <p className='text-xs text-white/40'>
                          ${t.cost.toLocaleString()}
                        </p>
                      </div>
                      <div className='text-right'>
                        <p className='text-[0.6rem] uppercase tracking-widest text-[#D4AF37]'>
                          Est. Acquisition
                        </p>
                        <p className='text-lg font-mono text-white'>{t.date}</p>
                      </div>
                    </div>
                  ))}
                  {habakkukTargets.length === 0 && (
                    <p className='text-center text-white/20 italic'>
                      No visions mapped yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      )}

      {/* 10.1 WAR ROOM OVERLAY */}
      {showWarRoom && (
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
      )}

      {/* 10.2 LENDER COMPLIANCE PACKET */}
      {showComplianceOverlay && (
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
      )}

      {/* 10.3 MANDATE OVERLAY */}
      {showMandateOverlay && (
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
      )}

      {logicLabel && (
        <div className='fixed inset-0 z-100 flex items-center justify-center p-6 bg-[#0A1128]/80 backdrop-blur-md'>
          <GlassPanel
            className='max-w-md w-full animate-in zoom-in-95 duration-300 shadow-[0_0_100px_rgba(212,175,55,0.2)]'
            title='Doctorate logic node'
          >
            <div className='space-y-6'>
              <h3 className='text-2xl font-extralight uppercase text-[#D4AF37] tracking-widest leading-tight'>
                {logicLabel}
              </h3>
              <p className='text-sm font-light text-white/80 leading-relaxed italic'>
                "{DOCTORATE_LOGIC[logicLabel]}"
              </p>
              <button
                onClick={() => setLogicLabel(null)}
                className='w-full py-4 border border-[#D4AF37]/20 text-[#D4AF37] text-[0.6rem] font-black uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all'
              >
                Clear Node
              </button>
            </div>
          </GlassPanel>
        </div>
      )}
      <aside
        className={`bg-[#0D1642] border-r border-[#D4AF37]/10 flex flex-col transition-all duration-700 shrink-0 ${
          sidebarOpen ? 'w-80' : 'w-0 overflow-hidden'
        }`}
      >
        <div className='p-12 border-b border-[#D4AF37]/10 text-center'>
          <h2 className='text-xl font-extralight leading-[1.1] tracking-[0.2em] uppercase'>
            <span className='text-[#D4AF37]'>NORA</span> <br />
            <span className='text-[#D4AF37] text-[0.55rem] tracking-[0.45em] opacity-80 mt-1 block'>
              CAPITAL GROUP
            </span>
          </h2>
          <p className='text-[#D4AF37]/30 text-[0.35rem] tracking-[0.3em] uppercase mt-2'>
            Jesus Christ is the Cornerstone
          </p>
        </div>
        <nav className='flex-1 py-12 px-6 space-y-3 overflow-y-auto'>
          {[
            { id: 'canvas', label: 'Command Hub', icon: Zap },
            { id: 'profile', label: 'Sovereign Profile', icon: User },
            { id: 'bridge', label: 'Funding Bridge', icon: Link2 },
            { id: 'wealth', label: 'Wealth Station', icon: Compass },
            { id: 'protocol', label: '31-Day Protocol', icon: FileText },
            { id: 'horizon', label: '90-Day Horizon', icon: BarChart3 },
            { id: 'armory', label: 'The Armory', icon: BookOpen },
            { id: 'academy', label: 'The Academy', icon: GraduationCap },
            { id: 'council', label: 'Neural Council', icon: Brain },
            { id: 'admin', label: 'Admin Command', icon: ShieldAlert },
            { id: 'commonwealth', label: 'Commonwealth', icon: Crown },
          ].map((item) => {
            const SidebarIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setGlobalSearch('');
                }}
                className={`w-full flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37]'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <SidebarIcon size={18} />
                <span className='text-[0.65rem] tracking-[0.4em] uppercase font-black'>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
        <div className='p-10 border-t border-[#D4AF37]/10 bg-black/40'>
          {/* PHASE 14: GAMIFICATION BADGES */}
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center'>
              <User size={20} className='text-[#D4AF37]' />
            </div>
            <div>
              <p className='text-[0.7rem] font-black uppercase tracking-widest mb-1 truncate max-w-[120px]'>
                {profile.name || 'Steward'}
              </p>
              <p className='text-[0.5rem] text-white/40 uppercase'>
                {dominionRank}
              </p>
            </div>
          </div>
          <div
            className='flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5'
            title='Holy Spirit Fire'
          >
            <div className='flex items-center gap-2'>
              <Flame size={14} className='text-orange-500' />
              <span className='text-xs font-mono text-white'>12</span>
            </div>
            <div className='flex items-center gap-2'>
              <Award size={14} className='text-[#D4AF37]' />
              <span className='text-xs font-mono text-white'>
                {protocol.velocityScore}
              </span>
            </div>
          </div>
        </div>
      </aside>

      <main className='flex-1 flex flex-col overflow-hidden relative'>
        <header className='px-12 py-8 border-b border-[#D4AF37]/10 flex justify-between items-center bg-[#0D1642]/95 backdrop-blur-3xl z-50'>
          <div className='flex items-center gap-12 flex-1'>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='p-3 hover:bg-white/5 rounded-2xl transition-all text-[#D4AF37] border border-[#D4AF37]/20'
            >
              <Menu size={20} />
            </button>
            {/* PROACTIVE NEURAL BRIEFING WIDGET */}
            {morningBriefing && (
              <div
                className={`hidden lg:flex items-center gap-4 bg-white/5 border px-6 py-2 rounded-full animate-in slide-in-from-top-4 ${
                  morningBriefing.type === 'CRITICAL'
                    ? 'border-red-500/30 bg-red-900/10'
                    : 'border-white/5'
                }`}
              >
                {morningBriefing.type === 'CRITICAL' ? (
                  <AlertCircle
                    size={14}
                    className='text-red-500 animate-pulse'
                  />
                ) : (
                  <Bell size={14} className='text-[#D4AF37] animate-pulse' />
                )}
                <p className='text-[0.55rem] font-black uppercase tracking-widest text-white/60'>
                  Briefing:{' '}
                  <span
                    className={
                      morningBriefing.type === 'CRITICAL'
                        ? 'text-red-400'
                        : 'text-[#D4AF37]'
                    }
                  >
                    {morningBriefing.msg}
                  </span>
                </p>

                {/* PHASE 15: AUDIO INTELLIGENCE */}
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 ${
                    isPlayingAudio
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                      : 'bg-transparent text-white/40'
                  }`}
                >
                  {isPlayingAudio ? (
                    <div className='flex gap-0.5'>
                      <div className='audio-bar h-3'></div>
                      <div className='audio-bar h-2 delay-75'></div>
                      <div className='audio-bar h-3 delay-150'></div>
                    </div>
                  ) : (
                    <PlayCircle size={12} />
                  )}
                  <span className='text-[0.45rem] font-black uppercase tracking-widest'>
                    {isPlayingAudio ? 'TRANSMITTING' : 'LISTEN'}
                  </span>
                </button>
              </div>
            )}
            <div className='relative max-w-md w-full'>
              <Search
                size={16}
                className='absolute left-6 top-1/2 -translate-y-1/2 text-[#D4AF37]/40'
              />
              <input
                type='text'
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder='Forensic Search...'
                className='w-full bg-white/5 border border-[#D4AF37]/10 rounded-full py-3 pl-14 pr-10 text-xs font-light text-white search-input outline-none'
              />
            </div>
            {/* PHASE 17: HABAKKUK BOARD TOGGLE */}
            <button
              onClick={() => setShowHabakkuk(true)}
              className='flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all'
            >
              <MapPin size={14} className='text-[#D4AF37]' />
              <span className='text-[0.5rem] font-black uppercase tracking-widest text-white/60'>
                Vision
              </span>
            </button>
            {/* WAR ROOM TOGGLE */}
            <button
              onClick={() => setShowWarRoom(true)}
              className='flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all'
            >
              <Users size={14} className='text-[#D4AF37]' />
              <span className='text-[0.5rem] font-black uppercase tracking-widest text-white/60'>
                War Room
              </span>
            </button>
            {/* PHASE 14: SIMULATOR TOGGLE */}
            <button
              onClick={() => setIsSimulating(true)}
              className='flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
            >
              <PlayCircle size={14} />
              <span className='text-[0.5rem] font-black uppercase tracking-widest'>
                Simulate
              </span>
            </button>
          </div>
          <div className='flex gap-16 items-center'>
            <div className='text-right'>
              <p className='text-[0.55rem] uppercase tracking-[0.4em] text-[#D4AF37]/50 font-black'>
                Target Goal
              </p>
              <p className='text-sm font-black tracking-widest text-[#D4AF37]'>
                {profile.goal?.toUpperCase() || 'SELECTING...'}
              </p>
            </div>
            <button
              onClick={() => setView('auth')}
              className='text-white/20 hover:text-red-500 transition-colors'
            >
              <LogOut size={24} />
            </button>
          </div>
        </header>

        <div className='flex-1 overflow-y-auto p-12 lg:p-20 space-y-20 custom-scrollbar'>
          {/* PROFILE VIEW */}
          {activeTab === 'profile' && (
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
          )}

          {/* NEURAL COUNCIL CHAT */}
          {activeTab === 'council' && (
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
          )}

          {/* 31-DAY PROTOCOL */}
          {activeTab === 'protocol' && (
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
          )}

          {/* HUB / CANVAS VIEW */}
          {activeTab === 'canvas' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <GlassPanel title='Baseline Delta'>
                  <h3 className='text-7xl font-thin font-mono text-[#D4AF37] leading-none'>
                    {institutionalDelta}%
                  </h3>
                </GlassPanel>
                <GlassPanel title='Velocity Score'>
                  <h3 className='text-7xl font-thin font-mono text-white leading-none'>
                    {protocol.velocityScore}
                  </h3>
                </GlassPanel>
                <GlassPanel title='Target Horizon'>
                  <h3 className='text-lg font-extralight uppercase text-white tracking-widest leading-tight'>
                    {profile.goal || '---'}
                  </h3>
                </GlassPanel>
                <GlassPanel title='Sync Status'>
                  <h3 className='text-[0.7rem] font-black uppercase text-green-500 tracking-[0.4em]'>
                    OPTIMAL
                  </h3>
                </GlassPanel>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <GlassPanel title='Active Protocol Mandate' icon={Calendar}>
                  <div className='flex justify-between items-center h-full'>
                    <div>
                      <p className='text-[0.5rem] font-black text-[#D4AF37] uppercase tracking-widest mb-2'>
                        31-Day OS Link
                      </p>
                      <h4 className='text-3xl font-extralight uppercase leading-tight'>
                        {MASTER_PROTOCOL_DATA[protocol.currentDay]?.title ||
                          'Awaiting Signal'}
                      </h4>
                    </div>
                    <button
                      onClick={() => setActiveTab('protocol')}
                      className='w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl'
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </GlassPanel>
                <GlassPanel title='Institutional DNA' icon={Fingerprint}>
                  <div className='grid grid-cols-2 gap-8 h-full items-center'>
                    <div>
                      <p className='text-[0.5rem] font-black text-white/30 uppercase tracking-widest mb-1'>
                        Accord Node
                      </p>
                      <p className='text-xs font-black uppercase tracking-widest text-[#D4AF37]'>
                        {profile.accord || 'PENDING'}
                      </p>
                    </div>
                    <div>
                      <p className='text-[0.5rem] font-black text-white/30 uppercase tracking-widest mb-1'>
                        Blueprint
                      </p>
                      <p className='text-xs font-black uppercase tracking-widest text-[#D4AF37]'>
                        {profile.blueprint || 'PENDING'}
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </div>
              {/* VISUAL TRAJECTORY CHARTS */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <GlassPanel
                  title='Net Worth Trajectory (90 Days)'
                  icon={TrendingUp}
                >
                  <div className='h-64 w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <AreaChart data={trajectoryData}>
                        <defs>
                          <linearGradient
                            id='colorWorth'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                          >
                            <stop
                              offset='5%'
                              stopColor='#D4AF37'
                              stopOpacity={0.3}
                            />
                            <stop
                              offset='95%'
                              stopColor='#D4AF37'
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray='3 3'
                          stroke='rgba(255,255,255,0.05)'
                        />
                        <XAxis
                          dataKey='month'
                          stroke='rgba(255,255,255,0.2)'
                          fontSize={10}
                        />
                        <YAxis stroke='rgba(255,255,255,0.2)' fontSize={10} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0D1642',
                            borderColor: '#D4AF37',
                          }}
                        />
                        <Area
                          type='monotone'
                          dataKey='NetWorth'
                          stroke='#D4AF37'
                          fillOpacity={1}
                          fill='url(#colorWorth)'
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </GlassPanel>
                <GlassPanel title='Debt Decay Projection' icon={TrendingDown}>
                  <div className='h-64 w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <LineChart data={trajectoryData}>
                        <CartesianGrid
                          strokeDasharray='3 3'
                          stroke='rgba(255,255,255,0.05)'
                        />
                        <XAxis
                          dataKey='month'
                          stroke='rgba(255,255,255,0.2)'
                          fontSize={10}
                        />
                        <YAxis stroke='rgba(255,255,255,0.2)' fontSize={10} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0D1642',
                            borderColor: '#D4AF37',
                          }}
                        />
                        <Line
                          type='monotone'
                          dataKey='Debt'
                          stroke='#EF4444'
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </GlassPanel>
              </div>
            </div>
          )}

          {activeTab === 'horizon' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    90-Day <span className='gold-text-gradient'>Horizon</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Unified Gate Trajectory
                  </p>
                </div>
                <Microscope size={64} className='opacity-10 text-[#D4AF37]' />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 h-full'>
                {HORIZON_GATES.map((gate, idx) => {
                  const isGateActive =
                    (idx === 0 && gateProgress < 100) ||
                    (idx === 1 && gateProgress >= 100);
                  return (
                    <GlassPanel
                      key={gate.id}
                      title={`${gate.month}: ${gate.title}`}
                      scrollable={true}
                    >
                      <div className='space-y-8'>
                        <div className='flex justify-between items-center'>
                          <div
                            className={`px-4 py-1 rounded-full text-[0.5rem] font-black uppercase tracking-widest ${
                              isGateActive
                                ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                                : 'bg-white/5 text-white/20'
                            }`}
                          >
                            {isGateActive ? 'ACTIVE' : 'LOCKED'}
                          </div>
                          <p className='text-2xl font-thin font-mono text-white/40'>
                            {idx === 0 ? gateProgress : 0}%
                          </p>
                        </div>
                        <div className='space-y-4'>
                          {gate.nodes.map((node, nIdx) => (
                            <div
                              key={nIdx}
                              className='flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl'
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  idx === 0 &&
                                  (protocol.sealedDays?.length || 0) > nIdx * 7
                                    ? 'bg-green-500'
                                    : 'bg-white/10'
                                }`}
                              />
                              <span className='text-xs font-light tracking-wide'>
                                {node}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </GlassPanel>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'bridge' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    Funding <span className='gold-text-gradient'>Bridge</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Multivariate Allocation
                  </p>
                </div>
                <button
                  onClick={() => setShowComplianceOverlay(true)}
                  className='flex items-center gap-4 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all'
                >
                  <FileBadge size={16} />
                  <span className='text-[0.6rem] font-black uppercase tracking-widest'>
                    Generate Packet
                  </span>
                </button>
              </div>

              {/* 10.2 LIVE MARKET TICKER */}
              <div className='w-full bg-[#0D1642]/80 border-y border-[#D4AF37]/20 overflow-hidden py-2 mb-8'>
                <div className='animate-marquee whitespace-nowrap flex gap-12 text-[0.6rem] font-mono text-[#D4AF37] tracking-widest uppercase'>
                  <span>Prime Rate: 8.50%</span>
                  <span>SBA 7(a) Peg: 11.25%</span>
                  <span>10Y Treasury: 4.10%</span>
                  <span>CPI Inflation: 3.2%</span>
                  <span>Fed Funds: 5.50%</span>
                  <span>SOFR: 5.31%</span>
                </div>
              </div>

              <GlassPanel
                title='Institutional Readiness Analysis'
                icon={Hourglass}
              >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-center'>
                  <div className='text-center'>
                    <p className='text-[0.6rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4'>
                      Readiness score
                    </p>
                    <div className='text-6xl font-thin font-mono text-[#D4AF37]'>
                      {fundingReadiness.score}%
                    </div>
                  </div>
                  <div className='md:col-span-2 space-y-6'>
                    <div className='flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl'>
                      <Calendar size={24} className='text-[#D4AF37]' />
                      <div>
                        <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest'>
                          Projected Horizon
                        </p>
                        <p className='text-2xl font-extralight uppercase text-white'>
                          {fundingReadiness.horizon}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassPanel>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {FUNDING_VECTORS.map((v) => (
                  <GlassPanel key={v.id} title={v.title}>
                    <div className='space-y-6 flex flex-col justify-between h-full'>
                      <div>
                        <p className='text-[0.55rem] font-black text-[#D4AF37] uppercase tracking-widest mb-2'>
                          Cap Node: {v.limit}
                        </p>
                        <p className='text-sm text-white/40 leading-relaxed font-light'>
                          {v.desc}
                        </p>
                      </div>
                      <button className='w-full py-4 border border-[#D4AF37]/30 text-[#D4AF37] text-[0.6rem] font-black uppercase hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl'>
                        Initialize Vector
                      </button>
                    </div>
                  </GlassPanel>
                ))}
              </div>
              <GlassPanel
                title='Neural Capital Audit'
                icon={Brain}
                scrollable={true}
              >
                <div className='space-y-12'>
                  <div className='p-12 bg-white/5 border border-white/10 rounded-[3rem]'>
                    {aiAnalysis ? (
                      <div className='text-xl font-light leading-relaxed text-white/80 whitespace-pre-wrap'>
                        {aiAnalysis}
                      </div>
                    ) : (
                      <div className='flex flex-col items-center py-16 opacity-20'>
                        <Activity
                          size={64}
                          className='mb-8 animate-pulse text-[#D4AF37]'
                        />
                        <p className='text-xs tracking-[0.6em] uppercase font-black'>
                          Awaiting Strategic Signal
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={runNeuralAudit}
                    disabled={aiLoading}
                    className='w-full py-10 border-2 border-[#D4AF37] text-[#D4AF37] font-black tracking-[1em] uppercase text-xs hover:bg-[#D4AF37] hover:text-[#0D1642] transition-all shadow-xl'
                  >
                    Run Gap Analysis
                  </button>
                </div>
              </GlassPanel>
            </div>
          )}

          {activeTab === 'wealth' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    Wealth <span className='gold-text-gradient'>Station</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Blueprint Dominion
                  </p>
                </div>
                <Target size={64} className='opacity-10 text-[#D4AF37]' />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <GlassPanel title='Active Accord Node' icon={Award}>
                  <p className='text-4xl font-extralight uppercase text-[#D4AF37]'>
                    {profile.accord || 'CALIBRATING...'}
                  </p>
                </GlassPanel>
                <GlassPanel title='Strategic Blueprint' icon={Layers}>
                  <p className='text-4xl font-extralight uppercase text-white'>
                    {profile.blueprint || 'CALIBRATING...'}
                  </p>
                </GlassPanel>
              </div>
              {/* RESTORED: BLUEPRINT LOGIC ROADMAP */}
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {(
                  BLUEPRINT_LOGIC[profile.blueprint] || { gates: HORIZON_GATES }
                ).gates.map((gate, idx) => (
                  <GlassPanel key={idx} title={gate.title}>
                    <div className='space-y-6'>
                      <div className='flex justify-between items-center'>
                        <span className='text-[0.6rem] font-black uppercase tracking-widest text-[#D4AF37]'>
                          {gate.id}
                        </span>
                      </div>
                      <div className='space-y-2'>
                        {gate.nodes.map((n) => (
                          <div
                            key={n}
                            className='flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5'
                          >
                            <div className='w-1.5 h-1.5 rounded-full bg-[#D4AF37]' />
                            <span className='text-xs font-light'>{n}</span>
                          </div>
                        ))}
                      </div>
                      <div className='mt-4 pt-4 border-t border-white/10'>
                        <p className='text-[0.5rem] uppercase text-white/40 mb-1'>
                          Exit Criteria
                        </p>
                        <p className='text-xs font-bold text-green-500'>
                          {gate.exit}
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                ))}
              </div>
              {/* RESTORED: BLUEPRINT CURRICULUM */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>
                <GlassPanel
                  title={`Kingdom Curriculum: ${
                    (
                      BLUEPRINT_CURRICULUM[profile.blueprint] ||
                      BLUEPRINT_CURRICULUM['default']
                    ).title
                  }`}
                  icon={Video}
                >
                  <div className='space-y-6'>
                    {(
                      BLUEPRINT_CURRICULUM[profile.blueprint] ||
                      BLUEPRINT_CURRICULUM['default']
                    ).modules.map((m, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer'
                      >
                        <span className='text-sm font-light text-white'>
                          {m}
                        </span>
                        <div className='flex items-center gap-2'>
                          <div className='w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse' />
                          <span className='text-[0.5rem] uppercase tracking-widest text-white/40'>
                            Watch Node
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </div>
            </div>
          )}

          {activeTab === 'armory' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    The <span className='gold-text-gradient'>Armory</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Institutional Arsenal & Legal Vault
                  </p>
                </div>
                <BookOpen size={64} className='opacity-10 text-[#D4AF37]' />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <GlassPanel title='Institutional Output Engines' icon={Printer}>
                  <div className='grid grid-cols-1 gap-6'>
                    {ARMORY.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleGenerator(item.title)}
                        className='flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer group'
                      >
                        <div>
                          <h4 className='text-sm font-black uppercase text-white mb-2 group-hover:text-[#D4AF37] transition-colors'>
                            {item.title}
                          </h4>
                          <p className='text-xs font-light text-white/50'>
                            {item.desc}
                          </p>
                        </div>
                        <ArrowLeft
                          size={16}
                          className='rotate-180 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all'
                        />
                      </div>
                    ))}
                  </div>
                </GlassPanel>
                <GlassPanel title='Letter of Law Database' icon={ScrollText}>
                  <div className='space-y-8'>
                    <div>
                      <p className='text-[0.55rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4 border-b border-white/5 pb-2'>
                        Business Operations
                      </p>
                      <div className='grid grid-cols-2 gap-4'>
                        {[
                          'Independent Contractor Agmt',
                          'Non-Disclosure Agmt (NDA)',
                          'Cease & Desist Order',
                          'Corporate Resolution',
                        ].map((t) => (
                          <div
                            key={t}
                            className='p-3 bg-white/5 rounded-lg text-xs font-light text-white/80 hover:bg-[#D4AF37]/10 cursor-pointer'
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className='text-[0.55rem] font-black text-[#D4AF37] uppercase tracking-widest mb-4 border-b border-white/5 pb-2'>
                        Acquisition Contracts
                      </p>
                      <div className='grid grid-cols-2 gap-4'>
                        {[
                          'LOI (Real Estate)',
                          'LOI (Business M&A)',
                          'Asset Purchase Agmt',
                          'Seller Finance Note',
                        ].map((t) => (
                          <div
                            key={t}
                            className='p-3 bg-white/5 rounded-lg text-xs font-light text-white/80 hover:bg-[#D4AF37]/10 cursor-pointer'
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <GlassPanel title='Strategic Uplinks' icon={Link2}>
                  <div className='space-y-4'>
                    {[
                      {
                        name: 'Secretary of State (TX)',
                        link: 'Direct Filing Portal',
                      },
                      { name: 'Dun & Bradstreet', link: 'D-U-N-S Request' },
                      { name: 'IRS.gov', link: 'EIN Assistant' },
                    ].map((l, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center p-4 border border-white/10 rounded-lg'
                      >
                        <span className='text-xs font-black uppercase text-white'>
                          {l.name}
                        </span>
                        <span className='text-[0.5rem] uppercase tracking-widest text-[#D4AF37]'>
                          {l.link}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
                <GlassPanel title='Vendor Tier List' icon={Layers}>
                  <div className='space-y-4'>
                    <div className='flex justify-between p-2 border-b border-white/5'>
                      <span className='text-xs font-light'>Uline</span>
                      <span className='text-xs font-black text-green-500'>
                        Tier 1
                      </span>
                    </div>
                    <div className='flex justify-between p-2 border-b border-white/5'>
                      <span className='text-xs font-light'>Quill</span>
                      <span className='text-xs font-black text-green-500'>
                        Tier 1
                      </span>
                    </div>
                    <div className='flex justify-between p-2 border-b border-white/5'>
                      <span className='text-xs font-light'>Grainger</span>
                      <span className='text-xs font-black text-green-500'>
                        Tier 1
                      </span>
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </div>
          )}

          {activeTab === 'academy' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    The <span className='gold-text-gradient'>Academy</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Blueprint-Specific Dominion Training
                  </p>
                </div>
                <GraduationCap
                  size={64}
                  className='opacity-10 text-[#D4AF37]'
                />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <GlassPanel
                  title={`Curriculum: ${
                    (
                      BLUEPRINT_CURRICULUM[profile.blueprint] ||
                      BLUEPRINT_CURRICULUM['default']
                    ).title
                  }`}
                  icon={Video}
                >
                  <div className='space-y-6'>
                    {(
                      BLUEPRINT_CURRICULUM[profile.blueprint] ||
                      BLUEPRINT_CURRICULUM['default']
                    ).modules.map((m, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer'
                      >
                        <span className='text-sm font-light text-white'>
                          {m}
                        </span>
                        <div className='flex items-center gap-2'>
                          <div className='w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse' />
                          <span className='text-[0.5rem] uppercase tracking-widest text-white/40'>
                            Watch Node
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
                <GlassPanel title='Sovereign Library' icon={Book}>
                  <div className='grid grid-cols-1 gap-4'>
                    {[
                      'Trust Architecture 101',
                      'Institutional Credit Stacking',
                      'The Theology of Wealth',
                    ].map((b) => (
                      <div
                        key={b}
                        className='p-4 border border-white/10 rounded-lg text-xs font-light hover:text-[#D4AF37] cursor-pointer transition-colors'
                      >
                        {b}
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    Admin <span className='gold-text-gradient'>Command</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Forensic Directory
                  </p>
                </div>
                <ShieldAlert size={64} className='opacity-10 text-[#D4AF37]' />
              </div>
              {/* ADMIN GOD MODE ANALYTICS */}
              <GlassPanel title='Ecosystem Dominion (God Mode)' icon={Globe}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                  <div className='text-center'>
                    <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest mb-2'>
                      Total Capital Under Management
                    </p>
                    <p className='text-4xl font-thin font-mono text-[#D4AF37]'>
                      ${ecosystemStats.totalRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div className='text-center'>
                    <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest mb-2'>
                      Active Architects
                    </p>
                    <p className='text-4xl font-thin font-mono text-white'>
                      {ecosystemStats.activeUsers}
                    </p>
                  </div>
                  <div className='text-center'>
                    <p className='text-[0.5rem] font-black text-white/40 uppercase tracking-widest mb-2'>
                      Avg Institutional Delta
                    </p>
                    <p className='text-4xl font-thin font-mono text-green-500'>
                      42%
                    </p>
                  </div>
                </div>
              </GlassPanel>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                <GlassPanel
                  title='Master Directory'
                  className='lg:col-span-1'
                  scrollable={true}
                >
                  <div className='space-y-4'>
                    {architects
                      .filter((a) =>
                        (a.name || '')
                          .toLowerCase()
                          .includes(globalSearch.toLowerCase())
                      )
                      .map((arc) => (
                        <button
                          key={arc.id}
                          onClick={() => setSelectedArchitect(arc)}
                          className={`w-full text-left p-6 rounded-xl border transition-all ${
                            selectedArchitect?.id === arc.id
                              ? 'bg-[#D4AF37]/15 border-[#D4AF37]'
                              : 'bg-white/5 border-white/5 hover:border-[#D4AF37]/40'
                          }`}
                        >
                          <div className='flex justify-between items-center mb-1'>
                            <p className='text-xs font-black uppercase text-[#D4AF37]'>
                              {arc.name || 'UNNAMED'}
                            </p>
                            {/* 7.1 HEALTH HEATMAP */}
                            <div
                              className={`w-2 h-2 rounded-full ${
                                arc.creditScoreExpe > 700
                                  ? 'bg-green-500'
                                  : 'bg-red-500'
                              }`}
                            />
                          </div>
                          <p className='text-[0.6rem] text-white/40 truncate'>
                            {arc.email}
                          </p>
                        </button>
                      ))}
                  </div>
                </GlassPanel>
                <GlassPanel
                  title='Forensic Oversight View'
                  className='lg:col-span-2'
                  scrollable={true}
                >
                  {selectedArchitect ? (
                    <div className='space-y-12'>
                      <div className='grid grid-cols-3 gap-8'>
                        <div className='p-6 bg-white/5 border border-white/5 rounded-2xl text-center'>
                          <p className='text-[0.5rem] text-white/20 uppercase mb-2'>
                            Readiness
                          </p>
                          <p className='text-3xl font-thin text-[#D4AF37]'>
                            {selectedArchitect.creditScoreExpe > 700
                              ? '90%'
                              : '40%'}
                          </p>
                        </div>
                        <div className='p-6 bg-white/5 border border-white/10 rounded-2xl text-center'>
                          <p className='text-[0.5rem] text-white/20 uppercase mb-2'>
                            Vessel Revenue
                          </p>
                          <p className='text-2xl font-thin text-white'>
                            $
                            {selectedArchitect.annualRevenue?.toLocaleString() ||
                              0}
                          </p>
                        </div>
                      </div>
                      <div className='space-y-4'>
                        <p className='text-[0.5rem] font-black text-white/40 uppercase'>
                          Direct Governance Override
                        </p>
                        <div className='flex gap-4'>
                          <input
                            type='text'
                            value={adminDirective}
                            onChange={(e) => setAdminDirective(e.target.value)}
                            placeholder='Issue high-priority directive...'
                            className='flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-white outline-none focus:border-[#D4AF37]'
                          />
                          <button
                            onClick={sendGovernanceOverride}
                            className='px-6 py-2 bg-red-900/40 border border-red-500/50 text-red-500 text-[0.6rem] font-black uppercase rounded-lg hover:bg-red-900/80 transition-all'
                          >
                            Send Alert
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='flex flex-col items-center justify-center py-32 opacity-20'>
                      <Eye size={48} className='mb-6' />
                      <p className='text-xs font-black uppercase tracking-widest'>
                        Select Architect Node
                      </p>
                    </div>
                  )}
                </GlassPanel>
              </div>
            </div>
          )}

          {activeTab === 'commonwealth' && (
            <div className='space-y-20 animate-in fade-in'>
              <div className='flex justify-between items-end border-b border-[#D4AF37]/10 pb-16'>
                <div>
                  <h2 className='text-8xl font-extralight uppercase tracking-[0.15em]'>
                    The <span className='gold-text-gradient'>Commonwealth</span>
                  </h2>
                  <p className='text-white/30 text-xs tracking-widest uppercase mt-4'>
                    Kingdom Economy & Capital Pool
                  </p>
                </div>
                <Crown size={64} className='opacity-10 text-[#D4AF37]' />
              </div>

              {/* GOLDEN GATE LOCK */}
              {commonwealthLocked ? (
                <div className='relative min-h-[600px] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/20'>
                  <div className='absolute inset-0 bg-[#0D1642] z-0 flex flex-col items-center justify-center space-y-8 p-12 text-center'>
                    <div className='w-24 h-24 rounded-full border-2 border-[#D4AF37] flex items-center justify-center animate-pulse'>
                      <Lock size={40} className='text-[#D4AF37]' />
                    </div>
                    <h3 className='text-4xl font-extralight uppercase tracking-widest text-white'>
                      Dominion Access Locked
                    </h3>
                    <p className='text-sm font-light text-white/60 max-w-xl leading-relaxed'>
                      The Commonwealth is the internal economy of Nora Capital.
                      Access is reserved for Governors who have sealed the
                      31-Day Protocol and established a verified Vessel Entity.
                    </p>
                    <button
                      onClick={() => setCommonwealthLocked(false)}
                      className='px-10 py-5 bg-[#D4AF37] text-[#0D1642] font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]'
                    >
                      Unlock Kingdom Access
                    </button>
                  </div>
                  <div className='absolute inset-0 blur-xl opacity-20 pointer-events-none z-[-1] grid grid-cols-3 gap-8 p-12'>
                    <div className='bg-white/10 h-64 rounded-2xl border border-white/20'></div>
                    <div className='bg-white/10 h-64 rounded-2xl border border-white/20'></div>
                    <div className='bg-white/10 h-64 rounded-2xl border border-white/20'></div>
                    <div className='col-span-2 bg-white/10 h-48 rounded-2xl border border-white/20'></div>
                  </div>
                </div>
              ) : (
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in zoom-in-95'>
                  <GlassPanel title='Barter Exchange' icon={Handshake}>
                    <div className='space-y-4'>
                      {[
                        'Legal Contract Review',
                        'Brand Identity Design',
                        'Tax Strategy Consult',
                        'SEO Audit',
                      ].map((s) => (
                        <div
                          key={s}
                          className='flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[#D4AF37]/50 cursor-pointer transition-all'
                        >
                          <div className='flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-xs'>
                              SV
                            </div>
                            <span className='text-xs font-light text-white'>
                              {s}
                            </span>
                          </div>
                          <button className='text-[0.5rem] font-black uppercase text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded'>
                            Request Swap
                          </button>
                        </div>
                      ))}
                    </div>
                  </GlassPanel>
                  <GlassPanel title='Capital Pool Deal Room' icon={Gem}>
                    <div className='space-y-4'>
                      {[
                        {
                          title: 'Multifamily Syndication - Austin, TX',
                          raise: '$5M',
                          min: '$50k',
                        },
                        {
                          title: 'SaaS Seed Round - FinTech',
                          raise: '$2M',
                          min: '$25k',
                        },
                      ].map((d) => (
                        <div
                          key={d.title}
                          className='p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer'
                        >
                          <div className='flex justify-between mb-2'>
                            <span className='text-xs font-bold text-white uppercase'>
                              {d.title}
                            </span>
                            <span className='text-[0.6rem] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded'>
                              OPEN
                            </span>
                          </div>
                          <div className='flex gap-4 text-[0.6rem] text-white/40'>
                            <span>Target Raise: {d.raise}</span>
                            <span>Min Check: {d.min}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassPanel>
                  <GlassPanel
                    title='Iron Sharpens Iron'
                    icon={MessageSquareCode}
                    className='lg:col-span-2'
                  >
                    <div className='h-64 flex flex-col space-y-4 overflow-y-auto p-4'>
                      {/* MOCK CHAT FEED */}
                      <div className='flex gap-3'>
                        <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs font-bold'>
                          JD
                        </div>
                        <div className='bg-white/5 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
                          <p className='text-xs font-light text-white'>
                            Has anyone utilized the SBA 7(a) for acquisition of
                            a SaaS under $2M ARR?
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-3 flex-row-reverse'>
                        <div className='w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-bold'>
                          MK
                        </div>
                        <div className='bg-[#D4AF37]/10 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl'>
                          <p className='text-xs font-light text-white'>
                            Yes, I just closed one. The key is the Debt Service
                            Coverage Ratio (DSCR) being above 1.25x. Check the
                            Armory for the P&L template.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 flex gap-4'>
                      <input
                        type='text'
                        placeholder='Contribute to the war room...'
                        className='flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white outline-none focus:border-[#D4AF37]'
                      />
                      <button className='p-2 bg-[#D4AF37] rounded-full text-[#0D1642] hover:bg-white'>
                        <Send size={14} />
                      </button>
                    </div>
                  </GlassPanel>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
