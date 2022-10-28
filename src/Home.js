import React from 'react';
import { Box, Grid, VStack } from '@chakra-ui/react';
import Hero2 from './components/Hero2';
import ProductMap from './components/ProductMap';
import Hero from './components/Hero7';
import MainArticle from './components/MainArticle';
import SubFooter from './components/SubFooter';

const Home = () => {
  return (
    <div>
      <Hero2 />
      <ProductMap />
      <SubFooter />
      <MainArticle />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Hero />
            <SubFooter />
            <ProductMap />
            <Hero />
          </VStack>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
