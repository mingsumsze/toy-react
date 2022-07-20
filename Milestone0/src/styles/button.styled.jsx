import styled from "styled-components";


const ButtonStyle = styled.button`
  color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.fontDark : theme.colors.fontLight};
  background-color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.primaryLight : theme.colors.primaryDark};

  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px ${({contextTheme}) => contextTheme === 'light' ? '#00000033' : '#ffffff33'};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default ButtonStyle;