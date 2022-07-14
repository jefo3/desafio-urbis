import styled from 'styled-components';

export const CardItem = styled.li`
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: center;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 50px 0;

  transition: transform 0.2s;

  padding-bottom: 14px;

  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  button {
    width: 80%;
    height: 50px;
    align-self: center;
    background-color: #18c78a;
    color: #ffffff;
    font-size: 16px;
    border-radius: 10px;
    border: none;

    transition: background-color 0.2s;

    &:hover {
      background-color: #24e09f;
    }
  }
`;

export const CardArea = styled.div`
  width: 100%;
  padding: 24px;
  strong {
    font-weight: bold;
  }
`;
