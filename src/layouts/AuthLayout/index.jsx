import React from 'react';
import { Grid, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './styles.scss';

const AuthLayout = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="authLayoutImg" />
      <Outlet />
    </Grid>
  );
};

export default AuthLayout;
