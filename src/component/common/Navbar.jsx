import React, { useContext } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  DataContext,
  getUserLoginLocalStorage,
  setLocalStorage,
} from "../../helpers";
import FormChangePassword from "../FormChangePassword";

function Navbar() {
  const navitageTo = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];

  const { userLogin, setUserLogin } =
    useContext(DataContext);

  function handleLogout() {
    setUserLogin(localStorage.clear());
    navitageTo("/");
  }

  const buttonSidebar =
    userLogin?.user_role === "admin" ||
    userLogin?.user_role === "editor" ? (
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#sidebarMenuUser"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        hidden
      >
        <i className="fas fa-bars"></i>
      </button>
    ) : null;

  const dasboardAdminOrEditor =
    userLogin?.role_name === "admin" ||
    userLogin?.role_name === "editor" ? (
      <li className="nav-item">
        <NavLink
          to={"/admin/dasbord"}
          className={`nav-link me-3 me-lg-0 ${
            currentLocation === "/admin/dasbord"
              ? "active"
              : ""
          }`}
        >
          Dasboard
        </NavLink>
      </li>
    ) : null;

  const buttonSwitch = userLogin?.user_id ? (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
          className="rounded-circle me-2"
          height="35"
          alt=""
          loading="lazy"
        />
        <small>hallo, {userLogin?.role_name}</small>
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <Link to={"/profile"} className="dropdown-item">
            My profile
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            data-mdb-toggle="modal"
            data-mdb-target="#staticBackdrop1"
          >
            Change password
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="dropdown-item"
          >
            Logout
          </button>
        </li>
      </ul>
    </li>
  ) : (
    <div className="d-flex align-items-center">
      <NavLink
        to={"/auth/login"}
        type="button"
        className="btn btn-link px-3 me-2"
      >
        Login
      </NavLink>

      <NavLink
        to={"/auth/register"}
        type="button"
        className="btn btn-primary me-3"
      >
        Sign up
      </NavLink>
    </div>
  );

  return (
    <>
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      >
        <div className="container">
          {buttonSidebar}
          <Link to={"/"} className="navbar-brand">
            <img
              src="https://venom-assets.edmunds-media.com/e20178b235b6f0e24fff96df81b22919.svg"
              height="25"
              alt=""
              loading="lazy"
            />
          </Link>

          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item dropdown">
              <NavLink
                to={"/"}
                className={`nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow ${
                  currentLocation === "/" ? "active" : ""
                }`}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/article"}
                className={`nav-link me-3 me-lg-0 ${
                  currentLocation === "/article"
                    ? "active"
                    : ""
                }`}
              >
                Article
              </NavLink>
            </li>

            {dasboardAdminOrEditor}

            {buttonSwitch}
          </ul>
        </div>
      </nav>
      <div
        className="modal fade"
        id="staticBackdrop1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog z-9999">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel1"
              >
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <FormChangePassword />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
