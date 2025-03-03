import Router from './app/Router';
import AuthProvider from './lib/providers/AuthProvider';

const App = () => {
  return (
    <>
      <AuthProvider />
      <Router />
    </>
  );
};

export default App;
