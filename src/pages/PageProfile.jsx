import React, { useContext } from 'react';
import AuthContext from '../modules/AuthContext';
import Header from '../components/Header';

function PageProfile(props) {

    // get current user data
    const userObject = useContext(AuthContext)
    const user = userObject.user

    // format object to nice json format
    let sttr = JSON.stringify(user, null, "\t")
    sttr = JSON.stringify(user, null, 2)

    return (
        <>
            <Header />
            <main className='container mx-auto pt-6 pb-6'>
                <h1>Profile Page</h1>
                <p><strong>Username:</strong> {user.displayName}</p>
                <p><strong>Email account:</strong> {user.email}</p>
                <p><strong>Profile image:</strong> {user.photoURL}</p>
                <pre className='text-xs'>{sttr}</pre>
            </main>
        </>
    );
}

export default PageProfile;