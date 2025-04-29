import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('incorrect email').required('you shouldnot miss'),
    password: Yup.string().min(6, 'min 6 simvols').required('you shouldnot miss'),
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log('Login data:', values);
            setOpen(true);
            setTimeout(() => {
              navigate('/products');
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                label="Password"
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
               login
              </Button>
            </Form>
          )}
        </Formik>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            successful
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Login;
