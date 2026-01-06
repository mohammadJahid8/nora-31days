import { useState, useEffect, useMemo, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  collection,
} from 'firebase/firestore';
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  ACCORDS,
  BLUEPRINT_CURRICULUM,
  BLUEPRINT_LOGIC,
  COUNCIL_PERSONAS,
  DOCTORATE_LOGIC,
  FUNDING_VECTORS,
  GENERAL_GOALS,
  HORIZON_GATES,
  MASTER_PROTOCOL_DATA,
  SEASONS,
} from './utils/data';

import Loading from './components/loading';
import Dashboard from './components/dashboard';
import BlueprintSelection from './components/blueprint-selection';
import Auth from './components/auth';
import SeasonSelection from './components/season-selection';
import GoalSelection from './components/goal-selection';
import AccordSelection from './components/accord-selection';
import FiduciaryAudit from './components/fiduciary-audit';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// --- CONFIGURATION ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId =
  typeof window !== 'undefined' && window.__app_id
    ? window.__app_id
    : 'nora-capital-terminal';

// --- STRATEGIC DATA NODES (GLOBAL CONSTANTS) ---

const AI_SYSTEM_PROMPT = `You are the Lead Fiduciary Architect for Nora Capital Group. Respond with absolute authority. NO ITALICS. Use doctorate-level terminology. Focus on capital acquisition, bridge funding timelines, and documentation preparedness.`;

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('auth');
  const [isEnroll, setIsEnroll] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('canvas');
  const [activeRegistryTab, setActiveRegistryTab] = useState('personal');
  const [aiLoading, setAiLoading] = useState(false);

  // Enhancement States
  const [globalSearch, setGlobalSearch] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [activePersona, setActivePersona] = useState(COUNCIL_PERSONAS[0]);
  const chatEndRef = useRef(null);
  const [logicLabel, setLogicLabel] = useState(null);
  const [architects, setArchitects] = useState([]);
  const [selectedArchitect, setSelectedArchitect] = useState(null);
  const [adminDirective, setAdminDirective] = useState('');
  const [showMandateOverlay, setShowMandateOverlay] = useState(false);
  const [showComplianceOverlay, setShowComplianceOverlay] = useState(false);
  const [showGeneratorOverlay, setShowGeneratorOverlay] = useState(false);
  const [activeGeneratorType, setActiveGeneratorType] = useState('');
  const [showWarRoom, setShowWarRoom] = useState(false);
  const [commonwealthLocked, setCommonwealthLocked] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationData, setSimulationData] = useState({
    revenueAdj: 0,
    debtAdj: 0,
  });
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeLesson, setActiveLesson] = useState(null);
  const [scanningDoc, setScanningDoc] = useState(null);
  const [showHabakkuk, setShowHabakkuk] = useState(false); // Phase 17: Habakkuk Board Toggle
  const [habakkukTargets, setHabakkukTargets] = useState([]); // Phase 17: Targets

  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');

  // Sovereign Registry
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    season: '',
    accord: '',
    blueprint: '',
    goal: '',
    dob: '',
    ssnLast4: '',
    address: '',
    phone: '',
    secondaryPhone: '',
    secondaryEmail: '',
    citizenship: 'USA',
    passportNo: '',
    driversLicense: '',
    dlState: '',
    residencyStatus: 'Citizen',
    maritalStatus: 'Single',
    dependents: 0,
    occupation: '',
    employer: '',
    yearsInField: 0,
    taxID: '',
    globalEntry: '',
    emergencyContact: '',
    emergencyPhone: '',
    creditScoreTrans: 700,
    creditScoreEqui: 700,
    creditScoreExpe: 700,
    totalUtilization: 0,
    inquiries6m: 0,
    ageOfAccounts: 0,
    negativeItems: 0,
    publicRecords: 0,
    bizName: '',
    ein: '',
    duns: '',
    entityType: 'LLC',
    jurisdiction: 'Texas',
    agent: '',
    bizDate: '',
    sosID: '',
    bizAddress: '',
    bizPhone: '',
    bizEmail: '',
    website: '',
    employees: 1,
    bankName: '',
    bankAccountAge: 0,
    paydex: 80,
    experianBiz: 0,
    equifaxBiz: 0,
    tradeLines: 0,
    corporateMinutesStatus: 'Current',
    secretaryOfStateStatus: 'Active',
    insuranceCarrier: '',
    policyNo: '',
    assetTotal: 0,
    liabilityTotal: 0,
    annualRevenue: 0,
    operationalBurn: 0,
    payroll: 0,
    marketing: 0,
    compliance: 0,
    cogs: 0,
    inventory: 0,
    legal: 0,
    profitMargin: 0,
    income: 0,
    burden: 0,
    rentMortgage: 0,
    groceries: 0,
    utilities: 0,
    transportation: 0,
    health: 0,
    education: 0,
    tithing: 0,
    savings: 0,
    docArticles: false,
    docSS4: false,
    docOpAccord: false,
    docPassport: false,
    adminOverride: null,
    successorName: '',
    successorEmail: '',
    legacyTrigger: '90 Days', // Phase 17: Succession
  });

  const [protocol, setProtocol] = useState({
    currentDay: 1,
    sealedDays: [],
    velocityScore: 0,
  });
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [morningBriefing, setMorningBriefing] = useState(null);

  // --- UNIFICATION & SCORING ---
  const institutionalDelta = useMemo(() => {
    let inc = profile.income + (isSimulating ? simulationData.revenueAdj : 0);
    let bur = profile.burden + (isSimulating ? simulationData.debtAdj : 0);
    if (!inc || inc <= 0) return 0;
    return Math.round(((inc - bur) / inc) * 100);
  }, [profile.income, profile.burden, isSimulating, simulationData]);

  const personalFiduciaryScore = useMemo(() => {
    if (!profile.income || profile.income <= 0) return 0;
    const surplus = profile.income - profile.burden;
    return Math.min(
      100,
      Math.max(0, Math.round((surplus / profile.income) * 100))
    );
  }, [profile.income, profile.burden]);

  const vesselCommandScore = useMemo(() => {
    if (!profile.annualRevenue || profile.annualRevenue <= 0) return 0;
    const profit = profile.annualRevenue - profile.operationalBurn;
    return Math.min(
      100,
      Math.max(0, Math.round((profit / profile.annualRevenue) * 100))
    );
  }, [profile.annualRevenue, profile.operationalBurn]);

  const fundingReadiness = useMemo(() => {
    let score = 0;
    if (profile.creditScoreExpe > 720) score += 25;
    if (profile.annualRevenue > 50000) score += 20;
    if (profile.tradeLines >= 5) score += 15;
    if (profile.paydex >= 80) score += 15;
    if (profile.ein && profile.sosID) score += 15;
    if (profile.docArticles && profile.docSS4) score += 10;
    let horizon = '6-8 Months';
    if (score > 85) horizon = '48-72 Hours (Ready Now)';
    else if (score > 60) horizon = '30-90 Days';
    else if (score > 30) horizon = '120-180 Days';
    return { score, horizon };
  }, [profile]);

  const gateProgress = useMemo(() => {
    const sealedCount = (protocol.sealedDays || []).length;
    return Math.min(100, Math.round((sealedCount / 31) * 100));
  }, [protocol.sealedDays]);

  const providentTaxShield = useMemo(() => {
    const taxable =
      (profile.annualRevenue || 0) - (profile.operationalBurn || 0);
    return Math.max(0, taxable * 0.28).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }, [profile.annualRevenue, profile.operationalBurn]);

  const trajectoryData = useMemo(() => {
    const data = [];
    let netWorth = 0;
    let debt =
      (profile.burden + (isSimulating ? simulationData.debtAdj : 0)) * 12;
    const monthlySurplus =
      (profile.income +
        (isSimulating ? simulationData.revenueAdj : 0) -
        (profile.burden + (isSimulating ? simulationData.debtAdj : 0))) *
      (institutionalDelta / 100);
    for (let i = 0; i <= 12; i++) {
      data.push({
        month: `M${i}`,
        NetWorth: netWorth,
        Debt: Math.max(0, debt),
      });
      netWorth += monthlySurplus + profile.annualRevenue * 0.2;
      debt -= profile.burden * 0.3;
    }
    return data;
  }, [profile, institutionalDelta, isSimulating, simulationData]);

  const ecosystemStats = useMemo(() => {
    return architects.reduce(
      (acc, curr) => {
        acc.totalRevenue += curr.annualRevenue || 0;
        acc.totalCredit += curr.creditScoreExpe || 0;
        acc.activeUsers += 1;
        return acc;
      },
      { totalRevenue: 0, totalCredit: 0, activeUsers: 0 }
    );
  }, [architects]);

  // const activeBlueprintLogic = useMemo(() => {
  //   return BLUEPRINT_LOGIC[profile.blueprint] || { gates: HORIZON_GATES };
  // }, [profile.blueprint]);

  const dominionRank = useMemo(() => {
    if (protocol.velocityScore > 5000) return 'Sovereign Governor';
    if (protocol.velocityScore > 2000) return 'Master Architect';
    if (protocol.velocityScore > 500) return 'Vessel Builder';
    return 'Initiate';
  }, [protocol.velocityScore]);

  // Phase 17: Habakkuk Logic
  const addHabakkukTarget = (name, cost) => {
    const monthsToAcquire = Math.ceil(
      cost / (profile.income - profile.burden || 1)
    );
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + monthsToAcquire);
    setHabakkukTargets([
      ...habakkukTargets,
      { name, cost, date: targetDate.toLocaleDateString() },
    ]);
  };

  // --- PROACTIVE NEURAL BRIEFING ---
  useEffect(() => {
    if (!user) return;
    if (institutionalDelta < 20) {
      setMorningBriefing({
        type: 'CRITICAL',
        msg: `Architect ${
          profile.name.split(' ')[0] || ''
        }, your Institutional Delta is critically low (${institutionalDelta}%). Dr. Solomon advises immediate operational burn freeze.`,
      });
    } else if (fundingReadiness.score > 80) {
      setMorningBriefing({
        type: 'OFFENSE',
        msg: `Architect ${
          profile.name.split(' ')[0] || ''
        }, Readiness Score is optimal (${
          fundingReadiness.score
        }%). Dr. Abraham suggests initializing the SBA Vector.`,
      });
    } else {
      setMorningBriefing({
        type: 'STATUS',
        msg: `Systems Nominal. Current Protocol Velocity: ${protocol.velocityScore}. Continue sealing mandates.`,
      });
    }
  }, [user, institutionalDelta, fundingReadiness]);

  // --- FIREBASE SYNC & HANDLERS ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (window.__initial_auth_token) {
          await signInWithCustomToken(auth, window.__initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error('Identity Breach', err);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const profileRef = doc(
      db,
      'artifacts',
      appId,
      'users',
      user.uid,
      'profile',
      'registry'
    );
    const protocolRef = doc(
      db,
      'artifacts',
      appId,
      'users',
      user.uid,
      'protocol',
      'status'
    );
    const unsubs = [
      onSnapshot(
        profileRef,
        (snap) => snap.exists() && setProfile((p) => ({ ...p, ...snap.data() }))
      ),
      onSnapshot(
        protocolRef,
        (snap) =>
          snap.exists() && setProtocol((p) => ({ ...p, ...snap.data() }))
      ),
    ];
    return () => unsubs.forEach((u) => u());
  }, [user]);

  useEffect(() => {
    if (!user || activeTab !== 'admin') return;
    const adminRef = collection(
      db,
      'artifacts',
      appId,
      'public',
      'data',
      'architect_master_registry'
    );
    const unsubscribe = onSnapshot(adminRef, (snap) => {
      setArchitects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, [user, activeTab]);

  const updateRegistry = async (updates) => {
    if (!user) return;
    const ref = doc(
      db,
      'artifacts',
      appId,
      'users',
      user.uid,
      'profile',
      'registry'
    );
    const masterRef = doc(
      db,
      'artifacts',
      appId,
      'public',
      'data',
      'architect_master_registry',
      user.uid
    );
    const data = {
      ...profile,
      ...updates,
      lastUpdated: new Date().toISOString(),
    };
    await setDoc(ref, data, { merge: true });
    await setDoc(masterRef, data, { merge: true });
  };

  const updateProtocol = async (updates) => {
    if (!user) return;
    const ref = doc(
      db,
      'artifacts',
      appId,
      'users',
      user.uid,
      'protocol',
      'status'
    );
    await setDoc(ref, { ...protocol, ...updates }, { merge: true });
  };

  const sendGovernanceOverride = async () => {
    if (!selectedArchitect || !adminDirective) return;
    const targetRef = doc(
      db,
      'artifacts',
      appId,
      'users',
      selectedArchitect.id,
      'profile',
      'registry'
    );
    await setDoc(targetRef, { adminOverride: adminDirective }, { merge: true });
    setAdminDirective('');
    alert(`Directive Sent to Architect ${selectedArchitect.name}`);
  };

  const handleChat = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || aiLoading) return;
    const userMsg = { role: 'steward', text: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setAiLoading(true);
    const apiKey = '';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const systemInstruction = `${activePersona.prompt}. Context: Delta ${institutionalDelta}%, Personal Score ${personalFiduciaryScore}%, Vessel Score ${vesselCommandScore}%. Speak with doctorate-tier authority. No italics.`;
    try {
      const payload = {
        contents: [{ parts: [{ text: chatInput }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
      };
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || 'Signal lost.';
      setChatMessages((prev) => [...prev, { role: 'council', text: reply }]);
    } catch (err) {
      console.error(err);
      setChatMessages((prev) => [
        ...prev,
        { role: 'council', text: 'Neural link offline.' },
      ]);
    } finally {
      setAiLoading(false);
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const runNeuralAudit = async () => {
    setAiLoading(true);
    const apiKey = '';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const prompt = `Fiduciary Audit Unification: Analyze ${profile.goal} for ${profile.name}. Readiness Score: ${fundingReadiness.score}%. Horizon: ${fundingReadiness.horizon}. Delta: ${institutionalDelta}%. Personal Credit: ${profile.creditScoreExpe}. Vessel Revenue: ${profile.annualRevenue}. Define document gaps and 8-vector bridge strategy. No italics.`;
    try {
      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: AI_SYSTEM_PROMPT }] },
      };
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setAiAnalysis(
        data.candidates?.[0]?.content?.parts?.[0]?.text || 'Link Offline.'
      );
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  const simulateDocScan = (docKey) => {
    setScanningDoc(docKey);
    setTimeout(() => {
      updateRegistry({ [docKey]: true });
      setScanningDoc(null);
    }, 2000);
  };

  const handleGenerator = (type) => {
    setActiveGeneratorType(type);
    setShowGeneratorOverlay(true);
  };

  // const handleLessonComplete = () => {
  //   if (activeLesson) {
  //     updateProtocol({ velocityScore: protocol.velocityScore + 50 });
  //     setActiveLesson(null);
  //   }
  // };

  if (loading) return <Loading />;

  // --- SUB-RENDERERS ---

  const renderAuth = () => (
    <Auth
      isEnroll={isEnroll}
      setIsEnroll={setIsEnroll}
      authName={authName}
      setAuthName={setAuthName}
      authEmail={authEmail}
      setAuthEmail={setAuthEmail}
      setLogicLabel={setLogicLabel}
      updateRegistry={updateRegistry}
      setView={setView}
    />
  );

  const renderSeasonSelection = () => (
    <SeasonSelection setView={setView} updateRegistry={updateRegistry} />
  );

  const renderGoalSelection = () => (
    <GoalSelection setView={setView} updateRegistry={updateRegistry} />
  );

  const renderAccordSelection = () => (
    <AccordSelection setView={setView} updateRegistry={updateRegistry} />
  );

  const renderBlueprintSelection = () => {
    const selectedAccord =
      ACCORDS.find((a) => a.id === profile.accord) || ACCORDS[0];
    return (
      <BlueprintSelection
        selectedAccord={selectedAccord}
        setView={setView}
        updateRegistry={updateRegistry}
      />
    );
  };

  const renderFiduciaryAudit = () => (
    <FiduciaryAudit
      setView={setView}
      profile={profile}
      updateRegistry={updateRegistry}
      setLogicLabel={setLogicLabel}
      personalFiduciaryScore={personalFiduciaryScore}
      vesselCommandScore={vesselCommandScore}
      institutionalDelta={institutionalDelta}
      providentTaxShield={providentTaxShield}
    />
  );

  const renderDashboard = () => (
    <Dashboard
      showGeneratorOverlay={showGeneratorOverlay}
      setShowGeneratorOverlay={setShowGeneratorOverlay}
      activeGeneratorType={activeGeneratorType}
      profile={profile}
      isSimulating={isSimulating}
      setIsSimulating={setIsSimulating}
      setSimulationData={setSimulationData}
      simulationData={simulationData}
      activeLesson={activeLesson}
      institutionalDelta={institutionalDelta}
      setActiveLesson={setActiveLesson}
      protocol={protocol}
      updateProtocol={updateProtocol}
      setShowHabakkuk={setShowHabakkuk}
      showHabakkuk={showHabakkuk}
      habakkukTargets={habakkukTargets}
      addHabakkukTarget={addHabakkukTarget}
      logicLabel={logicLabel}
      setShowMandateOverlay={setShowMandateOverlay}
      showMandateOverlay={showMandateOverlay}
      setShowWarRoom={setShowWarRoom}
      showWarRoom={showWarRoom}
      setShowComplianceOverlay={setShowComplianceOverlay}
      showComplianceOverlay={showComplianceOverlay}
      setLogicLabel={setLogicLabel}
      sidebarOpen={sidebarOpen}
      dominionRank={dominionRank}
      activeTab={activeTab}
      setGlobalSearch={setGlobalSearch}
      setActiveTab={setActiveTab}
      isPlayingAudio={isPlayingAudio}
      setIsPlayingAudio={setIsPlayingAudio}
      morningBriefing={morningBriefing}
      setSidebarOpen={setSidebarOpen}
      globalSearch={globalSearch}
      updateRegistry={updateRegistry}
      activeRegistryTab={activeRegistryTab}
      setActiveRegistryTab={setActiveRegistryTab}
      setView={setView}
      scanningDoc={scanningDoc}
      simulateDocScan={simulateDocScan}
      chatMessages={chatMessages}
      activePersona={activePersona}
      setActivePersona={setActivePersona}
      chatEndRef={chatEndRef}
      handleChat={handleChat}
      aiLoading={aiLoading}
      setChatInput={setChatInput}
      chatInput={chatInput}
      trajectoryData={trajectoryData}
      gateProgress={gateProgress}
      fundingReadiness={fundingReadiness}
      aiAnalysis={aiAnalysis}
      handleGenerator={handleGenerator}
      ecosystemStats={ecosystemStats}
      architects={architects}
      selectedArchitect={selectedArchitect}
      setSelectedArchitect={setSelectedArchitect}
      setAdminDirective={setAdminDirective}
      sendGovernanceOverride={sendGovernanceOverride}
      adminDirective={adminDirective}
      setCommonwealthLocked={setCommonwealthLocked}
      commonwealthLocked={commonwealthLocked}
      runNeuralAudit={runNeuralAudit}
    />
  );

  switch (view) {
    case 'auth':
      return renderAuth();
    case 'season':
      return renderSeasonSelection();
    case 'goal':
      return renderGoalSelection();
    case 'accord':
      return renderAccordSelection();
    case 'blueprint':
      return renderBlueprintSelection();
    case 'fiduciary-audit':
      return renderFiduciaryAudit();
    case 'dashboard':
      return renderDashboard();
    default:
      return renderAuth();
  }
};

export default App;
