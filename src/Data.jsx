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

export const products = [
  {
    id: 1,
    superCategoryName: "咖啡豆、濾掛式",
    Categories: [
      {
        id: 1,
        subCategory: "耶加雪夫系列",
        Products: [
          {
            id: 1,
            name: "利姆季若",
            categoryId: 1,
            description: "風味：紅茶草本植物的花香",
            stock: 0,
            roast: "中焙",
            aroma: 5,
            sour: 4,
            bitter: 2,
            thickness: 2,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 1,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/利姆.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 1,
                productId: 1,
                variantName: "濾掛",
                variantPrice: 35,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 9,
              },
              {
                id: 2,
                productId: 1,
                variantName: "半磅裝",
                variantPrice: 350,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 88,
              },
            ],
          },
          {
            id: 2,
            name: "班莎 — 龐貝村",
            categoryId: 1,
            description: "風味：檸檬皮、柑橘、柚子香氣",
            stock: 0,
            roast: "淺焙",
            aroma: 5,
            sour: 4,
            bitter: 1,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 2,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/班莎.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 3,
                productId: 2,
                variantName: "濾掛",
                variantPrice: 35,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 9,
              },
              {
                id: 4,
                productId: 2,
                variantName: "半磅裝",
                variantPrice: 350,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 88,
              },
            ],
          },
          {
            id: 3,
            name: "古吉 — 阿朵拉",
            categoryId: 1,
            description: "風味：柚子、巧克力",
            stock: 0,
            roast: "淺焙",
            aroma: 4,
            sour: 5,
            bitter: 2,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 3,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/07/古吉阿朵拉-3.png?fit=1663%2C1080&ssl=1",
              },
            ],
            Variants: [
              {
                id: 5,
                productId: 3,
                variantName: "濾掛",
                variantPrice: 35,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 9,
              },
              {
                id: 6,
                productId: 3,
                variantName: "半磅裝",
                variantPrice: 350,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 88,
              },
            ],
          },
          {
            id: 4,
            name: "果丁丁",
            categoryId: 1,
            description: "風味：新鮮鳳梨、芒果的香氣",
            stock: 0,
            roast: "淺焙",
            aroma: 3,
            sour: 4,
            bitter: 2,
            thickness: 2,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 4,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/果丁丁.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 7,
                productId: 4,
                variantName: "濾掛",
                variantPrice: 35,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 9,
              },
              {
                id: 8,
                productId: 4,
                variantName: "半磅裝",
                variantPrice: 350,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 88,
              },
            ],
          },
          {
            id: 5,
            name: "艾瑞莎",
            categoryId: 1,
            description: "風味：紅茶、佛手柑、茉莉花香",
            stock: 0,
            roast: "淺焙",
            aroma: 5,
            sour: 3,
            bitter: 2,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 5,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/艾瑞莎.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 9,
                productId: 5,
                variantName: "濾掛",
                variantPrice: 35,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 9,
              },
              {
                id: 10,
                productId: 5,
                variantName: "半磅裝",
                variantPrice: 350,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 88,
              },
            ],
          },
          {
            id: 6,
            name: "巧克力摩卡",
            categoryId: 1,
            description: "風味：花果香、巧克力堅果",
            stock: 0,
            roast: "淺中焙",
            aroma: 4,
            sour: 2,
            bitter: 2,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 6,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/艾瑞莎.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 11,
                productId: 6,
                variantName: "濾掛包",
                variantPrice: 35,
                variantDescription:
                  "新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 9,
              },
              {
                id: 12,
                productId: 6,
                variantName: "半磅裝",
                variantPrice: 350,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 88,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        subCategory: "藝伎豆",
        Products: [
          {
            id: 7,
            name: "馬拉威藝伎",
            categoryId: 2,
            description: "風味：水蜜桃、蜂蜜、奶油",
            stock: 0,
            roast: "淺焙",
            aroma: 5,
            sour: 3,
            bitter: 3,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 7,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/馬拉威藝伎.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 13,
                productId: 7,
                variantName: "濾掛",
                variantPrice: 40,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 10,
              },
              {
                id: 14,
                productId: 7,
                variantName: "1/4磅裝",
                variantPrice: 250,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 63,
              },
            ],
          },
          {
            id: 8,
            name: "哥倫比亞 — 夏洛特小農藝伎",
            categoryId: 2,
            description: "風味：有蜂蜜的香甜，也有茶香的回甘",
            stock: 0,
            roast: "淺焙",
            aroma: 5,
            sour: 5,
            bitter: 2,
            thickness: 2,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 8,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/哥倫比亞藝伎.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 15,
                productId: 8,
                variantName: "濾掛",
                variantPrice: 45,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 12,
              },
              {
                id: 16,
                productId: 8,
                variantName: "1/4磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 75,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        subCategory: "超值精選豆",
        Products: [
          {
            id: 9,
            name: "曼特寧・巴西",
            categoryId: 3,
            description:
              "風味：成熟熱帶水果的香甜風味，剛好的苦味，奶油般的質感",
            stock: 0,
            roast: "中深焙",
            aroma: 5,
            sour: 2,
            bitter: 2,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 9,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/曼特寧巴西.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 17,
                productId: 9,
                variantName: "濾掛",
                variantPrice: 22,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 6,
              },
              {
                id: 18,
                productId: 9,
                variantName: "半磅裝",
                variantPrice: 225,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 57,
              },
            ],
          },
          {
            id: 10,
            name: "巴紐・曼特寧",
            categoryId: 3,
            description: "風味：厚實的口感，具有濃厚的焦糖風味",
            stock: 0,
            roast: "中焙",
            aroma: 4,
            sour: 2,
            bitter: 4,
            thickness: 5,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:47.000Z",
            updatedAt: "2023-10-25T11:20:47.000Z",
            Images: [
              {
                id: 10,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/07/巴紐.png?fit=1663%2C1080&ssl=1",
              },
            ],
            Variants: [
              {
                id: 19,
                productId: 10,
                variantName: "濾掛",
                variantPrice: 22,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 6,
              },
              {
                id: 20,
                productId: 10,
                variantName: "半磅裝",
                variantPrice: 225,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:47.000Z",
                updatedAt: "2023-10-25T11:20:47.000Z",
                discountedPrice: 57,
              },
            ],
          },
          {
            id: 11,
            name: "摩卡",
            categoryId: 3,
            description:
              "風味：帶有恰到好處的苦味和酸味，也能喝到果酸味，味道深厚濃郁",
            stock: 0,
            roast: "中焙",
            aroma: 3,
            sour: 3,
            bitter: 3,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 11,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/摩卡.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 21,
                productId: 11,
                variantName: "濾掛",
                variantPrice: 25,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 7,
              },
              {
                id: 22,
                productId: 11,
                variantName: "半磅裝",
                variantPrice: 250,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 63,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        subCategory: "嚴選精品豆",
        Products: [
          {
            id: 12,
            name: "新幾內亞高山精選",
            categoryId: 4,
            description: "風味：酸味感佳，散發熱帶水果的風味與甜味",
            stock: 0,
            roast: "中焙",
            aroma: 4,
            sour: 3,
            bitter: 4,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 12,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/新幾內亞高山精選.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 23,
                productId: 12,
                variantName: "濾掛",
                variantPrice: 25,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 7,
              },
              {
                id: 24,
                productId: 12,
                variantName: "半磅裝",
                variantPrice: 250,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 63,
              },
            ],
          },
          {
            id: 13,
            name: "巴西小丸子",
            categoryId: 4,
            description:
              "風味：堅果巧克力的風味，豆形小巧可愛，喝起來的回甘度高",
            stock: 0,
            roast: "中淺焙",
            aroma: 5,
            sour: 4,
            bitter: 2,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 13,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/巴西小丸子.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 25,
                productId: 13,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 26,
                productId: 13,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 14,
            name: "印度馬拉巴季風豆",
            categoryId: 4,
            description:
              "風味：透過特殊處裡的馬拉巴季風豆，帶有奶油麥子的香味，口感厚實",
            stock: 0,
            roast: "中深焙",
            aroma: 5,
            sour: 1,
            bitter: 2,
            thickness: 5,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 14,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/印度馬拉巴季風豆.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 27,
                productId: 14,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 28,
                productId: 14,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 15,
            name: "肯亞 AA",
            categoryId: 4,
            description: "風味：可感受到高質感香氣，散發高雅甜味",
            stock: 0,
            roast: "中深焙",
            aroma: 4,
            sour: 5,
            bitter: 5,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 15,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/肯亞AA.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 29,
                productId: 15,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 30,
                productId: 15,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 16,
            name: "特級藍山 小象 / 聖奧古斯丁",
            categoryId: 4,
            description: "風味：具有濃郁度及豐富層次感的酸味",
            stock: 0,
            roast: "中深焙",
            aroma: 3,
            sour: 4,
            bitter: 3,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 16,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/特級藍山.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 31,
                productId: 16,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 32,
                productId: 16,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 17,
            name: "巴西國寶 — 黃波旁",
            categoryId: 4,
            description: "風味：具有柑橘蜂蜜香，口感香甜清爽",
            stock: 0,
            roast: "中焙",
            aroma: 5,
            sour: 5,
            bitter: 2,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 17,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/巴西國寶黃波旁.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 33,
                productId: 17,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 34,
                productId: 17,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 18,
            name: "巴拿馬 — 波奎特百合花",
            categoryId: 4,
            description: "風味：舌頭清香，清爽萊姆味，容易入喉",
            stock: 0,
            roast: "淺焙",
            aroma: 5,
            sour: 4,
            bitter: 2,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 18,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/巴西國寶黃波旁.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 35,
                productId: 18,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 36,
                productId: 18,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 19,
            name: "瓜地馬拉 — 薇薇特南果",
            categoryId: 4,
            description: "風味：豐富的濃郁度，水果系酸味，宛如巧克力的芳香味道",
            stock: 0,
            roast: "中焙",
            aroma: 4,
            sour: 4,
            bitter: 4,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 19,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/薇薇特南果.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 37,
                productId: 19,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 38,
                productId: 19,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 20,
            name: "哥斯大黎加 — 塔拉珠樹蛙紅蜜",
            categoryId: 4,
            description: "風味：具有豐富的酸味與果實慢慢熟成般的甜味",
            stock: 0,
            roast: "中焙",
            aroma: 3,
            sour: 4,
            bitter: 3,
            thickness: 3,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 20,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/樹蛙紅蜜.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 39,
                productId: 20,
                variantName: "濾掛",
                variantPrice: 30,
                variantDescription:
                  "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 8,
              },
              {
                id: 40,
                productId: 20,
                variantName: "半磅裝",
                variantPrice: 300,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 75,
              },
            ],
          },
          {
            id: 21,
            name: "薩爾瓦多 — 帕卡瑪拉",
            categoryId: 4,
            description: "風味：雪松油桃味，尾韻為烤真果香",
            stock: 0,
            roast: "淺焙",
            aroma: 5,
            sour: 3,
            bitter: 4,
            thickness: 4,
            isCoffee: true,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 21,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/薩爾瓦多帕卡瑪拉.png?fit=540%2C540&ssl=1",
              },
            ],
            Variants: [
              {
                id: 41,
                productId: 21,
                variantName: "濾掛",
                variantPrice: 40,
                variantDescription:
                  "新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n最佳賞味期限為1個月",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 10,
              },
              {
                id: 42,
                productId: 21,
                variantName: "半磅裝",
                variantPrice: 400,
                variantDescription:
                  "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    superCategoryName: "咖啡器材",
    Categories: [
      {
        id: 5,
        subCategory: "咖啡濾杯",
        Products: [
          {
            id: 22,
            name: "TIMEMORE 泰摩 冰瞳樹脂咖啡V型濾杯",
            categoryId: 5,
            description:
              "粉水分層透明提示，緊密貼合濾紙設計，凹凸紋理設計順暢水流。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 22,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3083.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 23,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3084.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 24,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3085.jpeg?fit=997%2C997&ssl=1",
              },
              {
                id: 25,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3086.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 26,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3087.jpeg?fit=1001%2C1001&ssl=1",
              },
              {
                id: 27,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3088.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 28,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3089.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 29,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3090.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 30,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3091.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 43,
                productId: 22,
                variantName: "01 (1~2人份)",
                variantPrice: 260,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 65,
              },
              {
                id: 44,
                productId: 22,
                variantName: "02 (2~4人份)",
                variantPrice: 260,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 65,
              },
            ],
          },
          {
            id: 23,
            name: "TIMEMORE 泰摩 冰瞳玻璃咖啡V型濾杯",
            categoryId: 5,
            description:
              "粉水分層透明提示，緊密貼合濾紙設計，凹凸紋理設計順暢水流。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 31,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3094.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 32,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3101.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 33,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3095.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 34,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3096.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 35,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3097.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 36,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3098.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 37,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3099.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 38,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3100.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 45,
                productId: 23,
                variantName: "01-黑色底座(1~2人份)",
                variantPrice: 390,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 98,
              },
              {
                id: 46,
                productId: 23,
                variantName: "01-白色底座(1~2人份)",
                variantPrice: 390,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 98,
              },
              {
                id: 47,
                productId: 23,
                variantName: "02-黑色底座(2~4人份)",
                variantPrice: 390,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 98,
              },
              {
                id: 48,
                productId: 23,
                variantName: "02-白色底座(2~4人份)",
                variantPrice: 390,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 98,
              },
            ],
          },
        ],
      },
      {
        id: 6,
        subCategory: "冷萃壺、冰釀壺",
        Products: [
          {
            id: 24,
            name: "TIMEMORE 泰摩 冷泡咖啡冰錐瓶",
            categoryId: 6,
            description:
              "泡咖啡泡茶皆可用，兩層式開瓶設計，300細目過濾網防污染，內容量：600 ml",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 39,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3104.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 40,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3111.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 41,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3110.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 42,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3102.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 43,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3103.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 44,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3105.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 45,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3106.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 46,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3107.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 47,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3108.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 48,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3109.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 49,
                productId: 24,
                variantName: "黑色",
                variantPrice: 1080,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 270,
              },
              {
                id: 50,
                productId: 24,
                variantName: "白色",
                variantPrice: 1080,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 270,
              },
            ],
          },
        ],
      },
      {
        id: 7,
        subCategory: "手沖壺",
        Products: [
          {
            id: 25,
            name: "TIMEMORE 泰摩 魚youth 細口手沖壺 (700 ml)",
            categoryId: 7,
            description:
              "細口壺水柱接近垂直90度，適合新手與一般使用者，原木防燙手把，高密度304不鏽鋼。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 49,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3068.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 50,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3069.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 51,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3070.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 52,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3060.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 53,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3061.jpeg?fit=781%2C781&ssl=1",
              },
              {
                id: 54,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3064.jpeg?fit=740%2C740&ssl=1",
              },
              {
                id: 55,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3065.jpeg?fit=754%2C754&ssl=1",
              },
              {
                id: 56,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3066.jpeg?fit=755%2C755&ssl=1",
              },
              {
                id: 57,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3067.jpeg?fit=740%2C740&ssl=1",
              },
            ],
            Variants: [
              {
                id: 51,
                productId: 25,
                variantName: "黑色",
                variantPrice: 1090,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 273,
              },
              {
                id: 52,
                productId: 25,
                variantName: "白色",
                variantPrice: 1090,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 273,
              },
            ],
          },
          {
            id: 26,
            name: "TIMEMORE 泰摩 魚pure 細口手沖壺 (700 ml)",
            categoryId: 7,
            description:
              "細口壺水柱接近垂直90度，適合新手與一般使用者。人體工學手把，降低疲勞。高密度304不鏽鋼。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 58,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3080.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 59,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3081.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 60,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3082.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 61,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3071.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 62,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3072.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 63,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3073.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 64,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3074.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 65,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3075.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 66,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3076.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 67,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3077.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 53,
                productId: 26,
                variantName: "黑色",
                variantPrice: 1090,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 273,
              },
              {
                id: 54,
                productId: 26,
                variantName: "白色",
                variantPrice: 1090,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 273,
              },
            ],
          },
          {
            id: 27,
            name: "TIMEMORE 泰摩 魚smart 電子溫控手沖壺 (600ml/800ml 細口/鶴嘴)",
            categoryId: 7,
            description:
              "細口、鶴嘴兩種選擇，英國知名STRIX溫控系統。細口壺：口徑小，水柱接近垂直90度，適合新手與一般使用者。鶴嘴壺：口徑較大，可依沖泡方式不同自由掌控水流，適合老手。※600 ml / 800 ml 底座尺寸不同，不可共用",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 68,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2997.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 69,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3009.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 70,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3010.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 71,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3011.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 72,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3012.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 73,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3013.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 74,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2998.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 75,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2999.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 76,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3001.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 77,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3003.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 78,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3004.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 79,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3005.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 80,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3005.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 81,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3006.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 82,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3007.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 83,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3008.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 59,
                productId: 27,
                variantName: "600 ml 黑色細口",
                variantPrice: 2980,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 745,
              },
              {
                id: 60,
                productId: 27,
                variantName: "600 ml 白色細口",
                variantPrice: 3180,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 795,
              },
              {
                id: 55,
                productId: 27,
                variantName: "800 ml 黑色細口",
                variantPrice: 3380,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 845,
              },
              {
                id: 56,
                productId: 27,
                variantName: "800 ml 白色細口",
                variantPrice: 3580,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 895,
              },
              {
                id: 57,
                productId: 27,
                variantName: "800 ml 黑色鶴嘴",
                variantPrice: 3780,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 945,
              },
              {
                id: 58,
                productId: 27,
                variantName: "800 ml 白色鶴嘴",
                variantPrice: 3980,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 995,
              },
            ],
          },
          {
            id: 28,
            name: "漫・拾光手沖壺",
            categoryId: 7,
            description:
              "「慢」遊在温度與香氣間\n啜「提」一天的疲恩忙碌\n感受細微的「光」影變化,\n\n溫柔喚醒喉嚨齒類間,安靜的喧囂。\n拋開善感自在的沉醉,啜飲片刻熱烈。\n平凡或特別、清淡或濃烈·「開支闊葉」或「溶解淬煉」。\n细细品味掏選——温淳的慢活美學",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 84,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2853.png?fit=731%2C640&ssl=1",
              },
            ],
            Variants: [
              {
                id: 61,
                productId: 28,
                variantName: "250ml",
                variantPrice: 599,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 150,
              },
            ],
          },
        ],
      },
      {
        id: 8,
        subCategory: "咖啡電子秤",
        Products: [
          {
            id: 29,
            name: "TIMEMORE 泰摩 黑鏡basic 手沖咖啡電子秤",
            categoryId: 8,
            description:
              "手沖咖啡、義式咖啡兩用，三種沖煮模式：常規、自動手沖、義式手沖，流速偵測，自動沖煮計時。精準度達0.1g，最大負重2 kg。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 85,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2957.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 86,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2968.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 87,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2969.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 88,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2958.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 89,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2959.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 90,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2960.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 91,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2961.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 92,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2962.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 93,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2963.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 94,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2964.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 95,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2965.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 96,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2967.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 97,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2957.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 98,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2968.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 99,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2969.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 100,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2958.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 101,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2959.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 102,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2960.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 103,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2961.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 104,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2962.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 105,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2963.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 106,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2964.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 107,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2965.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 108,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2967.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 62,
                productId: 29,
                variantName: "黑色",
                variantPrice: 1380,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 345,
              },
              {
                id: 63,
                productId: 29,
                variantName: "白色",
                variantPrice: 1580,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 395,
              },
            ],
          },
          {
            id: 30,
            name: "TIMEMORE 泰摩 黑鏡nano 手沖咖啡電子秤",
            categoryId: 8,
            description:
              "細口、鶴嘴兩種選擇\n英國知名STRIX溫控系統\n細口壺：口徑小，水柱接近垂直90度，適合新手與一般使用者\n鶴嘴壺：口徑較大，可依沖泡方式不同自由掌控水流，適合老手\n※600 ml / 800 ml 底座尺寸不同，不可共用",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 109,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2995.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 110,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2984.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 111,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2985.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 112,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2986.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 113,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2987.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 114,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2988.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 115,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2989.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 116,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2990.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 117,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2991.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 118,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2992.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 119,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2993.jpeg?fit=800%2C800&ssl=1",
              },
              {
                id: 120,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2994.jpeg?fit=800%2C800&ssl=1",
              },
            ],
            Variants: [
              {
                id: 64,
                productId: 30,
                variantName: "黑色",
                variantPrice: 2580,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 645,
              },
            ],
          },
        ],
      },
      {
        id: 9,
        subCategory: "磨豆機",
        Products: [
          {
            id: 31,
            name: "TIMEMORE 泰摩 栗子 C2 手搖磨豆機",
            categoryId: 9,
            description:
              "同價位最高CP值——經典栗子C2手搖磨豆機，CNC全鋁機身雙軸成設計，多檔為控制研磨粗細，升級版本金屬粉桶，磨豆倉容量：25 g。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 121,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3015.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 122,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3016.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 123,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3027.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 124,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3017.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 125,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3034.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 126,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3019.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 127,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3036.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 128,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3021.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 129,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3022.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 130,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3039.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 131,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3024.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 65,
                productId: 31,
                variantName: "黑色",
                variantPrice: 1580,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 395,
              },
              {
                id: 66,
                productId: 31,
                variantName: "白色",
                variantPrice: 1580,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 395,
              },
            ],
          },
          {
            id: 32,
            name: "TIMEMORE 泰摩 栗子 C3 手搖磨豆機",
            categoryId: 9,
            description:
              "栗子C3手搖磨豆機，升級CNC六芒星雙層磨芯，多檔為控制研磨粗細，升級版本金屬粉桶，新色陽極曜石黑，磨豆倉容量：25 g。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 132,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3043.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 133,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3044.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 134,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3048.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 135,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3049.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 136,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3050.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 137,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3051.jpeg?fit=1167%2C1055&ssl=1",
              },
              {
                id: 138,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3052.jpeg?fit=1077%2C1083&ssl=1",
              },
              {
                id: 139,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3054.jpeg?fit=1077%2C1122&ssl=1",
              },
              {
                id: 140,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3055.jpeg?fit=1076%2C1085&ssl=1",
              },
              {
                id: 141,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3056.jpeg?fit=1077%2C1074&ssl=1",
              },
              {
                id: 142,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3057.jpeg?fit=1080%2C1081&ssl=1",
              },
              {
                id: 143,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3058.jpeg?fit=1105%2C1077&ssl=1",
              },
            ],
            Variants: [
              {
                id: 67,
                productId: 32,
                variantName: "黑色",
                variantPrice: 1880,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 470,
              },
            ],
          },
          {
            id: 33,
            name: "TIMEMORE 泰摩 栗子 C2 MAX 手搖磨豆機",
            categoryId: 9,
            description:
              "經典栗子C2加大磨豆倉，更適合家庭多人使用。CNC全鋁機身雙軸成設計，多檔為控制研磨粗細，升級版本金屬粉桶，磨豆倉容量：30-35 g。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 144,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3028.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 145,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3040.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 146,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3041.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 147,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3019.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 148,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3029.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 149,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3030.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 150,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3032.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 151,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3033.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 152,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3034.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 153,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3036.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 154,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3037.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 155,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3038.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 156,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_3039.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 68,
                productId: 33,
                variantName: "黑色",
                variantPrice: 1980,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 495,
              },
              {
                id: 69,
                productId: 33,
                variantName: "白色",
                variantPrice: 1980,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 495,
              },
            ],
          },
          {
            id: 34,
            name: "TIMEMORE 泰摩 栗子go電動磨豆機",
            categoryId: 9,
            description:
              "最強CP值充電磨豆機，卡豆智能自動迴旋，鋒利度高精準磨芯，15檔研磨粗細控制，研磨完畢智能停止，過熱過載自動斷電。",
            stock: 0,
            roast: null,
            aroma: null,
            sour: null,
            bitter: null,
            thickness: null,
            isCoffee: false,
            viewCount: 0,
            createdAt: "2023-10-25T11:20:48.000Z",
            updatedAt: "2023-10-25T11:20:48.000Z",
            Images: [
              {
                id: 157,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2982.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 158,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2971.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 159,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2972.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 160,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2973.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 161,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2974.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 162,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2975.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 163,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2976.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 164,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2977.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 165,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2978.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 166,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2979.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 167,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2980.jpeg?fit=1000%2C1000&ssl=1",
              },
              {
                id: 168,
                imgUrl:
                  "https://i0.wp.com/018-studio.com/wp-content/uploads/2022/06/IMG_2981.jpeg?fit=1000%2C1000&ssl=1",
              },
            ],
            Variants: [
              {
                id: 70,
                productId: 34,
                variantName: "磨砂黑",
                variantPrice: 3800,
                variantDescription: null,
                createdAt: "2023-10-25T11:20:48.000Z",
                updatedAt: "2023-10-25T11:20:48.000Z",
                discountedPrice: 950,
              },
            ],
          },
        ],
      },
    ],
  },
];
