import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  let description = product.description.substring(0, 100) + "...";
  let title = product.title.substring(0, 60) + "...";

  return (
    <Grid key={product.id} item>
      <Card sx={{ maxWidth: 300, Height: 450, display: "block" }}>
        <CardMedia sx={{ height: 150 }} image={product.image} title="" />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            fontWeight="bold"
            component="div"
            sx={{ height: 50, display: "block" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 80, display: "block" }}
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
          }}
        >
          Price : {product.price}
        </Typography>
        <CardActions>
          <ButtonGroup variant="outlined" size="small" color="error">
            <Link to={"/"}>Add to Cart</Link>
            <Link to={`/product/${product.id}`}>Details</Link>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
}
