import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
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
