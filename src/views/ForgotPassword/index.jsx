import React from 'react';
import {
  Typography,
  Button,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import * as yup from 'yup';

const ForgotPassword = () => {
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange('email')}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Reset
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/auth" variant="body2" component={RouterLink}>
                Login
              </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/register" variant="body2" component={RouterLink}>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default ForgotPassword;
