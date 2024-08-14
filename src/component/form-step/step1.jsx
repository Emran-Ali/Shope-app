import { Box, Button } from "@mui/material";
import FormField from "../FormField";
import useFormStep from "../../lib/useFormStep";

// eslint-disable-next-line react/prop-types
const Step1 = ({ handleNext }) => {
  const { isValid, dirty } = useFormStep();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormField name="firstName" label="First Name" />
      <FormField name="lastName" label="Last Name" />
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
    </Box>
  );
};

export default Step1;
