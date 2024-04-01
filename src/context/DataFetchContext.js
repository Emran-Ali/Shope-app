import { createContext, useEffect, useState } from "react";
import { API } from "../lib/api";

const DataFetchContext = createContext();

export const DataProvider = ({ children }) => {

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    API.get("products").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  let a ={}
  const getProduct = async (id) => {
    await API.get(`products/${id}`).then( (res) => {
      a = res.data;
    });
    return a;   
  };

  return (
    <DataFetchContext.Provider
      value={{
        getProduct,
        allProducts,
      }}
    >
      {children}
    </DataFetchContext.Provider>
  );
};

export default DataFetchContext;
