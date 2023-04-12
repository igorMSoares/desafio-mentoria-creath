import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { signIn, signUp } from '@/auth/firebase';

const userEmail = 'user@someemail.com';
const userPassword = 'userpasswd';

const handleSignUp = async e => {
  const { user, errorMsg } = await signUp(userEmail, userPassword);
  if (user) console.log(user.email);
  else if (errorMsg) console.log(errorMsg);
};

const handleSignIn = async e => {
  const { user, errorMsg } = await signIn(userEmail, userPassword);
  if (user) console.log(user.email);
  else if (errorMsg) console.log(errorMsg);
};

export default function Home() {
  return (
    <CentralizedContainer>
      <CardBox>
        <CardTitle title="Login" />
        <Button label="Login" clickHandler={handleSignIn} />
        <Button label="Sign up" clickHandler={handleSignUp} />
      </CardBox>
    </CentralizedContainer>
  );
}
