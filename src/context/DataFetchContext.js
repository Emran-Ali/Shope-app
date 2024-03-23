import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataFetchContext = createContext();

export const DataProvider = ({ children }) => {

  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products",
  });


  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    client.get("").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  let a ={}
  const getProduct =async (id) => {
    await client.get(`/${id}`).then( (res) => {
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
