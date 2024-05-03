import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storage from '../utils/storage';
import { removeAuthorizationHeader } from '../api/api';
import { useAuth } from '../components/auth/AuthProvider';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import { routes } from './routes/links';
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      '¿Estás seguro de que deseas cerrar sesión?'
    );
    if (confirmLogout) {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      storage.remove('auth');
      removeAuthorizationHeader();
      logout();
      navigate(routes.login);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="light"
      className="navbar-light fixed-top"
    >
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoToggler(!showNavNoToggler)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoToggler}>
          <MDBNavbarNav className="ms-auto align-items-center">
            <MDBNavbarItem>
              <Link to={routes.adverts} className="nav-link mx-2">
                <MDBIcon fas icon="home" className="pe-2" />
                Inicio
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to={routes.adverts} className="nav-link mx-2">
                <MDBIcon fas icon="list" className="pe-2" />
                Anuncios
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to={routes.advertsNew} className="nav-link mx-2">
                <MDBIcon fas icon="plus-circle" className="pe-2" />
                Nuevo Anuncio
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-3">
              <MDBBtn color="dark" rounded onClick={handleLogout}>
                Cerrar Sesión
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
