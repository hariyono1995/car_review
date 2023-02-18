import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  DataContext,
  postData,
  updateData,
} from "../../../../helpers";

const initialValue = {
  role_name: "",
};

const validate = yup.object({
  role_name: yup.string().required("Required"),
});

function FormRole() {
  const {
    userLogin,
    setData,
    isForm,
    setIsForm,
    currentId,
    setCurrentId,
    setMessage,
  } = useContext(DataContext);

  const backToTable = () => {
    setIsForm(false);
    setCurrentId(null);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validate,

    onSubmit: async (payload) => {
      if (currentId !== null) {
        await updateData(`role/${currentId}`, payload, {
          headers: {
            Authorization: "Bearer " + userLogin?.token,
          },
        })
          .then((res) => {
            setData(null);
            formik.resetForm();
            setCurrentId(null);
            setMessage({
              success: res.data.message,
              error: null,
            });
            setIsForm(false);
          })
          .catch((err) => {
            setMessage({
              success: null,
              error: err.response.message,
            });
          });
      } else {
        await postData("role", payload, {
          headers: {
            Authorization: "Bearer " + userLogin?.token,
          },
        })
          .then((res) => {
            console.log(res.data.data);
            setIsForm(false);
            setMessage({
              success: res.data.message,
              error: null,
            });
          })
          .catch((error) => {
            console.log();
            setMessage({
              success: null,
              error: error.response.message,
            });
          });
      }
    },
  });

  return (
    isForm && (
      <>
        <div className="custom-form">
          <button
            onClick={backToTable}
            type="submit"
            className="btn btn-primary"
          >
            Back to table
          </button>
          <form
            onSubmit={formik.handleSubmit}
            className="p-5 border border-2 rounded-3  w-50 m-auto shadow-2"
          >
            <h2>Role</h2>

            <div className="mb-3">
              <label
                htmlFor="user_username"
                className="form-label"
              >
                Role Name
              </label>

              <input
                type="text"
                className="form-control"
                id="role_name"
                aria-describedby="emailHelp"
                {...formik.getFieldProps("role_name")}
              />
            </div>

            {formik.touched.role_name &&
            formik.errors.role_name ? (
              <div className="error-input">
                {formik.errors.role_name}
              </div>
            ) : null}
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    )
  );
}

export default FormRole;
