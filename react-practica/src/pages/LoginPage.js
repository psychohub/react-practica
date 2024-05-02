import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { useAuth } from '../components/auth/AuthProvider';
import { MDBContainer } from 'mdb-react-ui-kit';
import LoginForm from '../components/auth/LoginForm';
import { routes } from '../components/routes/links';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState(null);

  const { saveCredentials } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || routes.adverts;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión con:', email, password);
    try {
      const response = await loginUser({ email, password });
      console.log('Respuesta de loginUser:', response);
      const { accessToken } = response;
      console.log('Token recibido:', accessToken);
      if (accessToken) {
        saveCredentials({ accessToken });
        console.log('Credenciales almacenadas');
        localStorage.setItem('token', accessToken);
        if (rememberPassword) {
          localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('email');
        }
        console.log('Redirigiendo a:', from);
        navigate(from, { replace: true });
      } else {
        throw new Error('No accessToken received');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <LoginForm
        email={email}
        password={password}
        rememberPassword={rememberPassword}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onRememberPasswordChange={(e) => setRememberPassword(e.target.checked)}
        onSubmit={handleSubmit}
        error={error}
      />
    </MDBContainer>
  );
};

export default LoginPage;
