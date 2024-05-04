import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

const LoginForm = ({
  email,
  password,
  rememberPassword,
  onEmailChange,
  onPasswordChange,
  onRememberPasswordChange,
  onSubmit,
  error,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <MDBInput
        wrapperClass="mb-4"
        label="Correo electrónico"
        id="form1"
        type="email"
        value={email}
        onChange={onEmailChange}
        required
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Contraseña"
        id="form2"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Recordar contraseña"
          checked={rememberPassword}
          onChange={onRememberPasswordChange}
        />
      </div>

      {error && <div className="text-danger mb-3">{error}</div>}

      <MDBBtn type="submit" className="mb-4">
        Iniciar sesión
      </MDBBtn>
    </form>
  );
};

export default LoginForm;
