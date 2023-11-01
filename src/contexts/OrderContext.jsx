import { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

//Provider component
function OrderContextProvider({ children }) {
  //調控每個step要做什麼事，影響ProgressControl的button，FromPanel的換頁
  const [orderItem, setOrderItem] = useState(false);
  const [email, setEmail] = useState("");



  const OrderValueToShare = {
    orderItem,
    setOrderItem,
    email,
    setEmail,

  };

  return (
    <OrderContext.Provider value={OrderValueToShare}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContextProvider };
export default OrderContext;
