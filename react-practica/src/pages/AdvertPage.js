import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdvertDetails from '../components/adverts/AdvertDetails';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { getAdvertById, deleteAdvert } from '../api/adverts';
import ConfirmationModal from '../components/ConfirmationModal';

const AdvertPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

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
  }, [id, navigate]);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAdvert(id);
      navigate('/adverts');
    } catch (error) {
      console.error('Error al eliminar el anuncio:', error);
    }
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
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
          {showConfirmation && (
            <ConfirmationModal
              message="¿Estás seguro de que deseas eliminar este anuncio?"
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )}
        </>
      )}
    </>
  );
};

export default AdvertPage;
