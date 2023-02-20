import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import * as yup from "yup";

import { DataContext, postData } from "../../helpers";
import { useNavigate } from "react-router-dom";

const initialValue = {
  profile_firstname: "",
  profile_lastname: "",
  profile_gender: "",
  profile_birthOfDate: "",
  profile_religion: "",
  profile_address: "",
  profile_phone: "",
};

const validate = yup.object({
  profile_firstname: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),

  profile_lastname: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  profile_phone: yup
    .string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
});

function FormProfile() {
  const [isDisabled, setIsDisabled] = useState(false);
  const { userLogin, setMessage } = useContext(DataContext);
  const navigateTo = useNavigate();

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validate,

    onSubmit: async (payload) => {
      await postData("profile", payload, {
        headers: {
          Authorization: "Bearer " + userLogin?.token,
        },
      })
        .then((res) => {
          // console.log(res);

          setMessage({
            success: "Successfully created profile",
            error: null,
          });

          formik.resetForm();
          setIsDisabled(true);
          navigateTo("/profile");
        })
        .catch((error) => {
          // console.log(error);

          setMessage({
            success: null,
            error: error.response.data.message,
          });
        });
    },
  });

  return (
    <div
      className={`container rounded bg-white  mb-5 ${
        userLogin?.role_name === "customer" && "mt-5"
      }`}
    >
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className=" mt-5"
              width="150px"
              src="https://picsum.photos/200/300"
            />

            <div className="mt-4 ">
              <span>
                username: {userLogin?.user_username}
              </span>

              <p className="text-black-50">
                role: {userLogin?.role_name}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-5 border-right">
          <form
            className="p-3 py-5"
            onSubmit={formik.handleSubmit}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile</h4>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label
                  className="form-label"
                  htmlFor="profile_firstname"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="profile_firstname"
                  className="form-control"
                  required
                  {...formik.getFieldProps(
                    "profile_firstname"
                  )}
                />
              </div>

              <div className="col-md-6">
                <label
                  className="form-label"
                  htmlFor="profile_lastname"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="profile_lastname"
                  className="form-control"
                  required
                  {...formik.getFieldProps(
                    "profile_lastname"
                  )}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label
                  className="labels d-block  mb-2"
                  htmlFor="profile_gender"
                >
                  Gender
                </label>

                <select
                  className="select form-control"
                  required
                  id="profile_gender"
                  {...formik.getFieldProps(
                    "profile_gender"
                  )}
                >
                  <option selected>
                    ---select gender---
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div className="col-md-6">
                <label
                  className="labels d-block my-1"
                  htmlFor="profile_religion"
                >
                  Religion
                </label>

                <select
                  className="select form-control"
                  required
                  id="profile_religion"
                  {...formik.getFieldProps(
                    "profile_religion"
                  )}
                >
                  <option selected>
                    ---select religion---
                  </option>
                  <option value="islam">Islam</option>
                  <option value="christian">
                    Christian
                  </option>
                  <option value="buddha">Buddha</option>
                  <option value="hindu">Hindu</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-md-12">
                <label
                  className="labels my-2"
                  htmlFor="profile_birthOfDate"
                >
                  Date of Birth
                </label>

                <input
                  type="date"
                  className="form-control"
                  id="profile_birthOfDate"
                  required
                  {...formik.getFieldProps(
                    "profile_birthOfDate"
                  )}
                />
              </div>

              <div className="col-md-12">
                <label
                  className="labels my-2"
                  htmlFor="profile_address"
                >
                  Address
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="profile_address"
                  required
                  {...formik.getFieldProps(
                    "profile_address"
                  )}
                />
              </div>
              <div className="col-md-12">
                <label
                  className="labels my-2"
                  htmlFor="profile_phone"
                >
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="profile_phone"
                  required
                  {...formik.getFieldProps("profile_phone")}
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <button
                className={`btn btn-primary profile-button ${
                  isDisabled && "disabled"
                }`}
                type="submit"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
