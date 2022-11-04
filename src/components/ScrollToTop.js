import { Box } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import {
  FaLongArrowAltUp,
  FaRegArrowAltCircleUp,
  FaRegHandPointUp,
} from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  //hover state
  const [isHovering, setIsHovering] = useState(false);

  //hover handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div
      className="scroll-to-top"
      style={{
        transform: isHovering ? 'scale(1.2)' : '',
        marginLeft: '95%',
        paddingBottom: '30px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaRegHandPointUp size={40} color={'green'} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
