import { createGlobalStyle } from "styled-components";

// Doesn't work with vite??
// @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap');

// background-color: ${({theme}) => theme.colors.primaryDark};
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'JetBrains Mono', monospace;
    background-color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.primaryLight : theme.colors.primaryDark};
  }
`;

export default GlobalStyle;