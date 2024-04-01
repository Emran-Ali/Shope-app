import { createContext, useEffect, useState } from "react";
import { API } from "../lib/api";

const DataFetchContext = createContext();

export const DataProvider = ({ children }) => {

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    async function getAll() {
      await API.get("products").then((res) => {
        setAllProducts(res.data);
      });
    }
    getAll();
  }, []);

  let a ={}
  const getProduct = async (id) => {
    await API.get(`products/${id}`).then( (res) => {
      a = res.data;
    });
    return a;   
  };
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function getAll() {
  //     await API.get("products").then((res) => {
  //       setProducts(res.data);
  //     });
  //   }
  //   getAll();
  // }, []);

  const productByCategories = async (category) => {
    await API.get(`products/category/${category}`).then((res) => {
      setAllProducts(res.data);
    });
  };

   const handleSearch = (value) => {
     const itmesFilter = allProducts.filter((item) =>
       item.title.toLowerCase().includes(value.toLowerCase())
     );
     setAllProducts(itmesFilter);
   };

  return (
    <DataFetchContext.Provider
      value={{
        getProduct,
        allProducts,
        productByCategories,
        handleSearch,
      }}
    >
      {children}
    </DataFetchContext.Provider>
  );
};

export default DataFetchContext;
