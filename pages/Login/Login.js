import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignIn, handleSignUp, handleSignOut } from '@/utils/auth';
import { useEffect, useState } from 'react';
import InputPassword from '@/components/InputPassword';
import Form from '@/components/Form';
import Text from '@/components/Text';

const userEmail = 'user@someemail.com';
const userPassword = 'userpasswd';

export default function Login() {
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
        <CardTitle title="Login" />
        <p>{currentUser?.email ?? 'Not logged'}</p>
        <Form label="Email adress"/>
        <InputPassword/>
        <Button
          label="Login"
          clickHandler={e => handleSignIn({ userEmail, userPassword })}
        />
        <Button label="Sign Out" clickHandler={e => handleSignOut()} />
        <Text text="Don’t have an account ? Register" link="/Register/Register"></Text>
      </CardBox>
    </CentralizedContainer>
  );
}