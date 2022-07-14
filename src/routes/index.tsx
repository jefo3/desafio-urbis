import React from 'react';
import { Route, Routes as RoutesReact } from 'react-router-dom';
import Benefits from '../pages/Benefits';

import Login from '../pages/Login';

const Routes: React.FC = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<Login />} />
      <Route path="/beneficios" element={<Benefits />} />
    </RoutesReact>
  );
};

export default Routes;
