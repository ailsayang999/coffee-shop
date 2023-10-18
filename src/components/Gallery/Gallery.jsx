import React from "react";
import "./gallery.scss";
import { gallery } from "Data";
import { ReactComponent as Plus } from "assets/icons/plus.svg";

const Gallery = () => {
  return (
    <section className="gallery section" id="gallery">
      <h2 className="section__title" data-title="Gallery">
        Our Photo Gallery
      </h2>

      <div className="gallery__grid container">
        {gallery.map(({ img, title }, index) => {
          return (
            <div className="gallery__item" key={index}>
              <img src={img} alt="" className="gallery__img" loading="lazy" />
              <a href="/" className="gallery__icon">
                <Plus fill={"var(--first-color)"} />
              </a>
              <h3 className="gallery__title">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
