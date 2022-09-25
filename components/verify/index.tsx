import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import spinner from '../../public/img/spinner.svg';
const VerifyLoaderComponent = () => {
  return (
    <Container bg="#F8F9FA" maxW="100%" minH="100vh" h="100%">
      <Flex
        direction={'column'}
        minH="100vh"
        justifyContent={'center'}
        alignItems={'center'}>
        <Box>
          <Image width={'50'} height="50" src={'/img/flaq-logo-gray.svg'} />
        </Box>
        <Image src={spinner.src} alt="Loading..." />
        <Center>
          <Text fontSize={'24px'} fontFamily="Poppins">
            Verifying your Account, thank you for your patience.
          </Text>
        </Center>
      </Flex>
    </Container>
  );
};

export default VerifyLoaderComponent;
