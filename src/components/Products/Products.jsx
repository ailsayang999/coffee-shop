import React from "react";
import "./products.scss";
import { coffeeEquipmentProduct } from "Data";
import { getAllProduct } from "api/product";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AllProductDummyData } from "Data";
import { BiSolidCoffeeBean } from "react-icons/bi";

// 顯示尚無資料
const ShowEmpty = () => {
  return <div className="empty-content">尚無資料</div>;
};

// 右側顯示商品類別項目
const ShowProductContent = ({ productShowCategory, product }) => {
  return (
    <>
      <div className="product-category-subtitle">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "20px",
          }}
        >
          {productShowCategory}
        </h2>
      </div>

      <div className="items">
        {product.filter((item) => {
          return item.subCategory === productShowCategory;
        }).length === 0 && <ShowEmpty />}

        {product.filter((item) => {
          return item.subCategory === productShowCategory;
        }).length > 0 &&
          product
            .filter((item) => {
              return item.subCategory === productShowCategory;
            })[0]
            .Products.map(({ Images, name, id }, index) => {
              return (
                <div key={index} className="item">
                  <RouterLink to={`/product_page/${id}`}>
                    <img src={Images[0].imgUrl} alt="" className="item-img" />
                    <div className="item-title">{name}</div>
                  </RouterLink>
                </div>
              );
            })}

        {/* {YirgacheffeArray.length === 0 && <ShowEmpty />}
        {YirgacheffeArray.length > 0 &&
          YirgacheffeArray[0].Products.map(({ Images, name, id }, index) => {
            return (
              <div key={index} className="item">
                <RouterLink to={`/product_page/${id}`}>
                  <img src={Images[0].imgUrl} alt="" className="item-img" />
                  <div className="item-title">{name}</div>
                </RouterLink>
              </div>
            );
          })} */}
      </div>
    </>
  );
};

// 左側顯示商品類別Filter
const FilterList = ({
  productShowCategory,
  handleChangeProductContent,
  productCategoryArray,
}) => {
  return (
    <>
      {productCategoryArray.map(({ mainCategory, subCategory }, index) => {
        return (
          <div key={index}>
            {/* 主類別 */}
            <h2>{mainCategory}</h2>

            {/* 次類別 (filter按鈕) */}
            <ul>
              {subCategory.map((item, index) => {
                return (
                  <li key={index}>
                    <BiSolidCoffeeBean className="filter-icon" />
                    <button
                      value={item}
                      onClick={(e) =>
                        handleChangeProductContent(e.target.value)
                      }
                      className={`product-filter-btn ${
                        productShowCategory === item ? "navigate-active" : ""
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const Products = () => {
  const [coffeeBean, setCoffeeBean] = useState(false); //存後端傳來的所有咖啡豆資料
  const [coffeeEquipment, setCoffeeEquipment] = useState(false); //存後端傳來的所有咖啡周邊資料

  //商品顯示類別state
  const [productShowCategory, setProductShowCategory] =
    useState("耶加雪夫系列"); //初始社
  //左側切換商品類別state
  const handleChangeProductContent = (contentValue) => {
    setProductShowCategory(contentValue);
  };

  // 向後端取得所有商品
  useEffect(() => {
    const getAllProductAsync = async () => {
      try {
        //拿到所有產品資訊
        const backendAllProduct = await getAllProduct();
        //console.log("backendAllProduct", backendAllProduct);

        //分類商品
        //分出咖啡Arr
        const backendCoffeeBean = backendAllProduct?.filter((item) => {
          return item.superCategoryName === "咖啡豆、濾掛式";
        });
        // 更新coffeeBean
        setCoffeeBean(backendCoffeeBean[0]?.Categories); //會是一個 Arr

        const backendCoffeeEquipment = backendAllProduct?.filter((item) => {
          return item.superCategoryName === "咖啡器材";
        });
        // 更新coffeeEquipment
        setCoffeeEquipment(backendCoffeeEquipment[0]?.Categories); //會是一個 Arr
      } catch (error) {
        console.error(error);
      }
    };

    getAllProductAsync();
  }, []);

  // 左側刪選器元件 商品種類分類
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

  return (
    <div className="products-page">
      <div className="product-container">
        <div className="product-container-left">
          <div className="category-container">
            <FilterList
              productShowCategory={productShowCategory}
              handleChangeProductContent={handleChangeProductContent}
              productCategoryArray={productCategoryArray}
            />
          </div>
        </div>

        <div className="product-container-right">
          {!coffeeBean && <ShowEmpty />}
          {coffeeBean &&
            coffeeBean?.filter((i) => i.subCategory === productShowCategory)
              .length > 0 && (
              <section className="item-container" id="coffee">
                <div className="product-category-title">
                  <h1> 咖啡豆、濾掛式咖啡</h1>
                </div>
                {!coffeeBean && <ShowEmpty />}
                {coffeeBean && (
                  <ShowProductContent
                    productShowCategory={productShowCategory}
                    product={coffeeBean}
                  />
                )}
              </section>
            )}

          {coffeeEquipment &&
            coffeeEquipment?.filter(
              (i) => i.subCategory === productShowCategory
            ).length > 0 && (
              <section className="item-container" id="equipment">
                <div className="product-category-title">
                  <h1> 咖啡器材</h1>
                </div>
                {!coffeeEquipment && <ShowEmpty />}
                {coffeeEquipment && (
                  <ShowProductContent
                    productShowCategory={productShowCategory}
                    product={coffeeEquipment}
                  />
                )}
              </section>
            )}
        </div>
      </div>
    </div>
  );
};

export default Products;
