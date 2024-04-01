import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";

export default function ProductCard({ product }) {
  const Navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  let description =
    product.description.length > 120
      ? product.description.substring(0, 120) + "..."
      : product.description;
  let title =
    product.title.length > 100
      ? product.title.substring(0, 100) + "..."
      : product.title;

  return (
    <Grid key={product.id} item>
      <Card
        sx={{
          maxWidth: 400,
          Height: 600,
          display: "block",
          bgcolor: "#93B1A6",
        }}
      >
        <CardMedia sx={{ height: 200 }} image={product.image} title="" />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            fontWeight="bold"
            component="div"
            sx={{ height: 80, display: "block" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 100, display: "block" }}
          >
            {description}
          </Typography>
        </CardContent>
        <Typography
          sx={{
            color: "blur",
            fontWeight: "bold",
            height: 20,
            display: "block",
            mx: 4,
          }}
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
            <Button
              onClick={() => (auth ? addToCart(product) : Navigate("/login"))}
            >
              Add to Cart
            </Button>
            <Link to={`/product/${product.id}`}>
              <Button> Details</Button>
            </Link>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
