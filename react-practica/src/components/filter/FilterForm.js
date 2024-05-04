import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { getTags } from '../../api/adverts';
import { MDBInput, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const FilterForm = ({ adverts, onFilterChange }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('todos');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

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

  useEffect(() => {
    const filteredAdverts = adverts.filter((advert) => {
      const matchesName = advert.name
        .toLowerCase()
        .startsWith(name.toLowerCase());
      const matchesSale = sale === 'todos' || advert.sale.toString() === sale;
      const matchesPrice =
        (priceMin === '' || advert.price >= parseInt(priceMin)) &&
        (priceMax === '' || advert.price <= parseInt(priceMax));
      const matchesTags = selectedTags.every((tag) =>
        advert.tags.includes(tag.value)
      );

      return matchesName && matchesSale && matchesPrice && matchesTags;
    });

    onFilterChange(filteredAdverts);
  }, [adverts, name, sale, priceMin, priceMax, selectedTags, onFilterChange]);

  return (
    <form className="container mt-5">
      <MDBRow>
        <MDBCol md="3">
          <MDBInput
            label="Nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </MDBCol>
        <MDBCol md="3">
          <div className="form-outline">
            <select
              className="form-select"
              id="sale"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="true">Venta</option>
              <option value="false">Compra</option>
            </select>
          </div>
        </MDBCol>
        <MDBCol md="2">
          <MDBInput
            label="Precio mínimo"
            type="number"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
          />
        </MDBCol>
        <MDBCol md="2">
          <MDBInput
            label="Precio máximo"
            type="number"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </MDBCol>
        <MDBCol md="2">
          <div className="form-outline">
            <Select
              isMulti
              options={tags}
              value={selectedTags}
              onChange={setSelectedTags}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </MDBCol>
      </MDBRow>
    </form>
  );
};

export default FilterForm;
