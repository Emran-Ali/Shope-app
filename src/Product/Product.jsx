import { Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataFetchContext from "../context/DataFetchContext";

function Product() {
  const { getProduct } = useContext(DataFetchContext);
  const param = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const pro = getProduct(param.id);
    console.log(pro);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", py: 10 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          single product
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
