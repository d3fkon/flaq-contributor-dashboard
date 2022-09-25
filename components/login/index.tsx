import { Flex, Box, Stack, Button, Text, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import useAuthenticationStore from '../../stores/authenticationStore';
import useLoadingStore from '../../stores/loadingStore';

export default function LoginCard() {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const login = useAuthenticationStore((state) => state.login);

  if (isLoading) {
    return <div>...LOADING</div>;
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'#F8F9FA'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} align="center">
        <HStack>
          <Image width={'50'} height="50" src={'/img/logo.svg'} />
          <Box>
            <Text
              fontFamily={'Poppins'}
              fontWeight="700"
              fontSize={'24px'}
              color={'#ffffff'}>
              Flaq
            </Text>
          </Box>
        </HStack>
        <Box rounded={'md'} bg={'#414141'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <Stack spacing={10} textAlign="center">
              <Text
                fontFamily={'Poppins'}
                fontWeight="700"
                color={'#ffffff'}
                fontSize={'24px'}>
                Welcome to the flaq academy
              </Text>

              <Button
                bg={'#7C3AED'}
                color={'white'}
                _hover={{
                  bg: '#9463e8',
                }}
                onClick={login}
                leftIcon={
                  <Image
                    width={'20'}
                    height="20"
                    src={'/img/discord-white.svg'}
                  />
                }>
                Connect with Discord
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
