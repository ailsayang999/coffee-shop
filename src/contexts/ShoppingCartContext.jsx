import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  //const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []); // key, initialValue
  const [isOpen, setIsOpen] = useState(false);

  //setTotalPrice
  const [totalPrice, setTotalPrice] = useState(0);

  const cartQuantity = cartItems.length;

  const toggleCart = () => setIsOpen(!isOpen);

  function getItemQuantity(id, variantName) {
    //如果有找到產品，要繼續找是不是同一個variant
    const foundItem = cartItems.find(
      (item) => item.variantName === variantName && item.id === id
    );

    return foundItem ? foundItem.quantity : 0;
  }

  function increaseCartQuantity(
    id,
    name,
    variantName,
    variantPrice,
    variantDiscountedPrice,
    singleProductImg,
    singleProductVariantArr,
    event
  ) {
    const foundItem = cartItems.find(
      (item) => item.variantName === variantName && item.id === id
    );

    setCartItems((currItems) => {
      //如果還沒出現在購物車過的商品：
      if (foundItem == null) {
        //找到所選的variantName所對應到的id 要添加到新item object裡
        const variantId = singleProductVariantArr.find(
          (item) => item.variantName === variantName
        ).id; //1

        //如果是有活動Event的情況
        if (event.length > 0) {
          //如果此商品有sales(處理特價條件)
          if (
            singleProductVariantArr?.find((i) => i.variantName === variantName)
              ?.salesOfProduct?.length > 0
          ) {
            //找出threshold === 0（一開始就打折）的狀態處理
            if (
              singleProductVariantArr?.find(
                (i) => i.variantName === variantName
              )?.salesOfProduct[0]?.threshold === 0
            ) {
              return [
                ...currItems,
                {
                  id,
                  name,
                  quantity: 1,
                  variantName,
                  variantPrice:
                    variantDiscountedPrice *
                    singleProductVariantArr?.find(
                      (i) => i.variantName === variantName
                    )?.salesOfProduct[0]?.discount, //variantDiscountedPrice直接乘上sales，因為threshold === 0 一開始就特價(例如藝伎豆)
                  singleProductImg,
                  variantId,
                  variantDiscountedPrice,
                  singleProductVariantArr,
                },
              ];
            } else if (
              singleProductVariantArr?.find(
                (i) => i.variantName === variantName
              )?.salesOfProduct[0]?.threshold !== 0
            ) {
              //因為是還沒出現在購物車過的商品，threshold !== 0，直接用event discount price當預設金額就好
              return [
                ...currItems,
                {
                  id,
                  name,
                  quantity: 1,
                  variantName,
                  variantPrice: variantDiscountedPrice, //用event特價去算，因為是還沒出現在購物車過的商品
                  singleProductImg,
                  variantId,
                  variantDiscountedPrice,
                  singleProductVariantArr,
                },
              ];
            }
          }

          //如果此商品沒有sales，直接用event特價去算
          if (
            singleProductVariantArr?.find((i) => i.variantName === variantName)
              ?.salesOfProduct?.length === 0
          ) {
            return [
              ...currItems,
              {
                id,
                name,
                quantity: 1,
                variantName,
                variantPrice: variantDiscountedPrice, //直接用event特價去算
                singleProductImg,
                variantId,
                variantDiscountedPrice,
                singleProductVariantArr,
              },
            ];
          }
        }

        //如果是沒活動Event的情況
        if (event.length === 0) {
          //如果此商品有sales(處理特價條件)
          if (
            singleProductVariantArr?.find((i) => i.variantName === variantName)
              ?.salesOfProduct?.length > 0
          ) {
            //找出threshold === 0（一開始就打折）的狀態處理
            if (
              singleProductVariantArr?.find(
                (i) => i.variantName === variantName
              )?.salesOfProduct[0]?.threshold === 0
            ) {
              return [
                ...currItems,
                {
                  id,
                  name,
                  quantity: 1,
                  variantName,
                  variantPrice:
                    variantPrice *
                      singleProductVariantArr?.find(
                        (i) => i.variantName === variantName
                      )?.salesOfProduct[0]?.threshold ===
                    0, //variantPrice原價直接乘上sales，因為threshold === 0 一開始就特價(例如藝伎豆)
                  singleProductImg,
                  variantId,
                  variantDiscountedPrice,
                  singleProductVariantArr,
                },
              ];
            } else if (
              singleProductVariantArr?.find(
                (i) => i.variantName === variantName
              )?.salesOfProduct[0]?.threshold !== 0
            ) {
              //因為是還沒出現在購物車過的商品，threshold !== 0，直接用variantPrice原價當預設金額就好
              return [
                ...currItems,
                {
                  id,
                  name,
                  quantity: 1,
                  variantName,
                  variantPrice: variantPrice, //用event特價去算，因為是還沒出現在購物車過的商品
                  singleProductImg,
                  variantId,
                  variantDiscountedPrice,
                  singleProductVariantArr,
                },
              ];
            }
          }

          //如果此商品沒sales （沒event也沒sales，用原價去算）
          if (
            singleProductVariantArr?.find((i) => i.variantName === variantName)
              ?.salesOfProduct?.length === 0
          ) {
            return [
              ...currItems,
              {
                id,
                name,
                quantity: 1,
                variantName,
                variantPrice: variantPrice, //用原價去算
                singleProductImg,
                variantId,
                variantDiscountedPrice,
                singleProductVariantArr,
              },
            ];
          }
        }
      } else if (foundItem) {
        //如果已經曾經有加入購物車的商品
        //如果此商品有sales(處理特價條件);
        if (
          singleProductVariantArr?.find((i) => i.variantName === variantName)
            ?.salesOfProduct?.length > 0
        ) {
          if (
            //達到可以特價條件的瞬間，改變variantPrice
            currItems.find(
              (item) => item.variantName === variantName && item.id === id
            ).quantity +
              1 ===
            singleProductVariantArr?.find((i) => i.variantName === variantName)
              ?.salesOfProduct[0]?.threshold
          ) {
            return currItems.map((item) => {
              if (item.variantName === variantName && item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                  variantPrice: Math.round(
                    item.variantPrice *
                      singleProductVariantArr?.find(
                        (i) => i.variantName === variantName
                      )?.salesOfProduct[0]?.discount //原本的金額再乘上discount
                  ),
                };
              } else {
                return item;
              }
            });
          } else {
            return currItems.map((item) => {
              if (item.variantName === variantName && item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          }
        }

        //如果此商品沒有sales，只要更新同variant的quantity
        if (
          singleProductVariantArr?.find((i) => i.variantName === variantName)
            ?.salesOfProduct?.length === 0
        ) {
          return currItems.map((item) => {
            if (item.variantName === variantName && item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      }
    });
  }

  function decreaseCartQuantity(
    id,
    variantName,
    variantPrice,
    variantDiscountedPrice,
    singleProductVariantArr,
    event
  ) {
    const foundItemQuantity = cartItems.find(
      (item) => item.variantName === variantName && item.id === id
    )?.quantity;



    setCartItems((currItems) => {
      if (foundItemQuantity === 1) {
        return currItems.filter(
          (item) => item.id !== id || item.variantName !== variantName
        ); //remove the item from the rest of the items
      } else if (
        singleProductVariantArr?.find((i) => i.variantName === variantName)
          ?.salesOfProduct?.length > 0
      ) {
        //1
        //如果此商品有sales(處理特價條件);
        if (
          foundItemQuantity <=
          singleProductVariantArr?.find((i) => i.variantName === variantName)
            ?.salesOfProduct[0]?.threshold //4
        ) {
          //如果是有event，回歸到variantDiscountedPrice
          if (event.length > 0) {
            return currItems.map((item) => {
              if (item.variantName === variantName && item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                  variantPrice: variantDiscountedPrice,
                };
              } else {
                return item;
              }
            });
          }

          // 如果是沒有event，回歸到variantPrice原價
          if (event.length === 0) {
            return currItems.map((item) => {
              if (item.variantName === variantName && item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                  variantPrice: variantPrice,
                };
              } else {
                return item;
              }
            });
          }
        }
        //還有達到sale條件特價，則price維持不變
        if (
          foundItemQuantity >
          singleProductVariantArr?.find((i) => i.variantName === variantName)
            ?.salesOfProduct[0]?.threshold
        ) {
          return currItems.map((item) => {
            if (item.variantName === variantName && item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      } else {
        //如果此商品沒有sales; 不用處理他的price
        return currItems.map((item) => {
          if (item.variantName === variantName && item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id, variantName) {
    setCartItems((currItems) => {
      return currItems.filter(
        (item) => !(item.id === id && item.variantName === variantName)
      );
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        toggleCart,
        cartQuantity,
        cartItems,
        totalPrice,
        setTotalPrice,
        setCartItems,
        setIsOpen,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
