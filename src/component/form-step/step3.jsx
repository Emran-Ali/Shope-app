import { Box, Button } from "@mui/material";
import FormField from "../FormField";
import useFormStep from "../../lib/useFormStep";

// eslint-disable-next-line react/prop-types
const Step3 = ({ handleBack }) => {
  const { isValid, dirty } = useFormStep();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormField name="address" label="Address" />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
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
      </Box>
    </Box>
  );
};

export default Step3;
