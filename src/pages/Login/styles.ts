import styled from 'styled-components';
import { shade } from 'polished';
import urbislogo from '../../assets/urbislogo.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  background-color: #1d0e60;
  color: #fff;
  align-items: flex-start;

  h1 {
    padding: 30px 60px;
    font-size: 60px;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background: #f8f8f8;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(50%);
  right: calc(50%);
  border-radius: 16px;

  transform: translate(50%, 50%);

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: bold;
      margin-bottom: 40px;
    }

    input {
      min-height: 48px;
      width: 80%;
      padding: 10px;
      border: none;
      border: 2px solid #c4c4c4;
      background-color: #eae9e9;
      border-radius: 10px;

      margin: 15px 0px;
    }

    button {
      min-height: 48px;
      width: 80%;
      background-color: #3483fa;
      border: none;
      border-radius: 8px;
      color: #fff;
      margin-top: 30px;

      &:hover {
        background: ${shade(0.2, '#3483fa')};
      }
    }
  }
`;
