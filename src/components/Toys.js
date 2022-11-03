import React from 'react';
import Landing from '../Landing';
import LandingLower from './LandingLower';
import Article from './Article';
import WoodToys from './WoodToys';
import SoftToys from './SoftToys';
import Teethers from './Teethers';

const Toys = () => {
  return (
    <>
      <LandingLower />
      <Article />
      <WoodToys />
      <SoftToys />
      <Teethers />
    </>
  );
};

export default Toys;
