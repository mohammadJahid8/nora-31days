import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import {
  AuthRoute,
  OnboardingRoute,
  OnboardedRoute,
} from './routes/ProtectedRoute';
import {
  AuthPage,
  DashboardPage,
  SeasonPage,
  GoalPage,
  AccordPage,
  BlueprintPage,
  AuditPage,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {/* Auth Route */}
          <Route
            path="/auth"
            element={
              <AuthRoute>
                <AuthPage />
              </AuthRoute>
            }
          />

          {/* Onboarding Routes */}
          <Route
            path="/onboarding/season"
            element={
              <OnboardingRoute requiredStep="season">
                <SeasonPage />
              </OnboardingRoute>
            }
          />
          <Route
            path="/onboarding/goal"
            element={
              <OnboardingRoute requiredStep="goal">
                <GoalPage />
              </OnboardingRoute>
            }
          />
          <Route
            path="/onboarding/accord"
            element={
              <OnboardingRoute requiredStep="accord">
                <AccordPage />
              </OnboardingRoute>
            }
          />
          <Route
            path="/onboarding/blueprint"
            element={
              <OnboardingRoute requiredStep="blueprint">
                <BlueprintPage />
              </OnboardingRoute>
            }
          />
          <Route
            path="/onboarding/audit"
            element={
              <OnboardingRoute requiredStep="audit">
                <AuditPage />
              </OnboardingRoute>
            }
          />

          {/* Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <OnboardedRoute>
                <DashboardPage />
              </OnboardedRoute>
            }
          />
          <Route
            path="/dashboard/:tab"
            element={
              <OnboardedRoute>
                <DashboardPage />
              </OnboardedRoute>
            }
          />

          {/* Root redirect */}
          <Route path="/" element={<Navigate to="/auth" replace />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
