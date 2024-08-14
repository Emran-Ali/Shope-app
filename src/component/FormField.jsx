import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

// eslint-disable-next-line react/prop-types
const FormField = ({ name, label }) => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();

  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
    />
  );
};

export default FormField;
