import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom'
import AuthContext from '../modules/AuthContext';
import { firebaseSignOut } from '../firebase'

import logo from '../assets/logo.png'
import { MdLogout } from 'react-icons/md'

const Header = () => {

    const userObj = useContext(AuthContext)
    const user = userObj.user

    // log out with firebase
    const handleLogout = async () => {
        await firebaseSignOut()
    }

    return (
        <header className="header sticky top-0">
            <div className="flex items-center flex-wrap p-6 bg-gray-900">
                <h1 className="mx-6 mr-auto">
                    <NavLink to="/">
                        <img className='logo' src={logo} alt="Click to go to homepage | Movie Cards 2.0" />
                    </NavLink>
                </h1>

                {/* <nav className="main-nav mr-auto">
                    <ul className='flex'>
                        <li className="">
                            <NavLink to="/" className="main-nav-link text-gray-100 text-bold">Home</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/about" className="main-nav-link text-gray-100">About</NavLink>
                        </li>
                    </ul>
                </nav> */}

                <div className="">
                    <Link to='/profile' className='mr-2'>{user.email}</Link>
                    <button className="button" onClick={handleLogout}>
                        <MdLogout />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header