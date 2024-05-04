import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvertForm from '../components/adverts/AdvertForm';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { createAdvert } from '../api/adverts';

const NewAdvertPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      await createAdvert(formData);
      navigate('/adverts');
    } catch (error) {
      console.error('Error al crear el anuncio:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <h1>Crear Anuncio</h1>
      {loading ? <Loader /> : <AdvertForm onSubmit={handleSubmit} />}
    </>
  );
};

export default NewAdvertPage;
