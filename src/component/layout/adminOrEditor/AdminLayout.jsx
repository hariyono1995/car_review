import React, { Fragment } from "react";
import { SideBar, Navbar } from "../../common";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <Fragment>
      <header>
        <SideBar />
        <Navbar />
      </header>

      <main>
        <div className="container pt-4 vh-70 mt-5">
          <Outlet />
        </div>
      </main>
    </Fragment>
  );
}

export default AdminLayout;
