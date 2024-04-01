import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
const key = "CartItems";

export const ProductContextProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState([]);

  useEffect(() => {
    const updateData = localStorage.getItem(key);
    setCartItem(updateData ? JSON.parse(updateData): []);
  }, []);

  const addQuantity = (id) => {
    const AllProduct = [...cartItems];
    AllProduct[id].quantity += 1;
    setCartItem([...AllProduct]);
    localStorage.setItem(key, JSON.stringify([...AllProduct]));
  };

  const removeQuantity = (id) => {
    let AllProduct = [...cartItems];
    AllProduct[id].quantity -= 1;
    if (AllProduct[id].quantity <= 0) {
      AllProduct.splice(id, 1);
    }
    setCartItem([...AllProduct]);
    localStorage.setItem(key, JSON.stringify([...AllProduct]));
  };

  const addToCart = (product) => {
    const pro = cartItems.filter((obj) => obj.id !== product.id);
    product.quantity = product.quantity ? Number(product.quantity) + 1 : 1;
    setCartItem([...pro, product]);
    localStorage.setItem(key, JSON.stringify([...pro, product]));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
