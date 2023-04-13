import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignUp } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Form from '@/components/Form';
import Text from '@/components/Text';
import { useRouter } from 'next/router';
import { clearUserInputValues, getUserInputValues } from '@/utils/userInputs';

export default function Register() {
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
        'auth/weak-password',
      ].includes(errorCode)
    )
      clearUserInputValues(form);
  };

  const handleFormSubmit = async form => {
    const { email: userEmail, passwd: userPassword } = getUserInputValues(form);

    const { user, errorMsg, errorCode } = await handleSignUp({
      userEmail,
      userPassword,
    });

    if (user) {
      setErrorMsg('');
      setInputError(false);
      router.push({ pathname: '/' });
    } else if (errorMsg) {
      handleErrorMsg({ errorMsg, form, errorCode });
    }
  };

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
        <p className="error-message">{errorMsg}</p>
        <Form
          id="register-user_form"
          submitHandler={e => handleFormSubmit(e.target)}
          error={inputError}
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
