import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import AuthContext from "@/context/auth/AuthContext";
import useMovieStore from "@/store/movie-store";
import router from "@/router";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { resetMovies } = useMovieStore();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(">>> AuthProvider | user is:", user.email);
      } else {
        console.log(">>> AuthProvider | User is logged out.");
        resetMovies();
        setUser(null);
        router.navigate("/login", { replace: true });
      }
    });
  }, []);

  // the whole app runs inside this component
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
