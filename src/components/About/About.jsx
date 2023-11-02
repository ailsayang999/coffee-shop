import React from "react";
import aboutImg from "assets/images/about.jpeg";
import { ReactComponent as Checked } from "assets/icons/check.svg";
import "./about.scss";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container">
        {/* About Img  grid的左欄 */}
        <div className="about__img-wrapper">
          <img
            src={aboutImg}
            alt="aboutImg"
            className="about__img"
            loading="lazy"
          />
        </div>
        {/* About Content grid的右欄 */}
        <div className="about__content">
          <h2 className="section__title title-left" data-title="About Us">
            Your Ultimate Source for Premium Organic Coffee Beans and Equipment
          </h2>

          <p className="about__description">
            The Coffee Shop is a passionate coffee destination founded by
            dedicated connoisseurs. Our mission is to curate and deliver the
            highest quality coffee beans and equipment, so you can savor the
            perfect brew every day. Discover our story and join us on a
            flavorful journey through the world of coffee.
          </p>

          <div className="about__details gird">
            <p className="about__details-description">
              <Checked fill={"var(--title-color)"} />
              Handpicked, globally sourced, expertly roasted for exquisite
              flavor profiles.
            </p>
            <p className="about__details-description">
              <Checked fill={"var(--title-color)"} />
              Committed to sustainability and eco-friendly farming practices.
            </p>
            <p className="about__details-description">
              <Checked fill={"var(--title-color)"} />
              Curated coffee gear, top-quality accessories, expert advice for
              your brews.
            </p>
          </div>

          <a href="#team" className="btn">
            Our Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
