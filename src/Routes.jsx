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
  TableUser,
  TableCar,
  TableArticle,
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
      element:
        isLoggedIn && userLogin?.role_name != "customer" ? (
          <AdminLayout />
        ) : (
          <Navigate to={"/auth/login"} />
        ),

      children: [
        {
          index: true,
          element: <TableUser />,
        },
        {
          children: [
            {
              path: "/admin/users",
              element: <TableUser />,
            },
            {
              path: "/admin/car",
              element: <TableCar />,
            },
            {
              path: "/admin/articles",
              element: <TableArticle />,
            },
          ],
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
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
