import React, { useState, useEffect } from "react";
import "./productBeanDetail.scss";
import { Link, useParams } from "react-router-dom";
import { getBeansById } from "api/product";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import beanAndDrip from "assets/images/beanAndDrip.png";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BiSolidChevronsDown } from "react-icons/bi";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

//////////Dummy Data
const dummySpecificBeanInfo = {
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
  createdAt: "2023-10-25T08:06:35.000Z",
  updatedAt: "2023-10-25T08:06:35.000Z",
  Category: {
    category: "耶加雪夫系列",
  },
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
      variantName: "濾掛",
      variantPrice: 35,
      variantDescription:
        "最低購買量5包！\n新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。適合尋求便利，想忙裡偷閒喝杯咖啡的你\n滿15包會用精美紙盒包裝\n最佳賞味期限為1個月",
      discountedPrice: 9,
    },
    {
      id: 2,
      variantName: "半磅裝",
      variantPrice: 350,
      variantDescription:
        "看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。最佳賞味期限為2個月。",
      discountedPrice: 88,
    },
  ],
};

const dummySpecificEpuipmentInfo = {
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
  createdAt: "2023-10-26T05:46:06.000Z",
  updatedAt: "2023-10-26T05:46:06.000Z",
  Category: { category: "磨豆機" },
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
      variantName: "黑色",
      variantPrice: 1980,
      variantDescription: null,
      discountedPrice: 495,
    },
    {
      id: 69,
      variantName: "白色",
      variantPrice: 1980,
      variantDescription: null,
      discountedPrice: 495,
    },
  ],
};

// 顯示尚無資料
const ShowEmpty = () => {
  return <div className="empty-content">尚無資料</div>;
};

function ProductDetail() {
  const { productBeanId } = useParams(); //grab parameters from route, you can use the productId in the followings

  const productCategoryArray = [
    {
      id: 1,
      mainCategory: "咖啡豆、濾掛式",
      subCategory: ["耶加雪夫系列", "藝伎豆", "超值精選豆", "嚴選精品豆"],
    },
    {
      id: 2,
      mainCategory: "咖啡器材",
      subCategory: [
        "磨豆機",
        "冷萃壺、冰釀壺",
        "咖啡電子秤",
        "咖啡濾杯",
        "手沖壺",
      ],
    },
  ];
  const beanCategory = productCategoryArray[0].subCategory;

  const [specificBean, setSpecificBean] = useState(false);
  const [categoryNum, setCategoryNum] = useState(0);
  const [productCategory, setProductCategory] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(false);

  useEffect(() => {
    const getBeansByIdAsync = async () => {
      try {
        const backendSpecificCoffeeBean = await getBeansById(productBeanId);
        //const stringEp = JSON.stringify(backendSpecificCoffeeBean);
        console.log("backendSpecificCoffeeBean", backendSpecificCoffeeBean); //拿到特定咖啡資料
        setSpecificBean(backendSpecificCoffeeBean);
        //預設價格
        setSelectedOptionPrice(
          backendSpecificCoffeeBean.Variants[0].variantPrice
        );
        setProductCategory();
      } catch (error) {
        console.error(error);
      }
    };

    getBeansByIdAsync();
  }, []);

  const handleDecrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    //找出價格
    const price = specificBean.Variants.filter(
      (item) => item.variantName === event.target.value
    );
    setSelectedOptionPrice(price[0].variantPrice);
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      alert("請選擇商品數量");
    } else {
      // 在這裡處理將商品添加到購物車的邏輯
      alert(
        `已將${quantity}個 "${
          specificBean.name
        }" ${selectedOption} 添加到購物車 \n 總共是：${
          selectedOptionPrice * quantity
        }`
      );
      setQuantity(0);
      setSelectedOption("default");
    }
  };

  // 咖啡種類array

  const [otherRelativeBeanArray, setOtherRelativeBeanArray] = useState([]);

  // if (specificBean) {
  //   setCategoryNum(specificBean.categoryId - 1)
  //   // 其他相關商品:
  //   //先找出otherBean所有Product
  //   const sameCategoryBackendBean = bean.filter((item) => {
  //     return item.category === beanCategory[categoryNum];
  //   });
  //   setOtherRelativeBeanArray(sameCategoryBackendBean[0].Products);
  // }

  return (
    <>
      <Header />
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-info-container">
            <div className="product-info-left">
              {!specificBean && <ShowEmpty />}
              {specificBean && (
                <img
                  src={specificBean.Images[0].imgUrl}
                  alt={specificBean.title}
                  className="product-img"
                />
              )}
            </div>
            <div className="product-info-right">
              {!specificBean && <ShowEmpty />}
              {specificBean && (
                <>
                  <h2>{specificBean.name}</h2>
                  {/* <h2>{productCategory}</h2> */}
                  <p>{specificBean.description}</p>
                  <ul>
                    {specificBean.roast !== null && (
                      <li>焙度: {specificBean.roast}</li>
                    )}

                    {specificBean.aroma !== null && (
                      <li>香味: {specificBean.aroma}</li>
                    )}
                    {specificBean.sour !== null && (
                      <li>酸味: {specificBean.sour}</li>
                    )}
                    {specificBean.sour !== null && (
                      <li>苦味: {specificBean.bitter}</li>
                    )}
                    {specificBean.thickness !== null && (
                      <li>濃郁: {specificBean.thickness}</li>
                    )}
                  </ul>
                  <p>價格: {selectedOptionPrice}</p>
                  <div className="buy-it-container">
                    <div className="selection-container">
                      <select
                        className="product-selection-box"
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        {specificBean.Variants.map(({ variantName }, index) => {
                          return (
                            <option value={variantName} key={index}>
                              {variantName}
                            </option>
                          );
                        })}
                      </select>

                      <div className="down-arrow-icon-container">
                        <BiSolidChevronsDown className="down-arrow-icon" />
                      </div>
                    </div>

                    <div className="quantity-content-container">
                      <div>購買數量：</div>
                      <div className="quantity-container">
                        <AiFillMinusCircle
                          className="minus-icon"
                          onClick={handleDecrementQuantity}
                        />

                        <span className="item-quantity">{quantity}</span>

                        <AiFillPlusCircle
                          className="plus-icon"
                          onClick={handleIncrementQuantity}
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleAddToCart} className="add-btn btn">
                    加入購物車
                  </button>
                </>
              )}
            </div>
          </div>

          {!specificBean && <ShowEmpty />}
          {specificBean && (
            <div className="product-description-container">
              <h1 className="product-description-title">商品描述</h1>
              <div className="product-description-top">
                <img
                  src={beanAndDrip}
                  alt="bean-drip-img"
                  className="bean-drip-img"
                  loading="lazy"
                />
              </div>
              <div className="product-description-bottom">
                <span className="product-description">
                  {"精品咖啡豆：每包½磅 (藝伎豆為每包¼磅)"}
                  <p>
                    看得到咖啡豆的外觀及色澤，適合家裡有咖啡機或享受自己磨豆，手作咖啡的你。
                    最佳賞味期限為2個月。
                  </p>
                </span>
                <span className="product-description">
                  濾掛式咖啡：每包11g
                  <p>
                    低購買量5包！
                    新鮮的豆子磨成粉後，馬上進行真空包裝，拆開即可沖泡。
                    適合尋求便利，想忙裡偷閒喝杯咖啡的你。
                    滿15包會用精美紙盒包裝 最佳賞味期限為1個月。
                  </p>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="other-relative-product-container">
          <h1>相關商品</h1>
          {/* Swiper Pagination */}
          {!specificBean && <ShowEmpty />}
          {specificBean && (
            <Swiper
              // lazy={true}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="other-relative-product"
            >
              {otherRelativeBeanArray.map(({ name, id, Images }) => {
                return (
                  <SwiperSlide
                    className="other-relative-product__item"
                    key={id}
                  >
                    <RouterLink to={`/product_page/${id}`}>
                      <div className="other-relative-product__img-wrapper">
                        <img
                          src={Images[0].imgUrl}
                          alt=""
                          className="other-relative-product__img"
                          loading="lazy"
                        />
                      </div>
                    </RouterLink>

                    <div className="other-relative-product-title">{name}</div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}

          <Link to="/product_page" className="link-back-to-product-page">
            <BsArrowLeftCircleFill className="link-back-to-product-page-icon" />
            返回商品列表
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;
