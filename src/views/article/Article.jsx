import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DataContext,
  getData,
  randomDate,
} from "../../helpers";

import { CardArticle, Comment } from "../../component/base";

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
        <CardArticle
          id={article.article_id}
          author={article.article_author}
          title={article.car_name}
          content={article.article_content}
          imgUrl={article.car_image_url}
        />
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
