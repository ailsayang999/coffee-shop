import React from "react";
import "./checkout.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import { useContext } from "react";
import FormDataContext from "contexts/FormDataContext";
import CartContext from "contexts/CartContext";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import FormPanel from "components/FormPanel/FormPanel";
import StepperPanel from "components/FormPanel/StepperPanel";

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

const ProgressControl = () => {
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

          <button
            className="next"
            onClick={() => {
              alert(
                "FORM SUBMITTED!! \nCheck out console to see formData object~"
              );
              // 通常會把這筆資料給sending to an API
              console.log(
                `以下為表單資訊：
                購物車總金額 (小計): ${totalPrice}
                持卡人姓名: ${formData.cardUserName}
                卡號: ${formData.cardNumber}
                有效期限:${formData.cardExpirationDate}
                CCV: ${formData.CardCVCCCV}`
              );
            }}
          >
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
              <ProgressControl />
            </div>

            <div className="right-panel">
              <div className="checkout-cart-container">
                <h1>您的訂單</h1>

                <div className="title summary-container">
                  <div>商品</div>
                  <div>小計</div>
                </div>

                <hr />
                <div className="checkout-cart-item summary-container">
                  <div className="checkout-cart-item-name">
                    巴西小丸子 - 濾掛 × 1
                  </div>
                  <div className="checkout-cart-item-subtotal-price">NT$30</div>
                </div>

                <hr />
                <div className="checkout-subtotal summary-container">
                  <div>小計</div>
                  <div>NT$30</div>
                </div>
                <hr />
                <div className="checkout-shipping-price summary-container">
                  <div>運費</div>
                  <div>NT$500</div>
                </div>
                <hr />
                <div className="checkout-total-price summary-container">
                  <div>總計</div>
                  <div> NT$530</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
