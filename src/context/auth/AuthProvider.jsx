import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@/context/auth/AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(">>> AuthProvider | user is:", user.email);
      } else {
        console.log(">>> AuthProvider | User logged out.");
        navigate("/login", { replace: true });
      }
    });
  }, []);

  // the whole app runs inside this component
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
