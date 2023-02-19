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
  updateData,
} from "../../../../helpers";
import { useHeaders } from "../../../../helpers/hooks";

function FormUpdateArticle() {
  const [mounted, setMounted] = useState(false);
  const [car, setCar] = useState([]);
  const { setMessage, setData, data, oneData, currentId } =
    useContext(DataContext);
  const headers = useHeaders();

  useEffect(() => {
    getData("car", headers)
      .then((res) => {
        console.log(res);
        setCar(res.data.data);
        setMounted(true);
      })
      .catch((e) => console.log(e));
  }, []);

  const formik = useFormik({
    initialValues: oneData,

    onSubmit: async (payload) => {
      // payload = {
      //   ...payload,
      //   car_car_id: parseInt(payload.car_car_id),
      // };

      console.log("update article ", payload);
      // await updateData("article", payload, headers)
      //   .then((res) => {
      //     console.clear();
      //     console.log(res);

      //     setMessage({
      //       error: null,
      //       success: res.data.message,
      //     });

      //     formik.resetForm();
      //     // window.location.reload();
      //   })
      //   .catch((error) => {
      //     console.log(error);

      //     setMessage({
      //       error: error.response.data.message,
      //       success: null,
      //     });
      //   });
    },
  });

  return (
    // oneData &&
    // currentId === oneData["article_id"] &&
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-1">
        <label
          htmlFor="article_content"
          className="form-label   label-modal"
        >
          Content
        </label>

        <textarea
          type="text"
          className="form-control form-control-sm"
          id="article_content"
          rows={5}
          // maxLength={1000}
          required
          {...formik.getFieldProps("article_content")}
        />
      </div>

      <div className="mb-1">
        <label
          className="labels d-block  mb-2 label-modal"
          htmlFor="car_car_id"
        >
          Car
        </label>

        <select
          className="select form-control form-control-sm"
          required
          id="car_car_id"
          {...formik.getFieldProps("car_car_id")}
        >
          <option selected>---select car---</option>
          {mounted &&
            car.map((c) => (
              <option
                key={c.car_id}
                value={c.car_id}
                selected={oneData.car_car_id === c.car_id}
              >
                {c.car_name}
              </option>
            ))}
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-warning w-100 mt-3"
      >
        update
      </button>
    </form>
  );
}

export default FormUpdateArticle;
