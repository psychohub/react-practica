import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
} from 'mdb-react-ui-kit';

const AdvertItem = ({ advert }) => {
  return (
    <MDBCol md="4">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <Link to={`/adverts/${advert.id}`}>{advert.name}</Link>
          </MDBCardTitle>
          {advert.photo && (
            <MDBCardImage
              src={advert.photo}
              alt={advert.name}
              style={{
                maxWidth: '100%',
                height: '200px',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
          )}
          <MDBCardText>
            <div>Precio: {advert.price}</div>
            <div>Tipo: {advert.sale ? 'Venta' : 'Compra'}</div>
            <div>Tags: {advert.tags.join(', ')}</div>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default AdvertItem;
