import React, { useContext } from "react";
import useInput from "../utils/useInput";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log({ loggedIn });
  const {
    value: enteredEmail,
    isVaild: enteredEmailIsValid,
    hasError: emailInputHasError,
    reset: resetEmailInput,
    valueChangeHandler: eamilChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isVaild: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    reset: resetPasswordInput,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = true;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = false;
  }

  const emailInputClassName = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const passwordInputClassName = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredEmail, enteredPassword);
    console.log({ user });

    let authUser = user.find((elem) => {
      return elem.email === enteredEmail;
    });

    if (authUser) {
      if (enteredPassword === authUser.password) {
        alert("Login Success");
        setLoggedIn([authUser]);
        localStorage.setItem("loggedIn", JSON.stringify(authUser));
      }
    }

    resetEmailInput();
    resetPasswordInput();

    navigate("/");
  };

  return (
    <form className="form_login" onSubmit={formSubmissionHandler}>
      <div className={emailInputClassName}>
        <label htmlFor="email">Enter Mail</label>
        <input
          type="email"
          id="email"
          onChange={eamilChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && <p className="error-text">Enter Valid Email</p>}
      <div className={passwordInputClassName}>
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
      </div>
      {passwordInputHasError && <p className="error-text">Enter Valid Email</p>}
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Login;
