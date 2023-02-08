import React, { useState, useEffect, useContext } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";



const AuthStateListener = React.createContext()

export function useAuth() {
 return useContext(AuthStateListener)
}

// export const useAuthState = () => {
//   const auth = useContext(AuthStateListener)
//   return{ ...auth, isAuthenticated: auth.user != null }
// }

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
 

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => { 
   const unsubscribe = onAuthStateChanged(auth, user => {
    setCurrentUser(user)
    setLoading(false)
  });

  return unsubscribe
  
}, []);
 


  const value = {
    currentUser,
    signIn,
    signUp
  }

  return(
    <AuthStateListener.Provider value={value}>
        {!loading && children}
    </AuthStateListener.Provider>
  );
};

export default AuthProvider;


