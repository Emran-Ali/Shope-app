import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { API } from "../lib/api";

function Catagory({ clickHandler }) {
  const [catagories, setCatagory] = useState([]);

  useEffect(() => {
    API.get("products/categories").then((res) => {
      setCatagory(res.data);
    });
  }, []);

  return (
    <Grid container spacing={2} sx={{ pt: 10, pb: 1 }}>
      {catagories.map((title, index) => {
        return (
          <Grid item xs={2} lg={3} key={index}>
            <Button
              onClick={() => clickHandler(title)}
              sx={{
                width: "90%",
                p: 1,
                mx: 2,

                bgcolor: "#cfe8fc",
                "&:hover": { bgcolor: "#68f1ed" },
                fontWeight: "bold",
              }}
            >
              {title}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Catagory;
