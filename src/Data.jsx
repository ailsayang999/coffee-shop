// For Features jsx
import freeDelivery from "assets/images/free-delivery.png";
import certified from "assets/images/certified.png";
import highQuality from "assets/images/high-quality.png";
import roastedCoffee from "assets/images/roasted-coffee.png";

// For Menu
import coffeeProduct from "assets/images/coffeeProduct.png";

// For Gallery
import galleryPic1 from "assets/images/galleryPic1.jpeg";
import galleryPic2 from "assets/images/galleryPic2.jpeg";
import galleryPic3 from "assets/images/galleryPic3.jpeg";
import galleryPic4 from "assets/images/galleryPic4.jpeg";
import galleryPic5 from "assets/images/galleryPic5.jpeg";
import galleryPic6 from "assets/images/galleryPic6.jpeg";

// For Offer
import offer1 from "assets/images/offer1.jpeg";
import offer2 from "assets/images/offer2.jpeg";
import offer3 from "assets/images/offer3.jpeg";
import offer4 from "assets/images/offer4.jpeg";
import offer5 from "assets/images/offer5.jpeg";

// For Testimonial
import person1 from "assets/images/customers/person1.png";
import person2 from "assets/images/customers/person2.png";
import person3 from "assets/images/customers/person3.png";
import person4 from "assets/images/customers/person4.png";
import person5 from "assets/images/customers/person5.png";
import person6 from "assets/images/customers/person6.jpeg";
import person7 from "assets/images/customers/person7.png";
import person8 from "assets/images/customers/person8.png";

//For Each HomePage section
export const links = [
  { name: "首頁", path: "home" },
  { name: "關於我們", path: "about" },
  { name: "特色", path: "features" },
  { name: "所有商品", path: "menu" },
  { name: "相片集", path: "gallery" },
  { name: "優惠活動", path: "offer" },
];

//For Each ProductPage section
export const productLinks = [
  { name: "咖啡豆、濾掛式咖啡", path: "coffee" },
  { name: "咖啡器材", path: "equipment" },
  { name: "優惠活動", path: "offer" },
];

// For Features jsx
export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: "Free Shipping",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 2,
    img: certified,
    title: "Organic Certified",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 3,
    img: highQuality,
    title: "High Quality",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 4,
    img: roastedCoffee,
    title: "Proper Roasting",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
];

// For Menu
export const menu = [
  {
    id: 1,
    img: coffeeProduct,
    title: "Americano Coffee",
    description: "Milk with vanilla flavored",
    price: 50.25,
  },
  {
    id: 2,
    img: coffeeProduct,
    title: "Cappuccino Arabica",
    description: "Milk with vanilla flavored",
    price: 70.25,
  },
  {
    id: 3,
    img: coffeeProduct,
    title: "Milk Cream Coffee",
    description: "Milk with vanilla flavored",
    price: 30.25,
  },
  {
    id: 4,
    img: coffeeProduct,
    title: "Special Raw Coffee",
    description: "Milk with vanilla flavored",
    price: 80.25,
  },
  {
    id: 5,
    img: coffeeProduct,
    title: "Fresh Black Coffee",
    description: "Milk with vanilla flavored",
    price: 90.25,
  },
  {
    id: 6,
    img: coffeeProduct,
    title: "Cappuccino Arabica",
    description: "Milk with vanilla flavored",
    price: 70.25,
  },
  {
    id: 7,
    img: coffeeProduct,
    title: "Milk Cream Coffee",
    description: "Milk with vanilla flavored",
    price: 120.25,
  },
  {
    id: 8,
    img: coffeeProduct,
    title: "Cold Coffee",
    description: "Milk with vanilla flavored",
    price: 40.25,
  },
];

// For Gallery
export const gallery = [
  {
    id: 1,
    img: galleryPic1,
    title: "By the Window",
  },
  {
    id: 2,
    img: galleryPic2,
    title: "Coffee and Desserts",
  },
  {
    id: 3,
    img: galleryPic3,
    title: "Front Door",
  },
  {
    id: 4,
    img: galleryPic4,
    title: "Corner",
  },
  {
    id: 5,
    img: galleryPic5,
    title: "Milk and Coffee",
  },
  {
    id: 6,
    img: galleryPic6,
    title: "Cappuccino",
  },
];

// For Offer
export const offer = [
  {
    id: 1,
    img: offer1,
    title: "Cappuccino Arabica",
    discount: "Get 40% Offer",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 2,
    img: offer2,
    title: "Cappuccino Arabica",
    discount: "Get 60% Offer",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 3,
    img: offer3,
    title: "Cappuccino Arabica",
    discount: "Get 50% Offer",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 4,
    img: offer4,
    title: "Cappuccino Arabica",
    discount: "Get 30% Offer",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
  {
    id: 5,
    img: offer5,
    title: "Cappuccino Arabica",
    discount: "Get 20% Offer",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout",
  },
];

// For Testimonial
export const testimonials = [
  {
    id: 1,
    img: person1,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 2,
    img: person2,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 3,
    img: person3,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 4,
    img: person4,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 5,
    img: person5,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 6,
    img: person6,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 7,
    img: person7,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 8,
    img: person8,
    title: "Jane E Butt",
    service: "Customer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
];

// For Coffee Product
export const coffeeBeanProduct = [
  {
    id: 1,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/曼特寧巴西.png?fit=540%2C540&ssl=1",
    title: "曼特寧・巴西",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 2,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/07/巴紐.png?fit=1663%2C1080&ssl=1",
    title: "巴紐・曼特寧",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 3,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/曼特寧巴西.png?fit=540%2C540&ssl=1",
    title: "曼特寧・巴西",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 4,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/07/巴紐.png?fit=1663%2C1080&ssl=1",
    title: "巴紐・曼特寧",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 5,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/曼特寧巴西.png?fit=540%2C540&ssl=1",
    title: "曼特寧・巴西",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 6,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/07/巴紐.png?fit=1663%2C1080&ssl=1",
    title: "巴紐・曼特寧",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 7,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/曼特寧巴西.png?fit=540%2C540&ssl=1",
    title: "曼特寧・巴西",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 8,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/07/巴紐.png?fit=1663%2C1080&ssl=1",
    title: "巴紐・曼特寧",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
];

// For Equipment Product
export const coffeeEquipmentProduct = [
  {
    id: 1,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 2,
    img: " https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3094.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 冰瞳玻璃咖啡V型濾杯",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 3,
    img: " https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3094.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 冰瞳玻璃咖啡V型濾杯",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 4,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 5,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 6,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 7,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
  {
    id: 8,
    img: "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
    title: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquam beatae similique numquam reiciendis magnam quia aut dignissimos incidunt molestiae.",
  },
];