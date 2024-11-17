import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user);

    // Google Sign-In
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return setUser(result.user);
        } catch (error) {
            return alert(error.code);
        }
    }
    
    // Github Sign-In
    const githubProvider = new GithubAuthProvider();
    const loginWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            return setUser(result.user);
        } catch (error) {
            return alert(error.code);
        }
    }

    // Email-Password Sign In
    const loginWithEmailAndPassword = (email, password) => {
        return (
            signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => console.log("Error", error.message)));
    }

    // Create/Register/Sign-Up New User with Email-Password
    const createAccount = (email, password) => {
        return (
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => console.log("Error", error.message))
        );
    }

    // Log-Out 
    const logOut = () => {
        const unsubscribe = () => {
            signOut(auth)
            .then(setUser(null))
            .catch(error => alert("An Error Occurred"));
            setUser(null);
        }
        return unsubscribe();
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null);
            }
        })
    }, [])

    const authInfo = {
        user,
        setUser,
        loginWithGoogle,
        loginWithGithub,
        loginWithEmailAndPassword,
        createAccount,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;