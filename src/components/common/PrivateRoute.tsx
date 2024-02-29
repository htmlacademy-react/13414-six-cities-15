import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated: boolean = false;

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => isAuthenticated ? children : <Navigate to="/login" replace />;

export default PrivateRoute;
