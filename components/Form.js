import styled from 'styled-components';
import InputPassword from '@/components/InputPassword';
import LabelInput from '@/components/LabelInput';
import FormInput from '@/components/FormInput';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;

const Form = ({ id, submitHandler }) => {
  return (
    <StyledForm
      id={id}
      onSubmit={e => {
        e.preventDefault();
        if (submitHandler) submitHandler(e);

        return false;
      }}
    >
      <LabelInput text="E-mail" labelFor="user-email_input" />
      <FormInput type="text" id="user-email_input" required />
      <InputPassword />
    </StyledForm>
  );
};

export default Form;
