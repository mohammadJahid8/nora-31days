import GlobalStyles from '../global-styles';
import Sidebar from './Sidebar';
import Header from './Header';
import {
  GeneratorOverlay,
  SimulatorOverlay,
  LessonOverlay,
  HabakkukOverlay,
  WarRoomOverlay,
  ComplianceOverlay,
  MandateOverlay,
  LogicLabelOverlay,
} from './overlays';
import {
  ProfileTab,
  CouncilTab,
  ProtocolTab,
  CanvasTab,
  HorizonTab,
  BridgeTab,
  WealthTab,
  ArmoryTab,
  AcademyTab,
  AdminTab,
  CommonwealthTab,
} from './tabs';

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
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileTab
            profile={profile}
            activeRegistryTab={activeRegistryTab}
            setActiveRegistryTab={setActiveRegistryTab}
            globalSearch={globalSearch}
            updateRegistry={updateRegistry}
            setLogicLabel={setLogicLabel}
            scanningDoc={scanningDoc}
            simulateDocScan={simulateDocScan}
          />
        );
      case 'council':
        return (
          <CouncilTab
            chatMessages={chatMessages}
            activePersona={activePersona}
            setActivePersona={setActivePersona}
            chatEndRef={chatEndRef}
            handleChat={handleChat}
            aiLoading={aiLoading}
            setChatInput={setChatInput}
            chatInput={chatInput}
          />
        );
      case 'protocol':
        return (
          <ProtocolTab
            protocol={protocol}
            updateProtocol={updateProtocol}
            setShowMandateOverlay={setShowMandateOverlay}
          />
        );
      case 'canvas':
        return (
          <CanvasTab
            institutionalDelta={institutionalDelta}
            protocol={protocol}
            profile={profile}
            setActiveTab={setActiveTab}
            trajectoryData={trajectoryData}
          />
        );
      case 'horizon':
        return <HorizonTab gateProgress={gateProgress} protocol={protocol} />;
      case 'bridge':
        return (
          <BridgeTab
            setShowComplianceOverlay={setShowComplianceOverlay}
            fundingReadiness={fundingReadiness}
            aiAnalysis={aiAnalysis}
            aiLoading={aiLoading}
            runNeuralAudit={runNeuralAudit}
          />
        );
      case 'wealth':
        return <WealthTab profile={profile} />;
      case 'armory':
        return <ArmoryTab handleGenerator={handleGenerator} />;
      case 'academy':
        return <AcademyTab profile={profile} />;
      case 'admin':
        return (
          <AdminTab
            ecosystemStats={ecosystemStats}
            architects={architects}
            globalSearch={globalSearch}
            selectedArchitect={selectedArchitect}
            setSelectedArchitect={setSelectedArchitect}
            adminDirective={adminDirective}
            setAdminDirective={setAdminDirective}
            sendGovernanceOverride={sendGovernanceOverride}
          />
        );
      case 'commonwealth':
        return (
          <CommonwealthTab
            commonwealthLocked={commonwealthLocked}
            setCommonwealthLocked={setCommonwealthLocked}
          />
        );
      default:
        return (
          <CanvasTab
            institutionalDelta={institutionalDelta}
            protocol={protocol}
            profile={profile}
            setActiveTab={setActiveTab}
            trajectoryData={trajectoryData}
          />
        );
    }
  };

  return (
    <div className="h-screen bg-[#0A1128] flex overflow-hidden text-white font-['Urbanist']">
      <GlobalStyles />

      {/* OVERLAYS */}
      <GeneratorOverlay
        showGeneratorOverlay={showGeneratorOverlay}
        setShowGeneratorOverlay={setShowGeneratorOverlay}
        activeGeneratorType={activeGeneratorType}
        profile={profile}
      />
      <SimulatorOverlay
        isSimulating={isSimulating}
        setIsSimulating={setIsSimulating}
        simulationData={simulationData}
        setSimulationData={setSimulationData}
        institutionalDelta={institutionalDelta}
      />
      <LessonOverlay
        activeLesson={activeLesson}
        setActiveLesson={setActiveLesson}
        protocol={protocol}
        updateProtocol={updateProtocol}
      />
      <HabakkukOverlay
        showHabakkuk={showHabakkuk}
        setShowHabakkuk={setShowHabakkuk}
        habakkukTargets={habakkukTargets}
        addHabakkukTarget={addHabakkukTarget}
      />
      <WarRoomOverlay
        showWarRoom={showWarRoom}
        setShowWarRoom={setShowWarRoom}
      />
      <ComplianceOverlay
        showComplianceOverlay={showComplianceOverlay}
        setShowComplianceOverlay={setShowComplianceOverlay}
        profile={profile}
        institutionalDelta={institutionalDelta}
      />
      <MandateOverlay
        showMandateOverlay={showMandateOverlay}
        setShowMandateOverlay={setShowMandateOverlay}
        profile={profile}
        protocol={protocol}
      />
      <LogicLabelOverlay
        logicLabel={logicLabel}
        setLogicLabel={setLogicLabel}
      />

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setGlobalSearch={setGlobalSearch}
        profile={profile}
        protocol={protocol}
        dominionRank={dominionRank}
      />

      {/* MAIN CONTENT */}
      <main className='flex-1 flex flex-col overflow-hidden relative'>
        <Header
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          morningBriefing={morningBriefing}
          isPlayingAudio={isPlayingAudio}
          setIsPlayingAudio={setIsPlayingAudio}
          globalSearch={globalSearch}
          setGlobalSearch={setGlobalSearch}
          setShowHabakkuk={setShowHabakkuk}
          setShowWarRoom={setShowWarRoom}
          setIsSimulating={setIsSimulating}
          profile={profile}
          setView={setView}
        />

        <div className='flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 xl:p-16 space-y-8 md:space-y-12 lg:space-y-16 custom-scrollbar'>
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
