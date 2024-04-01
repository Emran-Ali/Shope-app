import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  List,
  Stack,
  Typography,
} from "@mui/material";

import * as React from "react";
import ProductContext from "../context/ProductContext";
import { API } from "../lib/api";

function SideDrawer() {
  const { addedItems, addQuantity, removeQuantity } =
    React.useContext(ProductContext);
  const [open, setOpen] = React.useState(false);
  const [uaseCart, setUserCart] = React.useState(null);

  React.useEffect(() => {
    API.get("carts/user/2").then((res) => {
      setUserCart(res.data);
      return res.data;
    });
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ width: 450 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="h4" sx={{ color: "blueviolet", p: 2 }}>
        Your Cart
      </Typography>
      <Divider />
      <List>
        {addedItems?.map((item, index) => (
          <>
            <Card
              display="flex"
              justifyContent="space-betwwen"
              sx={{ m: 1, p: 1, bgcolor: "#cfe8fc" }}
              spacing={2}
            >
              <Stack direction="row" spacing={4} sx={{ mb: 2 }}>
                <Typography variant="div" sx={{ font: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="div" sx={{ font: "bold" }}>
                  Price: {item.price} $
                </Typography>
              </Stack>
              <Stack direction="row" spacing={4} sx={{ fontWeight: "bold" }}>
                <Typography variant="div" sx={{ font: "bold" }}>
                  Quantity :
                  <IconButton
                    variant="outlined"
                    color="error"
                    onClick={() => removeQuantity(index)}
                  >
                    <Remove />
                  </IconButton>
                  <Chip color="primary" label={item.quantity} size="small" />
                  <IconButton
                    variant="outlined"
                    color="primary"
                    onClick={() => addQuantity(index)}
                  >
                    <Add />
                  </IconButton>
                </Typography>
                <Typography variant="div" sx={{ font: "bold" }}>
                  Total :
                  <Chip
                    color="primary"
                    label={item.price * item.quantity}
                    size="small"
                  />
                </Typography>
              </Stack>
            </Card>
          </>
        ))}
      </List>
      <Button
        sx={{
          color: "#c40233",
          bgcolor: "#acacac",
          position: "fixed",
          bottom: 6,
          width: 450,
          fontWeight: "bold",
        }}
      >
        Check Out
      </Button>
    </Box>
  );
}

export default SideDrawer;
