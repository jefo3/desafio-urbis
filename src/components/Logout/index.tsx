/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FiPower } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { Container, LogoutContainer } from './styles';

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const logoutSession = () => {
    logout();
    navigate('/');
  };

  return (
    <Container>
      <button onClick={() => setVisible(!visible)}>
        <BiUserCircle size={22} color="#5F6368" />
      </button>

      <LogoutContainer visible={visible}>
        <button type="button" onClick={() => logoutSession()}>
          <FiPower size={18} color="#e02041" />
          Sair
        </button>
      </LogoutContainer>
    </Container>
  );
};

export default Logout;
