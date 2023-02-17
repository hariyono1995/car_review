import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import {
  DataContext,
  getUserLoginLocalStorage,
  postData,
  setLocalStorage,
} from "../helpers";

const initialValue = {
  user_username: "",
  user_password: "",
};

const validate = yup.object({
  user_username: yup.string().required("Required"),
  user_password: yup.string().required("Required"),
});

function FormLogin() {
  const [isPassword, setIsPassword] = useState(true);
  const navitageTo = useNavigate();
  const { setUserLogin, setMessage } =
    useContext(DataContext);
  const inputPwdRef = useRef();

  function handleSwitchTypeInput() {
    setIsPassword(!isPassword);
    inputPwdRef.current.focus();
  }

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validate,

    onSubmit: async (payload) => {
      await postData("auth/login", payload)
        .then((res) => {
          console.log(res.data);

          setMessage({
            success: "Loggin successfully",
            error: null,
          });
          setLocalStorage({
            ...res.data.payload,
            token: res.data.token,
          });

          setUserLogin(getUserLoginLocalStorage());
          formik.resetForm();
          navitageTo("/");
        })
        .catch((error) => {
          const { data } = error?.response;
          console.log();

          setMessage({
            success: null,
            error: data.message,
          });
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-5 border border-2 rounded-3  w-50 m-auto shadow-2"
    >
      <h2>Login</h2>

      <div className="mb-3">
        <label
          htmlFor="user_username"
          className="form-label"
        >
          Username
        </label>

        <input
          type="text"
          className="form-control"
          id="user_username"
          aria-describedby="emailHelp"
          {...formik.getFieldProps("user_username")}
        />
      </div>

      {formik.touched.user_username &&
      formik.errors.user_username ? (
        <div className="error-input">
          {formik.errors.user_username}
        </div>
      ) : null}

      <div className="mb-3">
        <label
          htmlFor="user_password"
          className="form-label"
        >
          Password
        </label>

        <div className="position-relative">
          <input
            ref={inputPwdRef}
            type={isPassword ? "password" : "text"}
            className="form-control"
            id="user_password"
            {...formik.getFieldProps("user_password")}
          />

          <i
            className={`far ${
              isPassword ? "fa-eye-slash" : "fa-eye"
            }  position-absolute top-50 end-0 translate-middle text-secondary`}
            style={{ cursor: "pointer" }}
            onClick={handleSwitchTypeInput}
          ></i>
        </div>
      </div>

      {formik.touched.user_password &&
      formik.errors.user_password ? (
        <div className="error-input">
          {formik.errors.user_password}
        </div>
      ) : null}

      <div className="float-end">
        <Link
          to={"/auth/register"}
          className="btn bg-dark text-white me-2"
        >
          sign up
        </Link>

        <button type="submit" className="btn btn-primary">
          sign in
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
