import React from "react";
import { Navbar } from "../common";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <section className="d-flex  align-items-center vh-100">
      <Navbar />

      <main
        className="m-auto container-md mw-100 d-flex justify-center align-items-center"
        style={{ marginTop: "200px" }}
      >
        <Outlet />
      </main>
    </section>
  );
}

export default BlankLayout;
