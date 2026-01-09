import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import FiduciaryAudit from '../../components/fiduciary-audit';

const AuditPage = () => {
  const navigate = useNavigate();
  const {
    profile,
    updateRegistry,
    setLogicLabel,
    personalFiduciaryScore,
    vesselCommandScore,
    institutionalDelta,
    providentTaxShield,
  } = useApp();

  const handleSetView = (view) => {
    if (view === 'dashboard') {
      navigate('/dashboard');
    } else if (view === 'blueprint') {
      navigate('/onboarding/blueprint');
    }
  };

  return (
    <FiduciaryAudit
      setView={handleSetView}
      profile={profile}
      updateRegistry={updateRegistry}
      setLogicLabel={setLogicLabel}
      personalFiduciaryScore={personalFiduciaryScore}
      vesselCommandScore={vesselCommandScore}
      institutionalDelta={institutionalDelta}
      providentTaxShield={providentTaxShield}
    />
  );
};

export default AuditPage;

