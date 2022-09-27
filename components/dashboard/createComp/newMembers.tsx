import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import CreateLayout from '../../../layouts/CreateLayout';

const NewMembers = () => {
  const data = [
    {
      name: 'John Doe',
      pfp: '/img/pfp.png',
      username: '@johndoe',
    },
    {
      name: 'John Doe',
      pfp: '/img/pfp.png',
      username: '@johndoe',
    },
    {
      name: 'John Doe',
      pfp: '/img/pfp.png',
      username: '@johndoe',
    },
    {
      name: 'John Doe',
      pfp: '/img/pfp.png',
      username: '@johndoe',
    },
  ];
  return (
    <Box
      bg="#ffffff"
      p="5"
      ml="16"
      w="517px"
      h="fit-content"
      borderRadius={'15px'}>
      <Text
        fontSize={'18px'}
        fontWeight={700}
        color={'#2D3748'}
        fontFamily={'Helvetica'}>
        New Members
      </Text>
      <Box mt="5">
        {data.map((data, idx) => {
          return (
            <Box key={idx}>
              <Flex>
                <Box m="2">
                  <Image
                    borderRadius={6}
                    w="50px"
                    height="50px"
                    src={data.pfp}
                    alt="pfp"
                  />
                </Box>
                <Box m="2">
                  <Text
                    fontSize={'14px'}
                    fontWeight={700}
                    color={'#2D3748'}
                    fontFamily={'Helvetica'}>
                    Esthera Jackson
                  </Text>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'#718096'}
                    fontFamily={'Helvetica'}>
                    Rushhy#9481
                  </Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
NewMembers.layout = CreateLayout;
export default NewMembers;
