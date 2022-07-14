import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  background: #fcfcfc;
  //box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: space-around;
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;
  list-style: none;
`;
