import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DataContext,
  getData,
  getDateNow,
  randomDate,
} from "../../helpers";

import { Comment } from "../../component/base";

function Article() {
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

  const listArticles =
    mounted &&
    data.map((item) => {
      const { article_id, article_content, car, user } =
        item;

      const {
        car_image_url,
        car_name,
        car_price,
        car_stock,
      } = car;

      let firstname = "jhon";
      let lastname = "doe";

      if (user["profile"].length > 0) {
        const { profile } = user;
        const { profile_firstname, profile_lastname } =
          profile?.at(-1);
        firstname = profile_firstname;
        lastname = profile_lastname;
      }

      const article = {
        car_name: car_name,
        car_image_url: car_image_url,
        car_price: car_price,
        car_stock: car_stock,
        article_id: article_id,
        article_content: article_content,
        article_author: firstname + " " + lastname,
      };

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
                    {article.article_author}
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
                  src={article.car_image_url}
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
              <div className="card-body">
                <p
                  className="card-text collapse"
                  id={`collapseContent${article.article_id}`}
                >
                  {article.article_content}
                </p>

                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-link link-danger p-md-1 my-1 d-block"
                    data-mdb-toggle="collapse"
                    href={`#collapseContent${article.article_id}`}
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
                      href={`#formComment${article.article_id}`}
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
                  id={`formComment${article.article_id}`}
                >
                  <Comment articleId={article.article_id} />
                </div>

                {/* comment */}
              </div>
            </div>
          </section>
        </div>
      );
    });

  return (
    <section
      className="col container content-card "
      style={{ marginTop: "100px" }}
    >
      {listArticles}
    </section>
  );
}
export default Article;
