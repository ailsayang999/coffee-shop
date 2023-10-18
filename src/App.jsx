import "styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import {
  HomePage,
  LoginPage,
  ProductPage,
} from "pages";

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="product_page" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
