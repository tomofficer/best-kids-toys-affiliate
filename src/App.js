import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import SimpleSlider from './components/Carousel';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero7 from './components/Hero7';
import Carousel2 from './components/Carousel2';
import Hero6 from './components/Hero6';
import Product from './components/Product';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
import Product5 from './components/Product5';
import CallToActionSmall from './components/CallToActionSmall';
import CallToActionMedium from './components/CallToActionMedium';
import CallToActionLarge from './components/CallToActionLarge';
import Carousel3 from './components/Carousel3';
import Carousel4 from './components/Carousel4';
import Home from './Home';
import Header2 from './components/Header2';
import Landing from './Landing';
import LandingLower from './components/LandingLower';
import Article from './components/Article';
import WoodToys from './components/WoodToys';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Landing />
        <LandingLower />
        <Article />
        <WoodToys />

        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
