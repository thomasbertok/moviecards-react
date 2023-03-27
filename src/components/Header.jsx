import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className="header sticky top-0">
            <div className="flex items-center justify-left flex-wrap p-6 bg-gray-900">
                <h1 className="mx-6">
                    <NavLink to="/">
                        <img className='logo' src={logo} alt="Click to go to homepage | Movie Cards 2.0" />
                    </NavLink>
                </h1>
                <nav className="main-nav">
                    <ul className='flex'>
                        <li className="">
                            <NavLink to="/" className="main-nav-link text-gray-100 text-bold">Home</NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/about" className="main-nav-link text-gray-100">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header