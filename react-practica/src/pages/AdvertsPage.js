// AdvertsPage.js

import React, { useState, useEffect } from 'react';
import AdvertList from '../components/adverts/AdvertList';
import FilterForm from '../components/filter/FilterForm';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { getAdverts } from '../api/adverts';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const data = await getAdverts(filters);
        setAdverts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
        setLoading(false);
      }
    };

    fetchAdverts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Navbar />
      <h1>Listado de Anuncios</h1>
      <FilterForm onFilterChange={handleFilterChange} />
      {loading ? <Loader /> : <AdvertList adverts={adverts} />}
    </>
  );
};

export default AdvertsPage;
