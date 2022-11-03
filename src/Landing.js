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
      <Box py={10}>
        <Center>
          <Image
            w={'450px'}
            mr={20}
            src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/mamabearlogo2_pIM5D4jSP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667468045625"
          />
        </Center>
      </Box>
      {/* <Box w="full">
        <Image src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/woods_Je-JXpY4H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667468664682" />
      </Box> */}
    </chakra.header>
  );
};

export default Landing;
