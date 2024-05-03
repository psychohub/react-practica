// AdvertDetails.js

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

const AdvertDetails = ({ advert }) => {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="2">
            <MDBCardTitle>{advert.name}</MDBCardTitle>
            <MDBCardText>
              <p>Precio: {advert.price}</p>
              <p>Tipo: {advert.sale ? 'Venta' : 'Compra'}</p>
              <p>Tags: {advert.tags.join(', ')}</p>
            </MDBCardText>
          </MDBCol>
          <MDBCol md="2">
            {advert.photo && (
              <MDBCardImage
                src={advert.photo}
                alt={advert.name}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            )}
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default AdvertDetails;
