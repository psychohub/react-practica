import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      name,
      sale: sale === 'all' ? '' : sale,
      price: `${priceMin}-${priceMax}`,
      tags: tags.join(','),
    };
    onFilterChange(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sale">Tipo:</label>
        <select
          id="sale"
          value={sale}
          onChange={(e) => setSale(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="true">Venta</option>
          <option value="false">Compra</option>
        </select>
      </div>
      <div>
        <label htmlFor="priceMin">Precio mínimo:</label>
        <input
          type="number"
          id="priceMin"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priceMax">Precio máximo:</label>
        <input
          type="number"
          id="priceMax"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tags">Etiquetas:</label>
        <input
          type="text"
          id="tags"
          value={tags.join(',')}
          onChange={(e) => setTags(e.target.value.split(','))}
        />
      </div>
      <button type="submit">Aplicar filtros</button>
    </form>
  );
};

export default FilterForm;
