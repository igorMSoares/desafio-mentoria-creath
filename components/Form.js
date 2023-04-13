import styled from 'styled-components';
import InputPassword from '@/components/InputPassword';
import LabelInput from '@/components/LabelInput';
import FormInput from '@/components/FormInput';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;

const Form = ({ id, submitHandler, error }) => {
  return (
    <StyledForm
      id={id}
      onSubmit={e => {
        e.preventDefault();
        if (submitHandler) submitHandler(e);

        return false;
      }}
    >
      <LabelInput
        text="E-mail"
        labelFor="user-email_input"
        error={error ?? false}
      />
      <FormInput type="text" id="user-email_input" required />
      <InputPassword error={error ?? false} />
    </StyledForm>
  );
};

export default Form;
