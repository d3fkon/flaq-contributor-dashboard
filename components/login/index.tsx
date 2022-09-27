import {
  Flex,
  Box,
  Stack,
  Button,
  Text,
  HStack,
  Image,
  Hide,
  Container,
  Center,
} from '@chakra-ui/react';

import useAuthenticationStore from '../../stores/authenticationStore';
import useLoadingStore from '../../stores/loadingStore';
import spinner from '../../public/img/spinner.svg';

export default function LoginCard() {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const login = useAuthenticationStore((state) => state.login);

  if (isLoading) {
    return (
      <Container bg="#F8F9FA" maxW="100%" minH="100vh" h="100%">
        <Flex
          direction={'column'}
          minH="100vh"
          justifyContent={'center'}
          alignItems={'center'}>
          <Box>
            <Image
              alt="Flag Logo"
              width={'50'}
              height="50"
              src={'/img/flaq-logo-gray.svg'}
            />
          </Box>
          <Image src={spinner.src} alt="Loading..." />
        </Flex>
      </Container>
    );
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      background="repeating-linear-gradient(90deg, #B8B8B8 0, #B8B8B8 0.2%, transparent 0, transparent 50%), repeating-linear-gradient(180deg, #B8B8B8 0, #B8B8B8 0.5%, transparent 0, transparent 50%)"
      backgroundSize="30em 15em"
      backgroundColor="#ffffff"
      opacity={1}
      position="relative">
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'525px'}
        py={12}
        align="center"
        zIndex="5">
        <HStack>
          <Image
            alt="logo"
            width={'50'}
            height="50"
            src={'/img/flaq-logo-gray.svg'}
          />
        </HStack>
        <Box py={8}>
          <Stack spacing={4}>
            <Stack spacing={10} textAlign="center" alignItems={'center'}>
              <Text
                fontFamily={'Poppins'}
                fontWeight="600"
                lineHeight={'100px'}
                textShadow="-2px -2px 2px rgba(47, 47, 47, 1)"
                fontSize={'67px'}
                color={'#3D3D3D'}>
                welcome to the flaq academy
              </Text>

              <Button
                fontFamily={'Montserrat'}
                fontSize={'22px'}
                borderRadius={'20px'}
                py="6"
                px="10"
                lineHeight={'27px'}
                mx="auto"
                w={'fit-content'}
                fontWeight="700"
                bg={'#5865F2'}
                color={'white'}
                _hover={{
                  bg: '#9463e8',
                }}
                onClick={login}
                leftIcon={
                  <Image
                    alt="discord logo"
                    width={'20px'}
                    height="20px"
                    src={'/img/discord-white.svg'}
                  />
                }>
                Connect with discord
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Hide below="md">
        <Box position={'absolute'} zIndex="1" width={'100%'} height={'100%'}>
          <Box position={'absolute'} top={'1rem'} right={'0rem'}>
            <Box position={'relative'}>
              <Image alt="cube" src="/img/login/cube.svg" />
              <Box
                position={'absolute'}
                top="-1rem"
                left="-16rem"
                zIndex={'-5'}>
                <Text
                  color="#9999A5"
                  fontSize={'50px'}
                  fontFamily={'Space Mono'}
                  fontWeight={400}>
                  learn web3
                </Text>
              </Box>
            </Box>
          </Box>
          <Box bottom={'0rem'} left={'0rem'} position={'absolute'}>
            <Box position={'relative'}>
              <Image alt="brain" src="/img/login/brain.svg" />
              <Box position={'absolute'} top="-2rem" left="3rem" zIndex={'-5'}>
                <Text
                  color="#9999A5"
                  fontSize={'50px'}
                  fontFamily={'Space Mono'}
                  fontWeight={400}>
                  GIGABRAINS
                </Text>
              </Box>
            </Box>
          </Box>
          <Box position={'absolute'}>
            <Box position={'relative'}>
              <Image alt="graph" src="/img/login/graph.svg" />
              <Box position={'absolute'} top="15rem" left="2rem" zIndex={'-5'}>
                <Text
                  color="#9999A5"
                  fontSize={'50px'}
                  fontFamily={'Space Mono'}
                  fontWeight={400}>
                  stonks
                </Text>
              </Box>
            </Box>
          </Box>
          <Box position={'absolute'} bottom={'0rem'} right={'0rem'}>
            <Box position={'relative'}>
              <Image alt="girl img" src="/img/login/girl.svg" />
              <Box position={'absolute'} top="12rem" left="-7rem" zIndex={'-5'}>
                <Text
                  color="#9999A5"
                  fontSize={'50px'}
                  fontFamily={'Space Mono'}
                  fontWeight={400}>
                  chad vibes
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hide>
    </Flex>
  );
}
