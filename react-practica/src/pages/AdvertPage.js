import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdvertDetails from '../components/adverts/AdvertDetails';
import Loader from '../components/Loader';
import { getAdvertById } from '../api/adverts';

const AdvertPage = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const data = await getAdvertById(id);
        setAdvert(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el anuncio:', error);
        setLoading(false);
      }
    };

    fetchAdvert();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!advert) {
    return <div>No se encontró el anuncio.</div>;
  }

  return (
    <div>
      <h1>Detalle del Anuncio</h1>
      <AdvertDetails advert={advert} />
    </div>
  );
};

export default AdvertPage;
