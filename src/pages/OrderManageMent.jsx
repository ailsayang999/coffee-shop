import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header'
import Order from 'components/Order/Order'
import ScrollToTopBtn from 'components/ScrollToTopBtn/ScrollToTopBtn';
import React from 'react'


const OrderManageMent = () => {
  return (
    <>
      <Header />
      <Order />
      <Footer/>
      <ScrollToTopBtn/>
    </>
  );
}

export default OrderManageMent