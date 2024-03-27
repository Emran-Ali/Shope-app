import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../component/shared/ProductCard";
import Catagory from "./Catagory";

function AllProduct() {
  const [products, setProducts] = useState([]);

  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products",
  });

  useEffect(() => {
    client.get("").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Catagory />
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", py: 10 }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllProduct;
