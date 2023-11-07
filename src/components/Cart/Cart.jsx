import "./cart.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { formatCurrency } from "utilities/formatCurrency";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEvent } from "api/product";

const CartItem = ({
  id,
  name,
  variantName,
  quantity,
  variantPrice,
  singleProductImg,
  singleProductVariantArr,
  variantDiscountedPrice,
  event,
}) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <div className="cart-product">
      <div className="cart-product-detail">
        <div className="cart-product-img-wrapper">
          <img src={singleProductImg} alt={name} className="cart-product-img" />
        </div>

        <div className="cart-product-details">
          <span className="cart-product-name">
            <b>產品名稱: </b> {name}-{variantName}
          </span>

          <span className="cart-product-id">
            <b>價格: </b> {formatCurrency(variantPrice)} 元
          </span>
        </div>
      </div>
      <div className="cart-product-price-detail">
        <div className="cart-product-amount-container">
          <AiFillMinusCircle
            className="amount-icon"
            onClick={() => {
              decreaseCartQuantity(
                id,
                variantName,
                variantPrice,
                variantDiscountedPrice,
                singleProductVariantArr,
                event
              );
            }}
          />
          <div className="cart-product-amount">{quantity}</div>
          <AiFillPlusCircle
            className="amount-icon"
            onClick={() => {
              increaseCartQuantity(
                id,
                name,
                variantName,
                variantPrice,
                variantDiscountedPrice,
                singleProductImg,
                singleProductVariantArr,
                event
              );
            }}
          />
        </div>
        <div className="cart-product-price">
          小計：{formatCurrency(variantPrice * quantity)}元
        </div>
      </div>
      <div className="remove-button-container">
        <button
          onClick={() => removeFromCart(id, variantName)}
          className="cart-remove-item-btn"
        >
          移除
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartItems } = useShoppingCart();
  const [event, setEvent] = useState(false);
  const totalPrice = formatCurrency(
    cartItems?.reduce((total, cartItem) => {
      return total + (cartItem.variantPrice || 0) * cartItem.quantity;
    }, 0)
  );

  //拿取資料
  useEffect(() => {
    const getEventAsync = async () => {
      try {
        const backendEvent = await getEvent();
        setEvent(backendEvent);
      } catch (error) {
        console.error(error);
      }
    };

    getEventAsync();
  }, []);

  return (
    <>
      <Header />
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-content-wrapper">
            <h1 className="cart-title">您的購物車 Shopping Cart</h1>
            <div className="cart-top"></div>

            <div className="cart-bottom">
              <div className="cart-info">
                {cartItems.length === 0 && (
                  <div>您的購物車裡還沒有任何商品</div>
                )}
                {cartItems?.map((item, index) => (
                  <CartItem key={index} {...item} event={event} />
                ))}
              </div>

              <div className="cart-summary">
                <h1 className="cart-summary-title">購物車總計</h1>

                <div className="cart-summary-item">
                  <span className="cart-summary-item-text">小計</span>
                  <span className="cart-summary-item-price">
                    {formatCurrency(
                      cartItems?.reduce((total, cartItem) => {
                        return (
                          total +
                          (cartItem.variantPrice || 0) * cartItem.quantity
                        );
                      }, 0)
                    )}
                  </span>
                </div>

                <div className="cart-summary-item">
                  <div className="cart-summary-item-text">運費</div>
                  <div className="cart-summary-item-price">
                    依照運送方式而定
                  </div>
                </div>

                {/* <div className="cart-summary-item">
                  <div className="cart-summary-item-text">運費折抵</div>
                  <div className="cart-summary-item-price">$ -10</div>
                </div> */}

                <div className="cart-summary-item total-price-item">
                  <div className="cart-summary-item-text">總計</div>
                  <div className="cart-summary-item-price">{totalPrice}</div>
                </div>
                <RouterLink to="/checkout">
                  <button className="cart-summary-btn btn">結帳</button>
                </RouterLink>
              </div>
            </div>

            <div className="cart-button-wrapper">
              <RouterLink to="/product_page">
                <button className="cart-button cart-btn-left btn">
                  <BiSolidLeftArrow className="cart-btn-left-arrow" />
                  繼續購物
                </button>
              </RouterLink>

              <RouterLink to="/checkout">
                <button className="cart-button cart-btn-right btn">
                  結帳去 <BiSolidRightArrow className="cart-btn-right-arrow" />
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
