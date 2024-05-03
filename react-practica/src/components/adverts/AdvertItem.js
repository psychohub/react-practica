// AdvertItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MDBListGroupItem } from 'mdb-react-ui-kit';

const AdvertItem = ({ advert }) => {
  return (
    <MDBListGroupItem>
      <Link to={`/adverts/${advert.id}`}>{advert.name}</Link>
      <p>Precio: {advert.price}</p>
      <p>Tipo: {advert.sale ? 'Venta' : 'Compra'}</p>
      <p>Tags: {advert.tags.join(', ')}</p>
    </MDBListGroupItem>
  );
};

export default AdvertItem;
