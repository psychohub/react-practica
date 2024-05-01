import React, { useState, useEffect } from 'react';
import AdvertList from '../components/adverts/AdvertList';
import FilterForm from '../components/filter/FilterForm';
import Loader from '../components/Loader';
import { getAdverts } from '../api/adverts';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const data = await getAdverts();
        setAdverts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los anuncios:', error);
        setLoading(false);
      }
    };

    fetchAdverts();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Aquí puedes aplicar los filtros a la lista de anuncios
    // y actualizar el estado `adverts` con los anuncios filtrados
  };

  if (loading) {
    return <Loader />;
  }

  if (adverts.length === 0) {
    return (
      <div>
        <p>No hay anuncios disponibles.</p>
        <a href="/adverts/new">Crear un nuevo anuncio</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Listado de Anuncios</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FilterForm onFilterChange={handleFilterChange} />
          <AdvertList adverts={adverts} />
        </>
      )}
    </div>
  );
};

export default AdvertsPage;
