import { Box, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useFormikContext } from "formik";
import React from "react";

function InputSelect({ title, name, options, selected }) {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();
  return (
    <Box sx={{ width: "100%", gap: 4 }}>
      <Typography variant="h3" sx={{ fontSize: "16px", fontWeight: 500 }}>
        {title}
      </Typography>
      <TextField
        select
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        name={name}
        value={values[name]}
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#282828",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#989CBE",
              borderWidth: "1px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#989CBE",
                borderWidth: "1px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#989CBE",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#2e2e2e",
            "&.Mui-focused": {
              color: "#2e2e2e",
            },
          },
          width: "100%",
          mt: "4px",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default InputSelect;
