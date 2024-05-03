import React, { useEffect, useState } from 'react';
import { createAdvert, getTags } from '../../api/adverts';

const AdvertForm = () => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAdvert({ name, sale, price, tags });
    } catch (error) {
      setError('Error al crear el anuncio');
    }
  };

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getTags();
        setTags(data);
      } catch (error) {
        console.error('Error al obtener los tags:', error);
      }
    };

    fetchTags();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="sale">Tipo:</label>
        <select
          id="sale"
          value={sale}
          onChange={(e) => setSale(e.target.value === 'true')}
          required
        >
          <option value="false">Compra</option>
          <option value="true">Venta</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="tags">Etiquetas:</label>
        <select
          id="tags"
          multiple
          value={selectedTags}
          onChange={(e) =>
            setSelectedTags(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Crear anuncio</button>
    </form>
  );
};

export default AdvertForm;
