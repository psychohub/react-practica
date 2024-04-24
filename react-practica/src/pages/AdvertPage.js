import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdvertDetails from '../components/adverts/AdvertDetails';
import Loader from '../components/Loader';

const AdvertPage = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lógica para obtener el anuncio desde el backend
    // y actualizar el estado `advert`
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Detalle del Anuncio</h1>
      <AdvertDetails advert={advert} />
    </div>
  );
};

export default AdvertPage;