import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { API } from "../lib/api";
import Catagory from "./Catagory";

function AllProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAll() {
      await API.get("products").then((res) => {
        setProducts(res.data);
      });
    }
    getAll();
  }, []);

  const productByCategories = async (category) => {
    await API.get(`products/category/${category}`).then((res) => {
      setProducts(res.data);
    });
  };

  return (
    <>
      <Catagory clickHandler={productByCategories} />
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", py: 2 }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllProduct;
