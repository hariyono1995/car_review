import React, { useContext, useEffect } from "react";
import { DataContext, getData } from "../../../../helpers";
import ActionRole from "./ActionRole";

function TableRole() {
  const {
    data,
    setData,
    userLogin,
    isForm,
    setIsForm,
    setMessage,
  } = useContext(DataContext);

  useEffect(() => {
    getData("role", {
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

  const addRole = () => {
    setIsForm(true);
  };
  return (
    !isForm && (
      <>
        <div className="custom-table">
          <button
            onClick={addRole}
            type="button"
            className="btn btn-success mb-2"
          >
            Add Role
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
                      <tr key={item.role_id}>
                        <td>{index + 1}</td>
                        <td>{item.role_name}</td>
                        <td>
                          <ActionRole item={item} />
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

export default TableRole;
