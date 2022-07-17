import styled, { css } from 'styled-components';

interface LogoutContainerProps {
  visible: boolean;
}
export const Container = styled.div`
  position: relative;
  margin: 0 8px 0 20px;

  button {
    background: none;
    border: none;
  }
`;

export const LogoutContainer = styled.div<LogoutContainerProps>`
  position: absolute;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(100% + 5px);
  left: calc(50% - 30px);
  background-color: #f8f8f8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 15px 10px;
  border-radius: 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 99;
`;
