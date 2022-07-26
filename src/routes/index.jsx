import React from 'react';
import Auth from '../layouts/Auth';
import Home from '../layouts/Home';
import NotFound from '../layouts/NotFound';

const rootRoutes = [
  { path: '/', name: 'Home', element: <Home /> },
  { path: 'auth', name: 'Auth', element: <Auth /> },
  { path: '*', name: 'NotFound', element: <NotFound /> },
];

export default rootRoutes;
