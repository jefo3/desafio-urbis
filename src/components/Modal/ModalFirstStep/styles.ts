import { shade } from 'polished';
import styled, { css } from 'styled-components';
import check from '../../../assets/Check.svg';

interface SelectProps {
  select: boolean;
}

export const Header = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px 20px 10px 20px;

  h1,
  h2 {
    font-weight: bold;
    font-size: 24px;
  }

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
  }
`;
export const ButtonRadio = styled.div<SelectProps>`
  width: 100%;
  max-width: 520px;
  height: 48px;
  background-color: #f5f5f5;
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  margin-bottom: 8px;

  ${(props) =>
    props.select &&
    css`
      background-color: rgba(255, 161, 0, 0.3);
      font-weight: bold;
      border: none;
    `}

  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 520px;
    max-height: 48px;

    input:checked {
      &::before {
        display: flex;
        position: relative;
        right: 150%;
        bottom: 5px;
        visibility: visible;
        content: '';
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-image: url(${check});
      }
    }

    input[type='radio'] {
      visibility: hidden;
    }
  }
`;

export const Content = styled.div<SelectProps>`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    margin-bottom: 24px;
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
    border: 1px solid #0073ff;
    border-radius: 8px;
    margin-top: 15px;

    transition: background-color 0.2s;

    &.button-segundary {
      color: #fcfcfc;
      background-color: #0073ff;

      &:hover {
        background: ${shade(0.2, '#0073ff')};
      }
    }

    &.button-primary {
      color: #0073ff;
      background-color: #fcfcfc;

      &:hover {
        background: ${shade(0.09, '#fcfcfc')};
      }
    }
  }
`;
