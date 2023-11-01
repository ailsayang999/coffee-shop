import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import {
  HomePage,
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
} from "pages";
import ProductBeanDetail from "components/ProductBeanDetail/ProductBeanDetail";

import { ShoppingCartProvider } from "contexts/ShoppingCartContext";
//Context
import { FormDataProvider } from "contexts/FormDataContext";

import "./App.scss"; //要在最後才import不然會無法RWD

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <ShoppingCartProvider>
          <FormDataProvider>
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
            </Routes>
          </FormDataProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
