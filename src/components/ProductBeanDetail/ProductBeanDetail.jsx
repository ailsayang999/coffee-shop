import React, { useState, useEffect } from "react";
import "./productBeanDetail.scss";
import { Link, useParams } from "react-router-dom";
import { coffeeBeanProduct, bean } from "Data";
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
const specificBeanInfo = {
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
  createdAt: "2023-10-23T11:46:05.000Z",
  updatedAt: "2023-10-23T11:46:05.000Z",
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
const categoryNum = specificBeanInfo.categoryId - 1;

// 咖啡種類array
const beanCategory = bean.map((item) => {
  return item.category;
});

// 其他相關商品:
//先找出otherBean所有Product
const sameCategoryBackendBean = bean.filter((item) => {
  return item.category === beanCategory[categoryNum];
});

const otherRelativeBeanArray = sameCategoryBackendBean[0].Products;

function ProductDetail() {
  const { productBeanId } = useParams(); //grab parameters from route, you can use the productId in the followings

  const [specificBean, setSpecificBean] = useState(specificBeanInfo);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(specificBeanInfo.Variants[0].variantPrice);

  useEffect(() => {
    const getBeansByIdAsync = async () => {
      try {
        const backendSpecificCoffeeBean = await getBeansById(productBeanId);
        console.log("backendSpecificCoffeeBean", backendSpecificCoffeeBean); //拿到特定咖啡資料
        setSpecificBean(backendSpecificCoffeeBean);
      } catch (error) {
        console.error(error);
      }
    };

    getBeansByIdAsync();
  }, []);

  if (!specificBean) {
    return <div>商品不存在</div>;
  }

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
    const price = specificBeanInfo.Variants.filter(
      (item) => item.variantName === event.target.value
    );
    setSelectedOptionPrice(price[0].variantPrice);
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      alert("請選擇商品數量");
    }  else {
      // 在這裡處理將商品添加到購物車的邏輯
      alert(
        `已將${quantity}個 "${
          specificBeanInfo.name
        }" ${selectedOption} 添加到購物車 \n 總共是：${
          selectedOptionPrice * quantity
        }`
      );
      setQuantity(0);
      setSelectedOption("default");
    }
  };

  return (
    <>
      <Header />
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-info-container">
            <div className="product-info-left">
              
              <img
                src={specificBean.Images[0].imgUrl}
                alt={specificBeanInfo.title}
                className="product-img"
              />
            </div>
            <div className="product-info-right">
              <h1>{specificBeanInfo.name}</h1>
              <h2>{beanCategory[categoryNum]}</h2>

              <p>{specificBeanInfo.description}</p>

              <ul>
                <li>焙度: {specificBeanInfo.roast}</li>
                <li>香味: {specificBeanInfo.aroma}</li>
                <li>酸味: {specificBeanInfo.sour}</li>
                <li>苦味: {specificBeanInfo.bitter}</li>
                <li>濃郁: {specificBeanInfo.thickness}</li>
              </ul>

              <p>價格: {selectedOptionPrice}</p>

              <div className="buy-it-container">
                <div className="selection-container">
                  <select
                    className="product-selection-box"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    {specificBeanInfo.Variants.map(
                      ({ id, variantName }, index) => {
                        return (
                          <option value={variantName} key={index}>
                            {variantName}
                          </option>
                        );
                      }
                    )}
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
            </div>
          </div>

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
                精品咖啡豆：每包½磅
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
                  適合尋求便利，想忙裡偷閒喝杯咖啡的你。 滿15包會用精美紙盒包裝
                  最佳賞味期限為1個月。
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="other-relative-product-container">
          <h1>相關商品</h1>
          {/* Swiper Pagination */}
          <Swiper
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
                <SwiperSlide className="other-relative-product__item" key={id}>
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
