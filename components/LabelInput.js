import styled from 'styled-components';

const StyledLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-top: 0.75rem;
  padding: 0.25rem;
  padding-left: 0.5rem;

  &.error {
    color: rgb(173, 59, 59);
  }
`;

const LabelInput = ({ text, labelFor, error }) => (
  <StyledLabel htmlFor={labelFor} className={error ? 'error' : ''}>
    {text}
  </StyledLabel>
);

export default LabelInput;
