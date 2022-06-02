import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/auth/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Routers() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <Routes>
      <Route strict path="/" element={<Home />} />
      {!loggedIn && <Route strict path="/login" element={<Login />} />}
      <Route strict path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
