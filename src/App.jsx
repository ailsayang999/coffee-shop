import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage, LoginPage, ProductPage, CartPage } from "pages";
import ProductBeanDetail from "components/ProductBeanDetail/ProductBeanDetail";
import { ShoppingCartProvider } from "context/ShoppingCartContext";

import "./App.scss"; //要在最後才import不然會無法RWD

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <ShoppingCartProvider>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="product_page" element={<ProductPage />} />
            <Route
              path="product_page/:productBeanId"
              element={<ProductBeanDetail />}
            />
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
