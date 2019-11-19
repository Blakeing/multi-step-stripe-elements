import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";

export const Page3 = () => {
  return <Field name="price" type="input" as={TextField} />;
};
