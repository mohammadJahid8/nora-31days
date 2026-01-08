import { Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Loading from '../components/loading';

// Check if user has completed onboarding
const useOnboardingStatus = () => {
  const { profile, loading } = useApp();
  
  if (loading) return { loading: true, completedOnboarding: false };
  
  // User has completed onboarding if they have all required fields
  const completedOnboarding = Boolean(
    profile.name &&
    profile.season &&
    profile.goal &&
    profile.accord &&
    profile.blueprint
  );
  
  return { loading: false, completedOnboarding };
};

// Protected route that requires authentication
export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useApp();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

// Route that requires completed onboarding
export const OnboardedRoute = ({ children }) => {
  const { user, loading } = useApp();
  const { completedOnboarding } = useOnboardingStatus();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (!completedOnboarding) {
    // Redirect to the appropriate onboarding step
    return <Navigate to="/onboarding/season" replace />;
  }

  return children;
};

// Onboarding route - redirects to dashboard if already completed
export const OnboardingRoute = ({ children, requiredStep }) => {
  const { user, loading, profile } = useApp();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Check onboarding progression
  const steps = ['season', 'goal', 'accord', 'blueprint', 'audit'];
  const currentStepIndex = steps.indexOf(requiredStep);
  
  // Check if previous steps are completed
  const stepChecks = {
    season: true, // First step always accessible
    goal: Boolean(profile.season),
    accord: Boolean(profile.season && profile.goal),
    blueprint: Boolean(profile.season && profile.goal && profile.accord),
    audit: Boolean(profile.season && profile.goal && profile.accord && profile.blueprint),
  };

  // If trying to access a step without completing previous steps
  if (!stepChecks[requiredStep]) {
    // Find the first incomplete step
    for (const step of steps) {
      if (!stepChecks[step] || (step === 'season' && !profile.season)) {
        return <Navigate to={`/onboarding/${step}`} replace />;
      }
    }
  }

  // If all onboarding is complete, redirect to dashboard
  const allComplete = profile.season && profile.goal && profile.accord && profile.blueprint && profile.income;
  if (allComplete && requiredStep !== 'audit') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// Auth route - redirects to dashboard if already authenticated and onboarded
export const AuthRoute = ({ children }) => {
  const { user, loading, profile } = useApp();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  // If user is authenticated
  if (user && profile.name) {
    // Check if onboarding is complete
    const completedOnboarding = Boolean(
      profile.season &&
      profile.goal &&
      profile.accord &&
      profile.blueprint
    );

    if (completedOnboarding) {
      // Redirect to dashboard or the page they were trying to access
      const from = location.state?.from?.pathname || '/dashboard';
      return <Navigate to={from} replace />;
    } else {
      // Redirect to continue onboarding
      if (!profile.season) return <Navigate to="/onboarding/season" replace />;
      if (!profile.goal) return <Navigate to="/onboarding/goal" replace />;
      if (!profile.accord) return <Navigate to="/onboarding/accord" replace />;
      if (!profile.blueprint) return <Navigate to="/onboarding/blueprint" replace />;
      return <Navigate to="/onboarding/audit" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;

