import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth } from '@/auth/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const signIn = e => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, '123@456.com', '123456')
    .then(userCredentials => console.log(userCredentials))
    .catch(err => console.log(err));
};

const signUp = e => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, '123@456.com', '123456')
    .then(userCredentials => console.log(userCredentials))
    .catch(err => console.log(err));
};

export default function Home() {
  return (
    <CentralizedContainer>
      <CardBox>
        <CardTitle title="Login" />
        <Button label="Login" clickHandler={signIn} />
        <Button label="Sign up" clickHandler={signUp} />
      </CardBox>
    </CentralizedContainer>
  );
}
