import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { createContext, use, useEffect, useState } from 'react';
import auth from './../firebase/firebase.config';

const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(user);

  function createUser(email, password) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateUserProfile(updateUserInfo) {
    return updateProfile(auth.currentUser, updateUserInfo);
  }

  function googleLogin() {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext
      value={{
        createUser,
        updateUserProfile,
        googleLogin,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AuthContext>
  );
}

function useAuth() {
  const context = use(AuthContext);
  if (context === null)
    throw new Error('AuthContext was used outside of Auth Provicer.');
  return context;
}

export { AuthProvider, useAuth };
