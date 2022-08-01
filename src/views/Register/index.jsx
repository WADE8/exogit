import React from 'react';
import {
  Typography,
  Button,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  CircularProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { useFormik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import * as yup from 'yup';

const Register = () => {
  const isLoading = false;

  const validationSchema = yup.object({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    phone: yup
      .number()
      .min(8, 'Phone number should be of minimum 8 digits length')
      .required(),
    user_type: yup.string().required('Select which type you are'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirm_password: yup
      .string()
      .min(8, 'Confirm your password')
      .required('Confirm your password'),
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      phone: '',
      user_type: 'student',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if (isLoading) {
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
          <CircularProgress color="primary" />
        </Box>
      </Grid>
    );
  }

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
          Register
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="first_name"
            label="First Name"
            value={formik.values.first_name}
            onChange={formik.handleChange('first_name')}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          <TextField
            margin="normal"
            fullWidth
            id="last_name"
            label="Last Name"
            value={formik.values.last_name}
            onChange={formik.handleChange('last_name')}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
          <TextField
            margin="normal"
            fullWidth
            id="phone"
            label="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange('phone')}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
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
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange('password')}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Confirm Password"
            type="password"
            id="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange('confirm_password')}
            error={
              formik.touched.confirm_password &&
              Boolean(formik.errors.confirm_password)
            }
            helperText={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
            autoComplete="current-password"
          />
          <FormLabel id="user_type">User Type</FormLabel>
          <RadioGroup
            row
            name="user_type"
            onChange={formik.handleChange('user_type')}>
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
              checked={formik.values.user_type === 'student'}
            />
            <FormControlLabel
              value="instructor"
              control={<Radio />}
              label="Instructor"
              checked={formik.values.user_type === 'instructor'}
            />
            <FormControlLabel
              value="parent"
              control={<Radio />}
              label="Parent"
              checked={formik.values.user_type === 'parent'}
            />
          </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to="/auth" variant="body2" component={RouterLink}>
                {'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Register;
