import { Box, TextField, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

function Input({ title, name, value, placeholder }) {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();
  return (
    <Box sx={{ width: "100%", gap: 4 }}>
      <Typography variant="h3" sx={{ fontSize: "16px", fontWeight: 500 }}>
        {title}
      </Typography>
      <TextField
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        name={name}
        value={value ?? values[name]}
        placeholder={placeholder}
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#282828",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor:
                touched[name] && errors[name] ? "#d32f2f" : "#989CBE",
              borderWidth: "1px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor:
                  touched[name] && errors[name] ? "#d32f2f" : "#989CBE",
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
          mt: "4px",
        }}
      />
    </Box>
  );
}

export default Input;
