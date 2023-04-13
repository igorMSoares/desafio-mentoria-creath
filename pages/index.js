import Splash from '@/components/Splash';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const user = router.query?.user;

  return <Splash user={user ? user : ''} />;
}
