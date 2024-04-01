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
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
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
      <Card sx={{ maxWidth: 400, Height: 600, display: "block" }}>
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
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <Link to={`/product/${product.id}`}>
              <Button> Details</Button>
            </Link>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
