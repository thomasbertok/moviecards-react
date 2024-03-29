import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import AuthContext from '../modules/AuthContext';
import { firebaseSignOut } from '../firebase'

import logo from '../assets/logo.png'
import { MdLogout } from 'react-icons/md'
import MovieSearch from '../modules/MovieSearch';
import MovieSearchResults from '../modules/MovieSearchResults';

import { Dropdown } from 'flowbite-react';

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
            <div className="flex items-center flex-wrap p-6 bg-dark-800">
                <NavLink to="/" className="mr-6 flex-none">
                    <img className='logo' src={logo} alt="Click to go to homepage | Movie Cards 2.0" />
                </NavLink>

                <div className='flex-auto'>
                    <MovieSearch setResult={setSearchResults} />
                </div>

                {/* <div>
                    <Dropdown size="sm" label="Dropdown button">
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item icon={MdLogout}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown>
                </div> */}


                <div className='flex-none flex items-center'>
                    <NavLink to='/profile' className='mr-2 flex items-center'>
                        {user.photoURL !== null &&
                            <div className="rounded-full w-8 bg-light mr-2">
                                <img src={user.photoURL} alt="" />
                            </div>
                        }
                        {user.dispayName === null ? user.email : user.displayName}

                    </NavLink>
                    <button className="button button-icon" title="Sign Out" onClick={handleLogout}>
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