import React, { useState, useEffect } from 'react';
import AdvertList from '../components/AdvertList';
import FilterForm from '../components/FilterForm';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Lógica para obtener los anuncios desde el backend
    // y actualizar el estado `adverts`
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Listado de Anuncios</h1>
      <FilterForm onFilterChange={handleFilterChange} />
      <AdvertList adverts={adverts} />
    </div>
  );
};

export default AdvertsPage;