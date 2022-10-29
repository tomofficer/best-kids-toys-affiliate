import React, { useRef } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="60px"
        src="https://ik.imagekit.io/v66nb6oaq/Best_Kids_Toys/melody_sf_1W3Nq1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667027562042"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} px="40" pb={10}>
      <Divider marginTop="0" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <BlogAuthor
              name="Melody Martin"
              date={new Date('2022-10-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Choosing the right toy for your tot</Heading>
        <Heading fontSize={'xl'} marginTop={2} marginBottom={6}>
          Why it's so important to avoid toxins and chemicals
        </Heading>
        <Text as="p" fontSize="lg" mt={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab
          necessitatibus quia reprehenderit, rerum consequuntur dolorem repellat
          reiciendis labore, tempore laboriosam perspiciatis ipsum veniam
          veritatis odio deleniti sequi ea dicta. Atque aliquid, officia
          perferendis consectetur molestias autem reprehenderit commodi eaque
          quasi tenetur cum ducimus ea eius ex animi dolor asperiores ad totam
          quisquam eveniet assumenda? Ipsa molestiae incidunt laboriosam? Quis
          aspernatur officiis excepturi temporibus error eligendi, minus,
          laudantium hic doloribus tenetur ea nesciunt perspiciatis optio
          maiores provident eos dolores molestiae minima id, labore consectetur
          praesentium rem ullam quae? Voluptatem, consequuntur natus. Ipsum
          repellendus ipsa dolore temporibus, odio eos molestias commodi.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
