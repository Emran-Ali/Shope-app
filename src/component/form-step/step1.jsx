import { Box, Button, Grid } from "@mui/material";
import useFormStep from "../../lib/useFormStep";
import Input from "./Input";
import InputSelect from "./InputSelect";
import RadioInput from "./RadioInput";

// eslint-disable-next-line react/prop-types
const Step1 = ({ handleNext }) => {
  const { isValid, dirty } = useFormStep();
  const divisions = [
    { value: "1", label: "Dhaka" },
    { value: "2", label: "Chittagong" },
    { value: "3", label: "Khulna" },
    // Add other divisions here
  ];
  const type = [
    { value: "1", label: "House" },
    { value: "2", label: "Flate" },
    { value: "3", label: "Shop" },
  ];

  return (
    // <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <InputSelect
          title={"Select category"}
          placeholder={"Select Type"}
          name={"catagory"}
          options={type}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input title={"House Name"} name="lastName" placeholder="First Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input name="firstName" title="Last Name" placeholder="Last Name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputSelect
          title={"Division"}
          name={"district"}
          selected={1}
          options={divisions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioInput
          title={"Division"}
          name={"isdistrict"}
          selected={1}
          options={divisions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputSelect
          title={"District/City Corporation"}
          name={"district"}
          selected={1}
          options={divisions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputSelect
          title={"District"}
          name={"district"}
          selected={1}
          options={divisions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputSelect
          title={"Upazila"}
          name={"upazila"}
          selected={1}
          options={divisions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputSelect
          title={"Union"}
          name={"union"}
          selected={1}
          options={divisions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input title={"Village"} name={"village"} placeholder={"Village"} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input title={"Zip code"} name={"zipCode"} placeholder={"Zip Code"} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input
          title={"House name"}
          name={"houseName"}
          placeholder={"House name "}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input
          title={"House Number"}
          name={"houseNumber"}
          placeholder={"House Number "}
        />
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={!isValid || !dirty}
        >
          Next
        </Button>
      </Box>
    </Grid>
  );
};

export default Step1;
