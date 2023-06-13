import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const emailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const logOut = () => {
        return signOut(auth);
    }



    const authInfo = {
        emailUser,
        login,
        logOut,
        user,

    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;