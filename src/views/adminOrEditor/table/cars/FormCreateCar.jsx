import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  DataContext,
  getData,
  postData,
} from "../../../../helpers";
import { useHeaders } from "../../../../helpers/hooks";

const initialValue = {
  car_price: 0,
  car_image_url: "",
  car_name: "",
  car_stock: 0,
  car_type_car_type_id: 1,
};

const validate = yup.object({
  car_image_url: yup
    .string()
    .url("Invalid url")
    .required("Required"),
  car_name: yup.string().required("Required"),
});

function FormCreateCar() {
  const [mounted, setMounted] = useState(false);
  const [cartypes, setCartypes] = useState([]);
  const { setMessage } = useContext(DataContext);
  const headers = useHeaders();

  useEffect(() => {
    getData("car_type", headers)
      .then((res) => {
        console.log(res);
        setCartypes(res.data.data);
        setMounted(true);
      })
      .catch((e) => console.log(e));
  }, []);

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validate,

    onSubmit: async (payload) => {
      payload = {
        ...payload,
        car_type_car_type_id: parseInt(
          payload.car_type_car_type_id
        ),
      };
      await postData("car", payload, headers)
        .then((res) => {
          console.log(res);

          setMessage({
            error: null,
            success: res.data.message,
          });
          formik.resetForm();
          window.location.reload();
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
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-1">
        <label
          htmlFor="car_name"
          className="form-label   label-modal"
        >
          Name
        </label>

        <input
          type="text"
          className="form-control form-control-sm"
          id="car_name"
          required
          {...formik.getFieldProps("car_name")}
        />
      </div>

      <div className="row mb-2">
        <div className=" col-6">
          <label
            htmlFor="car_price"
            className="form-label  label-modal"
          >
            Price
          </label>

          <input
            type="number"
            className="form-control form-control-sm"
            id="car_price"
            required
            {...formik.getFieldProps("car_price")}
          />
        </div>

        <div className="col-6">
          <label
            htmlFor="car_stock"
            className="form-label  label-modal text-sm"
          >
            Stock
          </label>

          <input
            type="number"
            className="form-control form-control-sm"
            id="car_stock"
            required
            {...formik.getFieldProps("car_stock")}
          />
        </div>
      </div>

      <div className="mb-1">
        <label
          className="labels d-block  mb-2 label-modal"
          htmlFor="car_type_car_type_id"
        >
          Car Type
        </label>

        <select
          className="select form-control form-control-sm"
          required
          id="profile_gender"
          {...formik.getFieldProps("car_type_car_type_id")}
        >
          <option selected>---select gender---</option>
          {mounted &&
            cartypes.map((type) => (
              <option
                key={type.car_type_id}
                value={type.car_type_id}
              >
                {type.car_type_name}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-1">
        <label
          htmlFor="car_image_url"
          className="form-label  label-modal"
        >
          Image url
        </label>

        {formik.values.car_image_url.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={formik.values.car_image_url}
              alt="image preview"
              width={100}
              className="rounded hover- mb-2"
            />
          </div>
        )}

        <input
          type="text"
          className="form-control form-control-sm"
          id="car_image_url"
          required
          {...formik.getFieldProps("car_image_url")}
        />
      </div>

      <button
        type="submit"
        className="btn btn-dark w-100 mt-3"
      >
        create car
      </button>
    </form>
  );
}

export default FormCreateCar;
