import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,400;1,500;1,700;1,900&display=swap');
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background: #FCFCFC;
    color: #404041;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }

  a{
    &:visited{
      color: inherit;
    }
  }
`;
