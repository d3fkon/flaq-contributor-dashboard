import { Box, Button, Icon, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

type Props = {};

const Article = (props: Props) => {
  return (
    <Box>
      <Text variant={'inputlabel'}>Start writing</Text>
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

export default Article;
