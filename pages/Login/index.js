import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignIn, handleSignOut } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import Text from '@/components/Text';
import { clearUserInputValues, getUserInputValues } from '@/utils/userInputs';
import { useRouter } from 'next/router';
import { signOut } from '@firebase/auth';

export default function Login() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [errorMsg, setErrorMsg] = useState('');
  const [inputError, setInputError] = useState(false);
  const router = useRouter();

  const handleErrorMsg = ({ errorMsg, form, errorCode }) => {
    setErrorMsg(errorMsg);
    setInputError(true);

    if (
      ![
        'auth/missing-email',
        'auth/missing-password',
        'auth/wrong-password',
      ].includes(errorCode)
    )
      clearUserInputValues(form);
  };

  const handleFormSubmit = async form => {
    const { email: userEmail, passwd: userPassword } = getUserInputValues(form);

    const { user, errorMsg, errorCode } = await handleSignIn({
      userEmail,
      userPassword,
    });

    if (user) {
      setErrorMsg('');
      setInputError(false);
      router.push({ pathname: '/', query: { user: user.email ?? '' } });
    } else if (errorMsg) {
      handleErrorMsg({ errorMsg, form, errorCode });
    }
  };

  const handleLogOut = async () => {
    await handleSignOut();
    router.push({ pathname: '/' });
  };

  useEffect(() => {
    const removeListener = onAuthStateChanged(auth, user => {
      setCurrentUser(user);

      return () => {
        removeListener();
      };
    });
  }, []);

  if (currentUser) {
    return (
      <CentralizedContainer>
        <CardBox>
          <p>
            Você já está logado como <b>{currentUser.email}</b>
          </p>
          <Button label="Log Out" clickHandler={handleLogOut} />
        </CardBox>
      </CentralizedContainer>
    );
  }

  return (
    <CentralizedContainer>
      <CardBox>
        <CardTitle title="Login" />
        <p className="error-message">{errorMsg}</p>
        <Form
          id="login-user_form"
          submitHandler={e => handleFormSubmit(e.target)}
          error={inputError}
        />
        <Button type="submit" form="login-user_form" label="Login" />
        <Button label="Sign Out" clickHandler={e => handleSignOut()} />
        <Text text="Don’t have an account ? Register" link="/Register"></Text>
      </CardBox>
    </CentralizedContainer>
  );
}
