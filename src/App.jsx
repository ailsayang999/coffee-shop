import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import {
  HomePage,
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  OrderManageMent,
  ProductDetailPage,
} from "pages";

//Context
import { ShoppingCartProvider } from "contexts/ShoppingCartContext";

import { FormDataProvider } from "contexts/FormDataContext";
import { OrderContextProvider } from "contexts/OrderContext";

import "./App.scss"; //要在最後才import不然會無法RWD

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ShoppingCartProvider>
          <FormDataProvider>
            <OrderContextProvider>
              <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="product_page" element={<ProductPage />} />
                <Route
                  path="product_page/:productBeanId"
                  element={<ProductDetailPage />}
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
