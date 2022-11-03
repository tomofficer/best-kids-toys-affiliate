import React from 'react';
import Landing from '../Landing';
import LandingLowerToys from './LandingLowerToys';
import ArticleToys from './ArticleToys';
import WoodToys from './WoodToys';
import SoftToys from './SoftToys';
import Teethers from './Teethers';

const Toys = () => {
  return (
    <>
      <LandingLowerToys />
      <ArticleToys />
      <WoodToys />
      <SoftToys />
      <Teethers />
    </>
  );
};

export default Toys;
