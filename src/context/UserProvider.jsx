import React, { useEffect, useState } from 'react'
import {createContext} from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const UserContext = createContext()

const UserProvider = ({children}) => {

const [user, setUser] = useState(false);

useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, user => {
        
        if (user) {
            const {email, photoURL, displayName, uid} = user
            setUser({email, photoURL, displayName, uid})

        }else{
            setUser(null)
        }
    })

    return () => unsuscribe();
}, []);


const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
}

const cerrarSesion = () => {
    signOut(auth)
}

  return (
    <UserContext.Provider value={{user, setUser, registerUser, loginUser, cerrarSesion}}>{children}</UserContext.Provider>
  )
}

export default UserProvider