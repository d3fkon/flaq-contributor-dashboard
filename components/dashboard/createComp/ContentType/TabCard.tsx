import { Box, Center, Flex, Icon, Tab, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ITabCard {
  title: string;
  icon: IconType;
  des: string;
  iconBg: string;
}
const TabCard = ({ title, des, icon, iconBg }: ITabCard) => {
  return (
    <Tab
      borderRadius="15px"
      p="0"
      mx="2"
      w="240"
      minW={'240'}
      _selected={{ border: '2px', borderColor: '#55A3FF' }}>
      <Flex
        boxShadow={'0px 3.5px 5.5px rgba(0, 0, 0, 0.02)'}
        p="5"
        m="3px"
        h="169"
        w="100%"
        overflow={'hidden'}
        bg="white"
        justifyContent={'left'}>
        <Box textAlign={'left'} alignSelf="flex-end">
          <Box
            w="32px"
            h="32px"
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
            bg={iconBg}
            borderRadius={'50%'}>
            <Center>
              <Icon color="#ffffff" textAlign={'center'} as={icon} />
            </Center>
          </Box>

          <Text
            fontFamily={'Montserrat'}
            fontSize={'24px'}
            fontWeight={700}
            my="2"
            color={'#1A1A1A'}>
            {title}
          </Text>
          <Text
            fontFamily={'Montserrat'}
            fontSize={'16px'}
            fontWeight={500}
            color={'#9999A5'}
            lineHeight={'20px'}>
            {des}
          </Text>
        </Box>
      </Flex>
    </Tab>
  );
};

export default TabCard;
