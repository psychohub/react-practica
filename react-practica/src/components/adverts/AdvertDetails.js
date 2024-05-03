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
        {/* Otros detalles del anuncio */}
        <MDBCardText>
          {/* Aquí puedes agregar más detalles como el precio, descripción, etc. */}
          Precio: {advert.price}
          {/* Añade más campos según necesites */}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default AdvertDetails;
