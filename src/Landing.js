import React from 'react';
import {
  chakra,
  useColorModeValue,
  Box,
  Flex,
  IconButton,
  Stack,
  Heading,
  Button,
  Image,
  Center,
} from '@chakra-ui/react';

const Landing = () => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <chakra.header>
      <Box>
        <Center>
          <Image src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/mamabearlogo_6a73P1Sz_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667467807527" />
        </Center>
      </Box>
      {/* <Box
        w="full"
        h="container.sm"
        // h="450px"
        backgroundImage="url(https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/landing_K4JxpOgJM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667020030326)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.600"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Image
              maxW={'300px'}
              marginLeft={6}
              src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/your-next-toy-trans_9T24F53z5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663232649594"
            />
            <Heading
              fontSize={['3xl', '', '5xl']}
              fontWeight="semibold"
              fontStyle={'italic'}
              color="white"
              textTransform="uppercase"
            >
              Best natural kids{' '}
              <chakra.span color="blue.200">toys and gifts</chakra.span>
            </Heading>
            <Button
              textTransform="uppercase"
              w="fit-content"
              _hover={{
                bg: 'blue.100',
              }}
            >
              Let's find your next toy!
            </Button>
          </Stack>
        </Flex>
      </Box> */}
    </chakra.header>
  );
};

export default Landing;
