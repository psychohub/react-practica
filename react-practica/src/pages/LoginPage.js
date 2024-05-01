import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../api/auth';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

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
      localStorage.setItem('token', token);
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
      <form onSubmit={handleSubmit}>
        <MDBInput
          wrapperClass="mb-4"
          label="Correo electrónico"
          id="form1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Contraseña"
          id="form2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Recordar contraseña"
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
          />
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <MDBBtn type="submit" className="mb-4">
          Iniciar sesión
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default LoginPage;
