import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import "./header.scss";
import { useLocation } from "react-router-dom";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import logo from "assets/images/CoffeeHouseLogo.png";
import { BiUserCircle } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { links, productLinks } from "Data";

import { ReactComponent as Hamburger } from "assets/icons/menu.svg";
const Header = () => {
  const location = useLocation(); //確認當前停留頁面

  //HomePage scrolling
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  const { productBeanId } = useParams();

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);

  const handleScrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <header className={`${scrollHeader ? "scrollHeader" : ""} header`}>
      <nav className="nav container">
        {/* logo */}
        <RouterLink to="/" onClick={handleScrollTop} className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img" loading="lazy" />
        </RouterLink>

        {/* 如果頁面停留在主頁，Header顯示以下訊息 */}

        {location.pathname === "/" && (
          <>
            {/* menu */}
            <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
              <ul className="nav__list">
                {links.map(({ name, path }, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <ScrollLink
                        hashSpy={true}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={300}
                        to={path}
                        className="nav__link"
                        onClick={() => setShowMenu(!showMenu)}
                      >
                        {name}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* hamburger icon */}
            <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
              <Hamburger fill={"var(--title-color)"} />
            </div>
          </>
        )}

        {location.pathname === "/product_page" && (
          <>
            {/* menu */}
            <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
              <ul className="nav__list">
                {productLinks.map(({ name, path }, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <ScrollLink
                        hashSpy={true}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={300}
                        to={path}
                        className="nav__link"
                        onClick={() => setShowMenu(!showMenu)}
                      >
                        {name}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* hamburger icon */}
            <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
              <Hamburger fill={"var(--title-color)"} />
            </div>
            <RouterLink to="/login">
              <BiUserCircle className="icon" />
            </RouterLink>
            {/* <RouterLink to="/cart">
              <BsFillCartFill className="icon" />
            </RouterLink> */}
          </>
        )}

        {location.pathname === `/product_page/${productBeanId}` && (
          <>
            {/* menu */}
            <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
              <ul className="nav__list">
                {productLinks.map(({ name, path }, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <RouterLink to={`/product_page`} className="nav__link">
                        {name}
                      </RouterLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* hamburger icon */}
            <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
              <Hamburger fill={"var(--title-color)"} />
            </div>
            <RouterLink to="/login">
              <BiUserCircle className="icon" />
            </RouterLink>
            {/* <RouterLink to="/cart">
              <BsFillCartFill className="icon" />
            </RouterLink> */}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
