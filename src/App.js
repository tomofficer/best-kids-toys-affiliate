import React from 'react';
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero6 />

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8}>
            '
            <Hero />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <Hero7 />
            <Product />
            <Product2 />
            <Product3 />
            <Product4 />
            <CallToActionSmall />
            <CallToActionMedium />
            <CallToActionLarge />
          </VStack>
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
