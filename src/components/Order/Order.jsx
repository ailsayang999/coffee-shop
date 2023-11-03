import React from "react";
import "./order.scss";
import { useOrder } from "contexts/OrderContext";
import { postAllOrder, deleteSingleOrder } from "api/order";

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

  const handleDeleteOrderItem = async (orderId) => {
    const res = await deleteSingleOrder(orderId);
    if (res) {
      if (res.data.status === "success") {
        alert(res.data.message);
        setOrderItem(orderItem.filter((order) => order.orderId !== orderId));
      }
      if (res.data.status === "error") {
        alert(res.data.message);
      }
    }
  };

  const handleLogout = () => {
    setOrderItem(false);
    setEmail("")

  };

  const orderItemDummyData = [
    {
      orderId: 8,
      orderItem: [
        {
          productId: 8,
          productName: "哥倫比亞 — 夏洛特小農藝伎",
          productDescription: "風味：有蜂蜜的香甜，也有茶香的回甘",
          productVariant: "1/4磅裝",
          productPrice: 300,
          productQuantity: 5,
          createdTime: "2023-11-02T04:31:02.000Z",
          discountedPrice: 240,
        },
        {
          productId: 24,
          productName: "TIMEMORE 泰摩 冷泡咖啡冰錐瓶",
          productDescription:
            "泡咖啡泡茶皆可用，兩層式開瓶設計，300細目過濾網防污染，內容量：600 ml",
          productVariant: "黑色",
          productPrice: 1080,
          productQuantity: 5,
          createdTime: "2023-11-02T04:31:02.000Z",
          discountedPrice: 1080,
        },
      ],
    },
    {
      orderId: 9,
      orderItem: [
        {
          productId: 28,
          productName: "漫・拾光手沖壺",
          productDescription:
            "「慢」遊在温度與香氣間\n啜「提」一天的疲恩忙碌\n感受細微的「光」影變化,\n\n溫柔喚醒喉嚨齒類間,安靜的喧囂。\n拋開善感自在的沉醉,啜飲片刻熱烈。\n平凡或特別、清淡或濃烈·「開支闊葉」或「溶解淬煉」。\n细细品味掏選——温淳的慢活美學",
          productVariant: "250ml",
          productPrice: 599,
          productQuantity: 1,
          createdTime: "2023-11-02T04:32:02.000Z",
          discountedPrice: 599,
        },
        {
          productId: 7,
          productName: "馬拉威藝伎",
          productDescription: "風味：水蜜桃、蜂蜜、奶油",
          productVariant: "1/4磅裝",
          productPrice: 250,
          productQuantity: 2,
          createdTime: "2023-11-02T04:32:02.000Z",
          discountedPrice: 200,
        },
      ],
    },
  ];

  return (
    <div className="order-management-page">
      <div className="order-management-container">
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
                  <th>訂單ID</th>
                  <th>商品名稱</th>
                  <th>規格</th>
                  <th>數量</th>
                  <th>單品金額</th>
                  <th>單品特價後金額</th>
                  <th>小計</th>
                  <th>運費</th>
                  <th>應付總金</th>
                  <th>刪除此品項</th>
                </tr>
              </thead>

              <tbody>
                {orderItem &&
                  orderItem.map(
                    ({ orderItems, orderId, orderShippingPrice }, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{orderId}</td>

                            <td className="product-td">
                              {orderItems.map(({ productName }, index) => {
                                return <div key={index}>{productName}</div>;
                              })}
                            </td>

                            <td className="product-td">
                              {orderItems.map(({ productVariant }, index) => {
                                return <div key={index}>{productVariant}</div>;
                              })}
                            </td>
                            <td className="product-td">
                              {orderItems.map(({ productQuantity }, index) => {
                                return <div key={index}>{productQuantity}</div>;
                              })}
                            </td>
                            <td className="product-td">
                              {orderItems.map(({ productPrice }, index) => {
                                return <div key={index}>{productPrice}</div>;
                              })}
                            </td>
                            <td className="product-td">
                              {orderItems.map(({ discountedPrice }, index) => {
                                return <div key={index}>{discountedPrice}</div>;
                              })}
                            </td>
                            <td className="product-td">
                              {orderItems.map(
                                (
                                  { discountedPrice, productQuantity },
                                  index
                                ) => {
                                  return (
                                    <div key={index}>
                                      {discountedPrice * productQuantity}
                                    </div>
                                  );
                                }
                              )}
                            </td>
                            <td className="product-td">
                              <div key={index}>{orderShippingPrice}</div>
                            </td>
                            <td className="product-td">
                              {orderItems.reduce(
                                (total, orderItem) => {
                                  return (
                                    total +
                                    orderItem.discountedPrice *
                                      orderItem.productQuantity
                                  );
                                },
                                0
                              )}
                            </td>
                            <td>
                              <button
                                className=""
                                onClick={() => {
                                  handleDeleteOrderItem(orderId);
                                }}
                              >
                                刪除
                              </button>
                            </td>
                          </tr>
                        </>
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
