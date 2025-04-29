import React from 'react';
import { Container, Box, Typography, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('incorrect email').required('you sholdnot miss'),
    password: Yup.string().min(6, 'min 6 simvols').required('you sholdnot miss'),
    username: Yup.string().required('you sholdnot miss'),
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
       Register
        </Typography>
        <Formik
          initialValues={{ email: '', password: '', username: '' }}
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log('Registration data:', values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                fullWidth
                name="username"
                label="username"
                margin="normal"
              />
              <Field
                component={TextField}
                fullWidth
                name="email"
                label="Email"
                margin="normal"
              />
              <Field
                component={TextField}
                fullWidth
                type="password"
                name="password"
                label="password"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isSubmitting}
                sx={{ mt: 3 }}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Register;

