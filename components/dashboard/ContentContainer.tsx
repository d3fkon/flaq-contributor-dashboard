import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ContentCard, { CreateCard } from "./ContentCard";

const ContentContainer = () => {
  return (
    <Container
      bg="white"
      p="5"
      borderRadius={"8"}
      maxW={{ base: 320, sm: 480, md: 720, lg: 1200 }}
    >
      <Box minW="100%" minH="100%">
        <Text
          fontSize="18px"
          fontFamily={"Helvetica"}
          fontWeight={"700"}
          color="#818BF5"
        >
          Content
        </Text>
        <Text
          fontSize="14px"
          fontFamily={"Helvetica"}
          fontWeight={"400"}
          color="#A0AEC0"
        >
          Architects design houses
        </Text>
      </Box>
      <Box overflow={"scroll"} className="hidescroller">
        <Flex flexWrap={"nowrap"} overflow={"auto"} w="fit-content">
          {[0, 1, 2, 4, 5].map((idx) => {
            return <ContentCard key={idx} />;
          })}
          <CreateCard />
        </Flex>
      </Box>
    </Container>
  );
};

export default ContentContainer;
