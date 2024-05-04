import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';
import Navbar from '../components/Navbar';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="not-found-page">
        <h1>404 - Página no encontrada</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
