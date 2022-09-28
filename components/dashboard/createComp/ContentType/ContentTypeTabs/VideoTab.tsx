import { Box, Button, Icon, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';
import { BiCheckCircle } from 'react-icons/bi';
import { CreateContentFormData } from '../../../../../api/datatypes/CreateCampaigns';

type Props = {
  register: UseFormRegister<CreateContentFormData>;
  control: Control<CreateContentFormData>;
};

const Video = ({ register, control }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: 'videos',
    control,
  });
  return (
    <Box>
      <Text variant={'inputlabel'}>Title</Text>
      <Input {...register(`videos.0.title` as const, {})} variant={'primary'} />
      <Text variant={'inputlabel'}>YouTube Link</Text>
      <Input {...register(`videos.0.url` as const, {})} variant={'primary'} />
      <Text variant={'inputlabel'}>Description</Text>
      <Textarea
        {...register(`videos.0.desc` as const, {})}
        _focus={{
          border: '1px solid #0997FF',
          backgroundColor: '#F7FAFF',
        }}
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
export default Video;
