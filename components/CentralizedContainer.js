import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CentralizedContainer = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default CentralizedContainer;
