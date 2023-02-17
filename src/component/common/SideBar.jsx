import React, { useContext } from "react";
import { DataContext } from "../../helpers";
import { NavLink, useLocation } from "react-router-dom";

const sideBarNav = [
  {
    path: "/admin/users",
    name: "User",
    icon: <i class="fas fa-users"></i>,
  },
  {
    path: "/admin/role",
    name: "Role",
    icon: <i class="fas fa-chalkboard-teacher"></i>,
  },
  {
    path: "/admin/car",
    name: "Cars",
    icon: <i class="fas fa-taxi"></i>,
  },
  {
    path: "/admin/articles",
    name: "Articles",
    icon: <i class="fas fa-file-alt"></i>,
  },
  {
    path: "/admin/car_type",
    name: "Car Type",
    icon: <i class="fas fa-list"></i>,
  },
];

function SideBar() {
  const { userLogin } = useContext(DataContext);
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];

  const sideBarAdmin = sideBarNav.map((item) => (
    <NavLink
      to={item.path}
      className={`list-group-item list-group-item-action py-2 ripple ${
        currentLocation === item.path && "active"
      }`}
      aria-current="true"
    >
      {item.icon} <span>{item.name}</span>
    </NavLink>
  ));
  const sideBarEditor = (
    <NavLink
      to={"/admin/articles"}
      className={`list-group-item list-group-item-action py-2 ripple ${
        currentLocation === "/admin/articles" && "active"
      }`}
      aria-current="true"
    >
      <i class="fas fa-file-alt"></i> <span>Articles</span>
    </NavLink>
  );

  const currentNavSideBar =
    userLogin.role_name === "admin"
      ? sideBarAdmin
      : sideBarEditor;

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          {currentNavSideBar}
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
