import { Button, Grid, Typography } from "@mui/material";

function Completed() {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 10 }}
      >
        <Grid item alignItems="center" justifyContent="center">
          <Grid
            container
            direction="row"
            alignItems="end"
            justifyContent="center"
            sx={{
              backgroundImage: "url('/image/complete-bg.png')",
              height: "330px",
              backgroundRepeat: "no-repeat",
              width: "454px",
              pb: 4,
            }}
          >
            <img
              src="/image/complete-check.png"
              alt="abc"
              width="30%"
              sx={{ mb: 4 }}
              top="3"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            component="p"
            variant="p"
            align="center"
            sx={{ fontSize: "18px", fontWeight: 500, color: "#282828" }}
          >
            Property added
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            align="center"
            sx={{ py: 1, fontSize: "28px", fontWeight: 600, color: "#1E2772" }}
          >
            Successfully
          </Typography>
          <Grid align="center">
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#1E2772" }}
            >
              View property
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Completed;
