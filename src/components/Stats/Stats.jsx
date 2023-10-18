import React from "react";
import "./stats.scss";
import coffeeShop from "assets/icons/coffee-shop.svg";
import experience from "assets/icons/glasses.svg";
import coffeeCup from "assets/icons/coffee-togo.svg";
import chef from "assets/icons/group.svg";

const Status = () => {
  return (
    <section className="stats section">
      <div className="stats__grid container">
        {/* Stats 1 */}
        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img
              src={coffeeShop}
              alt=""
              className="stats__img"
              loading="lazy"
            />
          </div>
          <div>
            <p className="stats__no">1500</p>
            <h3 className="stats__title">+ Total Branches</h3>
          </div>
        </div>

        {/* Stats 2 */}
        <div className="stats__item">
          <div className="stats__img-wrapper" loading="lazy">
            <img src={coffeeCup} alt="" className="stats__img" loading="lazy" />
          </div>
          <div>
            <p className="stats__no">250</p>
            <h3 className="stats__title">+ Happy Customers</h3>
          </div>
        </div>

        {/* Stats 3 */}
        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img src={chef} alt="" className="stats__img" loading="lazy" />
          </div>
          <div>
            <p className="stats__no">120</p>
            <h3 className="stats__title">+ Professional Chefs</h3>
          </div>
        </div>

        {/* Stats 4 */}
        <div className="stats__item">
          <div className="stats__img-wrapper">
            <img
              src={experience}
              alt=""
              className="stats__img"
              loading="lazy"
            />
          </div>
          <div>
            <p className="stats__no">50</p>
            <h3 className="stats__title">+ Years of Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
