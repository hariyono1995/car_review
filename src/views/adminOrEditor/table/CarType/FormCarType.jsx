import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  DataContext,
  postData,
  updateData,
} from "../../../../helpers";

const initialValue = {
  car_type_name: "",
};

const validate = yup.object({
  car_type_name: yup.string().required("Required"),
});

function FormCarType() {
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
        await updateData(`car_type/${currentId}`, payload, {
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
        await postData("car_type", payload, {
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
            <h2>Car Type</h2>

            <div className="mb-3">
              <label
                htmlFor="car_type_name"
                className="form-label"
              >
                Car Type Name
              </label>

              <input
                type="text"
                className="form-control"
                id="car_type_name"
                aria-describedby="emailHelp"
                {...formik.getFieldProps("car_type_name")}
              />
            </div>

            {formik.touched.car_type_name &&
            formik.errors.car_type_name ? (
              <div className="error-input">
                {formik.errors.car_type_name}
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

export default FormCarType;
