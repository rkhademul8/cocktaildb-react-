import inililizationAuth from "../Firebase/Firebase.init"
import {  getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

inililizationAuth()

const useFirebase=()=>{
    const [user, setUser]=useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

   const signInGoogle=()=>{

    signInWithPopup(auth, googleProvider)
    
        .then((result) => {
        setUser(result.user)
        console.log(result.user);
        
    
    })
   }
   
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        } 
      });
},[])

   const logOut=()=>{
    signOut(auth)
    .then(() => {
        setUser({ })
      })
   }



    return{
        user,
        signInGoogle,
        logOut,
    }
}

export default useFirebase