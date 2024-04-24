import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdvertDetails from '../components/AdvertDetails';

const AdvertPage = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    // Lógica para obtener el anuncio desde el backend
    // y actualizar el estado `advert`
  }, [id]);

  if (!advert) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalle del Anuncio</h1>
      <AdvertDetails advert={advert} />
    </div>
  );
};

export default AdvertPage;