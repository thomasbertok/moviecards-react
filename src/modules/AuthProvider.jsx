import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState, useEffect } from "react"
import AuthContext from "./AuthContext"

export const AuthProvider = ({ children }) => {
    // state of the firebase user object
    const [user, setUser] = useState()
    // pending state
    const [pending, setPending] = useState(false)

    const auth = getAuth()

    // when authentication status changes... 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('>>> onAuthChange: ', user)
            setUser(user)
            setPending(false)
        })
    }, [])


    if (pending) return <PageLoading />

    // the whole app runs inside this component
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}
