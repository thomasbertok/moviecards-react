import { firebaseSignIn } from "@/firebase";
import { emailValidator, passwordValidator, getReadableErrorMessage } from "@/helpers";
import { MdLogin } from "react-icons/md";
import LoadingIcons from "react-loading-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  // form states
  const [canSubmit, setCanSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  // form states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // error states text
  const [loginEmailErrorText, setLoginEmailError] = useState("");
  const [loginPasswordErrorText, setLoginPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  // set states when changing input fields
  const onUpdateField = (ev) => {
    // create form object with new data
    const nextFormData = {
      ...formData,
      [ev.target.name]: ev.target.value,
    };
    // enable submit only when all inputs are validated
    setCanSubmit(emailValidator(nextFormData.email) && passwordValidator(nextFormData.password));
    // save state
    setFormData(nextFormData);
  };

  /**
   * Submit login form
   */
  const handleLoginFormSubmit = async (e) => {
    // stop autoreload
    e.preventDefault();
    // loading state ON
    setLoading(true);
    // reset error messages
    setLoginEmailError("");
    setLoginPasswordError("");
    setGeneralError("");

    try {
      const firebaseLoginResult = await firebaseSignIn(formData);
      if (firebaseLoginResult.error) {
        setGeneralError(getReadableErrorMessage(firebaseLoginResult.error));
        setLoading(false);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("!!! Firebase Auth Error! ", error.code);
      setGeneralError(error);
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-blue-900 w-10/12 max-w-[400px] shadow-2xl">
      {generalError && <p className="text-md text-center my-2 text-primary-400">{generalError}</p>}

      <form onSubmit={handleLoginFormSubmit}>
        <div className="mb-8">
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
          />
          <p className="text-xs text-primary-400">{loginEmailErrorText}</p>
        </div>

        <div className="mb-8">
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
          />
          <p className="text-xs text-primary-400">{loginPasswordErrorText}</p>
        </div>

        <div className="mb-4">
          <button
            className={
              "button button-primary flex items-center justify-center w-full" +
              (loading ? " btn-loading" : " btn-normal")
            }
            disabled={canSubmit ? "" : "disabled"}
            type="submit">
            <span className="mr-2">{loading ? <LoadingIcons.Oval strokeWidth={8} height={"1em"} /> : <MdLogin />}</span>
            <span>sign in</span>
          </button>
        </div>
      </form>
    </div>
  );
};
