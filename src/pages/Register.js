import React, { useContext } from "react";
import useInput from "../utils/useInput";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    value: enteredName,
    isVaild: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

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

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = false;
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClassName = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const passwordInputClassName = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    let newUSer = {
      id,
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };
    setUser([...user, newUSer]);
    localStorage.setItem("user", JSON.stringify([...user, newUSer]));
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    alert("Registered Success");
    navigate("/");
  };
  //   console.log({ user });
  return (
    <form className="form_login" onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p className="error-text">Enter Valid Name</p>}

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

export default Register;
