import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import twitterbg from '../../public/img/twittercardbg.png';
const TwitterCard = () => {
  return (
    <Box display={'flex'} alignItems="center" justifyContent={'center'}>
      <Box
        width="218px"
        height="170px"
        borderRadius={'15px'}
        bgImage={`url(${twitterbg.src})`}
        p="4">
        <Flex direction={'column'}>
          <Box>
            <Box
              display={'flex'}
              alignItems="center"
              justifyContent={'center'}
              bg="#ffffff"
              borderRadius={'15px'}
              width={'35px'}
              height={'35px'}>
              <Icon as={BsTwitter} />
            </Box>
          </Box>
          <Box mt="6">
            <Text
              color="white"
              fontWeight={'700'}
              fontSize="14px"
              fontFamily={'Helvetica'}>
              Check us out on twitter
            </Text>
            <Text
              color="white"
              fontWeight={'400'}
              fontSize="12px"
              fontFamily={'Helvetica'}>
              Stay updated
            </Text>
          </Box>
          <Button borderRadius={'12px'} my="2" bg="white">
            Twitter
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default TwitterCard;
