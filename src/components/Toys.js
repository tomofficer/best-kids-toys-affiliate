import React from 'react';
import { Flex, Box, chakra, Image } from '@chakra-ui/react';

const Toys = () => {
  //data set for toys
  const toyData = [
    {
      category: '',
      title: 'Haba Eggs',
      description:
        'Four multi-colored wooden eggs that make a different sound when shaken!',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/habaeggs_evphepGx_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667028754580',
      url: 'https://www.amazon.com/HABA-Musical-Eggs-Acoustic-Germany/dp/B00BF3D666/ref=sr_1_7?crid=2Z1KKBC0NWY2R&keywords=haba&qid=1667028707&qu=eyJxc2MiOiI3LjUyIiwicXNhIjoiNy4yMCIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=natural+baby+toys%2Caps%2C456&sr=8-7',
    },
  ];

  return (
    <>
      {toyData.map(toy => (
        <>
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
                  {toy.title}
                </chakra.h1>
                <chakra.p
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: 'gray.400',
                  }}
                >
                  {toy.description}
                </chakra.p>
              </Box>

              <Image
                h={48}
                w="full"
                fit="cover"
                mt={2}
                src={toy.img}
                alt="NIKE AIR"
              />

              <Flex
                alignItems="center"
                justifyContent="center"
                px={4}
                py={4}
                bg="blue.700"
                roundedBottom="lg"
              >
                {/* <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                  $129
                </chakra.h1> */}
                <chakra.button
                  px={4}
                  py={2}
                  bg="white"
                  fontSize="xs"
                  color="black"
                  fontWeight="bold"
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: 'yellow.300',
                    color: 'blue.800',
                  }}
                  _focus={{
                    bg: 'gray.400',
                  }}
                >
                  View On Amazon
                </chakra.button>
              </Flex>
            </Box>
          </Flex>
          ;
        </>
      ))}
    </>
  );
};

export default Toys;
