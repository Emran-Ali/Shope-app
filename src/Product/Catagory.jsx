import { Card, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
function Catagory() {
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
          <Grid item xs={6} lg={3} key={index}>
            <Card sx={{ py: 2 }}>{title}</Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Catagory;
