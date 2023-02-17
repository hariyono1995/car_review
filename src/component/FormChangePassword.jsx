import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { updateData } from "../helpers/utils";
import { DataContext } from "../helpers";

const initialValue = {
  old_password: "",
  new_password: "",
  new_password_verivication: "",
};

const initialValueChangePassword = {
  is_old_password: false,
  is_new_password: false,
  is_new_password_verivication: false,
};

const validate = yup.object({
  old_password: yup.string().required("Required"),
  new_password: yup.string().required("Required"),
  new_password_verivication: yup
    .string()
    .required("Required"),
});

function FormChangePassword() {
  const [isPassword, setIsPassword] = useState(
    initialValueChangePassword
  );
  const { userLogin, setMessage } = useContext(DataContext);

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validate,

    onSubmit: async (payload) => {
      await updateData("auth/change_password", payload, {
        headers: {
          Authorization: "Bearer " + userLogin?.token,
        },
      })
        .then((res) => {
          console.log(res);
          setMessage({
            success: res.data.message,
            error: null,
          });
          formik.resetForm();
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setMessage({
            success: null,
            error: error.response.data.message,
          });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-outline mb-4 border rounded-2">
        <input
          type={
            isPassword.is_old_password ? "password" : "text"
          }
          id="old_password"
          className="form-control form-control-sm"
          {...formik.getFieldProps("old_password")}
        />

        <i
          className={`far ${
            isPassword.is_old_password
              ? "fa-eye-slash"
              : "fa-eye"
          }  position-absolute top-50 end-0 translate-middle text-secondary`}
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            setIsPassword({
              ...isPassword,
              is_old_password: !isPassword.is_old_password,
            });
          }}
        ></i>

        <label
          className="form-label"
          htmlFor="old_password"
        >
          Old password
        </label>
      </div>

      <div className="form-outline mb-4 border rounded-2">
        <input
          type={
            isPassword.is_new_password ? "password" : "text"
          }
          id="new_password"
          className="form-control form-control-sm"
          {...formik.getFieldProps("new_password")}
        />

        <i
          className={`far ${
            isPassword.is_new_password
              ? "fa-eye-slash"
              : "fa-eye"
          }  position-absolute top-50 end-0 translate-middle text-secondary`}
          style={{ cursor: "pointer" }}
          onClick={() =>
            setIsPassword({
              ...isPassword,
              is_new_password: !isPassword.is_new_password,
            })
          }
        ></i>

        <label
          className="form-label"
          htmlFor="new_password"
        >
          New Password
        </label>
      </div>

      <div className="form-outline outline-m mb-4 border rounded-2">
        <input
          type={
            isPassword.is_new_password_verivication
              ? "password"
              : "text"
          }
          id="new_password_verivication"
          className="form-control form-control-sm"
          {...formik.getFieldProps(
            "new_password_verivication"
          )}
        />

        <i
          className={`far ${
            isPassword.is_new_password_verivication
              ? "fa-eye-slash"
              : "fa-eye"
          }  position-absolute top-50 end-0 translate-middle text-secondary`}
          style={{ cursor: "pointer" }}
          onClick={() =>
            setIsPassword({
              ...isPassword,
              is_new_password_verivication:
                !isPassword.is_new_password_verivication,
            })
          }
        ></i>

        <label
          className="form-label"
          htmlFor="new_password_verivication"
        >
          New Password Verification
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button
        type="submit"
        className="btn btn-dark btn-block"
      >
        Change Password
      </button>
    </form>
  );
}

export default FormChangePassword;
