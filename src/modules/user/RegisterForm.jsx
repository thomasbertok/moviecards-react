import { useState } from "react";
import { firebaseSignUp } from "@/firebase";
import { emailValidator, passwordValidator, getReadableErrorMessage } from "@/helpers";
import { useNavigate } from "react-router-dom";

import { MdLogin } from "react-icons/md";
import LoadingIcons from "react-loading-icons";

/**
 * Sign Up Form Component
 * @returns {JSX.Element}
 */

export const RegisterForm = () => {
  const navigate = useNavigate();
  // form states
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  // form states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  // error states text
  const [generalError, setGeneralError] = useState("");
  const [signupEmailErrorText, setSignupEmailError] = useState("");
  const [signupPasswordErrorText, setSignupPasswordError] = useState("");
  const [signupUsernameErrorText, setSignupUsernameErrorText] = useState("");

  /**
   * update input states when changing input
   */
  const onUpdateField = (ev) => {
    // create form object with new data
    const nextFormData = {
      ...formData,
      [ev.target.name]: ev.target.value,
    };
    // enable submit only when all inputs are validated
    setCanSubmit(
      emailValidator(nextFormData.email) && passwordValidator(nextFormData.password) && nextFormData.username !== ""
    );
    // save state
    setFormData(nextFormData);
  };

  /**
   * submit form, handle sign up
   */
  const handleFormSubmit = async (e) => {
    // stop autoreload
    e.preventDefault();
    // set loading state
    setLoading(true);
    // empty error messages
    setSignupEmailError("");
    setSignupPasswordError("");
    setGeneralError("");

    try {
      const firebaseResult = await firebaseSignUp(formData);
      if (firebaseResult.error) {
        setGeneralError(getReadableErrorMessage(firebaseResult.error));
      } else {
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error("!!! Firebase Auth Error! ", error.code);
      setGeneralError(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 bg-blue-900 w-10/12 max-w-[400px] shadow-2xl">
      {generalError && <p className="text-md text-center my-2 text-primary-400">{generalError}</p>}

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div className="">
          <label className="block text-sm mb-2" htmlFor="useremail">
            email
          </label>
          <input
            className="w-full py-3 px-3 leading-tight"
            id="useremail"
            name="email"
            type="email"
            disabled={loading}
            placeholder="your email account"
            value={formData.email}
            onChange={onUpdateField}
            autoComplete="false"
          />
          <p className="text-xs text-primary">{signupEmailErrorText}</p>
        </div>

        <div className="">
          <label className="block text-sm mb-2" htmlFor="userpassword">
            password
          </label>
          <input
            className="w-full py-3 px-3 mb-3 leading-normal"
            id="userpassword"
            name="password"
            type="password"
            disabled={loading}
            placeholder="your password"
            value={formData.password}
            onChange={onUpdateField}
            autoComplete="false"
          />
          <p className="text-xs text-primary">{signupPasswordErrorText}</p>
        </div>

        <div className="">
          <label className="block text-sm mb-2" htmlFor="username">
            username
          </label>
          <input
            className="w-full py-3 px-3 mb-3 leading-normal"
            id="username"
            name="username"
            type="text"
            disabled={loading}
            placeholder="your username"
            value={formData.username}
            onChange={onUpdateField}
            autoComplete="false"
          />
          <p className="text-xs text-primary">{signupUsernameErrorText}</p>
        </div>
        <div className="mt-3">
          <button
            className={
              "button button-primary flex items-center justify-center w-full" +
              (loading ? " btn-loading" : " btn-normal")
            }
            disabled={canSubmit ? "" : "disabled"}
            type="submit">
            <span className="mr-2">{loading ? <LoadingIcons.Oval strokeWidth={8} height={"1em"} /> : <MdLogin />}</span>
            <span>sign up</span>
          </button>
        </div>
      </form>
    </div>
  );
};
