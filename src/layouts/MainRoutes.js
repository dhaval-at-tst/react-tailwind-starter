import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const MainRoutes = () => {
  const authToken = Boolean(localStorage.getItem("authToken"));

  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {!isLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/signin" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<Navigate to="/signin" />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default MainRoutes;
