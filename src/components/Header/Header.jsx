import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import "./header.scss";
// import { ReactComponent as Logo } from "assets/icons/logo.svg";

import logo from "assets/images/CoffeeHouseLogo.png";
import { links } from "Data";
import { ReactComponent as Hamburger } from "assets/icons/menu.svg";
const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

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
        <Link to="/" onClick={handleScrollTop} className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img" loading="lazy" />
        </Link>
        {/* menu */}
        <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav__item" key={index}>
                  <Link
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
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* hamburger icon */}
        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <Hamburger fill={"var(--title-color)"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
