import { Button, Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import useFormStep from "../../lib/useFormStep";

// eslint-disable-next-line react/prop-types
const Step3 = ({ handleBack }) => {
  const { isValid, dirty } = useFormStep();
  const { values } = useFormikContext();
  console.log(values, "value");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "22px", fontWeight: 600, color: "#282828" }}
        >
          Review all details
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "16px", fontWeight: 400, color: "#6F6F6F" }}
        >
          Review all details and make sure everything ok or not.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img src="/image/building.png" alt="house" height={120} width={120} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "22px", fontWeight: 500, color: "#282828" }}
        >
          Property type and Address
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "18px", fontWeight: 400, color: "#535353" }}
        >
          Division
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "18px", fontWeight: 400, color: "#535353" }}
        >
          {values["division"]}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "18px", fontWeight: 400, color: "#535353" }}
        >
          Division
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "18px", fontWeight: 400, color: "#535353" }}
        >
          {values["division"]}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
      >
        <Button variant="contained" color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid || !dirty}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Step3;
