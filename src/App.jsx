import Router from './app/Router';
import AuthProvider from './stores/AuthProvider.jsx';

const App = () => {
  return (
    <>
      <AuthProvider />
      <Router />
    </>
  );
};

export default App;
