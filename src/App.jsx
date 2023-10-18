import "styles/App.scss";

import React from "react";
import Header from "components/Header/Header";
import Home from "components/Home/Home";
import About from "components/About/About";
import Features from "components/Features/Features";
import Menu from "components/Menu/Menu";
import Stats from "components/Stats/Stats";
import Gallery from "components/Gallery/Gallery";
import Offer from "components/Offer/Offer";
import Reservation from "components/Reservation/Reservation";
import Testimonial from "components/Testimonial/Testimonial";
import Footer from "components/Footer/Footer";
import Test1 from "components/Test1/Test1";
import Test2 from "components/Test2/Test2";
import Test3 from "components/Test3/Test3";

function App() {
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
      <Reservation />
      <Testimonial />
      <Footer />
      <Test2 />
      <Test1 />
      <Test3 />
    </div>
  );
}

export default App;
