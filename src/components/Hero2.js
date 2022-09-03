import React, { useRef } from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Carousel from './Carousel';

export default function Hero2() {
  //state variables
  const scrollToDivider = useRef();

  //click handlers
  const scrollClickHandle = () => {
    scrollToDivider.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/banner_Y2kbh0MZ5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662192270431)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', lg: '5xl' })}
            >
              Looking for that perfect birthday gift? We have all the best rated
              kids toys of 2022!
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                onClick={() => scrollClickHandle()}
              >
                Let's get started!
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                // _hover={{ bg: 'whiteAlpha.500' }}
                _hover={{ bg: 'gray.200', color: 'black' }}
              >
                Not sure where to start?
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <div ref={scrollToDivider}></div>
    </>
  );
}
