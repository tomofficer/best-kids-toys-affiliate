import React from 'react';
import {
  Box,
  Icon,
  chakra,
  Flex,
  SimpleGrid,
  Heading,
  Center,
  Text,
  Image,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

const LandingLower = ({
  woodClick,
  softClick,
  teetherClick,
  dollsClick,
  playStationsClick,
}) => {
  const Feature = props => {
    return (
      <Box>
        <Icon
          boxSize={12}
          _light={{
            color: 'brand.700',
          }}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{
            color: 'gray.900',
          }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{
            color: 'gray.400',
          }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <>
      <Center>
        <Box
          maxW={'4xl'}
          px={10}
          py={2}
          mt={24}
          borderBottom={2}
          borderTop={2}
          borderStyle={'solid'}
          borderColor={useColorModeValue('green.600')}
        >
          <HStack spacing={10} fontSize={'sm'} fontWeight={'500'}>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => woodClick()}
            >
              Wood
            </Text>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => softClick()}
            >
              Soft + Cloth
            </Text>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => teetherClick()}
            >
              Teethers
            </Text>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => dollsClick()}
            >
              Dolls
            </Text>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => playStationsClick()}
            >
              Play Stations
            </Text>
          </HStack>
        </Box>
      </Center>

      <Box
        pt={10}
        px={32}
        // maxW="4xl"
      >
        <Center>
          <Flex
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            p={10}
          >
            <Heading textAlign={'center'}>
              30+ Organic, Eco-Friendly Toys For Tots And Toddlers
            </Heading>
            <Text
              px={{ base: 2, md: 10, lg: 32 }}
              mt={8}
              textAlign={'center'}
              w="auto"
            >
              Have you been looking for the perfect gift for your baby but sick
              of all the plastics and toxins found in common mainstream toys?
              Well, look no further because you'll love our Eco-Friendly,
              Organic gift guide specially crafted for the natural baby mama! We
              personally research, test and review each product we list with the
              utmost care!
            </Text>
          </Flex>
        </Center>
        <Box px={40} pt={4} pb={14}>
          <Image
            src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/organicbaby_UIgkpTmGO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667025243382"
            borderRadius={20}
          />
        </Box>
      </Box>
    </>
  );
};

export default LandingLower;
