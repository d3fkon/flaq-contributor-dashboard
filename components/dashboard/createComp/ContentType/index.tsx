import { Box, Tab, TabList, Text, Tabs, TabPanels } from '@chakra-ui/react';
import * as React from 'react';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BsCameraVideo, BsEmojiSmile } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';
import { CreateContentFormData } from '../../../../api/datatypes/CreateCampaigns';
import ArticleAndVideoTab from './ContentTypeTabs/ArticleAndVideoTab';
import ArticleTab from './ContentTypeTabs/ArticleTab';
import VideoTab from './ContentTypeTabs/VideoTab';
import TabCard from './TabCard';
import TabContentCard from './TabContentCard';

export interface IAppProps {
  register: UseFormRegister<CreateContentFormData>;
  setValue: UseFormSetValue<CreateContentFormData>;
  control: Control<CreateContentFormData>;
}

export default function App({ register, setValue, control }: IAppProps) {
  const ContentTabs = [
    {
      title: 'Video',
      icon: BsCameraVideo,
      des: 'Upload a video',
      bg: '#FFB185',
      contentType: 'Video',
    },
    {
      title: 'Article',
      icon: HiPencil,
      des: 'write something',
      bg: '#55A3FF',
      contentType: 'Articles',
    },
    {
      title: 'Video + Article',
      icon: BsEmojiSmile,
      des: 'go all out record and write',
      bg: '#8133FF',
      contentType: 'VideoAndArticles',
    },
  ];
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = (index: any) => {
    setTabIndex(index);
    setValue('contentType', ContentTabs[index].contentType);
  };
  return (
    <Box p="4">
      <input
        {...register('contentType')}
        defaultValue="Video"
        style={{ display: 'none' }}
      />
      <Text
        color={'#818BF5'}
        fontFamily={'Helvetica'}
        fontSize={'18px'}
        fontWeight={'700'}>
        Content Type
      </Text>
      <Box mt="4">
        <Tabs index={tabIndex} onChange={handleTabsChange} colorScheme={'none'}>
          <TabList borderBottom={0} pb="4">
            {ContentTabs.map((data, idx) => {
              return (
                <TabCard
                  key={idx}
                  title={data.title}
                  icon={data.icon}
                  des={data.des}
                  iconBg={data.bg}
                />
              );
            })}
          </TabList>
          <TabPanels bg="white">
            <TabContentCard selected={ContentTabs[tabIndex].title} title="one">
              {ContentTabs[tabIndex].title == 'Video' && (
                <VideoTab register={register} control={control} />
              )}
            </TabContentCard>
            <TabContentCard selected={ContentTabs[tabIndex].title} title="one">
              {ContentTabs[tabIndex].title == 'Article' && (
                <ArticleTab
                  register={register}
                  setValue={setValue}
                  control={control}
                />
              )}
            </TabContentCard>
            <TabContentCard selected={ContentTabs[tabIndex].title} title="one">
              {ContentTabs[tabIndex].title === 'Video + Article' && (
                <ArticleAndVideoTab register={register} setValue={setValue} />
              )}
            </TabContentCard>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
