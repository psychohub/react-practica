import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { createAdvert, getTags } from '../../api/adverts';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const AdvertForm = () => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || selectedTags.length === 0) {
      setError('Por favor, completa todos los campos obligatorios');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('sale', sale);
    formData.append('price', price);
    formData.append(
      'tags',
      selectedTags.map((tag) => tag.value)
    );
    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const advert = await createAdvert(formData);
      navigate(`/adverts/${advert.id}`);
    } catch (error) {
      console.error('Error al crear el anuncio:', error);
      setError('Error al crear el anuncio');
    }
  };

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
          required
        />
      </div>

      <div>
        <label>Foto</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </div>

      {error && <div className="text-danger">{error}</div>}

      <MDBBtn
        type="submit"
        disabled={!name || !price || selectedTags.length === 0}
      >
        Crear anuncio
      </MDBBtn>
    </form>
  );
};

export default AdvertForm;
