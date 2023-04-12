import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const CardTitle = ({ title }) => <StyledTitle>{title}</StyledTitle>;

export default CardTitle;
