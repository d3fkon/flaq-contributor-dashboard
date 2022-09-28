import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ICampaignsData, { ICampaigns } from '../../api/datatypes/Campaigns';
import ContentCard, { CreateCard } from './ContentCard';

function getContentDataUtil(inputdata: Array<ICampaignsData>) {
  const output: ICampaigns[] = [];
  inputdata.map((da: ICampaignsData) => {
    da?.campaigns.map((campaign) => {
      output.push(campaign);
    });
  });
  return output;
}

interface IContentContainer {
  data: Array<ICampaignsData> | undefined;
}

const ContentContainer = ({ data }: IContentContainer) => {
  return (
    <Container
      bg="white"
      p="5"
      borderRadius={'8'}
      maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}>
      <Box minW="100%" minH="100%">
        <Text
          fontSize="18px"
          fontFamily={'Helvetica'}
          fontWeight={'700'}
          color="#818BF5">
          Content
        </Text>
        <Text
          fontSize="14px"
          fontFamily={'Helvetica'}
          fontWeight={'400'}
          color="#A0AEC0">
          Architects design houses
        </Text>
      </Box>
      <Box overflow={'scroll'} className="hidescroller">
        <Flex
          className="hidescroller"
          flexWrap={'nowrap'}
          overflow={'auto'}
          w="fit-content">
          <CreateCard />
          {data &&
            getContentDataUtil(data).map((data: ICampaigns, idx: number) => {
              return <ContentCard {...data} key={idx} />;
            })}
        </Flex>
      </Box>
    </Container>
  );
};

export default ContentContainer;
