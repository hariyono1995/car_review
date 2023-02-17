import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white ">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          {/* <!-- Github --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/dimasaji2701/final-project-reactjs--hariyono-dan-dimas-aji-pangestu-"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
