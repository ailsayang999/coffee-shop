// 串切開始
import axios from "axios";

const baseUrl = "https://c7ea-140-112-238-165.ngrok-free.app/api";


// const axiosInstance = axios.create({
//   baseURL: baseUrl,
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error(error);
//   }
// );


const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'ngrok-skip-browser-warning': 'false',
  },
});


//取得咖啡豆商品
export const getProductsCoffeeBean = async () => {
  try {
    const res = await instance.get(`${baseUrl}/products`);
    return res.data.data;
  } catch (error) {
    console.error("[Get Products Coffee Bean failed]");
  }
};

//取得咖啡周邊商品
export const getProductsCoffeeEquipment = async () => {
  try {
    const res = await instance.get(`${baseUrl}/products?isUtensil=true`);
    return res.data;
  } catch (error) {
    console.error("[Get Products Coffee Equipment failed]");
  }
};
