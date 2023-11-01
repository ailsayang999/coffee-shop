import React, { useEffect, useContext } from "react";
import "./checkout.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import FormDataContext from "contexts/FormDataContext";
import CartContext from "contexts/CartContext";
import { Link as RouterLink } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import FormPanel from "components/FormPanel/FormPanel";
import StepperPanel from "components/FormPanel/StepperPanel";
import { useShoppingCart } from "contexts/ShoppingCartContext";

//下一步
function RightArrowBtn() {
  //Context
  const { setStep, active, setActive, stepperCircleNum, checked, setChecked } =
    useContext(FormDataContext);

  return (
    <button
      className="next next1"
      onClick={() => {
        setStep((currentStep) => currentStep + 1);
        active >= stepperCircleNum - 1
          ? setActive(stepperCircleNum - 1)
          : setActive(active + 1);
        checked >= stepperCircleNum - 1
          ? setChecked(stepperCircleNum - 1)
          : setChecked(checked + 1);
      }}
    >
      下一步
      <FaLongArrowAltRight />
    </button>
  );
}

//上一步
function LeftArrowBtn() {
  //Context
  const { setStep, active, setActive, checked, setChecked } =
    useContext(FormDataContext);
  return (
    <button
      className="prev prev1"
      onClick={() => {
        setStep((currentStep) => currentStep - 1);
        active < 0 ? setActive(0) : setActive(active - 1);
        checked < 0 ? setChecked(0) : setChecked(checked - 1);
      }}
    >
      <FaLongArrowAltLeft />
      上一步
    </button>
  );
}

const ProgressControl = ({ handleSubmit }) => {
  //Context
  const { step, formData } = useContext(FormDataContext);
  const { totalPrice } = useContext(CartContext);

  const buttonDisplay = () => {
    if (step === 0) {
      return (
        <section className="button-group button-group1" data-phase="address">
          <RightArrowBtn />
        </section>
      );
    } else if (step === 1) {
      return (
        <section className="button-group button-group2 " data-phase="shipping">
          <LeftArrowBtn />

          <RightArrowBtn />
        </section>
      );
    } else if (step === 2) {
      return (
        <section
          className="button-group button-group3 col col-12 "
          data-phase="credit-card"
        >
          <LeftArrowBtn />

          <button className="next" onClick={handleSubmit}>
            確認下單
          </button>
        </section>
      );
    }
  };

  return (
    <div className="progress-control-panel">
      <section className="progress-control-container">
        {buttonDisplay()}
      </section>
    </div>
  );
};

const Checkout = () => {
  //Context
  const { cartItems, totalPrice, setTotalPrice } = useShoppingCart();
  const { formData } = useContext(FormDataContext);
  //取shipping fee的資料
  const { shippingFeeData } = useContext(FormDataContext);

  //按下確認下單後要做的事
  const handleSubmit = () => {
    alert("已成功下訂!! \n 記得到填寫的信箱收取訂單通知");
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.address);
    console.log(cartItems);
  };

  useEffect(() => {
    //先算cartItemsArray裡面的總金，accumulator預設是0
    const itemTotalPrice = cartItems.reduce((accumulator, obj) => {
      return accumulator + obj.variantPrice * obj.quantity;
    }, 0);
    setTotalPrice(shippingFeeData + itemTotalPrice);
  }, [cartItems, shippingFeeData, setTotalPrice]);

  return (
    <div>
      <Header />
      <div className="checkout-page">
        <main className="site-main">
          <div className="main-container">
            {/* left-panel */}
            <div className="left-panel">
              {/* register-panel */}
              <div className="register-panel">
                <section className="register-container">
                  <h2 className="register-title">結帳</h2>
                  <StepperPanel />
                  <FormPanel />
                </section>
              </div>
              {/* progress-control-panel */}
              <ProgressControl handleSubmit={handleSubmit} />
            </div>

            <div className="right-panel">
              <div className="checkout-cart-container">
                <h1>您的訂單</h1>

                <div className="title summary-container">
                  <div>商品</div>
                  <div>小計</div>
                </div>

                <hr />
                {cartItems?.map(
                  ({ name, variantName, quantity, variantPrice }) => {
                    return (
                      <div className="checkout-cart-item summary-container">
                        <div className="checkout-cart-item-name">
                          {name} - {variantName} × {quantity}
                        </div>
                        <div className="checkout-cart-item-subtotal-price">
                          NT${variantPrice * quantity}
                        </div>
                      </div>
                    );
                  }
                )}

                <hr />
                <div className="checkout-subtotal summary-container">
                  <div>小計</div>
                  <div>
                    NT$
                    {cartItems.reduce((accumulator, obj) => {
                      return accumulator + obj.variantPrice * obj.quantity;
                    }, 0)}
                  </div>
                </div>
                <hr />
                <div className="checkout-shipping-price summary-container">
                  <div>運費</div>
                  <div>NT${shippingFeeData}</div>
                </div>
                <hr />
                <div className="checkout-total-price summary-container">
                  <div>總計</div>
                  <div> NT$ {totalPrice}</div>
                </div>
              </div>
            </div>
          </div>

          <RouterLink to="/cart" style={{ color: "#ba9373", margin: "50px" }}>
            <BsArrowLeftCircleFill style={{ marginRight: "10px" }} />
            返回購物車
          </RouterLink>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
