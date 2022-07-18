import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  background: #fcfcfc;
  align-items: center;
  justify-content: space-around;

  img {
    width: 96px;
    height: 96px;
  }
`;

export const Shared = styled.div`
  display: flex;
  // flex: 1;
  width: 40%;

  justify-content: space-around;
  align-items: center;

  input {
    width: 359px;
    height: 56px;
    border: 1px solid #585858;
    border-radius: 8px;
    padding: 20px;
    margin-right: 30px;
  }

  select {
    width: 129px;
    height: 28px;
    font-size: 16px;
    border: none;

    letter-spacing: 0.007em;
    background: inherit;
    color: #404041;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    padding: 5px;
    margin-left: 20px;
  }

  select,
  a {
    &:hover {
      background-color: #dfdfdf;
      border-radius: 10px;
    }
  }
`;

export const InfoUser = styled.div`
  display: flex;
  span {
    font-size: 21px;
  }

  & > div {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f8f8f8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 15px;
  list-style: none;
`;

export const PagenateController = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  //justify-content: space-evenly;
  /* position: absolute; */
  /* top: calc(50% + 50px);
  z-index: 1001; */

  /* padding: 24px; */

  button {
    height: 32px;
    border: none;
    color: #18c78a;
    background-color: #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;

    margin: 20px;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
