import { Box, Button } from "@mui/material";
import FormField from "../FormField";
import useFormStep from "../../lib/useFormStep";

// eslint-disable-next-line react/prop-types
const Step2 = ({ handleNext, handleBack }) => {
  const { isValid, dirty } = useFormStep();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormField name="email" label="Email" />
      <FormField name="phone" label="Phone" />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={!isValid || !dirty}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
