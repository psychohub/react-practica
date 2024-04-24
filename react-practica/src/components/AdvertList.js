import React from 'react';
import AdvertItem from './AdvertItem';

const AdvertList = ({ adverts }) => {
  return (
    <ul>
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advert={advert} />
      ))}
    </ul>
  );
};

export default AdvertList;