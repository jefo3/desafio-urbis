import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { AuthContextProvider } from './context/auth';

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
