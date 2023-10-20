import React from "react";
import "./products.scss";
import { coffeeBeanProduct, coffeeEquipmentProduct } from "Data";
import { getProductsCoffeeBean, getProductsCoffeeEquipment } from "api/product";
import { useEffect, useState } from "react";

const Products = () => {
  const [coffeeBean, setCoffeeBean] = useState("");
  const [coffeeEquipment, setCoffeeEquipment] = useState("");

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
        <section className="coffee item-container" id="coffee">
          <div className="product-category-title">
            <h1> 咖啡豆、濾掛式咖啡</h1>
          </div>
          <div className="items">
            {coffeeBeanProduct.map(({ img, title }, index) => {
              return (
                <div key={index} className="item">
                  <img src={img} alt="" className="item-img" />
                  <div className="item-title">{title}</div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="equipment item-container" id="equipment">
          <div className="product-category-title">
            <h1> 咖啡器材</h1>
          </div>
          <div className="items">
            {coffeeEquipmentProduct.map(({ img, title }, index) => {
              return (
                <div key={index} className="item">
                  <img src={img} alt="" className="item-img" />
                  <div className="item-title">{title}</div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
