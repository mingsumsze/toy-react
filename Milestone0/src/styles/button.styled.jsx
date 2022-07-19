import styled from "styled-components";


// Atm props cannot be used tgt with styled component ThemeProvider
// color: ${(props, { theme }) => props.theme === 'light' ? theme.colors.fontDark : theme.colors.fontLight};
//   background-color: ${(props, { theme }) => props.theme === 'light' ? theme.colors.primaryLight : theme.colors.primaryDark};
const ButtonStyle = styled.button`
  color: ${props => props.theme === 'light' ? '#000' : '#fff'};
  background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
`;

export default ButtonStyle;