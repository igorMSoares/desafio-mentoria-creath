import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignUp } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import Text from '@/components/Text';

const userEmail = 'user@someemail.com';
const userPassword = 'userpasswd';

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
        <Form />
        <Button
          type="submit"
          label="Create Account"
          clickHandler={e => handleSignUp({ userEmail, userPassword })}
        />
        <Text text="Already have an account?" link="/Login"></Text>
      </CardBox>
    </CentralizedContainer>
  );
}
