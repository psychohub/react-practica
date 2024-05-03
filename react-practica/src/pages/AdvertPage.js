import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdvertDetails from '../components/adverts/AdvertDetails';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { getAdvertById, deleteAdvert } from '../api/adverts';

const AdvertPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        navigate('/NotFoundPage');
      }
    };

    fetchAdvert();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteAdvert(id);
      navigate('/adverts');
    } catch (error) {
      console.error('Error al eliminar el anuncio:', error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>Detalle del Anuncio</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AdvertDetails advert={advert} />
          <button onClick={handleDelete}>Eliminar Anuncio</button>
        </>
      )}
    </>
  );
};

export default AdvertPage;
