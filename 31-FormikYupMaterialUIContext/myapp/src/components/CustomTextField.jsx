import React from 'react';
import { TextField } from '@mui/material';
import { Field } from 'formik';

const CustomTextInput = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    {...field}
    {...props}
    error={touched[field.name] && Boolean(errors[field.name])}
    helperText={touched[field.name] && errors[field.name]}
    fullWidth
    margin="normal"
  />
);

export default CustomTextInput;
