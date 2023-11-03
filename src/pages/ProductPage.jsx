import React from "react";
import Headers from "components/Header/Header";
import Products from "components/Products/Products";
import Footer from "components/Footer/Footer";
import Offer from "components/Offer/Offer";
import ScrollToTopBtn from "components/ScrollToTopBtn/ScrollToTopBtn";

const ProductPage = () => {
  return (
    <div>
      <Headers />
      <Products />
      <Offer />
      <Footer />
      <ScrollToTopBtn/>
    </div>
  );
};

export default ProductPage;
