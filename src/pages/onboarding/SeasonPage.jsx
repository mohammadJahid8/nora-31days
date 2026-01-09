import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import SeasonSelection from '../../components/season-selection';

const SeasonPage = () => {
  const navigate = useNavigate();
  const { updateRegistry, logout } = useApp();

  const handleSetView = async (view) => {
    if (view === 'goal') {
      navigate('/onboarding/goal');
    } else if (view === 'auth') {
      await logout();
      navigate('/auth');
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

