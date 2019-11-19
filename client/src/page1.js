import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";

export const Page1 = () => {
  return <Field name="firstName" type="input" as={TextField} />;
};
