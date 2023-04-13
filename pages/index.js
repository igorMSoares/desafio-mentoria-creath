import Splash from '@/components/Splash';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const removeListener = onAuthStateChanged(auth, user => {
      setCurrentUser(user);

      return () => {
        removeListener();
      };
    });
  }, []);

  const user = currentUser?.email;

  return <Splash user={user ? user : ''} />;
}
