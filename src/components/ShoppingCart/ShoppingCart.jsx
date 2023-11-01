import React from "react";
import "./shoppingCart.scss";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { formatCurrency } from "utilities/formatCurrency";

const CartItem = ({
  id,
  name,
  variantName,
  quantity,
  variantPrice,
  singleProductImg,
}) => {
  const { removeFromCart } = useShoppingCart();
  
  return (
    <div className="order-item">
      {/* item的圖 */}
      <img
        src={singleProductImg}
        alt=""
        style={{ width: "75px", height: "75px", objectFit: "cover" }}
      />
      {/* item的info */}
      <div className="cart-item-info-container">
        <div className="cart-item-name-container">
          <span className="cart-item-name" style={{ color: "black" }}>
            {name}
          </span>
          <span className="cart-item-variant-name" style={{ color: "black" }}>
            {variantName}
          </span>

          {quantity > 1 && (
            <span className="test-muted" style={{ color: "black" }}>
              X {quantity}
            </span>
          )}
        </div>
        {/* item的price */}
        <div
          className="test-muted"
          style={{ fontSize: "0.75rem", color: "black" }}
        >
          {formatCurrency(variantPrice)}
        </div>
        {/* item的total price */}
        <div className="cart-item-total-price" style={{ color: "black" }}>
          {formatCurrency(variantPrice * quantity)}
        </div>
      </div>

      <button
        onClick={() => removeFromCart(id, variantName)}
        style={{ backgroundColor: "white", width: "20px", height: "20px" }}
      >
        &times;
      </button>
    </div>
  );
};

const ShoppingCart = ({ isOpen }) => {
  const { cartItems } = useShoppingCart();
  

  return (
    <div className={`shopping-cart-modal ${isOpen ? "show-cart" : ""}`}>
      {/* 中間品項 */}
      <div className="shopping-cart-items-container">
        {cartItems?.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}

        {/* 小記 Subtotal */}
        <div
          className="cart-subtotal-price"
          style={{ fontSize: "30px", color: "black" }}
        >
          小計：{formatCurrency(
            cartItems?.reduce((total, cartItem) => {
              return total + (cartItem.variantPrice || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
        <button className="checkout-cart-button">查看購物車</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
