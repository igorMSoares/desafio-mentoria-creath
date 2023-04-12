import styled from 'styled-components';

const StyledCardBox = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2.5rem;
  background-color: #fff;
  min-width: 20rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  place-content: center;
`;

const CardBox = ({ children }) => <StyledCardBox>{children}</StyledCardBox>;

export default CardBox;
