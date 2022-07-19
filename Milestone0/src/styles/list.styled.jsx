import styled from "styled-components";


const ListStyle = styled.ul`
  color: ${props => props.theme === 'light' ? '#000' : '#fff'};
  background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
`;

export default ListStyle;