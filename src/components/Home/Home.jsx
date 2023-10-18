import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle"> Welcome To Coffee House</span>
          <h1 className="home__title">
            Discover Amazing Coffee House and Get Energy
          </h1>
          <p className="home__description">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour.
          </p>
          <div className="home__btns">
            <a href="#menu" className="btn">
              我們的商品
            </a>
            <a href="#offer" className="btn home__btn">
              優惠活動
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
