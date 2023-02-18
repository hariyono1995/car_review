import React, { useContext, useEffect } from "react";
import { DataContext, getData } from "../../../../helpers";

import ActionCarType from "./ActionCarType";

function TableCarType() {
  const {
    data,
    setData,
    userLogin,
    isForm,
    setIsForm,
    setMessage,
  } = useContext(DataContext);

  useEffect(() => {
    getData("car_type", {
      headers: {
        Authorization: "Bearer " + userLogin?.token,
      },
    })
      .then((res) => {
        setData([]);
        console.log(res.data.data);
        setData(res.data.data);
        // setMessage({
        //   success: res.data.message,
        //   error: null,
        // });
      })
      .catch((err) => {
        console.log(err.response.message);
        // setMessage({
        //   success: null,
        //   error: err.response.message,
        // });
      });
  }, []);

  const addCarType = () => {
    setIsForm(true);
  };
  return (
    !isForm && (
      <>
        <div className="custom-table">
          <button
            onClick={addCarType}
            type="button"
            className="btn btn-success mb-2"
          >
            Add Car Type
          </button>
          <br />
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th>#</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            {data &&
              data.map((item, index) => {
                return (
                  <>
                    <tbody>
                      <tr key={item.car_type_id}>
                        <td>{index + 1}</td>
                        <td>{item.car_type_name}</td>
                        <td>
                          <ActionCarType item={item} />
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
          </table>
        </div>
      </>
    )
  );
}

export default TableCarType;
