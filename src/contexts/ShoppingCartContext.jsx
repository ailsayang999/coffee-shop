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
        //找到所選的variantName所對應到的id
        const variantId = singleProductVariantArr.find(
          (item) => item.variantName === variantName
        ).id;
        //如果是有活動的情況
        if (event.length > 0) {
          return [
            ...currItems,
            {
              id,
              name,
              quantity: 1,
              variantName,
              variantPrice: variantDiscountedPrice, //用特價去算
              singleProductImg,
              variantId,
            },
          ];
        }
        //如果是沒活動的情況
        if (event.length === 0) {
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
            },
          ];
        }
      } else if (foundItem) {
        //如果已經曾經有加入購物車的商品，只要更新同variant的quantity
        return currItems.map((item) => {
          if (item.variantName === variantName && item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id, variantName) {
    const foundItemQuantity = cartItems.find(
      (item) => item.variantName === variantName && item.id === id
    )?.quantity;
    
    setCartItems((currItems) => {
      if (foundItemQuantity === 1) {
        return currItems.filter(
          (item) => item.id !== id || item.variantName !== variantName
        ); //remove the item from the rest of the items
      } else {
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
