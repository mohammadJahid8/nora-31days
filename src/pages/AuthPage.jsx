import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/useApp';
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

  const handleSetView = (view) => {
    if (view === 'season') {
      // New enrollment - go to first onboarding step
      navigate('/onboarding/season');
    } else if (view === 'dashboard') {
      // Returning user - check their onboarding status from current profile
      // Note: profile might have been updated via Firestore snapshot
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
