import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@/context/auth/AuthContext";
import useMovieStore from "@/store/movie-store";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { resetMovies } = useMovieStore();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(">>> AuthProvider | user is:", user.email);
      } else {
        console.log(">>> AuthProvider | User logged out.");
        resetMovies();
        navigate("/login", { replace: true });
      }
    });
  }, []);

  // the whole app runs inside this component
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
