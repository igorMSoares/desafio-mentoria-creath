import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 500;
  padding: 0.5rem 2rem;
  background-color: #3867e2;
  border-radius: 0.625rem;
  border: 0;
`;

const Button = ({ type, label }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

Button.defaultProps = {
  type: 'button',
  label: 'Click Me',
};

export default Button;
