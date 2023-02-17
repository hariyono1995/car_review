import { useContext, useEffect, useState } from "react";
import {
  DataContext,
  base_url,
  getData,
} from "../../helpers";

function TableUser() {
  const { userLogin, data, setData } =
    useContext(DataContext);

  useEffect(() => {
    if (data === null) {
      getData("admin/admin", {
        headers: {
          Authorization: "Bearer " + userLogin.token,
        },
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => console.log(error.message));
    }
  }, []);

  return (
    <>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {data?.length > 0 &&
            data.map(
              (
                {
                  user_username,
                  user_email,
                  user_id,
                  role_role_id,
                },
                index
              ) => {
                const role_name =
                  role_role_id === 1
                    ? "admin"
                    : role_role_id === 2
                    ? "editor"
                    : "customer";
                return (
                  <>
                    <tr key={user_id}>
                      <td>{index + 1}</td>
                      <td>{user_username}</td>
                      <td>{user_email}</td>
                      <td>{role_name}</td>
                    </tr>
                  </>
                );
              }
            )}
        </tbody>
      </table>
    </>
  );
}

export default TableUser;
