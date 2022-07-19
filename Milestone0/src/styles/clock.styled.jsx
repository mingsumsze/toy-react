import styled from "styled-components";


const ClockStyle = styled.div`
  color: ${props => props.theme === 'light' ? '#000' : '#fff'};
  background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
`;

export default ClockStyle;