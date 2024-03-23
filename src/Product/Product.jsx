import {
  Button,
  ButtonGroup,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataFetchContext from "../context/DataFetchContext";

function Product() {
  const { getProduct } = useContext(DataFetchContext);
  const param = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fn = async () => {
      setProduct(await getProduct(param.id));
    };
    fn();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", p: 12 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <CardMedia
          alignItems="center"
          justifyContent="center"
          sx={{ height: 300, width: 200 }}
          image={product.image}
          title="product Photo"
        />
        <CardContent>
          <Typography
            gutterBottom
            fontWeight="bold"
            component="div"
            sx={{ display: "block" }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "block" }}
          >
            {product.description}
          </Typography>
        </CardContent>
        <Typography
          sx={{
            color: "blur",
            fontWeight: "bold",
            display: "block",
            mx: 4,
          }}
          mx-10
        >
          Price : {product.price} $
        </Typography>
        <CardActions>
          <ButtonGroup
            variant="outlined"
            size="medium"
            color="error"
            sx={{ mx: 1 }}
          >
            <Button to={"/"}>Add to Cart</Button>
            <Button to={`/product/${product.id}`}>Details</Button>
          </ButtonGroup>
        </CardActions>
      </Grid>
    </Container>
  );
}

export default Product;
