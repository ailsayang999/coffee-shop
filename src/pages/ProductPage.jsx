import React from "react";
import Headers from "components/Header/Header";
import Products from "components/Products/Products";
import Footer from "components/Footer/Footer";
import Offer from "components/Offer/Offer";

const ProductPage = () => {
  return (
    <div>
      <Headers />
      <Products />
      <Offer />
      <Footer />
    </div>
  );
};

export default ProductPage;
