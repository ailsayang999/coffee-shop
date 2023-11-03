// 串切開始
import axios from "axios";

const baseUrl = "https://coffeeshop-production-c884.up.railway.app/api";



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
    "ngrok-skip-browser-warning": "false",
  },
});

//取得咖啡豆商品
export const getAllProduct = async () => {
  try {
    const res = await instance.get(`${baseUrl}/products`);
    return res.data.data;
  } catch (error) {
    console.error("[Get All Products failed]");
  }
};

// 取得特定商品 getBeansById
export const getBeansById = async (id) => {
  try {
    const res = await instance.get(`${baseUrl}/products/${id}`);
    return res.data.data;
  } catch (error) {
    console.error("[Get Specific Product failed]");
  }
};