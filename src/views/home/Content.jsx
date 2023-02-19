import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext, getData } from "../../helpers";
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
    data.map((article, index) => {
      const { article_id, article_content, car, user } =
        article;
      const { car_image_url, car_name, car_price } = car;

      const articleContent =
        article_content.length === 250
          ? article_content
          : article_content.length < 250
          ? article_content.padEnd(250, " ")
          : article_content.substring(0, 250) + "...";

      return (
        index <= 5 && (
          <CarArticle
            id={article_id}
            title={car_name}
            content={articleContent}
            imgUrl={car_image_url}
          />
        )
      );
    });

  return (
    <section className="text-center">
      <h4 className="mb-5">
        <strong>Latest posts</strong>
      </h4>

      <div className="row">{cardArticle}</div>
    </section>
  );
}

export default Content;
