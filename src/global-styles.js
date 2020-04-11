import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
  font-family: "Sarabun", sans-serif !important;
  background: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin: 0;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 1.4em;
  }
  body, h1, h2, h3, h4, h5, h6, h1.ant-typography, .ant-typography h1,  h2.ant-typography, .ant-typography h2,h3.ant-typography, .ant-typography h3,h4.ant-typography, .ant-typography h4,h5.ant-typography, .ant-typography h5,h6.ant-typography, .ant-typography h6{
    font-family: "Sarabun", sans-serif !important;
    color: #8cb909;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0 0 15px 0;
  }

  .ant-form-item-label > label{
    font-size: 0.8rem;
    color: #8cb909;
  }
`;

export default GlobalStyle;
