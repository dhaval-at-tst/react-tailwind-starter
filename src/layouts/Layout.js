import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./MainRoutes";

const Layout = () => {
  return (
    <Fragment>
      <ToastContainer />
      <MainRoutes />
    </Fragment>
  );
};

export default React.memo(Layout);
