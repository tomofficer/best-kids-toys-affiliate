import React from 'react';
import { Box, Icon, chakra, Image, useColorModeValue } from '@chakra-ui/react';

const MainArticle = () => {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={0}>
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
          maxW={{
            lg: '2xl',
          }}
          w={{
            lg: 'full',
          }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{
              base: 'none',
              lg: 'block',
            }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{
              base: '7xl',
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              w="full"
              textAlign={{
                sm: 'center',
                lg: 'left',
              }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                // fontSize={{
                //   base: '4xl',
                //   sm: '5xl',
                //   md: '6xl',
                // }}
                fontSize={'21px'}
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
                  fontFamily={'Poppins.700'}
                >
                  Discover the coolest kids toys of 2022{' '}
                </chakra.span>
                <chakra.span
                  display={{
                    base: 'block',
                    xl: 'inline',
                  }}
                  color="brand.600"
                  _dark={{
                    color: 'brand.400',
                  }}
                >
                  from our toy experts
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                // fontSize={{
                //   sm: 'lg',
                //   md: 'xl',
                // }}
                fontSize={'16px'}
                maxW={{
                  sm: 'xl',
                }}
                mx={{
                  sm: 'auto',
                  lg: 0,
                }}
                color="gray.500"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quaerat, sint molestias quas voluptatibus nam
                debitis, doloremque voluptas sit sapiente, inventore vel. Optio
                enim commodi porro hic, ullam quis iste, rerum molestias, qui
                inventore sint.
              </chakra.p>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                // fontSize={{
                //   sm: 'lg',
                //   md: 'xl',
                // }}
                fontSize={'16px'}
                maxW={{
                  sm: 'xl',
                }}
                mx={{
                  sm: 'auto',
                  lg: 0,
                }}
                color="gray.500"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quaerat, sint molestias quas voluptatibus nam
                debitis, doloremque voluptas sit sapiente, inventore vel. Optio
                enim commodi porro hic, ullam quis iste, rerum molestias, qui
                inventore sint. Explicabo labore non doloremque ratione nihil
                consequatur quia saepe amet velit nemo. Facilis, ipsa at, quos
                maxime mollitia vitae rerum a eaque dicta officia in? Culpa
                quibusdam temporibus exercitationem voluptate magnam modi dicta
                quam, tempora, rerum quisquam ut eos iste. Quae temporibus
                laboriosam voluptatem consequatur eligendi aliquid ducimus
                sapiente. Hic sed eum cum asperiores error sunt exercitationem
                quis ratione, illo quos deserunt aperiam in quas ab!
              </chakra.p>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                // fontSize={{
                //   sm: 'lg',
                //   md: 'xl',
                // }}
                fontSize={'16px'}
                maxW={{
                  sm: 'xl',
                }}
                mx={{
                  sm: 'auto',
                  lg: 0,
                }}
                color="gray.500"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quaerat, sint molestias quas voluptatibus nam
                debitis, doloremque voluptas sit sapiente, inventore vel. Optio
                enim commodi porro hic, ullam quis iste, rerum molestias, qui
                inventore sint.
              </chakra.p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{
          lg: 'absolute',
        }}
        top={{
          lg: 0,
        }}
        bottom={{
          lg: 0,
        }}
        right={{
          lg: 0,
        }}
        w={{
          lg: '50%',
        }}
        border="solid 1px transparent"
      >
        <Image
          h={[56, 72, 96, 'full']}
          w="full"
          fit="cover"
          src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/la-rel-easter-KuCGlBXjH_o-unsplash_8mfprKQod.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662365254721"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default MainArticle;
