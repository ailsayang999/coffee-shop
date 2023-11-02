import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle"> Welcome To Coffee House</span>
          <h1 className="home__title">
            Explore Our Coffee Sanctuary for an Energizing Experience
          </h1>
          <p className="home__description">
            Welcome to our cozy coffee haven, where every sip is a moment of
            warmth and delight.
          </p>
          <div className="home__btns">
            <a href="#menu" className="btn">
              Our Products
            </a>
            <a href="#offer" className="btn home__btn">
              Special offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
