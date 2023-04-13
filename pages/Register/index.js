import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignUp } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import Text from '@/components/Text';

const getUserInputValues = form => {
  const email = form.children['user-email_input'].value;

  const getUserPasswdInput = () => {
    return form.children['user-passwd_input--wrapper'].children[
      'user-passwd_input--container'
    ].children['user-passwd_input'];
  };

  const passwd = getUserPasswdInput().value;

  return { email, passwd };
};

const handleFormSubmit = form => {
  const { email: userEmail, passwd: userPassword } = getUserInputValues(form);

  //TODO: Validate email and passwd

  handleSignUp({ userEmail, userPassword });
};

export default function Register() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const removeListener = onAuthStateChanged(auth, user => {
      setCurrentUser(user);

      return () => {
        removeListener();
      };
    });
  }, []);

  return (
    <CentralizedContainer>
      <CardBox>
        <CardTitle title="Create Account" />
        <Form
          id="register-user_form"
          submitHandler={e => handleFormSubmit(e.target)}
        />
        <Button
          type="submit"
          form="register-user_form"
          label="Create Account"
        />
        <Text text="Already have an account?" link="/Login"></Text>
      </CardBox>
    </CentralizedContainer>
  );
}
