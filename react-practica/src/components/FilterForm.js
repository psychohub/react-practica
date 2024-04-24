import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      name,
      sale,
      price,
      tags,
    };
    onFilterChange(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario de filtros */}
    </form>
  );
};

export default FilterForm;