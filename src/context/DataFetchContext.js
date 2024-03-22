import axios from "axios";
import { createContext, useEffect, useState } from 'react';

const DataFetchContext = createContext();

export const DataProvider = ({children}) => {
    const client = axios.create({
        baseURL: "https://fakestoreapi.com/products",
      });
      const [allProducts, setAllProducts] = useState([]);
    
      useEffect(() => {
        client.get("").then((res) => {
            setAllProducts(res.data);
        });
      }, []);


    const getProduct = (id)=>{
      
        client.get(`/${id}`).then( async (res) => { 
          const product = await res.data;
          return product;
          });
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

}

export default DataFetchContext;