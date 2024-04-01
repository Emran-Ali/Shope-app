import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import {
  Button,
  ButtonGroup,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DataFetchContext from "../context/DataFetchContext";

function Product() {
  const [product, setProduct] = useState({});
  const { getProduct } = useContext(DataFetchContext);

  const param = useParams();

  useEffect(() => {
    const fn = async () => {
      setProduct(await getProduct(param.id));
    };
    fn();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", p: 10 }}>
      <Link to={"/"}>
        <Button>
          <ArrowCircleLeftIcon />
        </Button>
      </Link>
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
            component="h5"
            sx={{ display: "block" }}
          >
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            fontWeight="bold"
            component="h4"
            sx={{ display: "block" }}
          >
            Category: {product.category}
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
            <Button>Add to Cart</Button>
          </ButtonGroup>
        </CardActions>
        <Rating
          name="size-large"
          value={Number(product?.rating?.rate)}
          size="large"
        />
      </Grid>
    </Container>
  );
}

export default Product;
