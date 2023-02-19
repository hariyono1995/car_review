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
        </div>
      </main>
    </section>
  );
}

export default Home;
