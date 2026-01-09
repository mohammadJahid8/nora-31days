import { useContext } from 'react';
import AppContext from './AppContext';

export const useApp = () => {
  const context = useContext(AppContext);
  console.log('🚀 ~ useApp ~ context:', context);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

