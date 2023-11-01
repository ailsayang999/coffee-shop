import axios from "axios";

const baseUrl = "https://a9e2-111-241-97-237.ngrok-free.app/api";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "ngrok-skip-browser-warning": "false",
  },
});

//取得咖啡豆商品
export const postNewOrder = async (orderPayload) => {
  try {
    const res = await instance.post(`${baseUrl}/order`, orderPayload);
    return res;
  } catch (error) {
    console.error("[Post New Order failed]");
  }
};