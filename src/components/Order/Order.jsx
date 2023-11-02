import React, { useEffect } from "react";
import "./order.scss";
import { useOrder } from "contexts/OrderContext";
import { postAllOrder } from "api/order";

const Order = () => {
  const { orderItem, setOrderItem, email, setEmail } = useOrder();

  const handleEmailSubmit = async (emailPayload) => {
    const emailPayloadToBackend = {
      email: emailPayload,
    };
   
    const res = await postAllOrder(emailPayloadToBackend);
    if (res) {
      if (res.data.status === "success") {
        //更新
        setOrderItem(res.data.data);
      }
      if (res.data.status === "error") {
        alert(res.data.message);
      }
    }
  };

  const handleDeleteOrderItem = (productId) => {
    console.log(productId);
  };

  const handleLogout = ()=>{
    setOrderItem(false)
  }

  console.log(orderItem);

  // const orderItemDummyData = [
  //   {
  //     productId: 2,
  //     productName: "班莎 — 龐貝村",
  //     productDescription: "風味：檸檬皮、柑橘、柚子香氣",
  //     productVariant: "濾掛",
  //     productPrice: 35,
  //     productQuantity: 2,
  //     createdTime: "2023-10-31T07:30:13.000Z",
  //     discountedPrice: 35,
  //   },
  //   {
  //     productId: 1,
  //     productName: "利姆季若",
  //     productDescription: "風味：紅茶草本植物的花香",
  //     productVariant: "濾掛",
  //     productPrice: 35,
  //     productQuantity: 1,
  //     createdTime: "2023-10-31T07:30:13.000Z",
  //     discountedPrice: 35,
  //   },
  //   {
  //     productId: 2,
  //     productName: "班莎 — 龐貝村",
  //     productDescription: "風味：檸檬皮、柑橘、柚子香氣",
  //     productVariant: "濾掛",
  //     productPrice: 35,
  //     productQuantity: 2,
  //     createdTime: "2023-10-31T08:03:38.000Z",
  //     discountedPrice: 35,
  //   },
  //   {
  //     productId: 1,
  //     productName: "利姆季若",
  //     productDescription: "風味：紅茶草本植物的花香",
  //     productVariant: "濾掛",
  //     productPrice: 35,
  //     productQuantity: 1,
  //     createdTime: "2023-10-31T08:03:38.000Z",
  //     discountedPrice: 35,
  //   },
  // ];

  return (
    <div className="order-management-page">
      <div className="order-management-container">
        {/* <div className="check-in-email-container">
          <h1>訂單查詢</h1>
          <h2>請輸入你的email來查詢訂單資料</h2>

          <input
            type="text"
            placeholder="email@gmail.com.."
            className="email-input-box"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              handleEmailSubmit(email);
            }}
          >
            送出
          </button>
        </div> */}

        {!orderItem && (
          <>
            <div className="check-in-email-container">
              <h1>訂單查詢</h1>
              <h2>請輸入你的email來查詢訂單資料</h2>

              <input
                type="text"
                placeholder="email@gmail.com.."
                className="email-input-box"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                className="btn"
                onClick={() => {
                  handleEmailSubmit(email);
                }}
              >
                送出
              </button>
            </div>
          </>
        )}

        {orderItem && (
          <div className="order-management-items-show">
            <h1>您過去的所有訂單</h1>

            <table className="content-table">
              <thead>
                <tr>
                  <th>商品名稱</th>
                  <th>規格</th>
                  <th>數量</th>
                  <th>單品金額</th>
                  <th>單品特價後金額</th>
                  <th>應付金額</th>
                  <th>刪除此品項</th>
                </tr>
              </thead>

              <tbody>
                {orderItem &&
                  orderItem.map(
                    (
                      {
                        productName,
                        productVariant,
                        productPrice,
                        productQuantity,
                        discountedPrice,
                        productId,
                      },
                      index
                    ) => {
                      return (
                        <tr key={index}>
                          <td>{productName}</td>
                          <td>{productVariant}</td>
                          <td>{productQuantity}</td>
                          <td>{productPrice}</td>
                          <td>{discountedPrice}</td>
                          <td>{discountedPrice * productQuantity}</td>
                          <td><button className="" onClick={()=>{
                            handleDeleteOrderItem(productId);
                          }}>刪除</button></td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </table>

            <button className="btn" onClick={handleLogout}>
              登出
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
