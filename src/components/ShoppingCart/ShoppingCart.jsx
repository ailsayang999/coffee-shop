import React from "react";
import "./shoppingCart.scss";
import { useShoppingCart } from "context/ShoppingCartContext";
// import CartItem from "components/CartItem/CartItem";
import { formatCurrency } from "utilities/formatCurrency";
import storeItems from "data/items.json";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) {
    return null;
  }

  return (
    <div className="order-item">
      {/* item的圖 */}
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "75px", height: "75px", objectFit: "cover" }}
      />
      {/* item的info */}
      <div className="cart-item-info-container">
        <div className="cart-item-name-container">
          <span className="cart-item-name" style={{ color: "black" }}>
            {item.name}
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
          {formatCurrency(item.price)}
        </div>
        {/* item的total price */}
        <div className="cart-item-total-price" style={{ color: "black" }}>
          {formatCurrency(item.price * quantity)}
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
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
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}

        {/* 小記 Subtotal */}
        <div
          className="cart-subtotal-price"
          style={{ fontSize: "30px", color: "black" }}
        >
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
        <button className="checkout-cart-button">查看購物車</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
