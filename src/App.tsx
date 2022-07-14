import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
