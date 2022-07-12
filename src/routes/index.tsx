import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<h1>Foi</h1>} />
    </Switch>
  );
};

export default Routes;
