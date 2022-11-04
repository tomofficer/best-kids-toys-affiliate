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
import Home from './Home';
import Landing from './Landing';
import Books from './components/Books';
import Toys from './components/Toys';
import Sleep from './components/Sleep';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Landing />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/toys" element={<Toys />} />
        </Routes>
        <Routes>
          <Route path="/books" element={<Books />} />
        </Routes>
        <Routes>
          <Route path="/sleep" element={<Sleep />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
