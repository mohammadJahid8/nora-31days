import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import SeasonSelection from '../../components/season-selection';

const SeasonPage = () => {
  const navigate = useNavigate();
  const { updateRegistry } = useApp();

  const handleSetView = (view) => {
    if (view === 'goal') {
      navigate('/onboarding/goal');
    }
  };

  return (
    <SeasonSelection
      setView={handleSetView}
      updateRegistry={updateRegistry}
    />
  );
};

export default SeasonPage;

