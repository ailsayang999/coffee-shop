import React from "react";
import "./shoppingCart.scss";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { formatCurrency } from "utilities/formatCurrency";
import { Link as RouterLink } from "react-router-dom";

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
    <div className="shopping-cart-order-item">
      {/* item的圖 */}
      <div className="shopping-cart-img-container">
        <img src={singleProductImg} alt={name} className="shopping-cart-img" />
      </div>

      {/* item的info */}
      <div className="cart-item-info-container">
        <div className="cart-item-name-container">
          <span className="cart-item-name">{name}</span>
          <span className="cart-item-variant-name">-{variantName}</span>

          {quantity > 1 && <span className="test-muted">X {quantity}</span>}
        </div>
        {/* item的price */}
        <div className="test-muted shopping-cart-variant-price">
          單價：{formatCurrency(variantPrice)}
        </div>
        {/* item的total price */}
        <div className="cart-item-total-price">
          小計：{formatCurrency(variantPrice * quantity)}
        </div>
      </div>

      <button
        onClick={() => removeFromCart(id, variantName)}
        className="shopping-cart-remove-item-btn"
      >
        &times;
      </button>
    </div>
  );
};

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, toggleCart } = useShoppingCart();
  console.log(cartItems);

  return (
    <div className={`shopping-cart-modal ${isOpen ? "show-cart" : ""}`}>
      <div className="shopping-cart-close-btn-container">
        <button className="shopping-cart-close-btn" onClick={toggleCart}>
          &times;
        </button>
      </div>
      {/* 中間品項 */}
      <div className="shopping-cart-items-container">
        {cartItems.length === 0 && <div style={{color:"black"}}>尚無商品</div>}
        {cartItems.length > 0 && (
          <div className="shopping-cart-item-container">
            {cartItems?.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
        )}

        {/* 小計 Subtotal */}
        <div
          className="cart-subtotal-price"
          style={{ fontSize: "30px", color: "black" }}
        >
          小計：
          {formatCurrency(
            cartItems?.reduce((total, cartItem) => {
              return total + (cartItem.variantPrice || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
        <RouterLink to="/cart" onClick={toggleCart}>
          <button className="checkout-cart-button">查看購物車</button>
        </RouterLink>
      </div>
    </div>
  );
};

export default ShoppingCart;
