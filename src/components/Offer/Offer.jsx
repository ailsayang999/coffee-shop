import React, { useEffect, useState } from "react";
import "./offer.scss";
import { offer } from "Data";
import { getEvent } from "api/product";
import { Link as RouterLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const dummyEvent = [
  {
    id: 6,
    name: "Test October Special Sales",
    bannerUrl: "https://i.imgur.com/9Cvf17R.png",
    discount: 0.5,
    startTime: "2023-10-01T00:00:00.000Z",
    endTime: "2023-10-30T00:00:00.000Z",
    repeat: 1,
    createdAt: "2023-10-21T08:01:02.000Z",
    updatedAt: "2023-10-21T08:01:02.000Z",
  },
  {
    id: 7,
    name: "Test not repeat October Special Sales",
    bannerUrl: "https://i.imgur.com/9Cvf17R.png",
    discount: 0.5,
    startTime: "2023-10-01T00:00:00.000Z",
    endTime: "2023-10-30T00:00:00.000Z",
    repeat: 0,
    createdAt: "2023-10-21T08:01:02.000Z",
    updatedAt: "2023-10-21T08:01:02.000Z",
  },
];

const Offer = () => {
  const [event, setEvent] = useState(false);
  useEffect(() => {
    const getEventAsync = async () => {
      try {
        const backendEvent = await getEvent();
        console.log("backendEvent", backendEvent);
        setEvent(backendEvent);
      } catch (error) {
        console.error(error);
      }
    };
    getEventAsync();
  }, []);

  return (
    <section className="offer section" id="offer">
      <h2 className="section__title" data-title="Offer">
        Special Offer For You
      </h2>
      {/* Swiper Pagination */}
      <Swiper
        // lazy={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="container"
      >
        {event &&
          event?.map(({ bannerUrl, name, discount, id }) => {
            return (
              <SwiperSlide className="offer__item" key={id}>
                <div className="offer__img-wrapper">
                  <img
                    src={bannerUrl}
                    alt=""
                    className="offer__img"
                    loading="lazy"
                  />
                </div>
                <div className="offer__content">
                  <h3 className="offer__title">{name}</h3>
                  <div className="offer__discount">
                    Get {(1 - discount) * 100}% Off
                  </div>
                  {/* <p className="offer__description">{description}</p> */}
                  <RouterLink to="/product_page" className="btn offer-btn">
                    <div>Order Now</div>
                  </RouterLink>
                </div>
              </SwiperSlide>
            );
          })}

        {/* other demo */}
        {offer.map(({ img, title, discount, description, id }) => {
          return (
            <SwiperSlide className="offer__item" key={id}>
              <div className="offer__img-wrapper">
                <img src={img} alt="" className="offer__img" loading="lazy" />
              </div>
              <div className="offer__content">
                <h3 className="offer__title">{title}</h3>
                <span className="offer__discount">{discount}</span>
                <p className="offer__description">{description}</p>
                <RouterLink to="/product_page" className="btn offer-btn">
                  <div>Order Now</div>
                </RouterLink>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Offer;
