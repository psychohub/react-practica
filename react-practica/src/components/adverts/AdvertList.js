import React from 'react';
import AdvertItem from './AdvertItem';
import { MDBListGroup } from 'mdb-react-ui-kit';

const AdvertList = ({ adverts }) => {
  return (
    <MDBListGroup>
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advert={advert} />
      ))}
    </MDBListGroup>
  );
};

export default AdvertList;
