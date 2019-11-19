import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

export const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField;
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
