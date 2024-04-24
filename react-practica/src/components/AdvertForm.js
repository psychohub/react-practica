import React, { useState } from 'react';

const AdvertForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAdvert = {
      name,
      sale,
      price,
      tags,
    };
    onSubmit(newAdvert);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario de creación de anuncio */}
    </form>
  );
};

export default AdvertForm;