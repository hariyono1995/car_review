import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DataContext,
  deleteData,
  getData,
} from "../../../../helpers";
import { TheadOrTfoot } from "../../../../component/base";
import { useHeaders } from "../../../../helpers/hooks";
import Swal from "sweetalert2";
import FormCreateArticle from "./FormCreateArticle";
import FormUpdateArticle from "./FormUpdateArticle";

const titleColumns = [
  "#",
  "Car Name",
  "Content",
  "Author",

  "Action",
];

function TableArticle() {
  const { data, setData } = useContext(DataContext);
  const [carTypes, setCarTypes] = useState([]);
  const [mounted, setMounted] = useState(false);
  const headers = useHeaders();

  useEffect(() => {
    setData([]);
    getData("article", headers)
      .then((res) => {
        console.clear();
        console.log(res.data.data);
        setData(res.data.data);
        setMounted(true);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleDeleteArticle(article_id) {
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
        deleteData(`article/${article_id}`, headers)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));

        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );

        setData((prev) =>
          prev.filter((c) => c.article_id != article_id)
        );
      }
    });
  }

  const theadOrtfoot = (
    <TheadOrTfoot titleColumns={titleColumns} />
  );

  return (
    <>
      {/*start form modal create and update car  */}

      <div
        className="modal fade"
        id="createArticle"
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
                Form Add Article
              </h5>

              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <FormCreateArticle />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="updatecar"
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
                Form Update Car
              </h5>

              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <FormUpdateArticle />
            </div>
          </div>
        </div>
      </div>

      {/*end form modal create and update car  */}

      <div className="my-3 float-end">
        <button
          type="button"
          className="btn btn-dark me-3"
          data-mdb-color="dark"
          data-mdb-toggle="modal"
          data-mdb-target="#createArticle"
        >
          <i className="fas fa-plus me-2"></i> Add
        </button>
      </div>

      <table className="table table-striped table-hover">
        {theadOrtfoot}

        <tbody>
          {mounted ? (
            data.length > 0 ? (
              data.map((article, index) => {
                const {
                  article_id,
                  article_content,
                  car,
                  user,
                } = article;
                const { car_name } = car;

                let firstname = "jhon";
                let lastname = "doe";

                if (user["profile"].length > 0) {
                  const { profile } = user;
                  const {
                    profile_firstname,
                    profile_lastname,
                  } = profile?.at(-1);
                  firstname = profile_firstname;
                  lastname = profile_lastname;
                }

                return (
                  <tr key={article_id}>
                    <td className="text-center">
                      {++index}
                    </td>

                    <td>{car_name}</td>

                    <td style={{ width: "40%" }}>
                      {article_content}
                    </td>

                    <td>
                      {firstname} {lastname}
                    </td>

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
                        onClick={() =>
                          handleDeleteArticle(article_id)
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

export default TableArticle;
