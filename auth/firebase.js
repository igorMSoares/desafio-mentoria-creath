// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Your web app's Firebase configuration
// Those are public information, safe to be used in the front end
const firebaseConfig = {
  apiKey: 'AIzaSyD9VhC5MPEcNkenAJdzuzD3hmR08iBdESU',
  authDomain: 'mentoria-creath.firebaseapp.com',
  projectId: 'mentoria-creath',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const signUp = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredentials;

    return { user, errorMsg: null };
  } catch (error) {
    const { code: errorCode } = error;
    console.log('Auth Error:', errorCode);

    const errorMsg =
      errorCode === 'auth/email-already-in-use'
        ? 'E-mail já cadastrado'
        : errorCode === 'auth/invalid-email'
        ? 'E-mail Inválido'
        : errorCode === 'auth/wrong-password'
        ? 'Senha Incorreta'
        : errorCode === 'auth/missing-password'
        ? 'Digite uma senha'
        : errorCode === 'auth/missing-email'
        ? 'Digite um email válido'
        : errorCode === 'auth/weak-password'
        ? 'Digite uma senha mais forte'
        : 'Ocorreu um erro durante o cadastro';

    return { user: null, errorMsg, errorCode };
  }
};

const signIn = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredentials;

    return { user, errorMsg: null };
  } catch (error) {
    const { code: errorCode } = error;
    console.log('Auth Error:', errorCode);

    const errorMsg =
      errorCode === 'auth/invalid-email'
        ? 'E-mail Inválido'
        : errorCode === 'auth/wrong-password'
        ? 'Senha Incorreta'
        : 'Ocorreu um erro durante a autenticação';

    return { user: null, errorMsg };
  }
};

const userSignOut = () => {
  signOut(auth)
    .then(console.log('User signed out.'))
    .catch(error => console.log(error));
};

export { signUp, signIn, userSignOut, auth, onAuthStateChanged };
