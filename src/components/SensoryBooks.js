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
      category: 'Educational Books',
      title:
        'My First Complete Learning Library: Boxset of 20 Board Books for Kids',
      description:
        'Well-researched pictures and accurate word labels encourages the ensure faster development of a child s vocabulary. First learning library of 20 board books to introduce wide range of learning topics and to develop basic concepts for little scholars.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/library20_c4acay0df.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667542577036',
      url: 'https://www.amazon.com/First-Learning-Library-Box-Set/dp/9388369882/ref=sr_1_2_sspa?keywords=educational+books+for+toddlers&qid=1667542404&qu=eyJxc2MiOiI1Ljg0IiwicXNhIjoiNS41OSIsInFzcCI6IjUuMjYifQ%3D%3D&sprefix=educational+books+for+to%2Caps%2C263&sr=8-2-spons&psc=1',
    },
    {
      category: 'Educational Books',
      title: 'My First 1000 Words',
      description:
        'An excellent book to introduce wide range of learning topics and everyday objects to the little scholars. The book has 1000 attractive and well-researched photos making it the ideal book for toddlers and babies to learn simple words and develop observational skills.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/firstwords_KGfCUI8dr.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667542823107',
      url: 'https://www.amazon.com/dp/9388144112/ref=sspa_dk_detail_1?psc=1&pd_rd_i=9388144112&pd_rd_w=Wy2q5&content-id=amzn1.sym.88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_p=88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_r=WFQSAXAVTR3B5JE11YKD&pd_rd_wg=76dyw&pd_rd_r=47d7e97e-2cdf-4fbf-987b-b6c76d571d30&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw',
    },
    {
      category: 'Educational Books',
      title: 'Han-MM Preschool Montessori Toy Book With 8 Color Marker',
      description:
        'Not every child has super learning ability, they need to learn while playing. To understand thinking, perceive colors, and enhance logical knowledge. This busy book game is an excellent educational toy developed for children over 3 years old',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/montessori_SWCXDoiXm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667543117699',
      url: 'https://www.amazon.com/HAN-MM-Montessori-Toddlers-Activity-Educational/dp/B08CZQC78D/ref=sr_1_10?crid=243YA7UG5DHM6&keywords=educational%2Bbook%2Bfor%2Btoddlers&qid=1667542970&qu=eyJxc2MiOiIwLjAwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=educational%2Bbook%2Bfor%2Btoddlers%2Caps%2C633&sr=8-10&th=1',
    },
    {
      category: 'Educational Books',
      title: '4 Pack Montessori Busy Book for Kids to Develop Learning Skills',
      description:
        'Great for Educational: This Montessori Busy Book is Made for Kids to Help Prepare Them for School. 4 Pack of Themes are Animal , Number, Vegetable, Traffic Cognition Busy Book.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/4pack_m4P3qu0zX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667543296457',
      url: 'https://www.amazon.com/Montessori-Materials-Homeschool-Preschool-Educational/dp/B0B1WBF253/ref=sr_1_4?crid=2DGX7VG8M17O&keywords=montessori%2Bbooks%2Bfor%2Btoddlers&qid=1667543235&qu=eyJxc2MiOiI1LjU5IiwicXNhIjoiNS4zNyIsInFzcCI6IjUuMTgifQ%3D%3D&s=toys-and-games&sprefix=montessori%2Bbooks%2Bfor%2Btoddle%2Ctoys-and-games%2C208&sr=1-4&th=1',
    },
    {
      category: 'Educational Books',
      title: 'Washable Montessori Toddlers Busy Board 3d Story Book',
      description:
        'The montessori busy book old can help toddlers to develop their fine motor skills. This busy board book features with 16 learning activities, when playing this busy board, toddlers focus on like matching the velcro colored shapes, practice on the zippers snaps and buttons toy, telling time and others.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/3dbook_bi3C_oGhl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667543467422',
      url: 'https://www.amazon.com/Washable-Montessori-Toddlers-Education-Knowledge/dp/B0B2MVZBK6/ref=sr_1_11?keywords=montessori+books+for+toddlers&qid=1667543411&qu=eyJxc2MiOiI1LjU5IiwicXNhIjoiNS4zNyIsInFzcCI6IjUuMTgifQ%3D%3D&s=toys-and-games&sr=1-11',
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
