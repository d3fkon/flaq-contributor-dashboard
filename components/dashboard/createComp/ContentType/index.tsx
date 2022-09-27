import {
  Box,
  Tab,
  TabList,
  Text,
  Tabs,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import * as React from 'react';
import { IconType } from 'react-icons';
import { BsCameraVideo, BsEmojiSmile } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';
import ArticleAndVideoTab from './ContentTypeTabs/ArticleAndVideoTab';
import ArticleTab from './ContentTypeTabs/ArticleTab';
import VideoTab from './ContentTypeTabs/VideoTab';
import TabCard from './TabCard';
import TabContentCard from './TabContentCard';
export interface IAppProps {}

export default function App(props: IAppProps) {
  const ContentTabs = [
    {
      title: 'Video',
      icon: BsCameraVideo,
      des: 'Upload a video',
      bg: '#FFB185',
    },
    {
      title: 'Article',
      icon: HiPencil,
      des: 'write something',
      bg: '#55A3FF',
    },

    {
      title: 'Video + Article ',
      icon: BsEmojiSmile,
      des: 'go all out record and write',
      bg: '#8133FF',
    },
  ];
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = (index: any) => {
    console.log(index);
    setTabIndex(index);
  };
  return (
    <Box p="4">
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
              <VideoTab />
            </TabContentCard>
            <TabContentCard selected={ContentTabs[tabIndex].title} title="one">
              <ArticleTab />
            </TabContentCard>
            <TabContentCard selected={ContentTabs[tabIndex].title} title="one">
              <ArticleAndVideoTab />
            </TabContentCard>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
