import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";

export const Page2 = () => {
  return <Field name="lastName" type="input" as={TextField} />;
};
