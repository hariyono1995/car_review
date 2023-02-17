import React, { Fragment } from "react";
import { Footer, Navbar } from "../../common";
import { Outlet } from "react-router-dom";

function AllRoleLayout() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      <div className="mh-100">
        <Outlet />
      </div>

      <Footer />
    </Fragment>
  );
}

export default AllRoleLayout;
