import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import GoalSelection from '../../components/goal-selection';

const GoalPage = () => {
  const navigate = useNavigate();
  const { updateRegistry } = useApp();

  const handleSetView = (view) => {
    if (view === 'accord') {
      navigate('/onboarding/accord');
    }
  };

  return (
    <GoalSelection
      setView={handleSetView}
      updateRegistry={updateRegistry}
    />
  );
};

export default GoalPage;

