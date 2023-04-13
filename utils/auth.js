import { signIn, signUp, userSignOut } from '@/auth/firebase';

const handleSignUp = async ({ userEmail, userPassword }) => {
  const { user, errorMsg, errorCode } = await signUp(userEmail, userPassword);
  if (user) {
    console.log('Logged In via signUp:', user.email);
  } else if (errorMsg) console.log(errorMsg);

  return { user, errorMsg, errorCode };
};

const handleSignIn = async ({ userEmail, userPassword }) => {
  const { user, errorMsg, errorCode } = await signIn(userEmail, userPassword);
  if (user) {
  } else if (errorMsg) console.log(errorMsg);

  return { user, errorMsg, errorCode };
};

const handleSignOut = async () => {
  userSignOut();
};

export { handleSignIn, handleSignUp, handleSignOut };
