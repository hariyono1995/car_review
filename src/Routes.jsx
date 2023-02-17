import React, { useContext } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import {
  AdminLayout,
  AllRoleLayout,
  BlankLayout,
  FormLogin,
  FormRegister,
} from "./component/layout";
import {
  Article,
  Home,
  Profile,
  FormProfile,
} from "./views";
import { DataContext } from "./helpers";
import { ErrorPage } from "./component/common";

function Routes() {
  const { userLogin } = useContext(DataContext);

  const isLoggedIn = userLogin?.user_id !== undefined;

  console.log(" check user is login ", isLoggedIn);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllRoleLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/article",
          element: <Article />,
        },
      ],
    },
    {
      path: "/auth",
      element: <BlankLayout />,
      children: [
        {
          path: "/auth/login",
          element: isLoggedIn ? (
            <Navigate to={"/"} />
          ) : (
            <FormLogin />
          ),
        },
        {
          path: "/auth/register",
          element: isLoggedIn ? (
            <Navigate to={"/"} />
          ) : (
            <FormRegister />
          ),
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/customer",
          element: <h2>customer all</h2>,
        },
        {
          path: "/admin/admin",
          element: <h2>Admin all</h2>,
        },
        {
          path: "/admin/editor",
          element: <h2>all editor</h2>,
        },
        {
          path: "/admin/:user_id",
          element: <h2>admin get user by id</h2>,
        },
      ],
    },
    {
      path: "/profile",
      element: !isLoggedIn ? (
        <Navigate to={"/auth/login"} />
      ) : isLoggedIn &&
        userLogin?.role_name === "customer" ? (
        <AllRoleLayout />
      ) : (
        <AdminLayout />
      ),
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/create",
          element: <FormProfile />,
        },
      ],
    },
    {
      path: "*",
      element: <BlankLayout />,
      children: [
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
