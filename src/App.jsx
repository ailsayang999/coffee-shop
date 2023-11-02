import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import {
  HomePage,
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  OrderManageMent,
} from "pages";
import ProductBeanDetail from "components/ProductBeanDetail/ProductBeanDetail";

//Context
import { ShoppingCartProvider } from "contexts/ShoppingCartContext";

import { FormDataProvider } from "contexts/FormDataContext";
import { OrderContextProvider } from "contexts/OrderContext";

import "./App.scss"; //要在最後才import不然會無法RWD

const basename = process.env.REACT_APP_PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <ShoppingCartProvider>
          <FormDataProvider>
            <OrderContextProvider>
              <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="product_page" element={<ProductPage />} />
                <Route
                  path="product_page/:productBeanId"
                  element={<ProductBeanDetail />}
                />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="order-management" element={<OrderManageMent />} />
              </Routes>
            </OrderContextProvider>
          </FormDataProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
