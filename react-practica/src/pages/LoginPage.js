import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const handleLoginSuccess = () => {
    // Lógica para manejar el inicio de sesión exitoso
    // Por ejemplo, guardar el token en el almacenamiento local
    // y redirigir al usuario a la página protegida
    return <Navigate to="/protected" replace />;
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;