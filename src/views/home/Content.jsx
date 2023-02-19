import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext, getData } from "../../helpers";
import { string } from "yup";
import { CarArticle } from "../../component/base";

function Content() {
  const { data, setData } = useContext(DataContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getData("article")
      .then((res) => {
        setData([]);

        const dataDesc = res.data.data.sort(
          (a, b) => b.article_id - a.article_id
        );

        setData(dataDesc);
        setMounted(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const cardArticle =
    mounted &&
    data.length > 0 &&
    data.map((article) => {
      const { article_id, article_content, car, user } =
        article;
      //   console.log(article);

      const { car_image_url, car_name, car_price } = car;
      const articleContent =
        article_content.length === 250
          ? article_content
          : article_content.length < 250
          ? article_content.padEnd(250, " ")
          : article_content.substring(0, 250) + "...";

      return (
        <CarArticle
          id={article_id}
          title={car_name}
          content={articleContent}
          imgUrl={car_image_url}
        />
      );
    });
  return (
    <section className="text-center">
      <h4 className="mb-5">
        <strong>Latest posts</strong>
      </h4>

      <div className="row">
        {cardArticle}

        {/* <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/002.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/022.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/035.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor:
                      "rgba(251, 251, 251, 0.15);",
                  }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <p className="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
              </p>
              <a href="#!" className="btn btn-primary">
                Read
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Content;
