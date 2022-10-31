import React from 'react';
import {
  Flex,
  Box,
  chakra,
  Image,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react';

const Teethers = () => {
  //data set for toys
  const toyData = [
    {
      category: 'Teethers',
      title: 'Little Bamber Natural Rubber Teether',
      description:
        '100% Natural Products – this amber teething toy is made from 100% natural products – no colouring, dyes or additives have been used and it is fragrance free, chemical free and has no masking agents or flavoring to alter the taste or scenlittle',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/littlebamber_0IuyNa_n2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667202771944',
      url: 'https://www.amazon.com/HABA-Musical-Eggs-Acoustic-Germany/dp/B00BF3D666/ref=sr_1_7?crid=2Z1KKBC0NWY2R&keywords=haba&qid=1667028707&qu=eyJxc2MiOiI3LjUyIiwicXNhIjoiNy4yMCIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=natural+baby+toys%2Caps%2C456&sr=8-7',
    },
    {
      category: 'Teethers',
      title: 'Moonjax Silicon Baby Teething Toy',
      description:
        'Safest Baby Teething Toy - Unlike other teethers and teething necklaces that are made from smelly plastic and harmful materials, our Moonjax baby teething toys are odorless and completely safe for infants, toddlers and newborns.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/moonjax_QZPVJh3sk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667202880393',
      url: 'https://www.amazon.com/Baby-Teething-Toy-Silicone-Certified/dp/B072QXHSHX/ref=sr_1_36?keywords=organic+natural+baby+teether+toys&qid=1667202334&sr=8-36',
    },
    {
      category: 'Teethers',
      title: 'Natural Crochet Bunny Teething Ring',
      description:
        'Set of 2 natural, eco-friendly, Phthalate free , Latex Free, Lead Free, BPA Free, hand sanded to perfection. Helps naturally support earlly motor skill development!',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/bunnyteether_fKlWyX5C0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667202972207',
      url: 'https://www.amazon.com/Natural-Crochet-Teething-Teether-Newborn/dp/B07DNDM7B1/ref=sr_1_2_sspa?keywords=organic+natural+baby+teether+toys&qid=1667202334&sr=8-2-spons&psc=1&smid=A204G64ELSZWO2',
    },
    {
      category: 'Teethers',
      title: 'TinaBless Infant Fruit Shaped Teething Keys',
      description:
        "Natural, Organic, BPA-Free, Freezer safe, fruit-shaped teething keys - set of 5!  Our infant teething keys are designed to soothe, massage, and reduce fussiness & discomfort. It’s guaranteed to help aid the relief of your little one's teething pains.",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/fruitteethers_Z4tIlSRdR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667203154567',
      url: 'https://www.amazon.com/Teething-Toys-Pack-Tinabless-BPA-Free/dp/B07KWTS2FH/ref=sr_1_5?keywords=organic+natural+baby+teether+toys&qid=1667202334&sr=8-5',
    },
    {
      category: 'Teethers',
      title: 'Calmies BPA-Free Baby Teether',
      description:
        'Safe, soothing, sustainable, multi-sensory calming baby teether made with BPA-free rubber and no synthetic making agents. Easy to grasp ball shape is a functional toy and developed by a Mother to provide relief whiel teeting.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/calmies_1v9Ju9esu.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667203430220',
      url: 'https://www.amazon.com/CALMIES-Natural-Rubber-Teether-Each/dp/B00ENUWX7G/ref=sr_1_6?keywords=organic+natural+baby+teether+toys&qid=1667202334&sr=8-6',
    },
  ];

  return (
    <>
      <Box py={10} px={20}>
        <Heading as="h2" size="2xl" mt={6} mb={6} px={40}>
          Natural BPA Free Baby Teethers
        </Heading>
        <Heading fontSize={'xl'} mt={2} mb={4} px={40}>
          Knowing the harms of BPA, etc etc ....
        </Heading>
        <Text px={40} as="p" fontSize={'lg'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Est excepturi accusamus doloribus suscipit accusantium
          necessitatibus, ab, exercitationem asperiores magni aut, sed
          praesentium vero velit! Error deleniti tempora mollitia voluptatibus
          doloremque, porro, rerum sunt, cumque nostrum esse sequi temporibus!
          Ad veritatis fugit quisquam rem, quod earum a nihil aperiam cupiditate
          quae laborum quibusdam adipisc. Voluptate totam impedit consectetur
          quidem consequatur mollitia.
        </Text>
      </Box>

      {toyData.map(toy => (
        <>
          <Flex
            // bg="#edf3f8"
            // _dark={{
            //   bg: '#3e3e3e',
            // }}
            p={30}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              maxW="md"
              mx="auto"
              bg="white"
              _dark={{
                bg: 'gray.800',
              }}
              shadow="lg"
              rounded="lg"
            >
              <Box px={4} py={2} bg="gray.100" borderTopRadius={10}>
                <chakra.h1
                  color="gray.800"
                  _dark={{
                    color: 'white',
                  }}
                  fontWeight="bold"
                  fontSize="3xl"
                  textTransform="uppercase"
                >
                  {toy.title}
                </chakra.h1>
                <chakra.p
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: 'gray.400',
                  }}
                >
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
                alt="NIKE AIR"
              />

              <Flex
                alignItems="center"
                justifyContent="center"
                px={4}
                py={6}
                bg="blue.700"
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
                      bg: 'yellow.300',
                      color: 'blue.800',
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

export default Teethers;
