// LoginPage.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../api/auth';
import storage from '../utils/storage';
import { setAuthorizationHeader } from '../api/api';
import { MDBContainer } from 'mdb-react-ui-kit';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/adverts';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser({ email, password });
      storage.set('auth', token);
      setAuthorizationHeader(token);
      if (rememberPassword) {
        localStorage.setItem('email', email);
      } else {
        localStorage.removeItem('email');
      }
      navigate(from, { replace: true });
    } catch (error) {
      setError('Error al iniciar sesión');
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
