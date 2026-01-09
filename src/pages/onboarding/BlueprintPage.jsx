import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/useApp';
import BlueprintSelection from '../../components/blueprint-selection';

const BlueprintPage = () => {
  const navigate = useNavigate();
  const { updateRegistry, selectedAccord } = useApp();

  const handleSetView = (view) => {
    if (view === 'fiduciary-audit') {
      navigate('/onboarding/audit');
    } else if (view === 'accord') {
      navigate('/onboarding/accord');
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

