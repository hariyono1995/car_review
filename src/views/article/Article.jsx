import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext, getData } from "../../helpers";
import CardTest from "../../component/base/CardTest";

// function Article() {
//   return (
//     <>
//       {/* // <!--Main layout--> */}

//       <main class="mt-4 mb-5">
//         <div class="container mt-20">
//           {/* <!--Grid row--> */}
//           <div class="row">
//             {/* <!--Grid column--> */}
//             <div class="col-md-8 mb-4">
//               {/* <!--Section: Post data-mdb--> */}
//               <div id="intro" class="p-5  bg-light ">
//                 <h1 class="mb-0 h4 text-center">
//                   This is a long title of the article
//                 </h1>
//               </div>
//               <section class="border-bottom mb-4">
//                 <img
//                   src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
//                   class="img-fluid shadow-2-strong rounded-5 mb-4"
//                   alt=""
//                 />

//                 <div class="row align-items-center mb-4">
//                   <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
//                       class="rounded-5 shadow-1-strong me-2"
//                       height="35"
//                       alt=""
//                       loading="lazy"
//                     />
//                     <span>
//                       {" "}
//                       Published <u>15.07.2020</u> by
//                     </span>
//                     <a href="" class="text-dark">
//                       Anna
//                     </a>
//                   </div>

//                   <div class="col-lg-6 text-center text-lg-end">
//                     <button
//                       type="button"
//                       class="btn btn-primary px-3 me-1"
//                       style={{ backgroundColor: "#3b5998" }}
//                     >
//                       <i class="fab fa-facebook-f"></i>
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-primary px-3 me-1"
//                       style={{ backgroundColor: "#55acee" }}
//                     >
//                       <i class="fab fa-twitter"></i>
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-primary px-3 me-1"
//                       style={{ backgroundColor: "#0082ca" }}
//                     >
//                       <i class="fab fa-linkedin"></i>
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-primary px-3 me-1"
//                     >
//                       <i class="fas fa-comments"></i>
//                     </button>
//                   </div>
//                 </div>
//               </section>
//               {/* <!--Section: Post data-mdb--> */}

//               {/* <!--Section: Text--> */}
//               <section>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur
//                   adipisicing elit. Optio sapiente molestias
//                   consectetur. Fuga nulla officia error
//                   placeat veniam, officiis rerum laboriosam
//                   ullam molestiae magni velit laborum itaque
//                   minima doloribus eligendi! Lorem ipsum,
//                   dolor sit amet consectetur adipisicing
//                   elit. Optio sapiente molestias
//                   consectetur. Fuga nulla officia error
//                   placeat veniam, officiis rerum laboriosam
//                   ullam molestiae magni velit laborum itaque
//                   minima doloribus eligendi!
//                 </p>

//                 <p>
//                   <strong>
//                     Optio sapiente molestias consectetur?
//                   </strong>
//                 </p>

//                 <p>
//                   Lorem ipsum dolor sit amet consectetur
//                   adipisicing elit. Ipsum architecto ex ab
//                   aut tempora officia libero praesentium,
//                   sint id magnam eius natus unde blanditiis.
//                   Autem adipisci totam sit consequuntur
//                   eligendi.
//                 </p>

//                 <p class="note note-light">
//                   <strong>Note:</strong> Lorem ipsum dolor
//                   sit amet, consectetur adipisicing elit.
//                   Optio odit consequatur porro sequi ab
//                   distinctio modi. Rerum cum dolores sint,
//                   adipisci ad veritatis laborum eaque illum
//                   saepe mollitia ut voluptatum.
//                 </p>

//                 <p>
//                   Lorem ipsum dolor sit amet consectetur
//                   adipisicing elit. Temporibus, libero
//                   repellat molestiae aperiam laborum aliquid
//                   atque magni nostrum, inventore
//                   perspiciatis possimus quia incidunt
//                   maiores molestias eaque nam commodi!
//                   Magnam, labore.
//                 </p>

//                 <img
//                   src="https://mdbootstrap.com/img/new/slides/041.jpg"
//                   class="img-fluid shadow-1-strong rounded-5 mb-4"
//                   alt=""
//                 />

//                 <ul>
//                   <li>Lorem</li>
//                   <li>Ipsum</li>
//                   <li>Dolor</li>
//                   <li>Sit</li>
//                   <li>Amet</li>
//                 </ul>

//                 <p>
//                   Lorem ipsum dolor sit amet consectetur
//                   adipisicing elit. Sed, temporibus nulla
//                   voluptatibus accusantium sapiente
//                   doloremque. Doloribus ratione laboriosam
//                   culpa. Ab officiis quidem, debitis nostrum
//                   in accusantium dolore veritatis eius est?
//                 </p>
//               </section>
//               {/* <!--Section: Text--> */}

//               {/* <!--Section: Share buttons--> */}
//               <section class="text-center border-top border-bottom py-4 mb-4">
//                 <p>
//                   <strong>Share with your friends:</strong>
//                 </p>

//                 <button
//                   type="button"
//                   class="btn btn-primary me-1"
//                   style={{ backgroundColor: "#3b5998" }}
//                 >
//                   <i class="fab fa-facebook-f"></i>
//                 </button>
//                 <button
//                   type="button"
//                   class="btn btn-primary me-1"
//                   style={{ backgrounColor: "#55acee" }}
//                 >
//                   <i class="fab fa-twitter"></i>
//                 </button>
//                 <button
//                   type="button"
//                   class="btn btn-primary me-1"
//                   style={{ backgroundColor: "#0082ca" }}
//                 >
//                   <i class="fab fa-linkedin"></i>
//                 </button>
//                 <button
//                   type="button"
//                   class="btn btn-primary me-1"
//                 >
//                   <i class="fas fa-comments me-2"></i>Add
//                   comment
//                 </button>
//               </section>
//               {/* <!--Section: Share buttons--> */}

//               {/* <!--Section: Author--> */}
//               <section class="border-bottom mb-4 pb-4">
//                 <div class="row">
//                   <div class="col-3">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
//                       class="img-fluid shadow-1-strong rounded-5"
//                       alt=""
//                     />
//                   </div>

//                   <div class="col-9">
//                     <p class="mb-2">
//                       <strong>Anna Maria Doe</strong>
//                     </p>
//                     <a href="" class="text-dark">
//                       <i class="fab fa-facebook-f me-1"></i>
//                     </a>
//                     <a href="" class="text-dark">
//                       <i class="fab fa-twitter me-1"></i>
//                     </a>
//                     <a href="" class="text-dark">
//                       <i class="fab fa-linkedin me-1"></i>
//                     </a>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Distinctio est ab
//                       iure inventore dolorum consectetur?
//                       Molestiae aperiam atque quasi
//                       consequatur aut? Repellendus alias
//                       dolor ad nam, soluta distinctio quis
//                       accusantium!
//                     </p>
//                   </div>
//                 </div>
//               </section>
//               {/* <!--Section: Author--> */}

//               {/* <!--Section: Comments--> */}
//               <section class="border-bottom mb-3">
//                 <p class="text-center">
//                   <strong>Comments: 3</strong>
//                 </p>

//                 {/* <!-- Comment --> */}
//                 <div class="row mb-4">
//                   <div class="col-2">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
//                       class="img-fluid shadow-1-strong rounded-5"
//                       alt=""
//                     />
//                   </div>

//                   <div class="col-10">
//                     <p class="mb-2">
//                       <strong>Marta Dolores</strong>
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Distinctio est ab
//                       iure inventore dolorum consectetur?
//                       Molestiae aperiam atque quasi
//                       consequatur aut? Repellendus alias
//                       dolor ad nam, soluta distinctio quis
//                       accusantium!
//                     </p>
//                   </div>
//                 </div>

//                 {/* <!-- Comment --> */}
//                 <div class="row mb-4">
//                   <div class="col-2">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
//                       class="img-fluid shadow-1-strong rounded-5"
//                       alt=""
//                     />
//                   </div>

//                   <div class="col-10">
//                     <p class="mb-2">
//                       <strong>Valeria Groove</strong>
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Distinctio est ab
//                       iure inventore dolorum consectetur?
//                       Molestiae aperiam atque quasi
//                       consequatur aut? Repellendus alias
//                       dolor ad nam, soluta distinctio quis
//                       accusantium!
//                     </p>
//                   </div>
//                 </div>

//                 {/* <!-- Comment --> */}
//                 <div class="row mb-4">
//                   <div class="col-2">
//                     <img
//                       src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
//                       class="img-fluid shadow-1-strong rounded-5"
//                       alt=""
//                     />
//                   </div>

//                   <div class="col-10">
//                     <p class="mb-2">
//                       <strong>Antonia Velez</strong>
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Distinctio est ab
//                       iure inventore dolorum consectetur?
//                       Molestiae aperiam atque quasi
//                       consequatur aut? Repellendus alias
//                       dolor ad nam, soluta distinctio quis
//                       accusantium!
//                     </p>
//                   </div>
//                 </div>
//               </section>
//               {/* <!--Section: Comments--> */}

//               {/* <!--Section: Reply--> */}
//               <section>
//                 <p class="text-center">
//                   <strong>Leave a reply</strong>
//                 </p>

//                 <form>
//                   {/* <!-- Name input --> */}
//                   <div class="form-outline mb-4">
//                     <input
//                       type="text"
//                       id="form4Example1"
//                       class="form-control"
//                     />
//                     <label
//                       class="form-label"
//                       for="form4Example1"
//                     >
//                       Name
//                     </label>
//                   </div>

//                   {/* <!-- Email input --> */}
//                   <div class="form-outline mb-4">
//                     <input
//                       type="email"
//                       id="form4Example2"
//                       class="form-control"
//                     />
//                     <label
//                       class="form-label"
//                       for="form4Example2"
//                     >
//                       Email address
//                     </label>
//                   </div>

//                   {/* <!-- Message input --> */}
//                   <div class="form-outline mb-4">
//                     <textarea
//                       class="form-control"
//                       id="form4Example3"
//                       rows="4"
//                     ></textarea>
//                     <label
//                       class="form-label"
//                       for="form4Example3"
//                     >
//                       Text
//                     </label>
//                   </div>

//                   {/* <!-- Checkbox --> */}
//                   <div class="form-check d-flex justify-content-center mb-4">
//                     <input
//                       class="form-check-input me-2"
//                       type="checkbox"
//                       value=""
//                       id="form4Example4"
//                       checked
//                     />
//                     <label
//                       class="form-check-label"
//                       for="form4Example4"
//                     >
//                       Send me a copy of this comment
//                     </label>
//                   </div>

//                   {/* <!-- Submit button --> */}
//                   <button
//                     type="submit"
//                     class="btn btn-primary btn-block mb-4"
//                   >
//                     Publish
//                   </button>
//                 </form>
//               </section>
//               {/* <!--Section: Reply--> */}
//             </div>
//             {/* <!--Grid column--> */}
//           </div>
//           {/* <!--Grid row--> */}
//         </div>
//       </main>
//     </>
//   );
// }

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
        <div class="container mb-4">
          <section
            class="mx-auto"
            style={{ maxWidth: "43rem" }}
          >
            <div class="card">
              <div class="card-body d-flex flex-row">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                  class="rounded-circle me-3"
                  height="50px"
                  width="50px"
                  alt="avatar"
                />
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    {article.article_author}
                  </h5>
                  <p class="card-text">
                    <i class="far fa-clock pe-2"></i>
                    {new Date().toLocaleDateString(
                      navigator.language
                    )}
                  </p>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src={article.car_image_url}
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{
                      backgroundColor:
                        "rgba(251, 251, 251, 0.15)",
                    }}
                  ></div>
                </a>
              </div>
              <div class="card-body">
                <p
                  class="card-text collapse"
                  id="collapseContent"
                >
                  {article.article_content}
                </p>
                <div class="d-flex justify-content-between">
                  <a
                    class="btn btn-link link-danger p-md-1 my-1"
                    data-mdb-toggle="collapse"
                    href="#collapseContent"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseContent"
                  >
                    Read more
                  </a>
                  <div>
                    <a
                      href="#!"
                      class="d-flex align-items-center me-3"
                    >
                      <i
                        class="far fa-comment-dots me-2"
                        data-mdb-toggle="tooltip"
                        data-mdb-placement="top"
                        title="Comment this article"
                      ></i>
                      <p class="mb-0">Comment</p>
                    </a>
                  </div>
                </div>
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
      {/* <CardTest />
      <CardTest />
      <CardTest />
      <CardTest />
      <CardTest />
      <CardTest />
      <CardTest /> */}
    </section>
  );
}
export default Article;
