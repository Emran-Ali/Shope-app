import { Container, Grid } from "@mui/material";
import { useContext } from "react";
import ProductCard from "../component/ProductCard";
import DataFetchContext from "../context/DataFetchContext";
import Catagory from "./Catagory";

function AllProduct() {
  const { allProducts, productByCategories } = useContext(DataFetchContext);

  return (
    <>
      <Catagory clickHandler={productByCategories} />
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", py: 2 }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {allProducts?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AllProduct;
