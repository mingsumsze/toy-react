import styled from "styled-components";


const FormStyle = styled.form`
  color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.fontDark : theme.colors.fontLight};
  background-color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.primaryLight : theme.colors.primaryDark};
  
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default FormStyle;