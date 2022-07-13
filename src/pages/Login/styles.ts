import styled from 'styled-components';
import backGroundUrbis from '../../assets/backGroundUrbis.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #1d0e60;

  align-items: center;
  h1 {
    font-weight: bold;
  }
`;
export const Content = styled.div``;

export const Background = styled.div`
  flex: 1;
  background: url(${backGroundUrbis}) no-repeat center;
  background-size: cover;

  height: 450px;
`;
