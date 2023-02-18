import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext, getData } from "../../../../helpers";
import {
  Table,
  TheadOrTfoot,
  Tbody,
} from "../../../../component/base";
import { useHeaders } from "../../../../helpers/hooks";

const titleColumns = [
  "#",
  "Image",
  "Name",
  "Car Type",
  "Price",
  "Stock",
  "Action",
];

function TableArticle() {
  const { data, setData } = useContext(DataContext);
  const [carTypes, setCarTypes] = useState([]);
  const [mounted, setMounted] = useState(false);
  const headers = useHeaders();

  useEffect(() => {
    // setData([]);
    getData("car", headers)
      .then((res) => {
        console.clear();
        console.log(res.data);
        setData(res.data.data);
        setMounted(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const theadOrtfoot = (
    <TheadOrTfoot titleColumns={titleColumns} />
  );

  return (
    <>
      <div className="my-3 float-end">
        <button
          type="button"
          className="btn btn-dark me-3"
          data-mdb-color="dark"
        >
          <i className="fas fa-plus me-2"></i> Add
        </button>
      </div>

      <table className="table table-striped table-hover">
        {theadOrtfoot}

        <tbody>
          {mounted
            ? data.length > 0 &&
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

                    <td>{car_price}</td>
                    <td>{car_stock}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning me-3"
                        data-mdb-color="dark"
                      >
                        <i className="fas fa-edit me-2"></i>{" "}
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-mdb-color="dark"
                      >
                        <i className="fas fa-trash-alt me-2"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>

        {theadOrtfoot}
      </table>
    </>
  );
}

export default TableArticle;
