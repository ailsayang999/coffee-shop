import { createContext, useState } from "react";
import productsData from "data/productsData.js";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItemsArray, setCartItemsArray] = useState(productsData);

  //setTotalPrice
  const [totalPrice, setTotalPrice] = useState(0);

  const CartValueToShare = {
    cartItemsArray,
    setCartItemsArray,
    totalPrice,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={CartValueToShare}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
