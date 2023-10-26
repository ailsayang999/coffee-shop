import { useState } from "react";
import "./cart.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import {
  BiSolidRightArrow,
  BiSolidLeftArrow,
  BiSolidChevronsDown,
} from "react-icons/bi";
import { products } from "Data";

const CartItem = () => {
  return (
    <div className="cart-product">
      <div className="cart-product-detail">
        <img
          src="https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/%E5%B7%B4%E8%A5%BF%E5%B0%8F%E4%B8%B8%E5%AD%90.png?fit=540%2C540&ssl=1"
          alt=""
          className="cart-product-img"
        />
        <div className="cart-product-details">
          <span className="cart-product-name">
            <b>產品名稱: </b> 巴西小丸子
          </span>

          <span className="cart-product-id">
            <b>價格: </b> 35 元
          </span>

          <div className="cart-selection-container">
            <select className="cart-product-selection-box">
              <option value={"濾掛式"}>濾掛式</option>
              <option value={"半磅"}>半磅</option>
            </select>

            <div className="down-arrow-icon-container">
              <BiSolidChevronsDown className="down-arrow-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-product-price-detail">
        <div className="cart-product-amount-container">
          <AiFillMinusCircle className="amount-icon" />
          <div className="cart-product-amount">2</div>
          <AiFillPlusCircle className="amount-icon" />
        </div>
        <div className="cart-product-price">$200</div>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-content-wrapper">
            
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-top"></div>

            <div className="cart-bottom">
              <div className="cart-info">
                {/* 一個項目 */}
                {/* <div className="cart-product">
                  <div className="cart-product-detail">
                    <img
                      src="https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/%E5%B7%B4%E8%A5%BF%E5%B0%8F%E4%B8%B8%E5%AD%90.png?fit=540%2C540&ssl=1"
                      alt=""
                      className="cart-product-img"
                    />
                    <div className="cart-product-details">
                      <span className="cart-product-name">
                        <b>Product: </b> 巴西小丸子
                      </span>

                      <span className="cart-product-id">
                        <b>ID: </b> 10051
                      </span>

                      <span className="cart-product-selected">
                        <b>項目: </b> 濾掛
                      </span>
                    </div>
                  </div>
                  <div className="cart-product-price-detail">
                    <div className="cart-product-amount-container">
                      <AiFillMinusCircle className="amount-icon" />
                      <div className="cart-product-amount">2</div>
                      <AiFillPlusCircle className="amount-icon" />
                    </div>
                    <div className="cart-product-price">$200</div>
                  </div>
                </div> */}

                <CartItem />

                {/* <hr className="cart-product-hr" /> */}
              </div>

              <div className="cart-summary">
                <h1 className="cart-summary-title">Oder Summary</h1>

                <div className="cart-summary-item">
                  <span className="cart-summary-item-text">Subtotal</span>
                  <span className="cart-summary-item-price">$ 600</span>
                </div>

                <div className="cart-summary-item">
                  <div className="cart-summary-item-text">
                    Estimated Shipping
                  </div>
                  <div className="cart-summary-item-price">$ 60</div>
                </div>

                <div className="cart-summary-item">
                  <div className="cart-summary-item-text">
                    Shipping Discount
                  </div>
                  <div className="cart-summary-item-price">$ -10</div>
                </div>

                <div className="cart-summary-item total-price-item">
                  <div className="cart-summary-item-text" type="total">
                    Total
                  </div>
                  <div className="cart-summary-item-price">$ 550</div>
                </div>

                <button className="cart-summary-btn btn">Checkout now</button>
              </div>
            </div>

            <div className="cart-button-wrapper">
              <button className="cart-button cart-btn-left btn">
                <BiSolidLeftArrow className="cart-btn-left-arrow" />
                繼續購物
              </button>

              <button className="cart-button cart-btn-right btn">
                結帳去 <BiSolidRightArrow className="cart-btn-right-arrow" />
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
