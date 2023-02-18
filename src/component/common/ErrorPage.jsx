import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="oopss">
      <div id="error-text">
        <span>404</span>
        <p>PAGE NOT FOUND</p>
        <p className="hmpg">
          <Link to={"/"} className="back">
            Back To Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
