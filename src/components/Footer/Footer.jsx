import React from "react";
import "./footer.scss";
import logo from "assets/images/CoffeeHouseLogo.png";
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import {Link as RouterLink} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer__grid container">
        {/* Footer Content1 */}
        <div className="footer__content">
          <a href="/" className="footer__logo">
            <img
              src={logo}
              alt=""
              className="footer__logo-img"
              loading="lazy"
            />
          </a>

          <p className="footer__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            consequuntur amet voluptas placeat illo rerum veniam consectetur
            praesentium totam corrupti.
          </p>

          <ul className="footer__contact">
            <li className="footer__contact-item">
              <AiOutlinePhone className="icon" /> +886 384 774 9023
            </li>

            <li className="footer__contact-item">
              <MdOutlineLocationOn className="icon" /> Happy Road, Taiwan
            </li>

            <li className="footer__contact-item">
              <FaRegEnvelope className="icon" /> info@expample.com
            </li>
          </ul>
        </div>

        {/* Footer Content2 */}
        <div className="footer__content">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <a href="/#home" className="footer__link">
                <FaCaretRight className="icon" /> Home
              </a>
            </li>

            <li>
              <a href="/#about" className="footer__link">
                <FaCaretRight className="icon" /> About Us
              </a>
            </li>

            <li>
              <a href="/#menu" className="footer__link">
                <FaCaretRight className="icon" /> Menu
              </a>
            </li>

            <li>
              <a href="/#features" className="footer__link">
                <FaCaretRight className="icon" /> Features
              </a>
            </li>

            <li>
              <a href="/#gallery" className="footer__link">
                <FaCaretRight className="icon" /> Gallery
              </a>
            </li>

            <li>
              <a href="/#offer" className="footer__link">
                <FaCaretRight className="icon" /> Offer
              </a>
            </li>

          </ul>
        </div>

        {/* Footer Content3 */}
        <div className="footer__content">
          <h3 className="footer__title">Open Hours</h3>
          <div className="footer__opening-hour">
            <ul className="opening__hour-list">
              <li className="opening__hour-item">
                <span>Monday:</span>
                <span>09AM - 06PM</span>
              </li>

              <li className="opening__hour-item">
                <span>Tuesday:</span>
                <span>09AM - 06PM</span>
              </li>

              <li className="opening__hour-item">
                <span>Wednesday:</span>
                <span>09AM - 06PM</span>
              </li>

              <li className="opening__hour-item">
                <span>Thursday:</span>
                <span>09AM - 06PM</span>
              </li>

              <li className="opening__hour-item">
                <span>Friday:</span>
                <span>09AM - 06PM</span>
              </li>

              <li className="opening__hour-item">
                <span>Saturday:</span>
                <span>09AM - 06PM</span>
              </li>

              <li className="opening__hour-item">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Content3 */}
        <div className="footer__content">
          <h3 className="footer__title">Newsletter</h3>
          <p className="footer__description">
            Subscribe Our Newsletter To Get Latest Update and News.
          </p>
          <form action="" className="subscribe__form">
            <input
              type="text"
              className="form__input subscribe__input"
              placeholder="Your Email"
            />

            <button className="btn btn-flex subscribe__btn">
              <FaRegEnvelope /> Subscribe Now
            </button>
          </form>

          <div className="footer__socials">
            <h3 className="footer__social-follow">Follow Us:</h3>
            <div className="footer__social-links">
              <a href="/" className="footer__social-link">
                <FaFacebookF />
              </a>

              <a href="/" className="footer__social-link">
                <FaTwitter />
              </a>

              <a href="/" className="footer__social-link">
                <FaLinkedin />
              </a>
              <a href="/" className="footer__social-link">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <p className="copyright__text">
        &copy; Copyright 2023 <span>Coffee House</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
