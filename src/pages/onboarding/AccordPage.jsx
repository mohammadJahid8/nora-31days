import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import AccordSelection from '../../components/accord-selection';

const AccordPage = () => {
  const navigate = useNavigate();
  const { updateRegistry } = useApp();

  const handleSetView = (view) => {
    if (view === 'blueprint') {
      navigate('/onboarding/blueprint');
    }
  };

  return (
    <AccordSelection
      setView={handleSetView}
      updateRegistry={updateRegistry}
    />
  );
};

export default AccordPage;

