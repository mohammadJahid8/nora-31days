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
    profile,
  } = useApp();

  const handleSetView = async (view) => {
    if (view === 'season') {
      navigate('/onboarding/season');
    } else if (view === 'dashboard') {
      // For returning stewards, check their onboarding status
      // and redirect to the appropriate step or dashboard
      if (!profile.season) {
        navigate('/onboarding/season');
      } else if (!profile.goal) {
        navigate('/onboarding/goal');
      } else if (!profile.accord) {
        navigate('/onboarding/accord');
      } else if (!profile.blueprint) {
        navigate('/onboarding/blueprint');
      } else if (!profile.income && !profile.annualRevenue) {
        navigate('/onboarding/audit');
      } else {
        navigate('/dashboard');
      }
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

