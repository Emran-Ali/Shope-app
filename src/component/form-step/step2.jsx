import { Button, Grid, Typography } from "@mui/material";
import useFormStep from "../../lib/useFormStep";
import Input from "./Input";
import RadioInput from "./RadioInput";

// eslint-disable-next-line react/prop-types
const Step2 = ({ handleNext, handleBack }) => {
  const { isValid, dirty } = useFormStep();
  const yesNo = [
    { value: "1", label: "Yes" },
    { value: "2", label: "No" },
    // Add other divisions here
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "22px", fontWeight: 600, color: "#282828" }}
        >
          Property amenities
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "16px", fontWeight: 400, color: "#6F6F6F" }}
        >
          Fill up these information given below for adding your property
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "18px", fontWeight: 600, color: "#282828" }}
        >
          Home information
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Input
          title={"How many floor"}
          name="numberOfFlore"
          placeholder="Number of floor"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input
          title={"Avg.flat per floor"}
          name="avgFlat"
          placeholder="Avg.flat per floor"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "18px", fontWeight: 600, color: "#282828" }}
        >
          Amenities
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioInput
          title={"Lift facility (Choose one) "}
          name={"lift"}
          selected={1}
          options={yesNo}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioInput
          title={"Parking/garage (Choose one)"}
          name={"parking"}
          selected={2}
          options={yesNo}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioInput
          title={"Security guard (Choose one)"}
          name={"sequrity"}
          selected={1}
          options={yesNo}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          title={"How Many Gurd"}
          name="lastName"
          placeholder="First Name"
        />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
        gap={2}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#1E2772" }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{
            border: 2,
            borderColor: "#1E2772",
            backgroundColor: "white",
            color: "#1E2772",
          }}
          onClick={handleNext}
          disabled={!isValid || !dirty}
        >
          Save & Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Step2;
