import React, { useState } from 'react';
import Loader from '../components/Loader';
import { createAdvert } from '../api/adverts';

const NewAdvertPage = () => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos requeridos
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'El nombre es requerido';
    }
    if (!price) {
      validationErrors.price = 'El precio es requerido';
    }
    if (tags.length === 0) {
      validationErrors.tags = 'Debe seleccionar al menos una etiqueta';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true); 

    try {
      await createAdvert({ name, sale, price, tags, photo });
      // Redireccionar a la página del anuncio creado
    } catch (error) {
      console.error('Error al crear el anuncio:', error);
    }

    setLoading(false); 
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Renderizar los campos del formulario */}
          {errors.name && <p className="error">{errors.name}</p>}
          {errors.price && <p className="error">{errors.price}</p>}
          {errors.tags && <p className="error">{errors.tags}</p>}
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Crear anuncio
          </button>
        </form>
      )}
    </>
  );
};

export default NewAdvertPage;