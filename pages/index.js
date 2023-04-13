import Splash from '@/components/Splash';
import { auth } from '@/auth/firebase';

export default function Home() {
  const user = auth.currentUser?.email;

  return <Splash user={user ? user : ''} />;
}
