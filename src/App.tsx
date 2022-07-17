import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';
import { NotificationContextProvider } from './context/notification';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <AuthContextProvider>
        <NotificationContextProvider>
          <Routes />
        </NotificationContextProvider>
      </AuthContextProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
