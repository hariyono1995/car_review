import React, { useContext } from "react";
import {
  DataContext,
  deleteData,
} from "../../../../helpers";

function ActionCarType({ item }) {
  const {
    userLogin,
    setData,
    setIsForm,
    setCurrentId,
    setMessage,
  } = useContext(DataContext);

  const handleDelete = (event) => {
    const car_type_id = Number(event.target.value);

    deleteData(`car_type/${car_type_id}`, {
      headers: {
        Authorization: "Bearer " + userLogin?.token,
      },
    })
      .then((res) => {
        setData(null);
        setMessage({
          success: res.data.message,
          error: null,
        });
      })
      .catch((err) => {
        setMessage({
          success: null,
          error: err.response.message,
        });
      });
  };

  const handleEdit = (event) => {
    const car_type_id = Number(event.target.value);
    setIsForm(true);
    setCurrentId(car_type_id);
  };
  return (
    <>
      <button
        onClick={handleEdit}
        value={item.car_type_id}
        type="button"
        className="btn btn-primary"
      >
        Edit
      </button>
      &nbsp;
      <button
        onClick={handleDelete}
        value={item.car_type_id}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </>
  );
}

export default ActionCarType;
