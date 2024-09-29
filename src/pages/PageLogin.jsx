import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginForm } from "@/modules/user/LoginForm";
import AuthContext from "@/context/auth/AuthContext";
import { Navigate } from "react-router-dom";

const PageLogin = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className="relative z-10 flex items-center justify-center h-screen flex-col page page-login -translate-y-10">
        <h1 className="mb-6">login</h1>
        <LoginForm />
        <div className="mt-6 mb-0 text-center text-sm text-sand-600 hover:text-sand-400">
          <NavLink to="/register">sign up</NavLink>
        </div>
      </div>
    </>
  );
};

export default PageLogin;
