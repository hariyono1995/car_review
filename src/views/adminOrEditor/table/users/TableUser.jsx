import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext, getData } from "../../../../helpers";

function TableUser() {
  const { userLogin, data, setData } =
    useContext(DataContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // if (data === null || data === []) {
    getData("admin/users", {
      headers: {
        Authorization: "Bearer " + userLogin.token,
      },
    })
      .then((res) => {
        setData(res.data);
        setMounted(true);
        console.log(res);
      })
      .catch((error) => console.log(error.message));
    // }
  }, []);

  function handleChangeRole(e) {
    const value = e.target.value;

    let filterData;
    if (value === "all") {
      getData("admin/users", {
        headers: {
          Authorization: "Bearer " + userLogin.token,
        },
      })
        .then((res) => {
          setData(res.data);
          console.log(res);
        })
        .catch((error) => console.log(error.message));
    } else {
      getData("admin/users", {
        headers: {
          Authorization: "Bearer " + userLogin.token,
        },
      })
        .then((res) => {
          setData(
            res.data.filter((i) => i.role_role_id == value)
          );
          console.log(res);
        })
        .catch((error) => console.log(error.message));
    }

    setData(filterData);
  }

  return (
    <>
      <div className="col-5 mb-4">
        <select
          class="select form-control"
          onChange={(e) => handleChangeRole(e)}
        >
          <option selected value="all">
            All
          </option>
          <option value="1">Admin</option>
          <option value="2">Customer</option>
          <option value="3">Editor</option>
        </select>
      </div>

      <table class="table table-striped table-hover">
        <thead class="table-dark ">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {mounted
            ? data?.length > 0 &&
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
                      : role_role_id === 3
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
              )
            : null}
        </tbody>

        <thead class="table-dark ">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default TableUser;
