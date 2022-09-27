import React from 'react';
import {
  Box,
  Divider,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';
import { useRouter } from 'next/router';
import ContentType from './ContentType';

const Create = () => {
  const router = useRouter();

  return (
    <Box flex="1">
      <Box py="8" px="4" bg="#ffffff" borderRadius={'15px'}>
        <Flex justifyContent={'space-between'}>
          <Text
            fontFamily={'Helvetica'}
            fontSize={'26px'}
            color={'#2D3748'}
            fontWeight={700}>
            Create Content
          </Text>
          <IconButton
            onClick={() => router.push('/dashboard')}
            borderRadius={'40%'}
            size="lg"
            aria-label="close create"
            icon={<IoMdClose size="30px" />}
          />
        </Flex>
        <Divider mt="30px" mb="30px" />
        <Box>
          <Box>
            <Text
              fontFamily={'Helvetica'}
              fontSize={'18px'}
              color={'#818BF5'}
              fontWeight={700}>
              Basic Information
            </Text>
          </Box>
          <Flex direction={'row'} p="3" mt="4">
            <Box
              m="3"
              borderRadius={'10'}
              bg="#F8F9FA"
              maxW="153"
              w="100%"
              height="118">
              <Box minW="100%" h="100%">
                <Flex
                  direction={'column'}
                  alignItems={'center'}
                  width="153"
                  height="118"
                  pt="12">
                  <Icon fontSize={'25px'} as={FiUpload} />
                  <Text
                    mt="5"
                    fontFamily={'Helvetica'}
                    color="#9999A5"
                    fontSize={'12px'}
                    fontWeight={'400'}>
                    max file size 1mb
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box m="3" px="6">
              <Box>
                <Text variant={'inputlabel'} w="350px">
                  Title
                </Text>
                <Input variant={'primary'} />
              </Box>
              <Box>
                <Text variant={'inputlabel'} w="350px">
                  Description
                </Text>
                <Textarea
                  _focus={{
                    border: '1px solid #0997FF',
                    backgroundColor: '#F7FAFF',
                  }}
                  border="1px solid #E2E8F0"
                  borderRadius="15px"
                  h={'150px'}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>

      <ContentType />
    </Box>
  );
};

export default Create;
