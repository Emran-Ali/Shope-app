import { Button, Card, CardActions, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function Catagory({ clickHandler }) {
  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products",
  });

  const [catagories, setCatagory] = useState([]);

  useEffect(() => {
    client.get("categories").then((res) => {
      setCatagory(res.data);
    });
  }, []);

  return (
    <Grid container spacing={2} sx={{ pt: 10, pb: 2 }}>
      {catagories.map((title, index) => {
        return (
          <Grid item xs={2} lg={3} key={index}>
            <Card
              sx={{
                py: 0,
                mx: 2,

                bgcolor: "#cfe8fc",
                "&:hover": { bgcolor: "#68f1ed" },
              }}
            >
              <CardActions alignItems="center">
                <Button onClick={() => clickHandler(title)}> {title}</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Catagory;
