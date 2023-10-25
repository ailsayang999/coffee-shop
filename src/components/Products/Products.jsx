import React from "react";
import "./products.scss";
import { coffeeEquipmentProduct } from "Data";
import { getProductsCoffeeBean, getProductsCoffeeEquipment } from "api/product";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { bean } from "Data";

const ShowEmpty = () => {
  return <div className="empty-content">尚無資料</div>;
};

// YirgacheffeContent component
const YirgacheffeContent = ({ YirgacheffeArray }) => {
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
          {YirgacheffeArray.length === 0 && <ShowEmpty />}
          {YirgacheffeArray.length > 0 && YirgacheffeArray[0].category}
        </h2>
      </div>

      <div className="items">
        {YirgacheffeArray.length === 0 && <ShowEmpty />}
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
          })}
      </div>
    </>
  );
};
// GeishaContent component
const GeishaContent = ({ GeishaArray }) => {
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
          {GeishaArray[0].category}
        </h2>
      </div>

      <div className="items">
        {GeishaArray[0].Products.map(({ Images, name, id }, index) => {
          return (
            <div key={index} className="item">
              <RouterLink to={`/product_page/${id}`}>
                <img src={Images[0].imgUrl} alt="" className="item-img" />
                <div className="item-title">{name}</div>
              </RouterLink>
            </div>
          );
        })}
      </div>
    </>
  );
};
// SaleContent component
const SaleContent = ({ SaleArray }) => {
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
          {SaleArray[0].category}
        </h2>
      </div>

      <div className="items">
        {SaleArray[0].Products.map(({ Images, name, id }, index) => {
          return (
            <div key={index} className="item">
              <RouterLink to={`/product_page/${id}`}>
                <img src={Images[0].imgUrl} alt="" className="item-img" />
                <div className="item-title">{name}</div>
              </RouterLink>
            </div>
          );
        })}
      </div>
    </>
  );
};
// PremiumContent component
const PremiumContent = ({ PremiumArray }) => {
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
          {PremiumArray[0].category}
        </h2>
      </div>

      <div className="items">
        {PremiumArray[0].Products.map(({ Images, name, id }, index) => {
          return (
            <div key={index} className="item">
              <RouterLink to={`/product_page/${id}`}>
                <img src={Images[0].imgUrl} alt="" className="item-img" />
                <div className="item-title">{name}</div>
              </RouterLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Products = () => {
  const [coffeeBean, setCoffeeBean] = useState([]);
  const [coffeeEquipment, setCoffeeEquipment] = useState([]);

  //切換商品項目
  const [productShowContent, setProductShowContent] = useState("yirgacheffe");

  const handleChangeProductContent = (contentValue) => {
    setProductShowContent(contentValue);
    // console.log(contentValue);
  };

  // 取得個別咖啡豆種類
  const YirgacheffeArray = coffeeBean.filter((item) => {
    return item.category === "耶加雪夫系列";
  });

  const GeishaArray = coffeeBean.filter((item) => {
    return item.category === "藝伎豆";
  });

  const SaleArray = coffeeBean.filter((item) => {
    return item.category === "超值精選豆";
  });

  const PremiumArray = coffeeBean.filter((item) => {
    return item.category === "嚴選精品豆";
  });



  //取得商品資訊
  useEffect(() => {
    const getCoffeesBeanAsync = async () => {
      try {
        const backendCoffeeBean = await getProductsCoffeeBean();
        setCoffeeBean(backendCoffeeBean);
        console.log("backendCoffeeBean", backendCoffeeBean);
      } catch (error) {
        console.error(error);
      }
    };
    const getCoffeesEquipmentAsync = async () => {
      try {
        const backendCoffeeEquipment = await getProductsCoffeeEquipment();
        setCoffeeEquipment(backendCoffeeEquipment);
        console.log("backendCoffeeEquipment", backendCoffeeEquipment);
      } catch (error) {
        console.error(error);
      }
    };

    getCoffeesBeanAsync();
    getCoffeesEquipmentAsync();
  }, []);

  return (
    <div className="products-page">
      <div className="product-container">
        <div className="product-container-left">
          <div className="category-container">
            <h2>咖啡豆、濾掛式</h2>
            <ul>
              <li>
                <button
                  value={"yirgacheffe"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "yirgacheffe"
                      ? "navigate-active"
                      : ""
                  }`}
                >
                  耶加雪夫系列
                </button>
              </li>
              <li>
                <button
                  value={"geisha"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "geisha" ? "navigate-active" : ""
                  }`}
                >
                  藝伎豆
                </button>
              </li>
              <li>
                <button
                  value={"sale"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "sale" ? "navigate-active" : ""
                  }`}
                >
                  超值精選豆
                </button>
              </li>
              <li>
                <button
                  value={"premium"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "premium" ? "navigate-active" : ""
                  }`}
                >
                  嚴選精品豆
                </button>
              </li>
            </ul>

            <h2>咖啡器材</h2>
            <ul>
              <li>
                <button
                  value={"grinder"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "grinder" ? "navigate-active" : ""
                  }`}
                >
                  磨豆機
                </button>
              </li>
              <li>
                <button
                  value={"cold-brew"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "cold-brew" ? "navigate-active" : ""
                  }`}
                >
                  冷萃壺、冰釀壺
                </button>
              </li>
              <li>
                <button
                  value={"electronic-scale"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "electronic-scale"
                      ? "navigate-active"
                      : ""
                  }`}
                >
                  咖啡電子秤
                </button>
              </li>
              <li>
                <button
                  value={"coffee-dripper"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "coffee-dripper"
                      ? "navigate-active"
                      : ""
                  }`}
                >
                  咖啡濾杯
                </button>
              </li>
              <li>
                <button
                  value={"kettle"}
                  onClick={(e) => handleChangeProductContent(e.target.value)}
                  className={`product-filter-btn ${
                    productShowContent === "kettle" ? "navigate-active" : ""
                  }`}
                >
                  手沖壺
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="product-container-right">
          <section className="coffee item-container" id="coffee">
            <div className="product-category-title">
              <h1> 咖啡豆、濾掛式咖啡</h1>
            </div>

            {productShowContent === "yirgacheffe" && (
              <YirgacheffeContent YirgacheffeArray={YirgacheffeArray} />
            )}
            {productShowContent === "geisha" && (
              <GeishaContent GeishaArray={GeishaArray} />
            )}
            {productShowContent === "sale" && (
              <SaleContent SaleArray={SaleArray} />
            )}
            {productShowContent === "premium" && (
              <PremiumContent PremiumArray={PremiumArray} />
            )}
          </section>

          <section className="equipment item-container" id="equipment">
            <div className="product-category-title">
              <h1> 咖啡器材</h1>
            </div>
            <div className="items">
              {/* {productShowContent === "grinder" && <GrinderContent />}
              {productShowContent === "cold-brew" && <ColdBrewContent />}
              {productShowContent === "electronic-scale" && (
                <ElectronicScaleContent />
              )}
              {productShowContent === "coffee-dripper" && (
                <CoffeeDripperContent />
              )}
              {productShowContent === "kettle" && <KettleContent />} */}

              {coffeeEquipmentProduct.map(({ img, title, id }, index) => {
                return (
                  <div key={index} className="item">
                    <RouterLink to={`/product_page/${id}`}>
                      <img src={img} alt="" className="item-img" />
                      <div className="item-title">{title}</div>
                    </RouterLink>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
