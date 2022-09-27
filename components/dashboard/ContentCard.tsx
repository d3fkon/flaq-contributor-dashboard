import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  AvatarGroup,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import cardimg from '../../public/img/cardimg.png';
import { BsPlusLg } from 'react-icons/bs';
import Link from 'next/link';
const ContentCard = () => {
  return (
    <Box m="3" maxW="350" w="100%" width={'370px'} height={'353px'}>
      <VStack>
        <Box>
          <Image alt="banner img" width="370" height="191" src={cardimg} />
        </Box>
        <Box>
          <Text
            color={'#A0AEC0'}
            fontFamily={'Helvetica'}
            fontSize={'10px'}
            fontWeight={'400'}>
            Video
          </Text>
          <Text
            color={'#2D3748'}
            fontFamily={'Helvetica'}
            fontSize={'18px'}
            fontWeight={700}>
            Neo Blockchain & Future
          </Text>
          <Text
            mt="2"
            color={'#A0AEC0'}
            fontFamily={'Helvetica'}
            fontSize={'12px'}
            fontWeight={'400'}
            lineHeight={'18px'}>
            A short video on why Neo Blockchain is potentially the biggest
            player in the industy now
          </Text>
        </Box>
        <Box w="100%" pt="5">
          <Flex direction="row" justifyContent={'space-between'}>
            <Box>
              <Button
                fontFamily={'Helvetica'}
                fontSize={'10px'}
                fontWeight={'700'}
                variant={'outline'}
                color="#818BF5"
                border="1px solid #818BF5"
                borderRadius={'12px'}
                px="12">
                VIEW
              </Button>
            </Box>
            <Box>
              <AvatarGroup size="xs" max={4}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  )
}

export const CreateCard = () => {
  return (
    <Link href={'/dashboard/create'}>
      <Box
        cursor={'pointer'}
        borderRadius={'12'}
        m="1"
        border={'1px'}
        maxW="300"
        w="100%"
        height="353">
        <Box minW="100%" h="100%">
          <Flex
            direction={'column'}
            justifyContent="center"
            py="42"
            alignContent="center"
            alignItems={'center'}
            width="376"
            height="353">
            <Icon as={BsPlusLg} />
            <Text
              fontFamily={'Helvetica'}
              color="#718096"
              fontSize={'18px'}
              fontWeight={'700'}>
              Create
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};
export default ContentCard;
