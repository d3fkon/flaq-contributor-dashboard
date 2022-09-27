import { Box, Button, Icon, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

type Props = {};

const ArticleAndVideo = (props: Props) => {
  return (
    <Box>
      <Text variant={'inputlabel'}>YouTube Link</Text>
      <Input variant={'primary'} />
      <Text>Start Writing</Text>
      <Textarea
        _focus={{
          border: '1px solid #0997FF',
          backgroundColor: '#F7FAFF',
        }}
        border="1px solid #E2E8F0"
        borderRadius="15px"
        h={'150px'}
      />
      <Button variant={'submitbtn'}>
        <Icon mx="2" as={BiCheckCircle} />
        Done
      </Button>
    </Box>
  );
};

export default ArticleAndVideo;
