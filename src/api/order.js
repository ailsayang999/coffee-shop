import axios from "axios";

const baseUrl = "https://a9e2-111-241-97-237.ngrok-free.app/api";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "ngrok-skip-browser-warning": "false",
  },
});

//送出商品訂單
export const postNewOrder = async (orderPayload) => {
  try {
    const res = await instance.post(`${baseUrl}/order`, orderPayload);
    return res;
  } catch (error) {
    console.error("[Post New Order failed]");
  }
};

//取得訂單
export const postAllOrder = async (userEmailPayload) => {
  try {
    const res = await instance.post(`${baseUrl}/order/check`, userEmailPayload);
    return res;
  } catch (error) {
    console.error("[Post All Order failed]");
  }
};


//刪除一筆訂單
export const deleteSingleOrder = async (orderId) => {
  try {
    const res = await instance.delete(`${baseUrl}/order/${orderId}`);
    return res;
  } catch (error) {
    console.error("[Delete Single Order failed]");
  }
};