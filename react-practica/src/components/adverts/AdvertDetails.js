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
              <div>Precio: {advert.price}</div>
              <div>Tipo: {advert.sale ? 'Venta' : 'Compra'}</div>
              <div>Tags: {advert.tags.join(', ')}</div>
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
