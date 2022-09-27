import { Box, Flex, Text, TabPanel } from '@chakra-ui/react';
import React from 'react';

type Props = {
  title: string;
  selected: string;
  children: React.ReactNode;
};

const TabContentCard = (props: Props) => {
  return (
    <TabPanel>
      <Flex>
        <Box flex="1">{props.children}</Box>
        <Box>
          <Text
            fontWeight={500}
            fontSize={'16px'}
            fontFamily={'Montserrat'}
            color="#9999A5">
            Selected :
            <Text as="span" fontWeight={500} color="#8033FF">
              {props.selected}
            </Text>
          </Text>
        </Box>
      </Flex>
    </TabPanel>
  );
};

export default TabContentCard;
