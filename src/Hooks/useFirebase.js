import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.initialize";


firebaseAuthentication();
const auth = getAuth();
const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setIsLoading] = useState(true);
    const [name, setName] = useState('');

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {

        })
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        setIsLoading(true);
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error);
        }).finally(() => setIsLoading(false));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [])
    const userWithEmailandPassword = (e) => {
        // e.preventDefault();
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const userSignUp = result.user;
                console.log(userSignUp);
                setUserName();
                hanldeUserInfoRegister(result.user.email);

                // setUser(user);
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    const signWithEmailandPassword = (e) => {

        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsLoading(false));
    }
    const hanldeUserInfoRegister = (email) => {
        fetch("https://pacific-basin-31742.herokuapp.com/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return {
        userWithEmailandPassword,
        signWithEmailandPassword,
        googleSignIn,
        logOut,
        setEmail,
        setPassword,
        setName,
        loading,
        user,
        error
    }
}
export default useFirebase;