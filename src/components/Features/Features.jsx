import React from "react";
import { features } from "Data";
import shape from "assets/images/coffeeBeansIcon.png";
import "./features.scss";

const Features = () => {
  return (
    <section className="features section" id="features">
      <h2 className="section__title" data-title="Features">
        Our Best Features
      </h2>

      <div className="features__grid container">
        {features.map(({ img, title, description, id }) => {
          return (
            <div className="features__item" key={id}>
              <img src={img} alt="" className="feature__img" loading="lazy" />
              <h3 className="feature__title">{title}</h3>
              <p className="feature__description">{description}</p>
              {/* 做出浮水印的效果 */}
              <img
                src={shape}
                alt=""
                className="feature__shape"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
