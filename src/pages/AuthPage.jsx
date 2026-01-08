import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Auth from '../components/auth';

const AuthPage = () => {
  const navigate = useNavigate();
  const {
    isEnroll,
    setIsEnroll,
    authName,
    setAuthName,
    authEmail,
    setAuthEmail,
    setLogicLabel,
    updateRegistry,
  } = useApp();

  const handleSetView = (view) => {
    if (view === 'season') {
      navigate('/onboarding/season');
    }
  };

  return (
    <Auth
      isEnroll={isEnroll}
      setIsEnroll={setIsEnroll}
      authName={authName}
      setAuthName={setAuthName}
      authEmail={authEmail}
      setAuthEmail={setAuthEmail}
      setLogicLabel={setLogicLabel}
      updateRegistry={updateRegistry}
      setView={handleSetView}
    />
  );
};

export default AuthPage;

