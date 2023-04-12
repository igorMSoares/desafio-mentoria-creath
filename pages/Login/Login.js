import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignIn, handleSignUp, handleSignOut } from '@/utils/auth';
import { useEffect, useState } from 'react';

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
        <Button
          label="Login"
          clickHandler={e => handleSignIn({ userEmail, userPassword })}
        />
        <Button label="Sign Out" clickHandler={e => handleSignOut()} />
      </CardBox>
    </CentralizedContainer>
  );
}