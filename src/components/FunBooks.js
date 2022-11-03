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

const FunBooks = () => {
  //data set for toys
  const toyData = [
    {
      category: 'Fun Books',
      title: 'Oh no! My Dinosaur wants a bath!',
      description:
        'James’ best friend and dinosaur Ziggy wants to take a bath and James is going to solve the problem of how to do that. Along the way he helps to teach the reader about big and small, problem solving, respecting other’s belongings and friendship and what that means.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/dino_4E0dUa3Ee.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667510673727',
      url: 'https://imagekit.io/dashboard/media-library/detail/63643191bf51c1dc80ba4b4a',
    },
    {
      category: 'Fun Books',
      title: "Rikcy, the Rock That Couldn't Roll",
      description:
        'A beloved, modern-day classic! Join 14 lovable rocks (and one wise little ladybug) on a heartwarming and hilarious journey about the importance of friendship and the power of perseverance.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/ricky_lwS9zI97e.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667510839395',
      url: 'https://www.amazon.com/Ricky-Rock-that-Couldnt-Roll/dp/0578198037/ref=sr_1_3_sspa?keywords=caldecott+winners+children%27s+books&qid=1667510753&qu=eyJxc2MiOiI2Ljg3IiwicXNhIjoiNi42MyIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=caldecott%2Caps%2C223&sr=8-3-spons&psc=1',
    },
    {
      category: 'Fun Books',
      title: 'Taylor the Tooting Turkey',
      description:
        "Taylor is a fine turkey, except for one small problem: She has gas. She can't help it; it's just the way she is.  A beloved classic, this story will have everyone rolling on the floor with laughter.",
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/taylor_VdQfzORWB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667510935284',
      url: 'https://www.amazon.com/Taylor-Tooting-Turkey-Farting-Adventures/dp/1953399495/ref=sr_1_4_sspa?keywords=caldecott+winners+children%27s+books&qid=1667510753&qu=eyJxc2MiOiI2Ljg3IiwicXNhIjoiNi42MyIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=caldecott%2Caps%2C223&sr=8-4-spons&psc=1',
    },
    {
      category: 'Fun Books',
      title: 'Patrick PickleBottom And The Penny Book',
      description:
        'Join Patrick Picklebottom on the adventure of a lifetime, as his amazing new book unleashes the power of his imagination! Young Patrick Picklebottom gets the surprise of his life when a kind-hearted store owner sells him his favorite book for only one penny.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/patrick_EcXQYPqZJ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667511201022',
      url: 'https://www.amazon.com/Patrick-Picklebottom-Penny-Book-Miletsky/dp/0578557584/ref=sr_1_1_sspa?keywords=caldecott+winners+children%27s+books&qid=1667510753&qu=eyJxc2MiOiI2Ljg3IiwicXNhIjoiNi42MyIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=caldecott%2Caps%2C223&sr=8-1-spons&psc=1',
    },
    {
      category: 'Fun Books',
      title: 'The Leaf Thief',
      description:
        'Perfect for fans of Fletcher and the Falling Leaves, The Leaf Thief is a funny picture book that teaches kids about autumn, adapting to change, and the seasons. Squirrel loves counting the leaves on his tree--red leaves, gold leaves, orange, and more. But hold on! One of his leaves is missing! On a quest to find the missing leaf, Squirrel teams up with his good friend Bird to discover who the leaf thief could be among their forest friends.',
      img: 'https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/leaf_PzjLKnyuE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667511353861',
      url: 'https://www.amazon.com/Leaf-Thief-Alice-Hemming/dp/1728235200/ref=sxin_15_mbs_w_wsirn_d_i?content-id=amzn1.sym.273e7bf0-25fa-4cfc-8a86-c2b833d92207%3Aamzn1.sym.273e7bf0-25fa-4cfc-8a86-c2b833d92207&cv_ct_cx=caldecott+winners+children%27s+books&keywords=caldecott+winners+children%27s+books&pd_rd_i=1728235200&pd_rd_r=3e26deba-340e-46d2-8ee0-193261a079b6&pd_rd_w=MQfpf&pd_rd_wg=PS3UH&pf_rd_p=273e7bf0-25fa-4cfc-8a86-c2b833d92207&pf_rd_r=WB5EYM59S6MRBWJJ0GKF&qid=1667510753&qu=eyJxc2MiOiI2Ljg3IiwicXNhIjoiNi42MyIsInFzcCI6IjYuMzYifQ%3D%3D&sprefix=caldecott%2Caps%2C223&sr=1-1-217e09be-bd7d-41c4-874a-1bb8ae9f8268',
    },
  ];

  return (
    <>
      <Center>
        <Box maxW={'4xl'} py={10} px={20}>
          <Heading as="h2" size="2xl" mt={6} mb={6}>
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

export default FunBooks;
