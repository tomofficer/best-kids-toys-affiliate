import React from 'react';
import {
  Flex,
  Box,
  chakra,
  Image,
  Link,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react';

const WoodToys = ({ woodRef }) => {
  //data set for toys
  const toyData = [
    {
      category: 'Wooden Toys',
      title: 'Haba Eggs',
      description:
        'Four multi-colored wooden eggs that make a different sound when shaken!',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/habaeggs_evphepGx_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667028754580',
      url: 'https://www.amazon.com/HABA-Musical-Eggs-Acoustic-Germany/dp/B00BF3D666/ref=sr_1_7?crid=2Z1KKBC0NWY2R&keywords=haba&qid=1667028707&qu=eyJxc2MiOiI3LjUyIiwicXNhIjoiNy4yMCIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=natural+baby+toys%2Caps%2C456&sr=8-7',
    },
    {
      category: 'Wooden Toys',
      title: 'Haba Blocks',
      description:
        'Each cube awaits with a different acoustic effect! In this way, early perception and musicality are fostered.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/habablocks_Xo7IvvlL9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667031920901',
      url: 'https://www.amazon.com/HABA-Sounds-Discovery-Acoustic-Germany/dp/B00BF3CK90/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.9c246b91-3d49-4e6c-8ff6-5b6e9a100bd4%3Aamzn1.sym.9c246b91-3d49-4e6c-8ff6-5b6e9a100bd4&crid=2Z1KKBC0NWY2R&cv_ct_cx=haba&keywords=haba&pd_rd_i=B00BF3CK90&pd_rd_r=8b1fc94a-982c-41d6-a224-42d256b66454&pd_rd_w=toMui&pd_rd_wg=twxJ8&pf_rd_p=9c246b91-3d49-4e6c-8ff6-5b6e9a100bd4&pf_rd_r=VZYB5Q5JRES9W4E2N8XY&qid=1667031865&qu=eyJxc2MiOiI3LjUyIiwicXNhIjoiNy4yMCIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=natural+baby+toys%2Caps%2C456&sr=1-2-a43b4223-fbe9-48b0-af69-6d70cf84978b-spons&psc=1&smid=A1V3CN8LT5ZFSV',
    },
    {
      category: 'Wooden Toys',
      title: 'Agirgle Building Blocks',
      description:
        'Large 8 piece rainbow building block set! Promotes baby awareness of shape and color as well as helps build coordination.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/agirgleblocks_JQmdIw2fS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667032404960',
      url: 'https://www.amazon.com/dp/B09JFW3YBT/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B09JFW3YBT&pd_rd_w=4GLlH&content-id=amzn1.sym.bff6e147-54ad-4be3-b4ea-ec19ea6167f7&pf_rd_p=bff6e147-54ad-4be3-b4ea-ec19ea6167f7&pf_rd_r=EPP9TAVQ9AWEG0K09VTG&pd_rd_wg=mVae6&pd_rd_r=c3c09365-cb8e-4b57-9c9f-d40c809be1b8&s=toys-and-games&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy',
    },
    {
      category: 'Wooden Toys',
      title: 'Kookaroo Wooden Bee Hive Sorting Toy',
      description:
        "Ignite your child's imagination! Designed for durability and created by teachers for optimal preschool learning growth.",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/kookaroobeehive_KAoY20d93.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667032941747',
      url: 'https://www.amazon.com/dp/B09G5MYFN2/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B09G5MYFN2&pd_rd_w=fbMtY&content-id=amzn1.sym.88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_p=88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_r=DTCD0ZJA7N5REMV02JWZ&pd_rd_wg=QCtww&pd_rd_r=74792612-060e-4a0a-b97e-1e5f17283fbb&s=toys-and-games&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw',
    },
    {
      category: 'Wooden Toys',
      title: 'Labebe Wood Rainbow Rocker Chairla',
      description:
        'Waldorf rocking play chair for toddlers! Durable, quality wood rocking chair and climbing frame made with Eco-Friendly, safe paint.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/labeberocker_grakg0f9T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667033235469',
      url: 'https://www.amazon.com/dp/B09J4NYQP6/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B09J4NYQP6&pd_rd_w=jYWQN&content-id=amzn1.sym.88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_p=88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_r=PV6TAKE43MJ13X0NT704&pd_rd_wg=DxxXM&pd_rd_r=b781e2e6-c33b-4832-a28d-fec1f663a530&s=toys-and-games&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw',
    },
  ];

  return (
    <>
      <Center>
        <Box maxW={'4xl'} py={10} px={20} ref={woodRef}>
          <Heading as="h2" size="2xl" mt={14} mb={6}>
            Natural Wood Toys
          </Heading>
          <Heading fontSize={'xl'} mt={2} mb={4}>
            The benefits of buying durable, safe wooden toys over cheaply made
            plastic
          </Heading>
          <Text as="p" fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Est excepturi accusamus doloribus suscipit
            accusantium necessitatibus, ab, exercitationem asperiores magni aut,
            sed praesentium vero velit! Error deleniti tempora mollitia
            voluptatibus doloremque, porro, rerum sunt, cumque nostrum esse
            sequi temporibus! Ad veritatis fugit quisquam rem, quod earum a
            nihil aperiam cupiditate quae laborum quibusdam adipisc. Voluptate
            totam impedit consectetur quidem consequatur mollitia.
          </Text>
        </Box>
      </Center>

      {toyData.map(toy => (
        <>
          <Flex p={30} w="full" alignItems="center" justifyContent="center">
            <Box maxW="md" mx="auto" bg="white" shadow="lg" rounded="lg">
              <Box px={4} py={2} bg="gray.50" borderTopRadius={10}>
                <chakra.h1
                  color="gray.800"
                  fontWeight="bold"
                  fontSize="3xl"
                  textTransform="uppercase"
                >
                  {toy.title}
                </chakra.h1>
                <chakra.p mt={1} fontSize="sm" color="gray.600">
                  {toy.description}
                </chakra.p>
              </Box>

              <Image
                h="full"
                w="full"
                fit="cover"
                mt={2}
                py={6}
                px={8}
                src={toy.img}
                alt="toy"
              />

              <Flex
                alignItems="center"
                justifyContent="center"
                px={4}
                py={6}
                bg="green.600"
                roundedBottom="lg"
              >
                {/* <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                  $129
                </chakra.h1> */}
                <Link href={toy.url} target="_blank">
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
                      transform: 'scale(1.1)',
                    }}
                    _focus={{
                      bg: 'gray.400',
                    }}
                  >
                    View On Amazon
                  </chakra.button>
                </Link>
              </Flex>
            </Box>
          </Flex>
          ;
        </>
      ))}
    </>
  );
};

export default WoodToys;
