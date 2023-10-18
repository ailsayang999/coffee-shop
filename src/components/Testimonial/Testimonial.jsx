import React from "react";
import "./testimonial.scss";
import { testimonials } from "Data";
import { ReactComponent as Star } from "assets/icons/star.svg";
import { ReactComponent as DownTriangle } from "assets/icons/down-arrow.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="testimonials container section" id="Testimonials">
      <h2 className="section__title" data-title="Testimonials">
        What Client Say's
      </h2>

      {/* Swiper Pagination */}
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="container"
      >
        {testimonials.map(({ img, title, service, description, id }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="testimonial__quote">
                <p className="testimonial__description">{description}</p>
                <DownTriangle className="testimonial__icon" />
              </div>
              <div className="testimonial__content">
                <div className="testimonial__img-wrapper">
                  <img
                    src={img}
                    alt=""
                    className="testimonial__img"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="testimonial__title">{title}</h3>
                  <p className="testimonial__service">{service}</p>
                  <div className="testimonial__rating">
                    <Star fill="var(--first-color)" />
                    <Star fill="var(--first-color)" />
                    <Star fill="var(--first-color)" />
                    <Star fill="var(--first-color)" />
                    <Star fill="var(--first-color)" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
