import React from 'react';
import {
  Stack,
  useColorModeValue,
  Input,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';

export const EmailCapture = () => {
  return (
    <div>
      <Stack align={'flex-start'}>
        {/* <ListHeader>Stay up to date</ListHeader> */}
        <Heading fontSize={'19'} marginTop={2}>
          Subscribe to our newsletter!
        </Heading>
        <Stack direction={'row'}>
          <Input
            placeholder={'Your email address'}
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            border={0}
            _focus={{
              bg: 'whiteAlpha.300',
            }}
          />
          <IconButton
            bg={useColorModeValue('green.400', 'green.800')}
            color={useColorModeValue('white', 'gray.800')}
            _hover={{
              bg: 'green.600',
            }}
            aria-label="Subscribe"
            icon={<BiMailSend />}
          />
        </Stack>
      </Stack>
    </div>
  );
};
