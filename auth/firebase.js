// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export { auth };
