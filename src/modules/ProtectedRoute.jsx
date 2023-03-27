import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import AuthContext from './AuthContext.js';

const ProtectedRoute = ({ children }) => {
    const user = useContext(AuthContext)
    console.log('>>> Protected Route. User: ', user)

    if (user.user === null || user.user === undefined) {
        return <Navigate to='/login' />
    } else {
        return children
    }
}

export default ProtectedRoute;