import React, { useState, useEffect } from 'react';
import { Center, Box, Button } from '@chakra-ui/react';

import Product from './Product2';

const ProductMap = () => {
  //product data
  const products = [
    {
      title: 'Go Kart',
      description:
        ' Lorem lor sit amet, consectetur adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623',
      price: '30',
    },
    {
      title: 'Board Game',
      description: ' Lorem ipsum dolor sit adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/3_bpfVcDl3k.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095987115',
      price: '20',
    },
    {
      title: 'Scooter',
      description:
        ' Lorem ipsut, consectetur adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/5_AxTNYlkBw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096154322',
      price: '10',
    },
    {
      title: 'Scooter',
      description:
        ' Lorem ipsut, consectetur adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/6_U1y-EgAxG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096206408',
      price: '10',
    },
    {
      title: 'Go Kart',
      description:
        ' Lorem lor sit amet, consectetur adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623',
      price: '30',
    },
    {
      title: 'Board Game',
      description: ' Lorem ipsum dolor sit adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/3_bpfVcDl3k.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662095987115',
      price: '20',
    },
    {
      title: 'Scooter',
      description:
        ' Lorem ipsut, consectetur adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/5_AxTNYlkBw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096154322',
      price: '10',
    },
    {
      title: 'Scooter',
      description:
        ' Lorem ipsut, consectetur adipisicing elit. Eveniet, saepe.',
      imgPath:
        'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/6_U1y-EgAxG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096206408',
      price: '10',
    },
  ];

  //state variables
  const [showMore, setShowMore] = useState(false);

  //click handlers
  const showMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <Box>
        <Center>
          {products.slice(0, 4).map(product => (
            <>
              <Product product={product} />
            </>
          ))}
        </Center>
      </Box>

      <Box bg="#edf3f8" pb={5}>
        <Button
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
          width="auto"
          marginTop="4"
          marginBottom="2"
          onClick={() => showMoreClick()}
        >
          Show Me More Toys!
        </Button>
      </Box>
    </div>
  );
};

export default ProductMap;
