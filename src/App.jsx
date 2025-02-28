import { useEffect } from 'react';
import Router from './app/Router';
import { useAuthStore } from './stores/authStore';

const App = () => {
  const initAuthListener = useAuthStore((state) => state.initAuthListener);

  useEffect(() => {
    const authListener = initAuthListener();
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return <Router />;
};

export default App;
