import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/auth/AuthProvider';
import storage from '../utils/storage';
import { removeAuthorizationHeader } from '../api/api';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    storage.remove('auth');
    removeAuthorizationHeader();
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Mi Sitio</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </MDBNavbarToggler>
        <MDBCollapse navbar isOpen={isOpen}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink as={Link} to="/adverts" onClick={handleToggle}>
                Anuncios
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink as={Link} to="/adverts/new" onClick={handleToggle}>
                Nuevo Anuncio
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn color="danger" onClick={handleLogout}>
            Cerrar Sesión
          </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
