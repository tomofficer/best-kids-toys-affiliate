import React, { useState, useEffect } from 'react';
import { SimpleGrid, Flex, Image, chakra, Box, Icon } from '@chakra-ui/react';
import { toBeEmptyDOMElement } from '@testing-library/jest-dom/dist/matchers';

const Hero7 = () => {
  //state variables

  //data
  const toyList = [
    {
      index: 0,
      brand: 'Toy Machine',
      title: 'Toy Number One',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis necessitatibus vero omnis sapiente. Excepturi, nesciunt.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623',
      link: 'https://www.amazon.com/CifToys-Learning-Workbench-Construction-Engineering/dp/B073PN1BN9/ref=sr_1_15?gclid=CjwKCAjw9suYBhBIEiwA7iMhNNw_xL6T96lkDc6xMrieBe2Ez7rbqtShIw9D8IcfDzNYlUDm2udAOhoCeaEQAvD_BwE&hvadid=617917201645&hvdev=c&hvlocphy=9032643&hvnetw=g&hvqmt=b&hvrand=6559236446929187373&hvtargid=kwd-1729195407046&hydadcr=7666_13469247&keywords=best+selling+toys+2022&qid=1662243928&sr=8-15',
    },
    {
      index: 1,
      brand: 'Toy Machine',
      title: 'Toy Number Two',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis necessitatibus vero omnis sapiente. Excepturi, nesciunt.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623',
      link: 'https://www.amazon.com/CifToys-Learning-Workbench-Construction-Engineering/dp/B073PN1BN9/ref=sr_1_15?gclid=CjwKCAjw9suYBhBIEiwA7iMhNNw_xL6T96lkDc6xMrieBe2Ez7rbqtShIw9D8IcfDzNYlUDm2udAOhoCeaEQAvD_BwE&hvadid=617917201645&hvdev=c&hvlocphy=9032643&hvnetw=g&hvqmt=b&hvrand=6559236446929187373&hvtargid=kwd-1729195407046&hydadcr=7666_13469247&keywords=best+selling+toys+2022&qid=1662243928&sr=8-15',
    },
    {
      index: 2,
      brand: 'Toy Machine',
      title: 'Toy Number Three',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis necessitatibus vero omnis sapiente. Excepturi, nesciunt.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623',
      link: 'https://www.amazon.com/CifToys-Learning-Workbench-Construction-Engineering/dp/B073PN1BN9/ref=sr_1_15?gclid=CjwKCAjw9suYBhBIEiwA7iMhNNw_xL6T96lkDc6xMrieBe2Ez7rbqtShIw9D8IcfDzNYlUDm2udAOhoCeaEQAvD_BwE&hvadid=617917201645&hvdev=c&hvlocphy=9032643&hvnetw=g&hvqmt=b&hvrand=6559236446929187373&hvtargid=kwd-1729195407046&hydadcr=7666_13469247&keywords=best+selling+toys+2022&qid=1662243928&sr=8-15',
    },
    {
      index: 3,
      brand: 'Toy Machine',
      title: 'Toy Number Four',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis necessitatibus vero omnis sapiente. Excepturi, nesciunt.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/7_IGkcAHF9O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662096262623',
      link: 'https://www.amazon.com/CifToys-Learning-Workbench-Construction-Engineering/dp/B073PN1BN9/ref=sr_1_15?gclid=CjwKCAjw9suYBhBIEiwA7iMhNNw_xL6T96lkDc6xMrieBe2Ez7rbqtShIw9D8IcfDzNYlUDm2udAOhoCeaEQAvD_BwE&hvadid=617917201645&hvdev=c&hvlocphy=9032643&hvnetw=g&hvqmt=b&hvrand=6559236446929187373&hvtargid=kwd-1729195407046&hydadcr=7666_13469247&keywords=best+selling+toys+2022&qid=1662243928&sr=8-15',
    },
  ];

  //check if index is even
  const isEven = num => {
    return num % 2 === 0;
  };

  return (
    <div>
      {toyList.map(toy => (
        <>
          {isEven(toy.index) && (
            <>
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                spacing={0}
                p={20}
              >
                <Flex bg="brand.400">
                  <Image
                    src={toy.img}
                    alt="3 women looking at a laptop"
                    fit="cover"
                    w="full"
                    h={{
                      base: 64,
                      md: 'full',
                    }}
                    bg="gray.100"
                    loading="lazy"
                    // opacity={0.4}
                  />
                </Flex>
                <Flex
                  direction="column"
                  alignItems="start"
                  justifyContent="center"
                  px={{
                    base: 4,
                    md: 8,
                    lg: 20,
                  }}
                  py={24}
                  zIndex={3}
                >
                  <chakra.span
                    color="brand.600"
                    _dark={{
                      color: 'gray.300',
                    }}
                    fontSize="lg"
                    textTransform="uppercase"
                    fontWeight="extrabold"
                  >
                    {toy.brand}
                  </chakra.span>
                  <chakra.h1
                    mb={4}
                    fontSize={{
                      base: '4xl',
                      md: '4xl',
                      lg: '5xl',
                    }}
                    fontWeight="bold"
                    color="brand.600"
                    _dark={{
                      color: 'gray.300',
                    }}
                    lineHeight="shorter"
                    textShadow="2px 0 currentcolor"
                  >
                    {toy.title}
                  </chakra.h1>
                  <chakra.p
                    pr={{
                      base: 0,
                      lg: 16,
                    }}
                    mb={4}
                    fontSize="lg"
                    color="brand.600"
                    _dark={{
                      color: 'gray.400',
                    }}
                    letterSpacing="wider"
                  >
                    {toy.description}
                  </chakra.p>
                  <Box display="inline-flex" rounded="md" shadow="md">
                    <chakra.a
                      mt={2}
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="bold"
                      w="full"
                      rounded="md"
                      _light={{
                        color: 'white',
                      }}
                      bg="brand.600"
                      _dark={{
                        bg: 'brand.500',
                      }}
                      _hover={{
                        bg: 'brand.700',
                        _dark: {
                          bg: 'brand.600',
                        },
                      }}
                      href={toy.link}
                    >
                      View on Amazon
                      {/* <Icon as={FiExternalLink} ml={2} /> */}
                    </chakra.a>
                  </Box>
                </Flex>
              </SimpleGrid>
            </>
          )}
          {isEven(toy.index) === false && (
            <>
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                spacing={0}
                p={20}
              >
                <Flex
                  direction="column"
                  alignItems="start"
                  justifyContent="center"
                  px={{
                    base: 4,
                    md: 8,
                    lg: 20,
                  }}
                  py={24}
                  zIndex={3}
                >
                  <chakra.span
                    color="brand.600"
                    _dark={{
                      color: 'gray.300',
                    }}
                    fontSize="lg"
                    textTransform="uppercase"
                    fontWeight="extrabold"
                  >
                    {toy.brand}
                  </chakra.span>
                  <chakra.h1
                    mb={4}
                    fontSize={{
                      base: '4xl',
                      md: '4xl',
                      lg: '5xl',
                    }}
                    fontWeight="bold"
                    color="brand.600"
                    _dark={{
                      color: 'gray.300',
                    }}
                    lineHeight="shorter"
                    textShadow="2px 0 currentcolor"
                  >
                    {toy.title}
                  </chakra.h1>
                  <chakra.p
                    pr={{
                      base: 0,
                      lg: 16,
                    }}
                    mb={4}
                    fontSize="lg"
                    color="brand.600"
                    _dark={{
                      color: 'gray.400',
                    }}
                    letterSpacing="wider"
                  >
                    {toy.description}
                  </chakra.p>
                  <Box display="inline-flex" rounded="md" shadow="md">
                    <chakra.a
                      mt={2}
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="bold"
                      w="full"
                      rounded="md"
                      _light={{
                        color: 'white',
                      }}
                      bg="brand.600"
                      _dark={{
                        bg: 'brand.500',
                      }}
                      _hover={{
                        bg: 'brand.700',
                        _dark: {
                          bg: 'brand.600',
                        },
                      }}
                      href={toy.link}
                    >
                      View on Amazon
                      {/* <Icon as={FiExternalLink} ml={2} /> */}
                    </chakra.a>
                  </Box>
                </Flex>
                <Flex bg="brand.400">
                  <Image
                    src={toy.img}
                    alt="3 women looking at a laptop"
                    fit="cover"
                    w="full"
                    h={{
                      base: 64,
                      md: 'full',
                    }}
                    bg="gray.100"
                    loading="lazy"
                    // opacity={0.4}
                  />
                </Flex>
              </SimpleGrid>
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Hero7;
