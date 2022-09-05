import React from 'react';
import { Box, Grid, VStack } from '@chakra-ui/react';
import Hero2 from './components/Hero2';
import Carousel from './components/Carousel4';
import ProductMap from './components/ProductMap';
import Hero from './components/Hero7';
import Hero7Flipped from './components/Hero7Flipped';

const Home = () => {
  return (
    <div>
      <Hero2 />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8}>
            <ProductMap />
            <Hero />
            <Hero7Flipped />
            {/* <Carousel /> */}
          </VStack>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
