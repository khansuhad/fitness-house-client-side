import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user , setUser] = useState();
    const [loader , setLoader] = useState(true) 
        
        const createUser = (email , password ) => {
            setLoader(true);
            return createUserWithEmailAndPassword(auth , email , password);
        }
        const loginUser = (email, password) => {
            setLoader(true)
            return signInWithEmailAndPassword(auth , email , password);
        }
     const logOut = () => {
        setLoader(true)
        return signOut(auth);
     }
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth , currentUser => {
            setLoader(false)
            setUser(currentUser);
            console.log(currentUser)
         
        })
        return () => {
            unSubscribe();
        }
    },[user])
    
        const googleLogin = () =>{
            return signInWithPopup(auth , provider)
        }
    
        const authInfo = {
            createUser,
            loginUser,
            logOut,
            setUser,
            user,
            loader,
            googleLogin,
        
        }; 
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;