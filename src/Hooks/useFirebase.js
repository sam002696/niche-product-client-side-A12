import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.initialize";
// import { useHistory, useLocation } from 'react-router';
import { Redirect, useHistory, useLocation } from 'react-router';


firebaseAuthentication();
const auth = getAuth();

const useFirebase = () => {
    // const history = useHistory();
    // const redirect = '/home';
    // const [isloggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setIsLoading] = useState(true);
    const [nameHeader, setName] = useState('');

    // const setUserName = () => {
    //     updateProfile(auth.currentUser, {
    //         displayName: name
    //     }).then((result) => {

    //     })
    // }

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

    const userWithEmailandPassword = (e) => {


        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const userSignUp = result.user;
                console.log(userSignUp);
                const newUser = { email, displayName: nameHeader };
                setName(newUser);
                // setUserName();
                updateProfile(auth.currentUser, {
                    displayName: nameHeader
                }).then(() => {
                    // window.location.reload(false);
                }).catch((error) => {
                });
                hanldeUserInfoRegister(result.user.email);
                // setUser(user);
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false);
                // <Redirect to='/home'></Redirect>
                // setIsLoggedIn(true);
                // if (isloggedIn) {

                //     history.push(redirect);
                //     window.location.reload(false);
                // }
                // history.push(redirect);
                // window.location.reload();
            });
        e.preventDefault();
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
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
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