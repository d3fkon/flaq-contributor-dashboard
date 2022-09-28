import { Box, Button, Icon, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';
import { BiCheckCircle } from 'react-icons/bi';
import { CreateContentFormData } from '../../../../../api/datatypes/CreateCampaigns';

type Props = {
  register: UseFormRegister<CreateContentFormData>;
  control: Control<CreateContentFormData>;
};
const Article = ({ register, control }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: 'articles',
    control,
  });
  return (
    <Box>
      <Text variant={'inputlabel'}>Title</Text>
      <Input
        {...register(`articles.0.title` as const, {})}
        variant={'primary'}
      />
      <Text variant={'inputlabel'}>Article Link</Text>
      <Input {...register(`articles.0.url` as const, {})} variant={'primary'} />
      <Text variant={'inputlabel'}>Start writing</Text>
      <Textarea
        {...register(`articles.0.desc` as const, {})}
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

export default Article;
