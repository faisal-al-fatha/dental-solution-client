import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from 'react-router-dom';
import app from "../Firebase/firebase.config";
import Footer from '../Shared/Footer';
import Nav from '../Shared/Nav';

export const AuthContext = createContext();
const auth = getAuth(app)
const Main = () => {
    const courses = useLoaderData();
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider)=>{
        setLoading(true);
         return signInWithPopup(auth, provider);
    }
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo = { auth, courses, user, setUser, providerLogin, createUser, logIn, logOut, loading, setLoading}
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            </AuthContext.Provider>
        </div>
    );
};

export default Main;