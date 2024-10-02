import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Hanken Grotesk', sans-serif; /* Global font family */
    background-color: #FAFFFB; /* Background color */
  }
`;

export default GlobalStyles;