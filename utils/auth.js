import { signIn, signUp, userSignOut } from '@/auth/firebase';

const handleSignUp = async ({ userEmail, userPassword }) => {
  const { user, errorMsg } = await signUp(userEmail, userPassword);
  if (user) {
    console.log('Logged In via signUp:', user.email);
  } else if (errorMsg) console.log(errorMsg);
};

const handleSignIn = async ({ userEmail, userPassword }) => {
  const { user, errorMsg } = await signIn(userEmail, userPassword);
  if (user) {
    console.log('Logged In via signIn:', user.email);
  } else if (errorMsg) console.log(errorMsg);
};

const handleSignOut = async () => {
  userSignOut();
};

export { handleSignIn, handleSignUp, handleSignOut };
