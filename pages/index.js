import CardBox from '@/components/CardBox';
import CardTitle from '@/components/CardTitle';
import Button from '@/components/Button';
import CentralizedContainer from '@/components/CentralizedContainer';
import { auth, onAuthStateChanged } from '@/auth/firebase';
import { handleSignIn, handleSignUp, handleSignOut } from '@/utils/auth';
import { useEffect, useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import  Splash from './Splash/Splash';

export default function Home() {
  
  return (
    <Register/>
  );
}
