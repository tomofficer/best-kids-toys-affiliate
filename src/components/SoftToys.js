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

const SoftToys = () => {
  //data set for toys
  const toyData = [
    {
      category: 'Soft Toys',
      title: 'Under The Nile Faux-Fur Snuggle Bear',
      description:
        'Under The Nile is known for its natural, environmentally friendly toys. They also support a fair trade community. All their toys are made from organically cultivated and hand picked cotton. The cotton is produced in an enviromentally friendly manner and dyed naturally. ',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/underthenilepolarbear_bokFPJOL1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667034809790',
      url: 'https://www.amazon.com/Under-Nile-Organic-Cotton-Snuggle/dp/B08GKYSX5M/ref=sr_1_11?crid=22J0D04ZV30VT&keywords=under+the+nile&qid=1667034753&qu=eyJxc2MiOiI2LjkzIiwicXNhIjoiNi42NyIsInFzcCI6IjUuODgifQ%3D%3D&s=toys-and-games&sprefix=under+the+nil%2Ctoys-and-games%2C169&sr=1-11',
    },
    {
      category: 'Soft Toys',
      title: 'Under The Nile Organic Veggie Crate',
      description:
        'Under The Nile is known for its natural, environmentally friendly toys. They also support a fair trade community. All their toys are made from organically cultivated and hand picked cotton. The cotton is produced in an enviromentally friendly manner and dyed naturally. ',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/underthenilevegcrate_vZsQ4cjrH.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667035008613',
      url: 'https://www.amazon.com/Under-Nile-Organic-Veggie-Crate/dp/B00095KJ20/ref=sr_1_26?crid=22J0D04ZV30VT&keywords=under+the+nile&qid=1667034918&qu=eyJxc2MiOiI2LjkzIiwicXNhIjoiNi42NyIsInFzcCI6IjUuODgifQ%3D%3D&s=toys-and-games&sprefix=under+the+nil%2Ctoys-and-games%2C169&sr=1-26',
    },
    {
      category: 'Soft Toys',
      title: 'Under The Nile Organic Sasha Waldorf Doll',
      description:
        'Our Waldorf inspired Sasha Doll is hand stuffed with Organic Egyptian cotton and created with imagination and play in mind. She comes with an extra change of clothes in her bag, designed to teach coordination skills through tying, changing, and snapping.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/undertheniledoll_376c5X3Uc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667035160450',
      url: 'https://www.amazon.com/Under-Nile-Organic-Toddler-Waldorf/dp/B09SF9VHY1/ref=sr_1_30?crid=22J0D04ZV30VT&keywords=under%2Bthe%2Bnile&qid=1667034918&qu=eyJxc2MiOiI2LjkzIiwicXNhIjoiNi42NyIsInFzcCI6IjUuODgifQ%3D%3D&s=toys-and-games&sprefix=under%2Bthe%2Bnil%2Ctoys-and-games%2C169&sr=1-30&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&th=1',
    },
    {
      category: 'Soft Toys',
      title: 'Organic Cotton Muslin Bunny or Sheep Blanket',
      description:
        "When your baby starts to experience separation anxiety, our baby security blanket is a transitional object to help your little one feels safe and secure. Our lovey is made from a double layer of 100% organic cotton muslin, gentle on baby's sensitive skin.",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/bunnyblanket_uNPYKYcMG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667035451067',
      url: 'https://www.amazon.com/Organic-Lovey-Blanket-Security-Breathable/dp/B0B8WZD91Y/ref=sr_1_14_sspa?crid=22J0D04ZV30VT&keywords=under%2Bthe%2Bnile&qid=1667034918&qu=eyJxc2MiOiI2LjkzIiwicXNhIjoiNi42NyIsInFzcCI6IjUuODgifQ%3D%3D&s=toys-and-games&sprefix=under%2Bthe%2Bnil%2Ctoys-and-games%2C169&sr=1-14-spons&th=1',
    },
    {
      category: 'Soft Toys',
      title: 'CottonBebe Organic Stuffed Bear With Musical Lullabies',
      description:
        'Our musical baby stuff toy can creates crinkle,squeaky,bell sound to attract baby.While your babies are playing with this newborn toys, they will develop sounds cognition ability, creativity & imagination, promotes their brain development.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/cottonbeebear_kpTuGNsDi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667035551499',
      url: 'https://www.amazon.com/dp/B098DW7JRT?pd_rd_i=B098DW7JRT&pf_rd_p=7672bfb7-93b0-4322-b745-2104db09c4df&pf_rd_r=DESSP1VXZ1N2SJ8GKRPR&pd_rd_wg=vcDsX&pd_rd_w=W8OH5&pd_rd_r=3ba99ccd-b6ec-49cf-9e6e-1207897ea74c',
    },
  ];

  return (
    <>
      <Box py={10} px={20}>
        <Heading as="h2" size="2xl" mt={6} mb={6} px={40}>
          Organic, Eco-Friendly Soft And Cloth Toys
        </Heading>
        <Heading fontSize={'xl'} mt={2} mb={4} px={40}>
          The benefits of using eco-friendly, dye-free cloth toys over
          mainstream toxin-rich soft toys.
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

export default SoftToys;
