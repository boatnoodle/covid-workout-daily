import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 1.4em;
  }
  body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Kanit', sans-serif !important;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0 0 15px 0;
  }
`;

export default GlobalStyle;
