import React from "react";

import { Carousel } from "../component/common";

function Home() {
  return (
    <section className="">
      <Carousel />

      <main className="my-5 container">
        <div className="container">
          {/* <!--Section: News of the day--> */}
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
              </div>

              <div className="col-md-6 mb-4">
                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                  about me
                </span>
                <h4>
                  <strong>Review for Cars</strong>
                </h4>
                <p className="text-muted">
                  Welcome to Car and Driver. We've created
                  this page to introduce ourselves to you
                  and to let you know what it is we do
                  around here. Car and Driver is a print and
                  digital magazine covering the newest car
                  offerings, showcasing car culture, and
                  helping people shopping for a car by
                  serving up our unique brand of
                  intelligence, independence, and
                  irreverence.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                >
                  start now
                </button>
              </div>
            </div>
          </section>
          {/* <!--Section: News of the day--> */}

          {/* <!--Section: Content--> */}
          <section>
            <div className="row gx-lg-5">
              <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                {/* <!-- News block --> */}
                <div>
                  {/* <!-- Featured image --> */}
                  <div
                    className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
                      className="img-fluid"
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

                  {/* <!-- Article data --> */}
                  <div className="row mb-3">
                    <div className="col-6">
                      <a href="" className="text-info">
                        <i className="fas fa-plane"></i>
                        Travels
                      </a>
                    </div>

                    <div className="col-6 text-end">
                      <u> 15.07.2020</u>
                    </div>
                  </div>

                  {/* <!-- Article title and description --> */}
                  <a href="" className="text-dark">
                    <h5>This is title of the news</h5>

                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Odit, iste aliquid.
                      Sed id nihil magni, sint vero
                      provident esse numquam perferendis
                      ducimus dicta adipisci iusto nam
                      temporibus modi animi laboriosam?
                    </p>
                  </a>

                  <hr />

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- News block --> */}
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- News block --> */}
                <div>
                  {/* <!-- Featured image --> */}
                  <div
                    className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/011.jpg"
                      className="img-fluid"
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

                  {/* <!-- Article data --> */}
                  <div className="row mb-3">
                    <div className="col-6">
                      <a href="" className="text-danger">
                        <i className="fas fa-chart-pie"></i>
                        Business
                      </a>
                    </div>

                    <div className="col-6 text-end">
                      <u> 15.07.2020</u>
                    </div>
                  </div>

                  {/* <!-- Article title and description --> */}
                  <a href="" className="text-dark">
                    <h5>This is title of the news</h5>

                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Odit, iste aliquid.
                      Sed id nihil magni, sint vero
                      provident esse numquam perferendis
                      ducimus dicta adipisci iusto nam
                      temporibus modi animi laboriosam?
                    </p>
                  </a>

                  <hr />

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/034.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- News block --> */}
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- News block --> */}
                <div>
                  {/* <!-- Featured image --> */}
                  <div
                    className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/018.jpg"
                      className="img-fluid"
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

                  {/* <!-- Article data --> */}
                  <div className="row mb-3">
                    <div className="col-6">
                      <a href="" className="text-warning">
                        <i className="fas fa-code"></i>
                        Technology
                      </a>
                    </div>

                    <div className="col-6 text-end">
                      <u> 15.07.2020</u>
                    </div>
                  </div>

                  {/* <!-- Article title and description --> */}
                  <a href="" className="text-dark">
                    <h5>This is title of the news</h5>

                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Odit, iste aliquid.
                      Sed id nihil magni, sint vero
                      provident esse numquam perferendis
                      ducimus dicta adipisci iusto nam
                      temporibus modi animi laboriosam?
                    </p>
                  </a>

                  <hr />

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/011.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/012.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/013.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* <!-- News --> */}
                  <a href="" className="text-dark">
                    <div className="row mb-4 border-bottom pb-2">
                      <div className="col-3">
                        <img
                          src="https://mdbootstrap.com/img/new/standard/city/014.jpg"
                          className="img-fluid shadow-1-strong rounded"
                          alt=""
                        />
                      </div>

                      <div className="col-9">
                        <p className="mb-2">
                          <strong>
                            Lorem ipsum dolor sit amet
                          </strong>
                        </p>
                        <p>
                          <u> 15.07.2020</u>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- News block --> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default Home;
