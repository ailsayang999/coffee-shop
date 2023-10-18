import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./menu.scss";
import menuBanner from "assets/images/menuBanner.png";
// import {menu} from "Data"

const Menu = () => {
  return (
    <section className="menu section" id="menu">
      <h2 className="section__title" data-title="Products">
        Let's Check Our Products
      </h2>
      <div className="menu__img-wrapper">
        <img src={menuBanner} alt="" className="menu__img" loading="lazy" />
        <RouterLink to="/product_page" className="menu_btn btn">
          查看商品總覽
        </RouterLink>
      </div>

      {/* <div className="menu__grid container grid">
        {menu.map(({ img, title, description, price, id }) => {
          return (
            <div className="menu__item" key={id}>
              <div className="menu__img-wrapper">
                <img src={img} alt="" className="menu__img" loading="lazy" />
              </div>

              <div className="menu__data">
                <div>
                  <h3 className="menu__title">{title}</h3>
                  <p className="menu__description">{description}</p>
                </div>

                <span className="menu__price">${price}</span>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Menu;
