import React, { useContext } from "react";
import { DataContext } from "../../helpers";
import { Link } from "react-router-dom";

function Carousel() {
  const { userLogin } = useContext(DataContext);

  return (
    <div
      id="introCarousel"
      className="carousel slide carousel-fade shadow-2-strong"
      data-mdb-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-mdb-target="#introCarousel"
          data-mdb-slide-to="0"
          className="active"
        ></li>
        <li
          data-mdb-target="#introCarousel"
          data-mdb-slide-to="1"
        ></li>
        <li
          data-mdb-target="#introCarousel"
          data-mdb-slide-to="2"
        ></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h1 className="mb-3">
                  Car Reviews: We Drive It Like It Is
                </h1>

                <h5 className="mb-4">
                  Get our honest, in-depth take on all the
                  latest vehicles
                </h5>

                {!userLogin?.user_id && (
                  <Link
                    to="/auth/login"
                    className="btn btn-outline-light btn-lg m-2"
                    role="button"
                  >
                    start now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h1 className="mb-3">
                  Car Reviews: We Drive It Like It Is
                </h1>
                <h5 className="mb-4">
                  Get our honest, in-depth take on all the
                  latest vehicles
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="mask"
            style={{
              background: `linear-gradient(
                  45deg,
                  rgba(29, 236, 197, 0.7),
                  rgba(91, 14, 214, 0.7), 100%
                )`,
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h1 className="mb-3">
                  Car Reviews: We Drive It Like It Is
                </h1>

                <h5 className="mb-4">
                  Get our honest, in-depth take on all the
                  latest vehicles
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#introCarousel"
        role="button"
        data-mdb-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>

      <a
        className="carousel-control-next"
        href="#introCarousel"
        role="button"
        data-mdb-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
