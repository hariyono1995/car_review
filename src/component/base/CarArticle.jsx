import React from "react";
import { Link } from "react-router-dom";

function CarArticle({ id, imgUrl, title, content }) {
  return (
    <div className="col-lg-4 col-md-12 mb-4" key={id}>
      <div className="card">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={imgUrl} className="img-fluid" />
          <Link to={`/articles/${id}`}>
            <div
              className="mask"
              style={{
                backgroundColor:
                  "rgba(251, 251, 251, 0.15);",
              }}
            ></div>
          </Link>
        </div>

        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>

          <Link
            to={`/articles/${id}`}
            className="btn btn-primary"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarArticle;
