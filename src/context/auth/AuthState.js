import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";

function AuthState(props) {
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);
  const getUser = JSON.parse(localStorage.getItem("user"));
  const getLoggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
  useEffect(() => {
    if (getUser == null) {
      setUser([]);
    } else {
      setUser(getUser);
    }
    if (getLoggedInUser == null) {
      setLoggedIn(undefined);
    } else {
      setLoggedIn(getLoggedInUser);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
