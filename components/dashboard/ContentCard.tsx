import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  AvatarGroup,
  Avatar,
  Image,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import cardimg from '../../public/img/cardimg.png';
import { BsPlusLg } from 'react-icons/bs';
import Link from 'next/link';
import { ICampaigns } from '../../api/datatypes/Campaigns';
import placeholder from '../../public/img/placeholder.jpg';
const ContentCard = (props: ICampaigns) => {
  return (
    <Box m="3" mx="6" maxW="350" w="100%" width={'370px'} height={'353px'}>
      <VStack>
        <Box width="370px" h="191px" borderRadius={'12px'} overflow={'hidden'}>
          <Image
            alt="banner img"
            w={'full'}
            h={'full'}
            fallbackSrc={placeholder.src}
            src={props.image}
          />
        </Box>
        <Box w="100%" p="1" justifyContent={'left'}>
          <Text
            color={'#A0AEC0'}
            fontFamily={'Helvetica'}
            fontSize={'10px'}
            textAlign={'left'}
            fontWeight={'400'}>
            {props.contentType}
          </Text>
          <Text
            color={'#2D3748'}
            fontFamily={'Helvetica'}
            fontSize={'18px'}
            textAlign={'left'}
            fontWeight={700}>
            {props.title}
          </Text>
          <Text
            mt="2"
            color={'#A0AEC0'}
            fontFamily={'Helvetica'}
            fontSize={'12px'}
            fontWeight={'400'}
            textAlign={'left'}
            lineHeight={'18px'}>
            {props.description1}
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
            <Box></Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

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
        minW="376px"
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
