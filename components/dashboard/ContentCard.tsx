import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import cardimg from "../../public/img/cardimg.png";
const ContentCard = () => {
  return (
    <Box m="3" width={"370px"} height={"353px"}>
      <VStack>
        <Box>
          <Image width="370" height="191" src={cardimg} />
        </Box>
        <Box>
          <Text
            color={"#A0AEC0"}
            fontFamily={"Helvetica"}
            fontSize={"10px"}
            fontWeight={"400"}
          >
            Video
          </Text>
          <Text
            color={"#2D3748"}
            fontFamily={"Helvetica"}
            fontSize={"18px"}
            fontWeight={700}
          >
            Neo Blockchain & Future
          </Text>
          <Text
            mt="2"
            color={"#A0AEC0"}
            fontFamily={"Helvetica"}
            fontSize={"12px"}
            fontWeight={"400"}
            lineHeight={"18px"}
          >
            A short video on why Neo Blockchain is potentially the biggest
            player in the industy now
          </Text>
        </Box>
        <Box w="100%" pt="5">
          <Flex direction="row" justifyContent={"space-between"}>
            <Box>
              <Button
                fontFamily={"Helvetica"}
                fontSize={"10px"}
                fontWeight={"700"}
                variant={"outline"}
                color="#818BF5"
                border="1px solid #818BF5"
                borderRadius={"12px"}
                px="12"
              >
                VIEW
              </Button>
            </Box>
            <Box>
              <AvatarGroup size="xs" max={4}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export const CreateCard = () => {
  return (
    <Box width="376" height="353">
      <Box width="100%"></Box>
    </Box>
  );
};
export default ContentCard;
