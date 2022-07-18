import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface idItemEvaluation {
  idItemAvaliacao: number;
  selectedItem: number;
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

export const Content = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;

  span {
    color: #444444;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 400;
    display: flex;
    width: 90%;
  }

  p {
    color: #444444;
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 400;
  }

  textarea {
    resize: none;
    width: 520px;
    height: 96px;
    background-color: #eae9e9;
    border: none;
    border-radius: 10px;
    padding: 12px 18px;
    margin-bottom: 8px;

    &::placeholder {
      color: #585858;
      font-size: 16px;
    }
  }
`;

export const Evaluation = styled.ul<idItemEvaluation>`
  width: 100%;
  height: 48px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  margin-bottom: 64px;

  li:nth-child(${(props) => props.selectedItem}) {
    label {
      font-weight: bold;
    }
  }
  li:nth-child(-n + ${(props) => props.selectedItem}) {
    background: rgba(255, 161, 0, 0.3);
    border: none;
  }

  li:nth-child(-n + ${(props) => props.idItemAvaliacao}) {
    background: rgba(255, 161, 0, 0.3);
    border: none;
  }

  li:first-child {
    border-radius: 8px 0px 0px 8px;
  }
  li:last-child {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const ItemEvaluation = styled.li`
  width: 100px;
  height: 48px;
  display: flex;

  align-items: center;
  justify-content: center;
  border: 2px solid #c4c4c4;

  cursor: pointer;
  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    input:checked {
      label {
        font-weight: bold;
      }
    }

    input[type='radio'] {
      display: none;
    }
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
