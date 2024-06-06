import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBRow } from 'mdb-react-ui-kit';
import AdvertItem from '../components/adverts/AdvertItem';
import FilterForm from '../components/filter/FilterForm';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { getAdverts } from '../api/adverts';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [filter, setFilter] = useState('');
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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filtrar anuncios directamente en el render
  const filteredAdverts = adverts.filter((advert) =>
    advert.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <h1>Listado de Anuncios</h1>
      <input
        type="text"
        placeholder="Filtrar anuncios"
        value={filter}
        onChange={handleFilterChange}
      />
      {loading ? (
        <Loader />
      ) : filteredAdverts.length > 0 ? (
        <MDBRow>
          {filteredAdverts.map((advert) => (
            <AdvertItem key={advert.id} advert={advert} />
          ))}
        </MDBRow>
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
