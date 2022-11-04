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
import LandingLowerSleep from './LandingLowerSleep';
import ArticleSleep from './ArticleSleep';
import SleepSacksSleep from './SleepSacksSleep';
import SwaddlesSleep from './SwaddlesSleep';

const Sleep = () => {
  //useRef
  const scrollToSleepSacksRef = useRef();
  const scrollToSwaddlesRef = useRef();
  // const scrollToTeethersRef = useRef();
  // const scrollToDollsRef = useRef();
  // const scrollToPlayStationsRef = useRef();

  //scroll click handlers
  const scrollToSleepSacksHandle = () => {
    scrollToSleepSacksRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSwaddlesHandle = () => {
    scrollToSwaddlesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const scrollToTeethersHandle = () => {
  //   scrollToTeethersRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // const scrollToDollsHandle = () => {
  //   scrollToDollsRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // const scrollToPlayStationsHandle = () => {
  //   scrollToPlayStationsRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <LandingLowerSleep
        sleepSackClick={scrollToSleepSacksHandle}
        swaddleClick={scrollToSwaddlesHandle}
      />
      <ArticleSleep />
      <SleepSacksSleep sleepSacksRef={scrollToSleepSacksRef} />
      <SwaddlesSleep swaddlesRef={scrollToSwaddlesRef} />
      <ScrollToTop />
    </>
  );
};

export default Sleep;
