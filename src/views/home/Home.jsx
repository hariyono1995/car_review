import React from "react";
import { Carousel } from "../../component/common";
import About from "./About";
import Backup from "./Backup";
import Content from "./Content";

function Home() {
  return (
    <section className="">
      <Carousel />

      <main className="my-5 container">
        <div className="container">
          <About />

          <Content />
          {/* <!--Section: Content--> */}
          {/* <Backup /> */}
          {/* end back up */}
        </div>
      </main>
    </section>
  );
}

export default Home;
