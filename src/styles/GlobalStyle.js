import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;