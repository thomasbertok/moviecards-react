import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import AuthContext from './AuthContext.js';

const ProtectedRoute = ({ children }) => {

    // get user context
    const user = useContext(AuthContext)

    console.log('>>> Protected Route. User: ', user)

    // if user object user is null, go to login page
    if (user.user === null) {
        return <Navigate to="/login" />
    }

    // if user is logged in, render the child component
    return children

}

export default ProtectedRoute;