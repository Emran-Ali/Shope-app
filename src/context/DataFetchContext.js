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
      }, [allProducts]);


    const {product, setProduct} = useState([]);

    useEffect(()=>{
        client.get("/id").then((res) => {
            setProduct(res.data);
          });


    },[product]);

    return (
        <DataFetchContext.Provider value={{
               product,
            allProducts,
        }        }
        >
        {children}
        </DataFetchContext.Provider>
    )

}

export default DataFetchContext;