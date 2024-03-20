import { Container, Grid } from "@mui/material";
function Product() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", py: 10 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}></Grid>
      </Grid>
    </Container>
  );
}

export default Product;
