import React, { useRef } from 'react';
import ArticleBooks from './ArticleBooks';
import EducationalBooks from './EducationalBooks';
import FunBooks from './FunBooks';
import LandingLowerBooks from './LandingLowerBooks';
import ScrollToTop from './ScrollToTop';
import SensoryBooks from './SensoryBooks';

const Books = () => {
  //useRef
  const scrollToFunnyRef = useRef();
  const scrollToEducationalRef = useRef();
  const scrollToSensoryRef = useRef();
  const scrollToCaldecottRef = useRef();
  const scrollToNewburyRef = useRef();

  //scroll click handlers
  const scrollToFunnyHandle = () => {
    scrollToFunnyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEducationalHandle = () => {
    scrollToEducationalRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSensoryHandle = () => {
    scrollToSensoryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCaldecottHandle = () => {
    scrollToCaldecottRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNewburyHandle = () => {
    scrollToNewburyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LandingLowerBooks
        funnyClick={scrollToFunnyHandle}
        educationalClick={scrollToEducationalHandle}
        sensoryClick={scrollToSensoryHandle}
      />
      <ArticleBooks />
      <FunBooks funnyRef={scrollToFunnyRef} />
      <EducationalBooks educationalRef={scrollToEducationalRef} />
      <SensoryBooks sensoryRef={scrollToSensoryRef} />
      <ScrollToTop />
    </>
  );
};

export default Books;
