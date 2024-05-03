import React from 'react';
import { Link } from 'react-router-dom';
import { MDBListGroupItem } from 'mdb-react-ui-kit';

const AdvertItem = ({ advert }) => {
  return (
    <MDBListGroupItem>
      <Link to={`/v1/adverts/${advert.id}`}>{advert.name}</Link>
      {/* Otros detalles del anuncio */}
    </MDBListGroupItem>
  );
};

export default AdvertItem;
