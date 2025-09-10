import React, { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [item, setItems] = useState([]);

  //   add and remove from cart
  const addRemove = (product) => {
    setItems((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, { ...product, quantity: 1 }]
    );
  };

  // const remove
  const increaseQuantity = (id) => {
    setItems((prev) =>
      prev.map((e) => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e))
    );
  };

  const decreaseQuantity = (id) => {
    setItems((prev) => 
      prev.map((e) => (e.id === id ? { ...e, quantity: e.quantity - 1 } : e))
      .filter((e)=>e.quantity>0)
    );
  };

  const clearCart =()=>{
    setItems([]);
  }
  //checking whether
  const isInCart = (product) => {
    return item.some((e) => e.id === product.id);
  };
  return (
    <CartContext.Provider
      value={{
        item,
        setItems,
        addRemove,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//cusotmized hook for cart
export const useCart = () => useContext(CartContext);
export default CartContext;
