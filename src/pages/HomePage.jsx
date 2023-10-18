import React from 'react'
import Header from "components/Header/Header";
import Home from "components/Home/Home";
import About from "components/About/About";
import Features from "components/Features/Features";
import Menu from "components/Menu/Menu";
import Stats from "components/Stats/Stats";
import Gallery from "components/Gallery/Gallery";
import Offer from "components/Offer/Offer";
import Testimonial from "components/Testimonial/Testimonial";
import Footer from "components/Footer/Footer";

const HomePage = () => {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Features />
        <Menu />
        <Stats />
        <Gallery />
        <Offer />
        <Testimonial />
        <Footer />
      </div>
    );
}

export default HomePage