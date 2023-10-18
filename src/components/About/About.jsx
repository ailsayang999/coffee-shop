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
            Fresh Quality And Organic Tasty Coffee House for You
          </h2>

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            sapiente officiis, explicabo deleniti nam est assumenda cum corrupti
            maxime accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis, sit?
          </p>

          <div className="about__details gird">
            <p className="about__details-description">
              <Checked fill={"var(--title-color)"} />
              At Lorem ipsum dolor sit amet consectetur adipisicing adipisci?
            </p>
            <p className="about__details-description">
              <Checked fill={"var(--title-color)"} />
              At Lorem ipsum dolor sit amet consectetur adipisicing adipisci?
            </p>
            <p className="about__details-description">
              <Checked fill={"var(--title-color)"} />
              At Lorem ipsum dolor sit amet consectetur adipisicing adipisci?
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
