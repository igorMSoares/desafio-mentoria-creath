import { useState } from 'react';
import styled from 'styled-components';
import { GrView } from 'react-icons/gr';
import { BiHide } from 'react-icons/bi';
import LabelInput from '@/components/LabelInput';
import FormInput from '@/components/FormInput';

const Styledtoggle = styled.span`
  width: 1.5rem;
  cursor: pointer;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e6e6e6;
  border-radius: 10px;
`;

export default function InputPassword({ error }) {
  const [passwordShow, setShow] = useState(false);

  const togglePassword = () => {
    setShow(!passwordShow);
  };
  const Icon = () => {
    if (!passwordShow) {
      return <BiHide  size={17} />;
    } else {
      return <GrView size={17} />;
    }
  };

  return (
    <div id="user-passwd_input--wrapper">
      <LabelInput
        text="Password"
        labelFor={'user-passwd_input'}
        error={error ?? false}
      />
      <StyledContainer id="user-passwd_input--container">
        <FormInput
          id="user-passwd_input"
          type={passwordShow ? 'text' : 'password'}
          required
        />
        <Styledtoggle onClick={togglePassword}>
          <Icon />
        </Styledtoggle>
      </StyledContainer>
    </div>
  );
}
