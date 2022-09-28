import { Box, Button, Icon, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { BiCheckCircle } from 'react-icons/bi';
import { CreateContentFormData } from '../../../../../api/datatypes/CreateCampaigns';

type Props = {
  register: UseFormRegister<CreateContentFormData>;
};

const ArticleAndVideo = ({ register }: Props) => {
  return (
    <Box>
      <Text variant={'inputlabel'}>YouTube Link</Text>
      <Input {...register(`videos.0.url` as const, {})} variant={'primary'} />
      <Text variant={'inputlabel'}>Start Writing</Text>
      <Textarea
        _focus={{
          border: '1px solid #0997FF',
          backgroundColor: '#F7FAFF',
        }}
        {...register(`articles.0.title` as const, {})}
        border="1px solid #E2E8F0"
        borderRadius="15px"
        h={'150px'}
      />
      <Button type="submit" variant={'submitbtn'}>
        <Icon mx="2" as={BiCheckCircle} />
        Done
      </Button>
    </Box>
  );
};

export default ArticleAndVideo;
