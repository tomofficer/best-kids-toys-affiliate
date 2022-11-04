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

const SensoryBooks = ({ sensoryRef }) => {
  //data set for toys
  const toyData = [
    {
      category: 'Sensory Books',
      title: 'Beiens Non Toxic Fabric Early Educational Stimulation Book',
      description:
        "Capturing Your Child's Attention: Baby boys or girls love these early learning toys. There are crinkle paper and bibi sounder hiding in the pages, which encourage baby to explore and gives baby endless hours of fun. The bright colors and contrast background will attract baby's attention",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/sensory1_butGO9sjI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667546333565',
      url: 'https://www.amazon.com/beiens-Contrast-NonToxic-Educational-Stimulation/dp/B0892JY6NZ/ref=sr_1_8?crid=STBWGXOPB6T4&keywords=organic%2Bsensory%2Bbooks%2Bfor%2Bbabies&qid=1667546241&s=toys-and-games&sprefix=organic%2Bsensorybooks%2Bfor%2Bbabies%2Ctoys-and-games%2C186&sr=1-8&th=1',
    },
    {
      category: 'Sensory Books',
      title: 'iPlay, iLearn Montessori 2 pcs Sensory Book Set',
      description:
        'Comes with 2 busy books, Food for Joy and Happy Farm, which includes colors, animals, numbers, fruits & vegetables, cars and so on. Make learning more fun for toddlers.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/sensory3_9XTJY0M6r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667546729707',
      url: 'https://www.amazon.com/iPlay-iLearn-Kids-Animal-Learning/dp/B09LHMMW1H/ref=sr_1_3_sspa?crid=3BA295PNBB5VD&keywords=organic+sensory+books&qid=1667546669&s=toys-and-games&sprefix=sensory+books+%2Ctoys-and-games%2C174&sr=1-3-spons&psc=1',
    },
    {
      category: 'Sensory Books',
      title: 'TeyToy My First Soft Book Non-Toxic Fabric',
      description:
        'Baby first book teaches your little one how different things feel by touch with these soft High Contrast Books, Before they are able to clearly see colors, babies respond to the strong contrast between black and white, which makes this the perfect first book for young, developing brains. ',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/sensory2_oB9SXx2C0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667546553229',
      url: 'https://www.amazon.com/teytoy-Nontoxic-Activity-Crinkle-Educational/dp/B07ZGHF8WV/ref=sr_1_10?crid=TTH621D5CO9V&keywords=non+toxic+sensory+books&qid=1667546489&s=toys-and-games&sprefix=non+toxic+sensory+books%2Ctoys-and-games%2C181&sr=1-10',
    },

    {
      category: 'Sensory Books',
      title: 'Montessori Autism Sensory Busy Book For Kids',
      description:
        'We Designed 12 Themes for Toddler Learning Activities Ages 2-4, Including Colors, Letters, Numbers, Rainbow, Shapes, Dinosaur, Vehicle, Weather, Match The Pictures, Cognition of Facial, Vegetables, Fruits, and Planets Etc.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/sensory4_AzAeI5nTS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667546862284',
      url: 'https://www.amazon.com/dp/B0992B1LYN/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0992B1LYN&pd_rd_w=zdTMx&content-id=amzn1.sym.dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_p=dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_r=QHSQP6GJVFA7HEETWB38&pd_rd_wg=A2jLa&pd_rd_r=ba99363c-9977-4b07-8006-723a8fae4334&s=toys-and-games&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNlhJMDFYQzdSVTAyJmVuY3J5cHRlZElkPUEwNTI2ODM0MUlBMFNTN1JYTzI0RiZlbmNyeXB0ZWRBZElkPUEwMjk3MTg5MVlGNFpYRDI2TzhUMyZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    },
    {
      category: 'Sensory Books',
      title: 'LeapFrog Learning Friends 100 Words Book',
      description:
        'Interact with friends and learn through play! Explore the colorful pages in this interactive baby book and touch each picture to hear the animals say toddler-appropriate words along with exciting facts and sound effects. Immerse your child in bilingual play by sliding the language switch to hear the words, songs and instructions in both English and Spanish. ',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/sensory5_morQW3s9e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667547050099',
      url: 'https://www.amazon.com/LeapFrog-Learning-Friends-Frustration-Packaging/dp/B07CCFDZZ3/ref=sr_1_22?crid=1WSEI6I58DO0F&keywords=sensory+books&qid=1667546969&qu=eyJxc2MiOiI2LjEwIiwicXNhIjoiNS42OCIsInFzcCI6IjUuNDMifQ%3D%3D&s=toys-and-games&sprefix=sensory+books%2Ctoys-and-games%2C209&sr=1-22',
    },
  ];

  return (
    <>
      <Center ref={sensoryRef}>
        <Box maxW={'4xl'} py={10} px={20}>
          <Heading as="h2" size="2xl" mt={6} mb={6}>
            Most Engaging Sensory Books For Your Tot
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
        </>
      ))}
    </>
  );
};

export default SensoryBooks;
