import React from 'react';
import { Flex, Box, chakra, Image } from '@chakra-ui/react';

const Product2 = ({ product }) => {
  return (
    <div>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW="xs"
          mx="auto"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h1
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              fontWeight="bold"
              fontSize="3xl"
              textTransform="uppercase"
            >
              {product.title}
            </chakra.h1>
            <chakra.p
              mt={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: 'gray.400',
              }}
            >
              {product.description}
            </chakra.p>
          </Box>

          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src={product.imgPath}
            alt="NIKE AIR"
          />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <chakra.h1
              color="white"
              fontWeight="bold"
              fontSize="lg"
              _hover={{ color: 'yellow.200' }}
            >
              ${product.price}
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: 'yellow.200',
              }}
              _focus={{
                bg: 'gray.400',
              }}
            >
              View on Amazon
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Product2;
