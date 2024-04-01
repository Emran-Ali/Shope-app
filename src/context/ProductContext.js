import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [addedItems, setAddedItem] = useState([]);

  const addQuantity = (id) => {
    const AllProduct = [...addedItems];
    AllProduct[id].quantity += 1;
    setAddedItem([...AllProduct]);
  };

  const removeQuantity = (id) => {
    let AllProduct = [...addedItems];
    AllProduct[id].quantity -= 1;
    if (AllProduct[id].quantity <= 0) {
      AllProduct.splice(id, 1);
    }
    setAddedItem([...AllProduct]);
  };

  const addItem = (product) => {
    const pro = addedItems.filter((obj) => obj.id !== product.id);
    product.quantity = product.quantity ? Number(product.quantity) + 1 : 1;
    setAddedItem([...pro, product]);
  };

  return (
    <ProductContext.Provider
      value={{
        addedItems,
        addItem,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
