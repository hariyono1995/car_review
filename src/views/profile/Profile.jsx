import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

import {
  DataContext,
  formatDate,
  getData,
} from "../../helpers";

const initialValue = {
  profile_firstname: "",
  profile_lastname: "",
  profile_gender: "",
  profile_birthOfDate: "1970-01-01T00:00:00.000Z",
  profile_religion: "",
  profile_address: "",
  profile_phone: "",
};

function Profile() {
  const { userLogin } = useContext(DataContext);
  const [profileUserLogin, setProfileUserLogin] =
    useState(initialValue);

  useEffect(() => {
    getData("profile", {
      headers: {
        Authorization: "Bearer " + userLogin?.token,
      },
    })
      .then((res) => {
        const profileUserLoggedIn =
          res.data.data?.length > 0
            ? res.data.data?.at(-1)
            : initialValue;

        setProfileUserLogin(profileUserLoggedIn);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div
      className={`container rounded bg-white mb-5 border border-2 shadow-2 ${
        userLogin.role_name === "customer" ? "mt-5" : ""
      }`}
    >
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 ">
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
          <form className="p-3 py-5">
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
                  value={profileUserLogin.profile_firstname}
                  id="profile_firstname"
                  className="form-control"
                  disabled
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
                  value={profileUserLogin.profile_lastname}
                  id="profile_lastname"
                  className="form-control"
                  disabled
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

                <input
                  type="text"
                  value={profileUserLogin.profile_gender}
                  className="form-control"
                  disabled
                />
              </div>

              <div className="col-md-6">
                <label
                  className="labels d-block my-1"
                  htmlFor="profile_religion"
                >
                  Religion
                </label>

                <input
                  type="text"
                  value={profileUserLogin.profile_religion}
                  className="form-control"
                  disabled
                />
              </div>

              <div className="col-md-12">
                <label
                  className="labels my-2"
                  htmlFor="profile_birthOfDate"
                >
                  Date of Birth
                </label>

                <input
                  type="text"
                  value={formatDate(
                    new Date(
                      profileUserLogin.profile_birthOfDate
                    )
                  )}
                  className="form-control"
                  disabled
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
                  value={profileUserLogin.profile_address}
                  className="form-control"
                  disabled
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
                  value={profileUserLogin.profile_phone}
                  className="form-control"
                  disabled
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <Link
                className={`btn btn-primary profile-button ${
                  profileUserLogin?.profile_id && "disabled"
                }`}
                to={"/profile/create"}
              >
                Create Profile
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
