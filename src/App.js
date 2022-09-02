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
import Carousel2 from './components/Carousel2';
import Hero6 from './components/Hero6';

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
          </VStack>
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
