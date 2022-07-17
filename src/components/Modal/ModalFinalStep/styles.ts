import { shade } from 'polished';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px 20px 10px 20px;

  h1 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 8px;
  }

  img {
    width: 34px;
    height: 64px;
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;

  p {
    width: 380px;
    height: 80px;
    color: #444444;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    width: 250px;
    height: 48px;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 24px;
    margin-bottom: 50px;

    color: #fcfcfc;
    background-color: #0073ff;
    border: none;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#0073ff')};
    }
  }
`;
