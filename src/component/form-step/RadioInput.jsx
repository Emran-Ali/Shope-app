import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

function InputSelect({ title, name, options, selected }) {
  const { values, handleChange, errors, touched } = useFormikContext();
  return (
    <FormControl
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
    >
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{
          color: "#282828",
          "&.Mui-focused": { color: "#282828" },
        }}
      >
        {title}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        value={values[name]}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={
              <Radio
                sx={{
                  color: "#1E2772",
                  "&.Mui-checked": {
                    color: "#1E2772",
                  },
                }}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default InputSelect;
