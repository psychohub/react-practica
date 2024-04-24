import React from 'react';
import AdvertForm from '../components/AdvertForm';

const NewAdvertPage = () => {
  const handleSubmit = (newAdvert) => {
    // Lógica para enviar el nuevo anuncio al backend
  };

  return (
    <div>
      <h1>Crear Anuncio</h1>
      <AdvertForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewAdvertPage;