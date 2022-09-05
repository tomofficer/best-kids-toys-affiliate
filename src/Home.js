import React from 'react';
import { Box, Grid, VStack } from '@chakra-ui/react';
import Hero2 from './components/Hero2';
import Carousel from './components/Carousel4';
import ProductMap from './components/ProductMap';
import Hero from './components/Hero7';
import Hero7Flipped from './components/Hero7Flipped';
import MainArticle from './components/MainArticle';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import SubFooter from './components/SubFooter';

const Home = () => {
  return (
    <div>
      <Hero2 />

      <ProductMap />
      <MainArticle />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8}>
            <Hero />
            <SubFooter />
            <ProductMap />
            <Hero />
            <SubFooter />
          </VStack>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
