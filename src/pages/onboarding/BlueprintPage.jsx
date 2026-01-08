import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import BlueprintSelection from '../../components/blueprint-selection';

const BlueprintPage = () => {
  const navigate = useNavigate();
  const { updateRegistry, selectedAccord } = useApp();

  const handleSetView = (view) => {
    if (view === 'fiduciary-audit') {
      navigate('/onboarding/audit');
    }
  };

  return (
    <BlueprintSelection
      selectedAccord={selectedAccord}
      setView={handleSetView}
      updateRegistry={updateRegistry}
    />
  );
};

export default BlueprintPage;

