// AdvertDetails.js
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';

const AdvertDetails = ({ advert }) => {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>{advert.name}</MDBCardTitle>
        <MDBCardText>
          <p>Precio: {advert.price}</p>
          <p>Tipo: {advert.sale ? 'Venta' : 'Compra'}</p>
          <p>Tags: {advert.tags.join(', ')}</p>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default AdvertDetails;
