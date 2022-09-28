import {
  Box,
  Button,
  Icon,
  Input,
  Text,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import {
  Control,
  useFieldArray,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { BiCheckCircle } from 'react-icons/bi';
import { CreateContentFormData } from '../../../../../api/datatypes/CreateCampaigns';
import UploadIconComp from '../UploadIconComp';

type Props = {
  register: UseFormRegister<CreateContentFormData>;
  control: Control<CreateContentFormData>;
  setValue: UseFormSetValue<CreateContentFormData>;
};
const Article = ({ register, control, setValue }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: 'articles',
    control,
  });
  return (
    <Box>
      <Flex>
        <Box>
          <UploadIconComp setValue={setValue} />
        </Box>
        <Box flex="1">
          <Text variant={'inputlabel'}>Title</Text>
          <Input
            {...register(`articles.0.title` as const, {})}
            variant={'primary'}
          />
        </Box>
      </Flex>

      <Text variant={'inputlabel'}>Article Link</Text>
      <Input {...register(`articles.0.url` as const, {})} variant={'primary'} />

      <Button type="submit" variant={'submitbtn'}>
        <Icon mx="2" as={BiCheckCircle} />
        Done
      </Button>
    </Box>
  );
};

export default Article;
