import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <div>Home Layout</div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
