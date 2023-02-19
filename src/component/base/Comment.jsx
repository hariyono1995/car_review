import React from "react";
import FormReview from "./FormReview";

function Comment({ articleId }) {
  return (
    <>
      <section className="row d-flex justify-content-center">
        <div className=" text-dark">
          <div className="card-body p-4">
            <div className="d-flex flex-start">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                alt="avatar"
                width="60"
                height="60"
              />
              <div>
                <h6 className="fw-bold mb-1">
                  Lara Stewart
                </h6>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0">March 15, 2021</p>
                </div>

                <p className="mb-0">
                  Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a
                  piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked
                  up one of the more obscure Latin words,
                  consectetur, from a Lorem Ipsum passage,
                  and going through the cites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormReview articleId={articleId} />
    </>
  );
}

export default Comment;
