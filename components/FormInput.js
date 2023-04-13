import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  height: 2rem;
  background: #e6e6e6;
  border-radius: 10px;
  border-style: none;
  padding-left: 10px;
  font-style: normal;
`;

const FormInput = ({ type, id }) => <StyledInput id={id} type={type} />;

export default FormInput;
