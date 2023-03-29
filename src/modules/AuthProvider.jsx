import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "./AuthContext"

export const AuthProvider = ({ children }) => {
    // state of the firebase user object
    const [user, setUser] = useState('nobody')

    const auth = getAuth()

    // when authentication status changes... 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('>>> onAuthChange | user is: ', user)
            // setting the state to pass to authcontext
            setUser(user)
        })
    }, [])

    console.log('>>> usr outside effect in authprovider: ', user)

    // the whole app runs inside this component
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}
