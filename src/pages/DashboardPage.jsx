import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Dashboard from '../components/dashboard';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const {
    // Overlays
    showGeneratorOverlay,
    setShowGeneratorOverlay,
    activeGeneratorType,
    showMandateOverlay,
    setShowMandateOverlay,
    showWarRoom,
    setShowWarRoom,
    showComplianceOverlay,
    setShowComplianceOverlay,
    showHabakkuk,
    setShowHabakkuk,

    // Profile & Protocol
    profile,
    protocol,
    updateRegistry,
    updateProtocol,

    // Simulation
    isSimulating,
    setIsSimulating,
    simulationData,
    setSimulationData,

    // Lessons
    activeLesson,
    setActiveLesson,

    // Habakkuk
    habakkukTargets,
    addHabakkukTarget,

    // UI State
    logicLabel,
    setLogicLabel,
    sidebarOpen,
    setSidebarOpen,
    activeTab,
    setActiveTab,
    globalSearch,
    setGlobalSearch,
    activeRegistryTab,
    setActiveRegistryTab,

    // Audio
    isPlayingAudio,
    setIsPlayingAudio,
    morningBriefing,

    // Documents
    scanningDoc,
    simulateDocScan,

    // Chat
    chatMessages,
    activePersona,
    setActivePersona,
    chatEndRef,
    handleChat,
    aiLoading,
    setChatInput,
    chatInput,

    // Data
    trajectoryData,
    gateProgress,
    fundingReadiness,
    aiAnalysis,
    ecosystemStats,
    architects,
    selectedArchitect,
    setSelectedArchitect,
    adminDirective,
    setAdminDirective,
    sendGovernanceOverride,
    commonwealthLocked,
    setCommonwealthLocked,
    runNeuralAudit,
    handleGenerator,

    // Computed
    institutionalDelta,
    dominionRank,

    // Auth
    logout,
  } = useApp();

  // Sync URL tab param with activeTab state
  useEffect(() => {
    if (tab && tab !== activeTab) {
      const validTabs = [
        'canvas', 'profile', 'bridge', 'wealth', 'protocol',
        'horizon', 'armory', 'academy', 'council', 'admin', 'commonwealth'
      ];
      if (validTabs.includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, [tab, activeTab, setActiveTab]);

  // Custom setActiveTab that also updates URL
  const handleSetActiveTab = (newTab) => {
    setActiveTab(newTab);
    navigate(`/dashboard/${newTab}`, { replace: true });
  };

  const handleSetView = async (view) => {
    if (view === 'auth') {
      await logout();
      navigate('/auth');
    }
  };

  return (
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
      setActiveTab={handleSetActiveTab}
      isPlayingAudio={isPlayingAudio}
      setIsPlayingAudio={setIsPlayingAudio}
      morningBriefing={morningBriefing}
      setSidebarOpen={setSidebarOpen}
      globalSearch={globalSearch}
      updateRegistry={updateRegistry}
      activeRegistryTab={activeRegistryTab}
      setActiveRegistryTab={setActiveRegistryTab}
      setView={handleSetView}
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
};

export default DashboardPage;

