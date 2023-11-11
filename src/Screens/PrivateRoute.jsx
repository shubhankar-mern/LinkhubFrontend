import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoute = () => {
  

  // Check the presence of the JWT token in local storage
  const isTokenAvailable = localStorage.getItem('jwtToken') !== null;

  return isTokenAvailable ? (
    
    <Outlet />
    
  ) : (
    <Navigate to="/login"  replace />
  );
};

export default PrivateRoute;