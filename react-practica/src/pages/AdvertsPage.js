// AdvertsPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdvertList from '../components/adverts/AdvertList';
import FilterForm from '../components/filter/FilterForm';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { getAdverts } from '../api/adverts';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const data = await getAdverts();
        setAdverts(data);
        setFilteredAdverts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
        setLoading(false);
      }
    };

    fetchAdverts();
  }, []);

  const handleFilterChange = (newFilteredAdverts) => {
    setFilteredAdverts(newFilteredAdverts);
  };

  return (
    <>
      <Navbar />
      <h1>Listado de Anuncios</h1>
      <FilterForm adverts={adverts} onFilterChange={handleFilterChange} />
      {loading ? (
        <Loader />
      ) : filteredAdverts.length > 0 ? (
        <AdvertList adverts={filteredAdverts} />
      ) : (
        <div>
          <p>No hay anuncios disponibles.</p>
          <Link to="/adverts/new">Crear un nuevo anuncio</Link>
        </div>
      )}
    </>
  );
};

export default AdvertsPage;
