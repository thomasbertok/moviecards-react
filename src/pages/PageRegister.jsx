import { NavLink } from "react-router-dom";
import { RegisterForm } from "@/modules/user/RegisterForm";

const PageRegister = () => {
  return (
    <>
      <div className="relative z-10 flex items-center justify-center h-screen flex-col page page-login -translate-y-10">
        <h1 className="mb-6">sign up</h1>
        <RegisterForm />
        <div className="mt-6 mb-0 text-center text-sm text-sand hover:text-sand-300">
          <NavLink to="/login">sign in</NavLink>
        </div>
      </div>
    </>
  );
};

export default PageRegister;
