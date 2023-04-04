import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import AuthContext from '../modules/AuthContext';
import { firebaseSignOut } from '../firebase'

import logo from '../assets/logo.png'
import { MdLogout } from 'react-icons/md'
import MovieSearch from '../modules/MovieSearch';
import MovieSearchResults from '../modules/MovieSearchResults';

const Header = () => {

    const [searchResults, setSearchResults] = useState([])

    const userObj = useContext(AuthContext)
    const user = userObj.user

    // log out with firebase
    const handleLogout = async () => {
        await firebaseSignOut()
    }

    useEffect(() => {
        console.log('>>> search res in header ', searchResults);
    }, [searchResults])


    const selectMovie = (id) => {
        console.log('>>> selected id: ', id)
        setSearchResults([])
    }


    return (
        <header className="header sticky top-0 z-50 drop-shadow-2xl">
            <div className="flex items-center flex-wrap p-6 bg-dark">
                <h1 className="mx-6 flex-none">
                    <NavLink to="/">
                        <img className='logo' src={logo} alt="Click to go to homepage | Movie Cards 2.0" />
                    </NavLink>
                </h1>

                <div className='flex-auto'>
                    <MovieSearch setResult={setSearchResults} />
                </div>

                <div className='flex-none'>
                    <Link to='/profile' className='mr-2'>{user.email}</Link>
                    <button className="button bg-secondary button-icon" title="Sign Out" onClick={handleLogout}>
                        <MdLogout />
                    </button>
                </div>
            </div>

            <div className="movie-search-results">
                <MovieSearchResults list={searchResults} select={selectMovie} />
            </div>
        </header>
    )
}

export default Header