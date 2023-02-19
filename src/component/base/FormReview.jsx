import React, { useContext } from "react";
import { Form, useFormik } from "formik";

import { DataContext, postData } from "../../helpers";
import { useHeaders } from "../../helpers/hooks/";

const initialValue = {
  review_comment: "",
};

function FormReview({ articleId }) {
  const { userLogin, setMessage } = useContext(DataContext);
  const headers = useHeaders();

  const formik = useFormik({
    initialValues: initialValue,

    onSubmit: async (payload) => {
      const refactorPayload = {
        ...payload,
        user_user_id: parseInt(userLogin?.user_id),
        article_article_id: parseInt(articleId),
      };

      await postData("review", refactorPayload, headers)
        .then((res) => {
          console.log(res);

          setMessage({
            error: null,
            success: res.data.message,
          });

          formik.resetForm();
        })
        .catch((error) => {
          console.log(error);

          setMessage({
            error: error.response.data.message,
            success: null,
          });
        });
    },
  });

  return (
    userLogin && (
      <section>
        <div className="row d-flex justify-content-center">
          <div
            className="card-footer border-0"
            style={{ backgroundColor: "#f8f9fa;" }}
          >
            <div className="d-flex flex-start w-100">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar"
                width="60"
                height="60"
              />

              <form
                onSubmit={formik.handleSubmit}
                className="w-100"
              >
                <div className="form-outline  border">
                  <textarea
                    className="form-control"
                    id="textComment"
                    rows="4"
                    style={{ backgroundColor: "#eee;" }}
                    {...formik.getFieldProps(
                      "review_comment"
                    )}
                  ></textarea>

                  <label
                    className="form-label"
                    for="textComment"
                  >
                    Message
                  </label>
                </div>

                <div className="float-end mt-3 pt-1">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm me-2"
                  >
                    Post comment
                  </button>

                  <button
                    type="button"
                    onClick={() => formik.resetForm()}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default FormReview;
