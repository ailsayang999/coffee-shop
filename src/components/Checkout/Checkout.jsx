import React, { useEffect, useContext } from "react";
import "./checkout.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import FormDataContext from "contexts/FormDataContext";
import { Link as RouterLink } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import FormPanel from "components/FormPanel/FormPanel";
import StepperPanel from "components/FormPanel/StepperPanel";
import { useShoppingCart } from "contexts/ShoppingCartContext";
import { postNewOrder } from "api/order";

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
  const { step } = useContext(FormDataContext);

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
  const { cartItems, totalPrice, setCartItems, setIsOpen, setTotalPrice } =
    useShoppingCart();
  const {
    formData,
    setFormData,
    setChecked,
    setStep,
    setActive,
    setShippingFeeData,
  } = useContext(FormDataContext);
  //取shipping fee的資料
  const { shippingFeeData } = useContext(FormDataContext);

  const payloadOrdersInfoArr = cartItems.map((item) => {
    let newItem = new Object();
    newItem.productId = item.id;
    newItem.variantId = item.variantId;
    newItem.quantity = item.quantity;
    return newItem;
  });

  const orderPayload = {
    email: formData.email,
    orders: payloadOrdersInfoArr,
  };

  //按下確認下單後要做的事
  // function handleSubmit() {
  //   console.log("submit");
  // }
  const handleSubmit = async () => {
    const res = await postNewOrder(orderPayload);
    if (res) {
      if (res.data.status === "success") {
        //更新
        alert("已成功下訂!! \n 記得到填寫的信箱收取訂單通知");

        // 重置所有state
        setFormData({
          title: "",
          name: "",
          phone: "",
          email: "",
          county: "",
          address: "",
          shippingMethod: "",
          cardUserName: "",
          cardNumber: "",
          cardExpirationDate: "",
          CardCVCCCV: "",
        });
        setChecked(0);
        setStep(0);
        setActive(1);
        setShippingFeeData(0);
        setCartItems([]);
        setIsOpen(false);
        setTotalPrice(0);
        
      }
      if (res.data.status === "error") {
        alert(res.data.message);
        alert("訂單未成功");
      }
    }
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
