import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { createAdvert, getTags } from '../../api/adverts';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

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
      await createAdvert({
        name,
        sale,
        price,
        tags: selectedTags.map((tag) => tag.value),
      });
      setError(null);
    } catch (error) {
      setError('Error al crear el anuncio');
    }
  };

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getTags();
        setTags(data.map((tag) => ({ label: tag, value: tag })));
      } catch (error) {
        console.error('Error al obtener los tags:', error);
      }
    };

    fetchTags();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <MDBInput
        label="Nombre"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select
        className="select"
        value={sale}
        onChange={(e) => setSale(e.target.value === 'true')}
        required
      >
        <option value="false">Compra</option>
        <option value="true">Venta</option>
      </select>

      <MDBInput
        label="Precio"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <div>
        <label>Etiquetas</label>
        <Select
          isMulti
          options={tags}
          value={selectedTags}
          onChange={setSelectedTags}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      {error && <div className="text-danger">{error}</div>}

      <MDBBtn type="submit">Crear anuncio</MDBBtn>
    </form>
  );
};

export default AdvertForm;
