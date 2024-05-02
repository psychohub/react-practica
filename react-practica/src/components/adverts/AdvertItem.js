import React from 'react';
import { Link } from 'react-router-dom';

const AdvertItem = ({ advert }) => {
  return (
    <li>
      <Link to={`/v1/adverts/${advert.id}`}>{advert.name}</Link>
      {/* Otros detalles del anuncio */}
    </li>
  );
};

export default AdvertItem;
