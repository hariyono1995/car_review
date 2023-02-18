import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { postData } from "../helpers/utils";
import { DataContext } from "../helpers";

const initialValue = {
  user_username: "",
  user_email: "",
  user_password: "",
  role_role_id: 2,
};

const validate = yup.object({
  user_username: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  user_email: yup
    .string()
    .email("Invalid email address")
    .required("Required"),
  user_password: yup.string().required("Required"),
});

function FormRegister() {
  const [isPassword, setIsPassword] = useState(true);
  const navitageTo = useNavigate();
  const inputPwdRef = useRef();
  const { setMessage } = useContext(DataContext);

  function handleSwitchTypeInput() {
    setIsPassword(!isPassword);
    inputPwdRef.current.focus();
  }

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validate,

    onSubmit: async (payload) => {
      await postData("auth/register", payload)
        .then((res) => {
          console.log(res);

          setMessage({
            error: null,
            success: res.data.message,
          });

          formik.resetForm();
          navitageTo("/auth/login");
        })
        .catch((error) => {
          console.log(error);

          setMessage({
            error: error.response.data.message,
            success: null,
          });
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-5 border border-2 rounded-3  w-50 m-auto shadow-2-soft"
    >
      <h2>Register</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>

        <input
          type="text"
          className="form-control"
          id="username"
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
        <label htmlFor="email" className="form-label">
          Email
        </label>

        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          {...formik.getFieldProps("user_email")}
        />
      </div>

      {formik.touched.user_email &&
      formik.errors.user_email ? (
        <div className="error-input">
          {formik.errors.user_email}
        </div>
      ) : null}

      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label"
        >
          Password
        </label>

        <div className="position-relative">
          <input
            ref={inputPwdRef}
            type={isPassword ? "password" : "text"}
            className="form-control"
            id="exampleInputPassword1"
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
          to={"/auth/login"}
          className="btn bg-dark text-light me-2"
        >
          sign in
        </Link>

        <button type="submit" className="btn btn-primary">
          sign up
        </button>
      </div>
    </form>
  );
}

export default FormRegister;
