import React from "react";
import "./reservation.scss";
import shapeTwo from "assets/images/shape1.png";
import shapeThree from "assets/images/shape2.png";

const Reservation = () => {
  return (
    <section className="reservation container" id="reservation">
      <h2 className="section__title" data-title="Reservation">
        Book A Table
      </h2>
      <form action="" className="reservation__form">
        <div className="form__input-div">
          <input type="text" placeholder="Your Name" className="form__input" />
        </div>

        <div className="form__input-div">
          <input
            type="email"
            placeholder="Your Email Address"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input type="text" placeholder="Your Phone" className="form__input" />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            placeholder="Date Ex: DD/MM/YY"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            placeholder="Time Ex: 01:25PM"
            className="form__input"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            placeholder="Number of People"
            className="form__input"
          />
        </div>

        <div className="form__input-div form__input-textarea">
          <textarea
            placeholder="Your Message"
            className="form__input"
          ></textarea>
        </div>

        <button className="btn btn--flex reservation__btn">Book A Table</button>
      </form>

      <img src={shapeTwo} alt="" className="shape__two" loading="lazy" />
      <img src={shapeThree} alt="" className="shape__three" loading="lazy" />
    </section>
  );
};

export default Reservation;
