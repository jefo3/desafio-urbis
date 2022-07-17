import styled, { css } from 'styled-components';

interface NotifcationProps {
  qnt: number;
}

interface ListItemNotication {
  visible: boolean;
}

interface ItemNotication {
  unread?: boolean;
}

export const Container = styled.div<NotifcationProps>`
  position: relative;
  margin: 0 8px 0 20px;

  button {
    background: none;
    border: none;
  }

  ${(props) =>
    props.qnt > 0 &&
    css`
      span {
        position: absolute;
        text-align: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        font-size: 12px;
        top: -10px;
        color: #f8f8f8;
        background-color: red;
      }
    `}
`;

export const NotificationList = styled.div<ListItemNotication>`
  position: absolute;
  width: 260px;
  top: calc(100% + 20px);
  left: calc(50% - 130px);
  background-color: #f8f8f8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 15px 10px;
  border-radius: 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 99;
`;

export const Item = styled.div<ItemNotication>`
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  p {
    font-size: 13px;
    line-height: 16px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: black;
    opacity: 0.6;
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(226, 57, 105, 1);
        border-radius: 50%;
      }
    `}
`;
