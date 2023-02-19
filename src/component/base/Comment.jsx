import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import FormReview from "./FormReview";
import {
  DataContext,
  getData,
  getDateNow,
} from "../../helpers";

function Comment({ articleId }) {
  const [comments, setComments] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getData(`review/articles/${articleId}`)
      .then((res) => {
        console.log(res);
        setComments(res.data);
        setMounted(true);
      })
      .catch((err) => console.log(err));
  }, [comments]);

  return (
    <>
      <section className="row d-flex justify-content-center">
        <div className=" text-dark">
          {(mounted && comments.length) > 0 &&
            comments.map((item, index) => (
              <div className="card-body p-2 my-3">
                <>
                  <div
                    className="d-flex flex-start align-items-center pb-4"
                    key={item.review_id}
                  >
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://xsgames.co/randomusers/avatar.php?g=female"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="fw-bold text-capitalize">
                        {item.complete_name}
                      </h6>
                      <div className="d-flex align-items-center ">
                        <p className="mb-0">
                          {getDateNow()}
                        </p>
                      </div>

                      <p className="mb-0">
                        {item.review_comment}
                      </p>
                    </div>
                  </div>

                  {index < comments.length - 1 && (
                    <hr
                      className="my-0"
                      style={{ height: "1px;" }}
                    />
                  )}
                </>
              </div>
            ))}
        </div>
      </section>

      <FormReview articleId={articleId} />
    </>
  );
}

export default Comment;
