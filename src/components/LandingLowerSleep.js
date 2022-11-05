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
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

const LandingLowerSleep = ({ sleepSackClick, swaddleClick }) => {
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
      <Center mb={4} mt={14}>
        <Heading fontSize={'3xl'}>Sleep</Heading>
      </Center>

      <Center>
        <Box
          maxW={'4xl'}
          px={10}
          py={2}
          borderBottom={2}
          borderTop={2}
          borderStyle={'solid'}
          borderColor={useColorModeValue('green.600')}
        >
          <HStack spacing={10} fontSize={'sm'} fontWeight={'500'}>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => sleepSackClick()}
            >
              Sleep Sacks
            </Text>
            <Text
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => swaddleClick()}
            >
              Swaddles
            </Text>
            <Text _hover={{ transform: 'scale(1.1)' }}>Bassinets</Text>
            <Text _hover={{ transform: 'scale(1.1)' }}>Night Lights</Text>
          </HStack>
        </Box>
      </Center>

      <Box pt={10} px={32}>
        <Center>
          <Flex
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            p={10}
          >
            <Heading>
              30+ Most Effective Products For A Good Nights Rest
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
              Organic guide specially crafted for raising healthy kids the
              natural way in today's modern world!
            </Text>
          </Flex>
        </Center>
        <Box px={40} pt={4} pb={14}>
          <Image
            src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/sleep_jcIJTDO0s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667603284158"
            borderRadius={20}
          />
        </Box>
      </Box>
    </>
  );
};

export default LandingLowerSleep;
