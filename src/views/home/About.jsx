import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../helpers";

function About() {
  const { userLogin } = useContext(DataContext);

  return (
    <section className="border-bottom pb-4 mb-5">
      <div className="row gx-5">
        <div className="col-md-6 mb-4">
          <div
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              className="img-fluid"
            />

            <Link to={"/home"}>
              <div
                className="mask"
                style={{
                  backgroundColor:
                    "rgba(251, 251, 251, 0.15)",
                }}
              ></div>
            </Link>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            about me
          </span>

          <h4>
            <strong>Review for Cars</strong>
          </h4>

          <p className="text-muted">
            Welcome to Car and Driver. We've created this
            page to introduce ourselves to you and to let
            you know what it is we do around here. Car and
            Driver is a print and digital magazine covering
            the newest car offerings, showcasing car
            culture, and helping people shopping for a car
            by serving up our unique brand of intelligence,
            independence, and irreverence.
          </p>

          {!userLogin && (
            <Link
              to={"auth/login"}
              type="button"
              className="btn btn-primary"
            >
              start now
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
