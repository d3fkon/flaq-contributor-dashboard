import {
  Box,
  Button,
  Icon,
  Input,
  Text,
  Textarea,
  Flex,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BiCheckCircle } from 'react-icons/bi';
import { CreateContentFormData } from '../../../../../api/datatypes/CreateCampaigns';
import UploadIconComp from '../UploadIconComp';

type Props = {
  register: UseFormRegister<CreateContentFormData>;
  setValue: UseFormSetValue<CreateContentFormData>;
};

const ArticleAndVideo = ({ register, setValue }: Props) => {
  return (
    <Box>
      <Text fontSize="20px" textAlign={'center'}>
        Article Section
      </Text>
      <Flex>
        <Box>
          <UploadIconComp setValue={setValue} />
        </Box>
        <Box flex="1">
          <Text variant={'inputlabel'}>Article Title</Text>
          <Input
            {...register(`articles.0.title` as const, {})}
            variant={'primary'}
          />
        </Box>
      </Flex>
      <Text variant={'inputlabel'}>Article Link</Text>
      <Input {...register(`articles.0.url` as const, {})} variant={'primary'} />
      <Divider my="6" />
      <Text fontSize="20px" textAlign={'center'}>
        Video Section
      </Text>
      <Text variant={'inputlabel'}>Video Title</Text>
      <Input {...register(`videos.0.title` as const, {})} variant={'primary'} />

      <Text variant={'inputlabel'}>YouTube Link</Text>
      <Input {...register(`videos.0.url` as const, {})} variant={'primary'} />

      <Text variant={'inputlabel'}>Description</Text>
      <Textarea
        _focus={{
          border: '1px solid #0997FF',
          backgroundColor: '#F7FAFF',
        }}
        {...register(`videos.0.desc` as const, {})}
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
