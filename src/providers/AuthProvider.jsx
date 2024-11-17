import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user);

    // Google Sign-In
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true);
        return (
            signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => alert("ERROR", error.code))
        );
    }
    
    // Github Sign-In
    const githubProvider = new GithubAuthProvider();
    const loginWithGithub = () => {
        setLoading(true);
        return (
            signInWithPopup(auth, githubProvider)
            .then(result => setUser(result.user))
            .catch(error => alert("ERROR",error.code))
        );
    }

    // Email-Password Sign In
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return (
            signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => console.log("Error", error.message)));
    }

    // Create/Register/Sign-Up New User with Email-Password
    const createAccount = (email, password) => {
        setLoading(true);
        return (
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => console.log("Error", error.message))
        );
    }

    // Log-Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loginWithGoogle,
        loginWithGithub,
        loginWithEmailAndPassword,
        createAccount,
        loading,
        setLoading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;