import styled from "styled-components";


const FormStyle = styled.fieldset`
  color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.fontDark : theme.colors.fontLight};
  background-color: ${({contextTheme, theme}) => contextTheme === 'light' ? theme.colors.primaryLight : theme.colors.primaryDark};
`;

export default FormStyle;