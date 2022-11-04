import React, { useRef } from 'react';
import Landing from '../Landing';
import LandingLowerToys from './LandingLowerToys';
import ArticleToys from './ArticleToys';
import WoodToys from './WoodToys';
import SoftToys from './SoftToys';
import Teethers from './Teethers';
import DollsToys from './DollsToys';
import PlayStationsToys from './PlayStationsToys';
import ScrollToTop from './ScrollToTop';

const Toys = () => {
  //useRef
  const scrollToWoodRef = useRef();
  const scrollToSoftRef = useRef();
  const scrollToTeethersRef = useRef();
  const scrollToDollsRef = useRef();
  const scrollToPlayStationsRef = useRef();

  //scroll click handlers
  const scrollToWoodHandle = () => {
    scrollToWoodRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSoftHandle = () => {
    scrollToSoftRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeethersHandle = () => {
    scrollToTeethersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDollsHandle = () => {
    scrollToDollsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlayStationsHandle = () => {
    scrollToPlayStationsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <LandingLowerToys
        woodClick={scrollToWoodHandle}
        softClick={scrollToSoftHandle}
        teetherClick={scrollToTeethersHandle}
        dollsClick={scrollToDollsHandle}
        playStationsClick={scrollToPlayStationsHandle}
      />
      <ArticleToys />
      <WoodToys woodRef={scrollToWoodRef} />
      <SoftToys softRef={scrollToSoftRef} />
      <Teethers teetherRef={scrollToTeethersRef} />
      <DollsToys dollsRef={scrollToDollsRef} />
      <PlayStationsToys playStationsRef={scrollToPlayStationsRef} />
      <ScrollToTop />
    </>
  );
};

export default Toys;
