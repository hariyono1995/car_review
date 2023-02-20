import React from "react";
import Comment from "./Comment";
import { randomDate } from "../../helpers";

function CardArticle({
  author,
  imgUrl,
  id,
  title,
  content,
}) {
  return (
    <div className="container mb-4">
      <section
        className="mx-auto"
        style={{ maxWidth: "35rem" }}
      >
        <div className="card">
          <div className="card-body d-flex flex-row">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
              className="rounded-circle me-3"
              height="50px"
              width="50px"
              alt="avatar"
            />

            <div>
              <h5 className="card-title font-weight-bold mb-2 text-capitalize">
                {author}
              </h5>

              <p className="card-text">
                <i className="far fa-clock pe-2"></i>
                {randomDate()}
              </p>
            </div>
          </div>

          <div
            className="bg-image hover-overlay ripple rounded-0"
            data-mdb-ripple-color="light"
          >
            <img
              className="img-fluid"
              src={imgUrl}
              alt="Card image cap"
            />

            <a href="#!">
              <div
                className="mask"
                style={{
                  backgroundColor:
                    "rgba(251, 251, 251, 0.15)",
                }}
              ></div>
            </a>
          </div>

          <div className="card-header text-primary text-capitalize mt-1">
            <h5>{title}</h5>
          </div>
          <div className="card-body">
            <p
              className="card-text collapse"
              id={`collapseContent${id}`}
            >
              {content}
            </p>

            <div className="d-flex justify-content-between">
              <a
                className="btn btn-link link-danger p-md-1 my-1 d-block"
                data-mdb-toggle="collapse"
                href={`#collapseContent${id}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapseContent"
              >
                Read more
              </a>

              <div>
                <a
                  className="d-flex align-items-center me-3"
                  data-mdb-toggle="collapse"
                  href={`#formComment${id}`}
                  role="button"
                  aria-expanded="false"
                  aria-controls="formComment"
                >
                  <i
                    className="far fa-comment-dots me-2"
                    data-mdb-toggle="tooltip"
                    data-mdb-placement="top"
                    title="Comment this article"
                  ></i>
                  <p className="mb-0">Comment</p>
                </a>
              </div>
            </div>
            {/* comment */}

            <div
              className="card-text collapse"
              id={`formComment${id}`}
            >
              <Comment articleId={id} />
            </div>

            {/* comment */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardArticle;
