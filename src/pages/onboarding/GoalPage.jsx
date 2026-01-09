import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/useApp';
import GoalSelection from '../../components/goal-selection';

const GoalPage = () => {
  const navigate = useNavigate();
  const { updateRegistry } = useApp();

  const handleSetView = (view) => {
    if (view === 'accord') {
      navigate('/onboarding/accord');
    } else if (view === 'season') {
      navigate('/onboarding/season');
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

