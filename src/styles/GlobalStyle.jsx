import { createGlobalStyle } from "styled-components";
import useTheme from "../hooks/useTheme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
