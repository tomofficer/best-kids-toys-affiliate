import React from 'react';
import { Box, chakra, Stack } from '@chakra-ui/react';

export default function Hero6() {
  return (
    <div>
      <Box
        pos="relative"
        overflow="hidden"
        bgImage={
          "url('https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/8_3ol1nauV6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662098892937')"
        }
        bgPosition={'center'}
      >
        <Box maxW="7xl" mx="auto">
          <Box
            pos="relative"
            pb={{
              base: 8,
              sm: 16,
              md: 20,
              lg: 28,
              xl: 32,
            }}
            w="full"
            border="solid 1px transparent"
          >
            <Box
              maxW={{
                base: '7xl',
              }}
              px={{
                base: 4,
                sm: 6,
                lg: 8,
              }}
              mt={{
                base: 12,
                md: 16,
                lg: 20,
                xl: 28,
              }}
            >
              <Box
                textAlign="center"
                w={{
                  base: 'full',
                  md: 11 / 12,
                  xl: 8 / 12,
                }}
                mx="auto"
              >
                <chakra.h1
                  fontSize={{
                    base: '4xl',
                    sm: '5xl',
                    md: '6xl',
                  }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                  color="gray.900"
                  _dark={{
                    color: 'white',
                  }}
                >
                  <chakra.span
                    display={{
                      base: 'block',
                      xl: 'inline',
                    }}
                  >
                    Best Kids{' '}
                  </chakra.span>
                  <chakra.span
                    display={{
                      base: 'block',
                      xl: 'inline',
                    }}
                    color={'pink.400'}
                  >
                    Toys 2022
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{
                    base: 3,
                    sm: 5,
                    md: 5,
                  }}
                  mx={{
                    sm: 'auto',
                    lg: 0,
                  }}
                  mb={6}
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  color="gray.500"
                  lineHeight="base"
                >
                  Looking for that perfect birthday gift for your little one?
                  Look no further! Explore the latest and best kids toys on the
                  market all in one place!
                </chakra.p>
                <Stack
                  direction={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                  }}
                  mb={{
                    base: 4,
                    md: 8,
                  }}
                  spacing={{
                    base: 4,
                    md: 2,
                  }}
                  justifyContent="center"
                >
                  <Box rounded="full" shadow="md">
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{
                        base: 'md',
                        md: 'lg',
                      }}
                      rounded="md"
                      color="white"
                      bg="pink.400"
                      _hover={{
                        bg: 'pink.500',
                        color: 'white',
                      }}
                      px={{
                        base: 8,
                        md: 10,
                      }}
                      py={{
                        base: 3,
                        md: 4,
                      }}
                      cursor="pointer"
                    >
                      Let's Get Started
                    </chakra.a>
                  </Box>
                  <Box mt={[3, 0]} ml={[null, 3]}></Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      ;
    </div>
  );
}
