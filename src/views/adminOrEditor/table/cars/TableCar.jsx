import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  DataContext,
  deleteData,
  formatCurrency,
  getData,
} from "../../../../helpers";
import { TheadOrTfoot } from "../../../../component/base";
import { useHeaders } from "../../../../helpers/hooks";
import Swal from "sweetalert2";
import FormCreateCar from "./FormCreateCar";

const titleColumns = [
  "#",
  "Image",
  "Name",
  "Car Type",
  "Price",
  "Stock",
  "Action",
];

function TableCar() {
  const { data, setData, setMessage } =
    useContext(DataContext);
  const [mounted, setMounted] = useState(false);
  const headers = useHeaders();

  useEffect(() => {
    getData("car", headers)
      .then((res) => {
        setData(res.data.data);
        setMounted(true);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleDeleteCar(car_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#332d2d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(`car/${car_id}`, headers)
          .then((res) => {
            console.log(res.data);

            Swal.fire(
              "Deleted!",
              res.data.deleteCar,
              "success"
            );
          })
          .catch((error) => console.log(error));
        setData((prev) =>
          prev.filter((c) => c.car_id != car_id)
        );
      }
    });
  }

  const theadOrtfoot = (
    <TheadOrTfoot titleColumns={titleColumns} />
  );

  return (
    <>
      <div
        className="modal fade"
        id="createcar"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog z-9999">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel1"
              >
                Form add car
              </h5>

              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <FormCreateCar />
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 float-end">
        <button
          type="button"
          className="btn btn-dark me-3"
          data-mdb-color="dark"
          data-mdb-toggle="modal"
          data-mdb-target="#createcar"
        >
          <i className="fas fa-plus me-2"></i> Add
        </button>
      </div>

      <table className="table table-striped table-hover">
        {theadOrtfoot}

        <tbody>
          {mounted ? (
            data.length > 0 ? (
              data.map((car, index) => {
                const {
                  car_id,
                  car_name,
                  car_image_url,
                  car_price,
                  car_stock,
                  car_type,
                } = car;
                const { car_type_name } = car_type;

                return (
                  <tr key={car_id}>
                    <td className="text-center">
                      {++index}
                    </td>

                    <td>
                      <img
                        src={car_image_url}
                        alt={car_name}
                        className="hover-overlay rounded "
                        width={100}
                        height={100}
                      />
                    </td>

                    <td>{car_name}</td>
                    <td>{car_type_name}</td>
                    <td>{formatCurrency(car_price)}</td>
                    <td>{car_stock}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-warning me-3"
                        data-mdb-color="dark"
                      >
                        <i className="fas fa-edit me-2"></i>
                        Edit
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger"
                        data-mdb-color="dark"
                        onClick={() =>
                          handleDeleteCar(car_id)
                        }
                      >
                        <i className="fas fa-trash-alt me-2"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  data not found ..
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                <div
                  class="spinner-border text-dark"
                  role="status"
                >
                  <span class="visually-hidden">
                    Loading...
                  </span>
                </div>
              </td>
            </tr>
          )}
        </tbody>

        {theadOrtfoot}
      </table>
    </>
  );
}

export default TableCar;
