import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DataContext,
  getData,
  getDateNow,
} from "../../helpers";
import { useParams } from "react-router-dom";

function DetailArticle() {
  const { data, setData, oneData, setOneData } =
    useContext(DataContext);
  const [mounted, setMounted] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getData(`article/${id}`)
      .then((res) => {
        setOneData({});

        const { article_id, article_content, car, user } =
          res.data.article[0];

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
        setOneData(article);
        setMounted(true);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(oneData);

  return (
    mounted && (
      <main className="me-50 mt-4 mb-5">
        <div className="container mt-20">
          <div className="row">
            <div className="col-md-8 mb-4">
              <div id="intro" className="p-5  bg-light ">
                <h1 className="mb-0 h4 text-center">
                  {oneData.car_name}
                </h1>
              </div>
              <section className="border-bottom mb-4">
                <img
                  src={oneData.car_image_url}
                  className="img-fluid shadow-2-strong rounded-5 mb-4"
                  alt={oneData.car_name}
                />

                <div className="row align-items-center mb-4">
                  <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
                      className="rounded-5 shadow-1-strong me-2"
                      height="35"
                      alt=""
                      loading="lazy"
                    />
                    <span>
                      Published
                      <u className="m-1">
                        {getDateNow()}
                      </u>{" "}
                      by
                    </span>
                    <span className="text-dark">
                      {" "}
                      {oneData.article_author}
                    </span>
                  </div>

                  <div className="col-lg-6 text-center text-lg-end">
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                      style={{ backgroundColor: "#3b5998" }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                      style={{ backgroundColor: "#55acee" }}
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                      style={{ backgroundColor: "#0082ca" }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-1"
                    >
                      <i className="fas fa-comments"></i>
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <p>{oneData.article_content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    )
  );
}

export default DetailArticle;
