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

const PlayStationsToys = ({ playStationsRef }) => {
  //data set for toys
  const toyData = [
    {
      category: 'Play Stations Toys',
      title: 'Avenlur Natural Montessori Indoor Gym Playset',
      description:
        "THE ULTIMATE CLIMBING SET - helps developing independence: children work on the improvement of their motor skills, explore their body limits in a safe manner and encourage children's imagination.",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/playstation1_oFloqPgzI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667624423068',
      url: 'https://www.amazon.com/dp/B094795S6S/ref=sspa_dk_detail_6?pd_rd_i=B094795S6S&pd_rd_w=dsww0&content-id=amzn1.sym.88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_p=88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_r=2K1CBNQREH15V9N9V20H&pd_rd_wg=sOVmX&pd_rd_r=b172afd0-a05c-4670-b84c-40b2e74f307c&s=toys-and-games&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&smid=A4JMCRH3MBF65&th=1',
    },
    {
      category: 'Play Station Toys',
      title: 'CassaroKids Waldorf Natural Wood Climbing PLay Tower With Slide',
      description:
        'Each cube awaits with a different acoustic effect! In this way, early perception and musicality are fostered.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/playstation2_0OhpSA2AR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667624832675',
      url: 'https://www.amazon.com/CASSARO-Convertible-Tower-Slide-Chalkboard/dp/B083MSCQBR/ref=sr_1_4?crid=1PQDSZXECH4IA&keywords=montessori+play+table&qid=1667624720&qu=eyJxc2MiOiI0LjU4IiwicXNhIjoiNC4zNSIsInFzcCI6IjEuOTIifQ%3D%3D&s=toys-and-games&sprefix=montessori+play+tab%2Ctoys-and-games%2C185&sr=1-4&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3play',
    },
    {
      category: 'Play Station Toys',
      title: 'Montessori Sensory Bin Natural Wood Childrens Play Station',
      description:
        'These toys can provide your children with more entertainment time and encourage them to master good motor skills and develop abilities. You can pour beans, oats, sand in this wooden box..',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/playstation3_FeWb9BoHk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667624943489',
      url: 'https://www.amazon.com/Crisschirs-Montessori-Toddlers-Transfer-Development/dp/B08DHYWR3R/ref=sr_1_22?crid=2KMO3ZRNXA1ZE&keywords=organic+baby+table&qid=1667624888&s=toys-and-games&sprefix=organic+baby+tab%2Ctoys-and-games%2C227&sr=1-22',
    },
    {
      category: 'Play Station Toys',
      title: 'Blue Ginkgo Montessori Waldorf Fine Motor Skills Learning Bin',
      description:
        "Transfer, Scoop, and Play! This set of toddler-sized wooden kitchen tools make a perfect addition to any toddler's sensory box. Play with these wooden toys and your sensory bin favorites like beans and colorful rice support the development of hand-eye coordination, fine motor skills, and a childs confidence.",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/playstation4_Qvg784USl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667625208001',
      url: 'https://www.amazon.com/BLUE-GINKGO-Sensory-Bin-Tools/dp/B08S3KKVJR/ref=sr_1_30_sspa?crid=I6DX808IU52F&keywords=natural+wood+play+table&qid=1667625135&qu=eyJxc2MiOiIxLjk0IiwicXNhIjoiMi4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=toys-and-games&sprefix=natural+wood+play+tabl%2Ctoys-and-games%2C190&sr=1-30-spons&psc=1',
    },
  ];

  return (
    <>
      <Center>
        <Box maxW={'4xl'} py={10} px={20} ref={playStationsRef}>
          <Heading as="h2" size="2xl" mt={14} mb={6}>
            Safe + Natural Play Stations
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

export default PlayStationsToys;

//test modal functionality
