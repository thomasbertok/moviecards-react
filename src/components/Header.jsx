import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "@/context/auth/AuthContext";
import { firebaseSignOut } from "@/firebase";

import logo from "@/assets/logo.png";
import { MdLogout } from "react-icons/md";
import MovieSearch from "@/modules/MovieSearch";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useContext(AuthContext);

  // log out with firebase
  const handleLogout = async () => {
    await firebaseSignOut();
  };

  /**
   * add special class to the sticky header
   * on scroll event to give a background
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header sticky top-0 z-50 ${isScrolled ? "scrolled" : ""} `}>
      <div className="flex items-center flex-wrap p-6 ">
        {/*  */}
        <NavLink to="/" className="mr-6 flex-none">
          <img className="logo" src={logo} alt="Click to homepage | Movie Cards 2.0" />
        </NavLink>

        {/* Movie Search */}
        <div className="flex-auto">
          <MovieSearch />
        </div>

        {/* User Profile */}
        <div className="flex-none flex items-center">
          <NavLink to="/profile" className="mr-2 flex items-center">
            {user.photoURL !== null && (
              <div className="rounded-full w-10 bg-blue mr-2">
                <img src={user.photoURL} alt="user" />
              </div>
            )}
            {user.dispayName === null ? user.email : user.displayName}
          </NavLink>

          {/* Log out */}
          <button className="button-icon w-[40px] h-[40px]" title="Sign Out" onClick={handleLogout}>
            <MdLogout size="18" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
