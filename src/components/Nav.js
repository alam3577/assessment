import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

export default function Nav() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    setLoggedIn(undefined);
    localStorage.removeItem("loggedIn");
    console.log("Logged In from ", { loggedIn });
  };
  return (
    <header className="header" style={{ marginBottom: "100px" }}>
      <nav className="nav">
        <div className="nav_div">
          <img
            src="https://raw.githubusercontent.com/alam3577/new-quiz/master/src/Assets/Images/logo.png"
            alt=""
            id="logo"
            className="nav__logo"
          />
          {/* <p>Todo App</p> */}
        </div>
        <ul className="nav__links">
          {!loggedIn && (
            <NavLink strict to="/login">
              <li className="nav__item">Login</li>
            </NavLink>
          )}
          {!loggedIn && (
            <NavLink strict to="/register">
              <li className="nav__item ttt">Register</li>
            </NavLink>
          )}
          {loggedIn && (
            <NavLink onClick={logoutHandler} strict to="/">
              <li className="nav__item ttt">Logout</li>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}
