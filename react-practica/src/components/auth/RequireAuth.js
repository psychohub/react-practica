import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isAuthenticated = () => {
    // Lógica para verificar si el usuario está autenticado
    // Por ejemplo, verificar si el token existe en el almacenamiento local
    return localStorage.getItem('token') !== null;
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;