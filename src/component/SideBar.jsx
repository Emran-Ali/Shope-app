import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Card, Chip, IconButton, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import React from "react";

export default function SideBar({ items, add, del }) {
  const [open, setOpen] = React.useState(false);

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
        {items.map((item, index) => (
          <>
            <Card
              display="flex"
              justifyContent="space-betwwen"
              sx={{ m: 1, p: 2, bgcolor: "#cfe8fc" }}
              spacing={2}
            >
              <Stack direction="row" spacing={4}>
                <Typography variant="div" sx={{ font: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="div" sx={{ font: "bold" }}>
                  Price: {item.price} $
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={4}
                sx={{ m: 2, fontWeight: "bold" }}
              >
                <Typography variant="div" sx={{ font: "bold" }}>
                  Quantity :
                  <IconButton onClick={() => del(index)}>
                    <RemoveIcon />
                  </IconButton>
                  <Chip color="primary" label={item.quantity} size="small" />
                  <IconButton onClick={() => add(index)}>
                    <AddIcon />
                  </IconButton>
                </Typography>
                <Typography variant="div" sx={{ font: "bold" }}>
                  Total :
                  <Chip color="primary" label={item.price} size="small" />
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
